import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8080;
const DIST = join(__dirname, 'dist');

// Serve static assets with long-term caching
app.use(
  express.static(DIST, {
    maxAge: '1y',
    etag: true,
    // Never cache index.html so new deploys take effect immediately
    setHeaders(res, filePath) {
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
      }
    },
  })
);

// SPA fallback — all unmatched routes return index.html
app.get('*', (_req, res) => {
  res.sendFile(join(DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`FlexiShift running on port ${PORT}`);
});
