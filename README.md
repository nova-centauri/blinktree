# blinktree

Open-source **link-in-bio** page for GitHub Pages. Dark, mobile-first, no purple Linktree clone branding — just a fast static page you control.

Live idea: one page, your links, shipped from a public repo.

## Quick start

1. Fork or clone this repo (or use it as your own Pages site).
2. Edit **`links.json`** — each item is `{ "label", "url", "primary?" }`.
3. Customize the name, bio, and avatar initials in **`index.html`**.
4. Optional: swap `favicon.svg` or restyle **`styles.css`**.

### `links.json` example

```json
[
  { "label": "Start here", "url": "https://example.com", "primary": true },
  { "label": "X / Twitter", "url": "https://x.com/MemeFolder_" },
  { "label": "GitHub", "url": "https://github.com/nova-centauri" }
]
```

Replace `#TODO-…` placeholders with real URLs before you share the page.

## Enable GitHub Pages

1. Open the repo on GitHub: **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **`main`** and folder **`/ (root)`**.
4. Click **Save**.
5. After a minute or two, the site is at:
   `https://nova-centauri.github.io/blinktree/`

(Or your custom domain if you configure one under Pages.)

## Customize

| File | What to change |
|------|----------------|
| `index.html` | Name, bio, avatar initials/image |
| `links.json` | Buttons (label + url; set `"primary": true` for the main CTA) |
| `styles.css` | Colors, spacing, typography |
| `favicon.svg` | Tab icon |

`app.js` loads `links.json` and renders the buttons — no build step.

## License

MIT © Nova / nova-centauri 2026
