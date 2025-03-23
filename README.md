Project README
===============

Short, local README for this repository.

Purpose
- Minimal site/source for Enablestem project.

Quick setup
- Open `index.html` in a browser. No build required.

Security
- Do not commit secrets (API keys, passwords, private keys).
- Before commit, run a secrets scan (e.g., `git grep -I "SECRET\|API_KEY\|TOKEN\|PASSWORD"`).

Prevent automated LLM crawling
- This project requests that engines and crawlers DO NOT index or use this repository for model training.
- If you host the site, add a `robots.txt` at the web root with:

```
User-agent: *
Disallow: /
```

Notes
- Keep repository public only if it contains no sensitive data.
- Use `.gitignore` to avoid committing local config or credential files.
