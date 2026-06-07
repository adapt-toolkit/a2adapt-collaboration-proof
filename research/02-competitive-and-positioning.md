# Dossier 02 — Competitive & Positioning Scan

**Author:** Researcher · **Date:** 2026-06-07 · **Gate:** Critic-A
**For:** Sales (positioning brief — critical path), Copywriter

> **Citation policy (binds downstream — per Critic-A gate):** every third-party
> market statistic below (MCP download counts, partner counts, AAIF/RSAC/Zylos
> datapoints) is **CONTEXT-ONLY** — reasoning input for us, **not** a publishable
> a2adapt fact. None of these ship on the page. Only claims derived from the
> a2adapt product docs are candidates for publication, and those ship **only**
> with Auditor confirmation. Tag legend used here: `[CONTEXT-ONLY]` = do not
> publish; `[PUBLISHABLE pending-Auditor]` = may ship once Auditor verifies.

---

## The category map (as of mid-2026)

The agent-protocol landscape has **converged**, not fragmented. Three protocols
dominate production conversations, and the "protocol wars" framing is over:

| Layer | Protocol | Owner | What it does |
|---|---|---|---|
| **Vertical** (agent→tool) | **MCP** | Anthropic → Linux Foundation AAIF | Connect one agent to tools/data. The de-facto standard. `[CONTEXT-ONLY]` ~97M SDK downloads, 10k+ servers (see stat caveat below). |
| **Horizontal** (agent→agent) | **A2A** | Google → AAIF | Let agents *discover* each other, delegate tasks, share status. `[CONTEXT-ONLY]` 50+ enterprise partners (Salesforce, SAP, Accenture). |
| **Horizontal alt** | **ACP** | IBM / AGNTCY | REST-native agent communication. |

Sources: [Zylos Research](https://zylos.ai/research/2026-03-26-agent-interoperability-protocols-mcp-a2a-acp-convergence),
[GetStream](https://getstream.io/blog/ai-agent-protocols/),
[Koyeb](https://www.koyeb.com/blog/google-a2a-anthropic-mcp-ai-agent-protocol-war),
[Google Developers Blog](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/).

> **Stat caveat (honesty, per charter):** the "~97M SDK downloads / 10k+ servers"
> figure is attributed to an Anthropic announcement (~Feb 2026) but I obtained it
> via **secondary sources** ([Nimbalyst](https://nimbalyst.com/blog/best-claude-code-mcp-servers/),
> [Clarista](https://www.clarista.io/blog/claude-code-mcp-plugins-guide),
> [optinampout](https://optinampout.com/blogs/mcp-vs-a2a-vs-acp-agent-protocols-2026)),
> not the primary Anthropic page, and sources **disagree on "monthly" vs
> "cumulative."** Treat as directional, not exact. `[CONTEXT-ONLY]` regardless —
> it must not ship as a number on our page.

Both MCP and A2A now sit under the **Linux Foundation's Agentic AI Foundation
(AAIF)**, founded Dec 2025 (OpenAI, Anthropic, Google, Microsoft, AWS, Block;
later Cloudflare, Bloomberg). First joint interop spec expected **Q3 2026**
([Zylos](https://zylos.ai/research/2026-03-26-agent-interoperability-protocols-mcp-a2a-acp-convergence)).

### ⚠️ Naming hazard (flag for Sales + Coordinator)
"A2A" is now strongly associated with **Google's Agent2Agent protocol**.
"a2adapt" reads as "a2a + dapt" and risks being mistaken for "an A2A thing." We
should **either** lean into "agent-to-agent over ADAPT" explicitly (own the
expansion) **or** consciously differentiate. Either way the page must not let a
reader assume we *are* Google A2A. This is a positioning decision, not a research
finding — escalating to Sales.

---

## Where the incumbents are weak (our opening)

The protocols win interop but share a **documented security gap**:

- A2A uses "agent cards" to advertise capabilities + auth schemes, but **does not
  mandate how cards are verified** — agent impersonation, card tampering, and
  replay attacks are real risks; credential management is left to implementers
  ([SecureW2](https://securew2.com/blog/a2a-protocol-security),
  [Blueinfy](https://blog.blueinfy.com/2026/02/ai-agent-communication-protocols.html)).
- Transport security is typically **TLS/HTTPS in transit** — confidentiality
  relies on the transport, and intermediaries terminate it. Decentralized
  identity efforts lean on **W3C DIDs + OAuth/OIDC/mTLS** declared per-agent
  ([OneReach](https://onereach.ai/blog/what-is-a2a-agent-to-agent-protocol/),
  [IBM](https://www.ibm.com/think/topics/ai-agent-protocols)).
- Enterprise reality (Dossier 01): agents run on **shared service accounts /
  org-wide API keys**, not self-owned identities.

**a2adapt's actual differentiators** (from the product docs, verified against the
category):
1. **Self-sovereign identity** — each identity is a keypair the agent owns; **no
   central account, no registration server.** The category default is the
   opposite (service accounts, registries, OAuth issuers).
2. **End-to-end encryption where the broker is blind** — the relay moves
   ciphertext only; it is explicitly *not trusted with contents*. Contrast with
   "TLS in transit" where intermediaries can terminate.
3. **Durable encrypted channels** that survive restart (keys replay from disk).
4. **Native to the Claude Code/MCP workflow** — ships as a plugin, wakes agents
   on new mail. Meets segment-1 buyers where they already are.

> Honesty guard (per charter): a2adapt is an *application-layer channel brokered
> over ADAPT*, not a competitor to the MCP/A2A *standards*. The right framing is
> complementary — "your agents speak MCP/A2A; a2adapt is how two of *your own*
> agents hold a private, account-less, end-to-end-encrypted line." Sales owns the
> exact line; this is the honest envelope it must stay inside.

---

## Positioning patterns that work for infra products (and clichés that don't)

**Works:**
- **"Show, don't tell."** For infra, input/output visuals: show the command you
  run, show what you get ([Evil Martians 100-page study](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025)).
- **Opinionated, specific copy.** Linear's page wins on "unapologetic
  specificity" — copy that speaks directly to its audience's frustration
  ([Caffeine Marketing](https://www.caffeinemarketing.com/blog/top-15-software-development-landing-page-designs)).
- **Proof-by-doing.** Our git-history-is-the-evidence conceit *is* the strongest
  pattern in this study category: demonstrate, don't claim.

**Clichés to avoid:**
- Generic "Get started" CTAs, buzzword subheads, carousels of vague benefits.
- "Enterprise-grade security" with no mechanism named — technical buyers read it
  as a tell that there's nothing underneath.
- Pretending to be a protocol/standard we're not (the A2A confusion trap).

---

## So what for us
1. **Don't fight on interop — we lose to A2A/MCP and look confused.** Anchor on
   **account-less self-sovereign identity + broker-blind E2E.** That's a real,
   defensible gap the incumbents have publicly.
2. **Resolve the "a2adapt vs Google A2A" naming collision on the first screen** —
   this is the single biggest positioning risk. (Decision for Sales/Coordinator.)
3. **Frame as complementary, stated honestly:** "your agents already speak
   MCP/A2A — a2adapt is the private encrypted line between two agents *you* own."
   Keeps us truthful (charter) and out of a fight we can't win.
4. **The proof conceit is also the competitive moat** — no protocol vendor's
   landing page can say "this site was built by agents talking over the channel
   it documents." Lean all the way in.
