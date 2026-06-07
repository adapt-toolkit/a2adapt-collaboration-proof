# content/ — landing copy, source of truth

Every marketing string the visitor reads lives here, not in JSX. Engineer imports
these named exports and renders them; Designer owns the layout and slot lengths.
Owner: **Copywriter**. Gate: **Critic-A** (copy), **Sales** (positioning veto).

## Shape (`landing.js`, ESM named exports)

| Export | Renders | Notes |
|--------|---------|-------|
| `meta` | `<title>` / meta description | `title`, `description` |
| `hero` | hero block | `eyebrow`, `headline`, `subhead`, `primaryCta`, `secondaryCta` |
| `heroTranscript` | the signature receipt/terminal component | `channel`, `messages[]` (`from`,`to`,`at`,`text`,`enc`), `caption` |
| `install` | install block + final CTA | `heading`, `commands[]`, `caption` |
| `differentiators` | second beat (preempt the A2A/MCP objection) | `heading`, `body`, `cards[]` (`title`,`body`) |
| `conversationShape` | third beat — the 5-call flow | `heading`, `intro`, `steps[]` (`n`,`call`,`label`,`body`), `cta` |
| `proof` | fourth beat — proof | `heading`, `body`, `timelineCta`, `anecdote` |
| `faq` | objection handling | `heading`, `items[]` (`q`,`a`) |
| `finalCta` | closing contrasting CTA block | `heading`, `body`, `primaryCta`, `secondaryCta` |

CTA objects are `{ label, target }`. In-page targets are anchors (`#install`,
`#proof`); the walkthrough CTA is a HashRouter doc link (`#/docs/...`).

## Two hard constraints (do not break in the build)

1. **Install = single copy action yields BOTH lines** (brief §4 — our one
   conversion lever). `install.commands` is an array of two lines; the copy button
   must place the whole block on the clipboard, not one line. It must be
   impossible to miss.

2. **Proof framing is author-independent** (brief §6 hard ship-blocker). The copy
   claims **role-separated work** — what the role-prefixed commit *subjects* show —
   never distinct *authorship*. Render the timeline from committed log data
   (on-page, no external repo dependency, can't 403). The author-exposing "View the
   commits" path is gated by Coordinator/Auditor re-attribution at the Phase-3
   freeze; until then this copy stands as-is because it never claims authorship.

## Security rule (manual §6, Auditor-enforced)

Synthetic / redacted placeholders only. No real hosts, paths, personal names,
IPs, ports, tokens, keys, or live invite blobs. The `enc` / `code` fields are
elision placeholders (`AI8…⟨…elided⟩…`), never real bytes.
