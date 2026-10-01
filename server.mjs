import http from 'node:http';
import { readFileSync } from 'node:fs';
const page = readFileSync(new URL('./dist/index.html', import.meta.url));
const port = Number(process.env.PORT || 4173);
http.createServer((req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end();
    return;
  }
  const pathname = new URL(req.url, 'http://localhost').pathname;
  if (!['/', '/index.html'].includes(pathname)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('No encontrado');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(req.method === 'HEAD' ? undefined : page);
}).listen(port, '127.0.0.1', () => console.log(`http://127.0.0.1:${port}`));
