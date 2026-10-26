# 🌐 Sito Web di Pubblicazione - Pieno Giusto

Sito web statico (Landing Page) pronto per ospitare e distribuire l'applicazione **Pieno Giusto** via file APK, senza utilizzare il Google Play Store.

---

## 📁 Struttura dei File

```
website/
├── index.html          # Struttura e contenuti della Landing Page
├── styles.css          # Grafica moderna, responsive e tema scuro
├── script.js           # Piccole interazioni e animazioni
├── PienoGiusto.apk     # Il file APK eseguibile da scaricare
└── assets/
    └── app_icon.png    # Icona ufficiale dell'applicazione
```

---

## 🚀 Come Pubblicare il Sito Gratis

### Opzione 1: GitHub Pages (Consigliato)
Se il progetto è gestito su un repository GitHub:
1. Copia i file presenti nella cartella `website/` all'interno della cartella `docs/` nella radice del progetto oppure crea un ramo dedicato chiamato `gh-pages`.
2. Su GitHub, vai su **Settings** → **Pages**.
3. Sotto **Build and deployment** → **Branch**, seleziona il ramo (es. `main`) e la cartella `/docs` (o la radice se usi `gh-pages`).
4. Clicca **Save**. Entro 1-2 minuti il tuo sito sarà online con HTTPS gratuito (es. `https://tuo-utente.github.io/PienoGiusto/`).

### Opzione 2: Cloudflare Pages / Netlify / Vercel (Drag & Drop)
1. Crea un account gratuito su **Netlify** (netlify.com) o **Cloudflare Pages**.
2. Trascina direttamente la cartella `website/` nell'area di upload.
3. Ottieni immediatamente un link pubblico personalizzabile con certificato SSL incluso.

---

## 🔄 Come Aggiornare l'APK quando fai nuove Release

Quando compili una nuova versione release dell'app in Android Studio (*Build → Build APKs*):
1. Copia il file generato in `app/release/Pieno giusto.apk` (o `app/build/outputs/apk/release/app-release.apk`).
2. Sostituisci il file `website/PienoGiusto.apk`.
3. Effettua il commit/deploy sul tuo server.
