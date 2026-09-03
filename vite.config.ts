import { defineConfig, loadEnv } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function parseAppsScriptBody(text: string): Record<string, unknown> {
  const trimmed = text.trim()
  if (trimmed.startsWith('{')) return JSON.parse(trimmed) as Record<string, unknown>
  const jsonp = trimmed.match(/^[A-Za-z_][\w$]*\((\{[\s\S]*\})\);?$/)
  if (jsonp?.[1]) return JSON.parse(jsonp[1]) as Record<string, unknown>
  if (trimmed.includes('POST only') || trimmed.includes('registration endpoint')) {
    return {
      status: 'error',
      message:
        'Apps Script is still the registration-only version. Paste flexishift_sheets_backend.gs, run setupSheets, set VERIFICATION_CALENDAR_ID, and deploy a new version of the same web app.',
    }
  }
  return { status: 'error', message: 'Could not read verification status from Apps Script.' }
}

function verificationProxy(sheetsUrl: string): Plugin {
  return {
    name: 'verification-proxy',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/api/verification')) {
          next()
          return
        }

        const incoming = new URL(req.url, 'http://localhost')
        const target = new URL(sheetsUrl)
        incoming.searchParams.forEach((value, key) => target.searchParams.set(key, value))

        const send = async (body?: Buffer) => {
          try {
            const response = await fetch(target, {
              method: req.method,
              headers: { 'Content-Type': 'text/plain;charset=utf-8' },
              body: req.method === 'POST' ? body : undefined,
              redirect: 'follow',
            })
            const text = await response.text()
            let payload: Record<string, unknown>
            try {
              payload = parseAppsScriptBody(text)
            } catch {
              payload = { status: 'error', message: 'Could not read verification status from Apps Script.' }
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json; charset=utf-8')
            res.end(JSON.stringify(payload))
          } catch (err) {
            res.statusCode = 502
            res.setHeader('Content-Type', 'application/json; charset=utf-8')
            res.end(JSON.stringify({ status: 'error', message: String(err) }))
          }
        }

        if (req.method === 'POST') {
          const chunks: Buffer[] = []
          req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
          req.on('end', () => {
            void send(Buffer.concat(chunks))
          })
          return
        }

        void send()
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const sheetsUrl = env.VITE_GOOGLE_SHEETS_WEBHOOK_URL?.trim()

  return {
    plugins: [
      tailwindcss(),
      react(),
      ...(sheetsUrl ? [verificationProxy(sheetsUrl)] : []),
    ],
  }
})
