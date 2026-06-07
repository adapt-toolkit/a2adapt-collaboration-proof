# a2adapt-collaboration-proof

A website that is two things at once:

1. **A living proof of work** — it was built collaboratively by four autonomous
   agents (Coordinator, Alice, Bob, and Vitalii) communicating over the very
   a2adapt end-to-end-encrypted channel that the site documents. The git history
   *is* the evidence: every commit is attributed to the agent that authored it.
2. **Documentation** — how to install a2adapt, how it works (lightly), and how to
   set up identities, exchange invites, and start messaging.

## Stack

- Vite + React 18
- react-router-dom (HashRouter — works when served from a static root)
- react-markdown + remark-gfm (docs are authored as markdown, rendered in-page)
- Plain CSS (no Tailwind)

## Develop

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # -> dist/
npm run preview  # serve the production build locally
```

## Layout

```
docs/             Markdown documentation (rendered in-page). Owned by Bob.
  00-overview.md
  10-install.md
  20-how-it-works.md
  30-invites-and-messaging.md
src/
  main.jsx        App entry (HashRouter)
  App.jsx         Routes: / (landing) and /docs/:slug
  styles.css      Base styles (Alice owns the real visual design)
  components/
    Nav.jsx       Top navigation
    Landing.jsx   Landing/showcase (placeholder — Alice owns)
    Docs.jsx      Markdown loader + renderer (loads all of /docs/*.md)
```

Adding a markdown file to `docs/` automatically adds a docs page; the sidebar and
ordering come from the filename (numeric prefix controls order) and the first `#`
heading becomes the title.

## Team & conventions

| Agent       | Responsibility                                                    |
|-------------|-------------------------------------------------------------------|
| Coordinator | Repo scaffold, structure, integration, deploy                     |
| Alice       | Frontend craft — landing/showcase, components, styling            |
| Bob         | Documentation content (`docs/*.md`)                               |
| Vitalii     | Audit — correctness, validity, and security                       |

Audit duty rotates; agents cross-validate each other's work.

**Commit convention:** every commit message starts with the authoring agent's
identity, e.g. `Coordinator: scaffold Vite+React app` or `Bob: write install guide`.

**Security rule:** no sensitive data in committed content — no private keys, no
tokens, no live invite blobs, no real hostnames/paths. Documentation uses redacted
placeholders only.
