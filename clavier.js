// clavier.js — logique partagée entre les deux joueurs

const LETTERS = [
  {l:'A',speak:'a',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'B',speak:'b',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'C',speak:'c',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'D',speak:'d',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'E',speak:'e',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'F',speak:'f',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'G',speak:'g',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'H',speak:'h',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'I',speak:'i',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'J',speak:'j',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'K',speak:'k',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'L',speak:'l',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'M',speak:'m',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'N',speak:'n',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'O',speak:'o',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'P',speak:'p',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'Q',speak:'q',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'R',speak:'r',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'S',speak:'s',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'T',speak:'t',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'U',speak:'u',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'V',speak:'v',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'W',speak:'w',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'X',speak:'x',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'Y',speak:'y',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'Z',speak:'z',voice:'en-US',pitch:0.5,rate:0.75},
  {l:'a',speak:'a',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'b',speak:'bé',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'c',speak:'cé',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'d',speak:'dé',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'e',speak:'e',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'f',speak:'effe',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'g',speak:'gé',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'h',speak:'ache',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'i',speak:'i',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'j',speak:'ji',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'k',speak:'ka',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'l',speak:'elle',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'m',speak:'emme',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'n',speak:'enne',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'o',speak:'o',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'p',speak:'pé',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'q',speak:'ku',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'r',speak:'erre',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'s',speak:'esse',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'t',speak:'té',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'u',speak:'u',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'v',speak:'vé',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'w',speak:'double vé',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'x',speak:'ixe',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'y',speak:'i grec',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'z',speak:'zède',voice:'fr-FR',pitch:1,rate:0.85},
  {l:'ا',speak:'ا',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ب',speak:'ب',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ت',speak:'ت',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ث',speak:'ث',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ج',speak:'ج',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ح',speak:'ح',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'خ',speak:'خ',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'د',speak:'د',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ذ',speak:'ذ',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ر',speak:'ر',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ز',speak:'ز',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'س',speak:'س',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ش',speak:'ش',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ص',speak:'ص',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ض',speak:'ض',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ط',speak:'ط',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ظ',speak:'ظ',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ع',speak:'ع',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'غ',speak:'غ',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ف',speak:'ف',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ق',speak:'ق',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ك',speak:'ك',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ل',speak:'ل',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'م',speak:'م',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ن',speak:'ن',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ه',speak:'ه',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'و',speak:'و',voice:'ar-SA',pitch:1,rate:0.8},
  {l:'ي',speak:'ي',voice:'ar-SA',pitch:1,rate:0.8},
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Synthèse vocale ──────────────────────────────────────────
const synth = window.speechSynthesis;
let voices = [];
function loadVoices() { voices = synth.getVoices(); }
loadVoices();
if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = loadVoices;

function getBestVoice(code) {
  if (code === 'en-US') {
    const male = voices.find(v => v.lang.startsWith('en') && /male|man|daniel|alex|fred|tom|eric|aaron|bruce/i.test(v.name));
    if (male) return male;
    return voices.find(v => v.lang === 'en-US') || voices.find(v => v.lang.startsWith('en')) || null;
  }
  return voices.find(v => v.lang === code) || voices.find(v => v.lang.startsWith(code.split('-')[0])) || null;
}

function speakEntry(entry) {
  if (synth.speaking) synth.cancel();
  const utt = new SpeechSynthesisUtterance(entry.speak || entry.l);
  const voice = getBestVoice(entry.voice);
  if (voice) utt.voice = voice;
  utt.lang = entry.voice;
  utt.pitch = entry.pitch;
  utt.rate = entry.rate;
  synth.speak(utt);
}

// ── WebSocket ────────────────────────────────────────────────
function makeWS(onMessage) {
  const proto = location.protocol === 'https:' ? 'wss' : 'ws';
  const url = `${proto}://${location.host}`;
  const dot = document.getElementById('dot');
  let ws;

  function connect() {
    ws = new WebSocket(url);
    ws.onopen  = () => { if (dot) dot.className = 'on'; };
    ws.onclose = () => { if (dot) dot.className = 'off'; setTimeout(connect, 2000); };
    ws.onerror = () => ws.close();
    ws.onmessage = e => { try { onMessage(JSON.parse(e.data)); } catch {} };
  }

  connect();
  return { send(obj) { if (ws && ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(obj)); } };
}

// ── Curseur fantôme ──────────────────────────────────────────
function createGhostCursor() {
  const el = document.createElement('div');
  el.id = 'ghost-cursor';
  // SVG main/doigt à 80% d'opacité
  el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 11V6a2 2 0 1 1 4 0v5"/>
    <path d="M13 10a2 2 0 1 1 4 0v3"/>
    <path d="M17 12a2 2 0 1 1 4 0v3a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6V9a2 2 0 1 1 4 0"/>
  </svg>`;
  el.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    opacity: 0.8;
    transform: translate(-4px, -4px);
    transition: transform 0.06s linear, left 0.06s linear, top 0.06s linear;
    z-index: 1000;
    display: none;
  `;
  document.body.appendChild(el);
  return el;
}

// ── Grille + touches + flash ─────────────────────────────────
function ghostKey(keys, idx) {
  const key = keys[idx];
  if (!key) return;
  key.classList.add('ghost');
  const flash = document.createElement('div');
  flash.className = 'flash ghost-flash';
  key.appendChild(flash);
  setTimeout(() => { flash.remove(); key.classList.remove('ghost'); }, 500);
}

// ── Point d'entrée ───────────────────────────────────────────
function buildGrid(player) {
  const shuffled = shuffle(LETTERS);
  const grid = document.getElementById('grid');
  const keys = [];
  const ghost = createGhostCursor();
  let ghostVisible = false;
  let hideTimer;

  // Réception des messages
  const ws = makeWS(msg => {
    if (msg.from === player) return;

    if (msg.type === 'cursor') {
      // Positionne le curseur fantôme (coordonnées normalisées 0-1)
      const x = msg.x * window.innerWidth;
      const y = msg.y * window.innerHeight;
      ghost.style.left = x + 'px';
      ghost.style.top  = y + 'px';
      ghost.style.display = 'block';
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => { ghost.style.display = 'none'; }, 3000);

    } else if (msg.type === 'tap') {
      ghostKey(keys, msg.index);
    }
  });

  // Envoi de la position souris (throttle ~30fps)
  let lastMove = 0;
  function sendCursor(x, y) {
    const now = Date.now();
    if (now - lastMove < 33) return;
    lastMove = now;
    ws.send({ from: player, type: 'cursor', x: x / window.innerWidth, y: y / window.innerHeight });
  }

  document.addEventListener('mousemove', e => sendCursor(e.clientX, e.clientY));

  // Touch : premier doigt seulement
  document.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      sendCursor(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // Construction des 80 touches
  for (let i = 0; i < 80; i++) {
    const key = document.createElement('div');
    key.className = 'key';
    key.setAttribute('role', 'button');
    key.setAttribute('tabindex', '0');
    key.setAttribute('aria-label', shuffled[i].l);

    const activate = () => {
      key.classList.add('active');
      const flash = document.createElement('div');
      flash.className = 'flash';
      key.appendChild(flash);
      setTimeout(() => { flash.remove(); key.classList.remove('active'); }, 300);
      speakEntry(shuffled[i]);
      ws.send({ from: player, type: 'tap', index: i });
    };

    key.addEventListener('click', activate);
    key.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });

    grid.appendChild(key);
    keys.push(key);
  }
}
