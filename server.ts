import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// Trusted hostnames for SSR header validation (CVE: Angular SSR SSRF #94)
// Set the ALLOWED_HOST environment variable to your production domain.
const ALLOWED_HOSTS = new Set([
  'localhost',
  ...(process.env['ALLOWED_HOST'] ? [process.env['ALLOWED_HOST']] : []),
]);

function sanitizeHeaders(req: express.Request, res: express.Response, next: express.NextFunction): void {
  const hostHeader = (req.headers['x-forwarded-host'] ?? req.headers['host'])?.toString();
  const portHeader = req.headers['x-forwarded-port']?.toString();

  if (hostHeader) {
    const hostname = hostHeader.split(':')[0];
    // Reject if hostname contains invalid characters or is not in the allowlist
    if (!/^[a-z0-9.-]+$/i.test(hostname) || !ALLOWED_HOSTS.has(hostname)) {
      res.status(400).send('Invalid Hostname');
      return;
    }
  }

  // Ensure port is strictly numeric if provided
  if (portHeader && !/^\d+$/.test(portHeader)) {
    res.status(400).send('Invalid Port');
    return;
  }

  next();
}

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Apply header sanitization before all routes
  server.use(sanitizeHeaders);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    // Use validated host only — sanitizeHeaders middleware has already rejected invalid values
    const trustedHost = headers['x-forwarded-host']?.toString().split(':')[0]
      ?? headers['host']?.toString().split(':')[0]
      ?? 'localhost';

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${trustedHost}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
