# ENABLE STEM

Static marketing site for [ENABLE](https://ncenable.co), a Durham, NC nonprofit expanding STEM education and project funding for underrepresented youth.

Live at [enablestem.vercel.app](https://enablestem.vercel.app).

## Stack

Plain HTML, CSS, and a small amount of vanilla JavaScript — no build step. Deployed via Vercel.

## Pages

- `index.html` — landing page (hero, about, team, events, contact)
- `aboutus.html` — story and initiatives

## Layout

```
.
├── index.html         # landing page
├── aboutus.html       # about page
├── styles.css         # shared styles
├── aboutus.css        # about-page styles
├── script.js          # navbar + scroll-in animations
├── assets/            # logos, team photos, banners
├── robots.txt         # disallow crawlers and LLM training
└── stackbit.config.ts # Stackbit visual editing config
```

## Running locally

No build required:

```
python3 -m http.server
```

Then open <http://localhost:8000>.

## Contact

Reach out via the contact section on the live site, or through [ncenable.co](https://ncenable.co).
