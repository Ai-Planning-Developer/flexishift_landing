import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8080;
const DIST = join(__dirname, 'dist');
const VERIFICATION_URL = (
  process.env.VITE_GOOGLE_VERIFICATION_WEBHOOK_URL ||
  process.env.GOOGLE_VERIFICATION_WEBHOOK_URL ||
  ''
).trim();

function parseAppsScriptBody(text) {
  const trimmed = text.trim();
  if (trimmed.startsWith('{')) return JSON.parse(trimmed);
  if (trimmed.includes('POST only') || trimmed.includes('registration endpoint')) {
    return {
      status: 'error',
      message:
        'The verification Apps Script is still registration-only. In the booking /exec project, paste flexishift_sheets_backend.gs, set SCRIPT_ROLE to verification, run setupSheets, and deploy a new version.',
    };
  }
  return { status: 'error', message: 'Could not read verification status from Apps Script.' };
}

app.all('/api/verification', express.raw({ type: '*/*', limit: '2mb' }), async (req, res) => {
  if (!VERIFICATION_URL) {
    res.status(500).json({ status: 'error', message: 'VITE_GOOGLE_VERIFICATION_WEBHOOK_URL is not set on the server.' });
    return;
  }
  try {
    const target = new URL(VERIFICATION_URL);
    for (const [key, value] of Object.entries(req.query)) {
      if (typeof value === 'string') target.searchParams.set(key, value);
    }
    const response = await fetch(target, {
      method: req.method,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: req.method === 'POST' ? req.body : undefined,
      redirect: 'follow',
    });
    const text = await response.text();
    res.status(200).json(parseAppsScriptBody(text));
  } catch (err) {
    res.status(502).json({ status: 'error', message: String(err) });
  }
});

// Serve static assets with long-term caching
app.use(
  express.static(DIST, {
    maxAge: '1y',
    etag: true,
    setHeaders(res, filePath) {
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
      }
    },
  })
);

// SPA fallback — express v5 requires explicit wildcard syntax
app.get('/{*path}', (_req, res) => {
  res.sendFile(join(DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`FlexiShift running on port ${PORT}`);
});
