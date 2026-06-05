export default function handler(req, res) {
  const fs = require('fs');
  const path = require('path');

  const filePath = path.join(process.cwd(), 'public', 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');

  // Inject the secret at runtime — never stored in code
  html = html.replace('%%FIREBASE_API_KEY%%', process.env.FIREBASE_API_KEY || '');

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
}
