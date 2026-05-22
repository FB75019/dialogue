# 🎹 Clavier Sonore Duo — Déploiement online

## Structure du projet

```
clavier-sonore/
├── server.js          ← Serveur Node.js (HTTP + WebSocket)
├── package.json
└── public/
    ├── index.html     ← Page d'accueil (choix joueur)
    ├── joueur1.html
    ├── joueur2.html
    ├── clavier.js     ← Logique partagée
    └── style.css
```

---

## Déploiement sur Render.com (gratuit)

### 1. Crée un dépôt GitHub
- Va sur https://github.com/new
- Crée un repo (ex: `clavier-sonore`)
- Uploade tous les fichiers du dossier `clavier-sonore/`

### 2. Déploie sur Render
- Va sur https://render.com → **New → Web Service**
- Connecte ton repo GitHub
- Configure :
  - **Environment** : `Node`
  - **Build Command** : `npm install`
  - **Start Command** : `npm start`
  - **Instance Type** : Free
- Clique **Create Web Service**

### 3. Jouer
Une fois déployé, Render te donne une URL type :
```
https://clavier-sonore.onrender.com
```

- Page d'accueil : `https://clavier-sonore.onrender.com`
- Joueur 1 : `https://clavier-sonore.onrender.com/joueur1.html`
- Joueur 2 : `https://clavier-sonore.onrender.com/joueur2.html`

Chaque joueur ouvre son lien sur n'importe quel appareil, n'importe où dans le monde.

---

## Indicateur de connexion

Le petit point en bas à droite de chaque clavier indique l'état :
- ⚪ Blanc = connecté
- 🔴 Rouge = déconnecté (reconnexion automatique toutes les 2s)

## Test en local

```bash
npm install
node server.js
# → http://localhost:3000
```

---

## Note sur Render Free

Le plan gratuit de Render met le service en veille après 15 min d'inactivité.
Le premier accès peut prendre ~30 secondes pour démarrer.
Pour éviter ça, upgrade vers le plan Starter (7$/mois) ou utilise un service de ping (ex: UptimeRobot).
