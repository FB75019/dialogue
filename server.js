// server.js — Clavier Sonore Duo (online)
const { WebSocketServer } = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
};

// Serveur HTTP — sert les fichiers statiques du dossier public/
const httpServer = http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url;
  // Sécurité : pas de path traversal
  const safePath = path.normalize(url).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(__dirname, 'public', safePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  });
});

// Serveur WebSocket — relaye les frappes entre les joueurs
const wss = new WebSocketServer({ server: httpServer });
const clients = new Set();

wss.on('connection', ws => {
  clients.add(ws);
  console.log(`[+] Joueur connecté  — total: ${clients.size}`);

  ws.on('message', data => {
    // Broadcast à tous les autres
    for (const client of clients) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    }
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log(`[-] Joueur déconnecté — total: ${clients.size}`);
  });

  ws.on('error', () => ws.close());
});

httpServer.listen(PORT, () => {
  console.log(`\n🎹 Clavier Sonore Duo — online`);
  console.log(`   http://localhost:${PORT}\n`);
});
