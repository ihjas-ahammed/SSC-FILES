// Zero-dependency static server for the player: `npm run dev` then open http://localhost:5173
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.m4a': 'audio/mp4', '.mp3': 'audio/mpeg', '.wav': 'audio/wav' };

export function serve(port = 5173, host = '0.0.0.0') {
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    const file = path.join(ROOT, url === '/' ? 'index.html' : url);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end('not found'); }
    const stat = fs.statSync(file), type = TYPES[path.extname(file)] || 'application/octet-stream';
    const range = req.headers.range;
    if (range) { // media seeking needs byte ranges
      const [a, b] = range.replace('bytes=', '').split('-');
      const start = +a, end = b ? +b : stat.size - 1;
      res.writeHead(206, { 'Content-Type': type, 'Content-Range': `bytes ${start}-${end}/${stat.size}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1 });
      return fs.createReadStream(file, { start, end }).pipe(res);
    }
    res.writeHead(200, { 'Content-Type': type, 'Content-Length': stat.size, 'Accept-Ranges': 'bytes', 'Cache-Control': 'no-cache' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((r, j) => { server.once('error', j); server.listen(port, host, () => r(server)); });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  // node tools/serve.mjs [port] [video]   → serves this folder on 0.0.0.0 and prints the links
  const port = +(process.argv[2] || process.env.PORT || 5173), video = process.argv[3] || '';
  await serve(port).catch(e => { console.error(e.code === 'EADDRINUSE' ? `port ${port} is busy: try another, e.g. node tools/serve.mjs ${port + 1}` : e.message); process.exit(1); });
  const { execSync } = await import('node:child_process');
  let ts = '';
  try { ts = JSON.parse(execSync('tailscale status --json', { stdio: ['ignore', 'pipe', 'ignore'] })).Self.DNSName.replace(/\.$/, ''); } catch {}
  const q = video ? `?v=${video}` : '';
  console.log(`serving ${ROOT} on 0.0.0.0:${port}`);
  console.log(`local:      http://localhost:${port}/${q}`);
  if (ts) {
    console.log(`tailscale:  http://${ts}:${port}/${q}`);
    if (video) console.log(`standalone: http://${ts}:${port}/dist/${video}.html`);
  }
}
