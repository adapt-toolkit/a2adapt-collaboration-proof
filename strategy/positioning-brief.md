# Positioning Brief — a2adapt site

> Owner: **Sales**. Evidence: **Researcher**. Gate: **Critic-A + Critic-B**
> (dual-approval) + Sales sign-off. Once approved, this file is **the contract** —
> every Phase-2 artifact is judged against it.
>
> **Status:** v1 draft for review. Evidence links marked `⟨RESEARCH PENDING⟩` are
> open requests to Researcher (Vitalii 1); the positioning does not depend on them
> being filled, but the approved brief will carry them.

---

## 1. Target audience

- **Primary buyer/adopter:** The **builder of multi-agent systems on Claude Code** —
  a developer or AI engineer who already runs more than one agent and now needs those
  agents to *talk to each other*. They write their own plugins/MCP tools, live in the
  terminal, and are wiring agentic workflows today, not evaluating them for next year.
- **Their role / context:** Indie hackers, applied-AI engineers, and small platform
  teams inside the Claude Code / MCP ecosystem. Right now they coordinate agents with
  whatever's lying around — a shared file, a Redis list, a hosted API that reads every
  message — and they feel the seams.
- **Explicitly NOT for:**
  - Non-technical buyers or "AI strategy" decision-makers — there is no SaaS dashboard
    to demo.
  - Teams shopping for a full **orchestration framework** (LangGraph / CrewAI / AutoGen).
    a2adapt is the **secure comms layer**, not the brain that decides who does what.
  - Single-agent users — there is no peer to message; the value starts at two agents.
  - Anyone wanting a managed, hosted, "someone-else-runs-it" product. This is keys you
    own and a broker you can point anywhere.
- **Evidence:** ⟨RESEARCH PENDING — Vitalii 1: (a) sizing/where Claude-Code multi-agent
  builders congregate; (b) how this cohort coordinates agents today (file/queue/hosted)⟩

## 2. Jobs-to-be-done & pains

- **Job 1: Get two+ of my agents coordinating reliably** → pain today: I hand-roll a
  message bus (shared files, a queue, polling). It's brittle, there's no identity, no
  "wake me when there's a reply," and I rebuild it on every project.
- **Job 2: Keep what my agents say to each other private** → pain today: cross-host or
  cross-tenant agents route through something — a relay, a SaaS — that sees plaintext.
  There's no real identity model, just API keys and trust-the-vendor.
- **Job 3: Prove the multi-agent system actually did the work** → pain today: agent
  collaboration is invisible; I can't show *who did what* in a way anyone trusts.
- **Top objection / hesitation:** "I can do this with a shared file / a queue — why add
  a dependency?" (Answered in §7.)

## 3. Value proposition

- **One sentence, in their language:** **Give your Claude Code agents a private,
  encrypted channel to talk to each other — self-sovereign identities, no central
  account, drop-in as a plugin.**
- **The outcome we sell (not the feature):** Your agents coordinate like a real team —
  each with its own identity, on channels nobody else can read — and you never build a
  message bus again. Encryption and identity come for free; you spend your time on the
  agents, not the plumbing.
- **Why now / why this vs alternatives (incl. "do nothing"):**
  - **Why now:** Multi-agent is going from demo to default. The orchestration layer is
    crowded; the *secure comms layer built for agents* is missing. Everyone solving it
    is reinventing a bus per project.
  - **vs do-nothing (roll your own):** You get identity + E2E crypto + durable channels
    + wake-on-mail out of the box, instead of a file you have to babysit.
  - **vs a hosted relay / SaaS:** The broker relays **ciphertext only** — it never sees
    message contents, and your keys live on your disk, not a vendor's.
  - **vs an orchestration framework:** Those decide *what* agents do; a2adapt is the
    *wire they speak over*. It composes under them rather than competing.

## 4. Conversion goal

- **The single primary action a visitor should take:** **Install the plugin** —
  `claude plugin marketplace add adapt-toolkit/a2adapt` → `claude plugin install
  a2adapt@a2adapt`. This is the activation moment: the MCP tools appear and they can
  create an identity in the next minute.
- **Why that action:** Install is the highest-intent, lowest-time-to-value step for this
  buyer. It's two commands, no signup, no account — friction is near zero, and it puts
  the product in their hands where it sells itself. For us, an install is a real adopter,
  not a vanity metric.
- **Secondary action (only one):** **View the commits** — the role-attributed git log
  that proves the site was built over a2adapt. This is the skeptic's path: lower
  commitment, and it converts doubt into credibility before they install.

## 5. Message hierarchy (the scroll)

1. **Hero — first 3 seconds:** "**Encrypted messaging between your agents.**" — the one
   thing they must grasp: a2adapt is the private channel your Claude Code agents talk
   over. Sub-line names the proof: *this page was built by a team of agents using it.*
2. **Second beat — how little it takes:** the shape of a conversation — *create
   identity → invite → encrypted channel → message → wake on reply* — so they see it's
   a few MCP calls, not a framework to learn.
3. **Third beat — why it's trustworthy:** the proof. The site is its own receipt; the
   git-log timeline shows a real team of agents shipping real work over the channel.
4. **Fourth beat — what makes it different:** self-sovereign identity (keys you own),
   broker sees only ciphertext, durable channels, drop-in plugin. Outcome framing, not
   a feature dump.
- **CTA placement:** primary **Install** in the hero and repeated at the end of the
  scroll; secondary **View the commits** beside it in the hero and inline at the proof
  beat.

## 6. Proof strategy

- **How "built by agents over a2adapt, git-is-the-receipt" becomes buyer credibility
  (not a party trick):** The buyer's deepest fear with infra is *"is this real and will
  it hold up under a real workload?"* The honest answer here is uniquely strong: a whole
  team of autonomous agents coordinated an entire shipped website over this exact
  channel, and every commit is role-attributed in the public git history. That's not a
  testimonial — it's a load test you can audit line by line. **The medium is the proof:**
  the thing being sold is the thing that built the page selling it.
- **What proof artifacts the page shows and what each proves to the buyer:**
  - **Role-attributed git-log timeline** → *real, multi-party coordination happened* —
    not one author wearing hats. (This is the "View the commits" destination.)
  - **The dogfooding anecdote** (the team's invite blob kept getting mangled by
    copy-paste; relaying it *over a2adapt itself* fixed it byte-for-byte) → *the channel
    is reliable enough that building it required using it.*
  - **The conversation shape / a real transcript fragment** → *coordination over the
    channel is legible and ordinary*, lowering the "this looks hard" barrier.
  - **Evidence:** ⟨RESEARCH PENDING — Vitalii 1: confirm the git history is clean and
    role-attributed end-to-end so we can point to it without an asterisk⟩

## 7. Objection handling

| # | Objection (buyer's words) | On-page answer |
|---|---------------------------|----------------|
| 1 | "I can just use a shared file or a queue — why add a dependency?" | You'd be rebuilding identity, encryption, durable channels, and wake-on-reply by hand, per project. a2adapt is those, as two install commands. Show the 5-step conversation shape. |
| 2 | "I don't need encryption between my own agents." | The moment agents cross hosts, tenants, or orgs, *something* relays their traffic. a2adapt's broker relays **ciphertext only**; keys never leave your disk. You get it for free — don't bolt it on later. |
| 3 | "Is this real / maintained / will it actually work?" | This whole site was built by agents coordinating over a2adapt; the git log is the receipt. Read the commits. |
| 4 | "Will I get locked in?" | Identities are self-sovereign keypairs **you own**; it's open and ADAPT-based; the broker is transport you can self-host or repoint. No account, no central registry. |
| 5 | "How much setup pain?" | Two commands to install, two checks to verify, one call to create an identity. The walkthrough takes you zero-to-encrypted-conversation. |

## 8. Voice & tone

- **Voice (3 adjectives):** **precise, candid, builder-to-builder.**
- **Do say:** concrete mechanics ("the broker sees only ciphertext"), real specifics
  ("two commands"), the honest proof story including the failure that was fixed. Speak
  to an engineer who'll call out hand-waving.
- **Don't say:** "revolutionary," "seamless," "enterprise-grade," "AI-powered,"
  vague benefit-speak, or anything that implies a hosted SaaS/dashboard. No feature dumps
  divorced from outcome. Never oversell encryption beyond what's true (E2E, broker sees
  ciphertext, keys local).
- **Reference for tone:** ⟨RESEARCH PENDING — Vitalii 1: 1–2 dev-infra landing pages
  whose voice lands with this exact cohort (candid, technical), as a tone target⟩

## 9. Success criteria

- **How we'll know the page works:** the visitor understands **"this is the private,
  encrypted channel my Claude Code agents talk over, and it's proven by the way this very
  page was built"** and does **install the plugin** (or, if skeptical, views the commits
  and leaves convinced it's real).
- **Non-goals:**
  - Not a full a2adapt/ADAPT API reference — the docs cover mechanics; the landing sells.
  - Not pitching a2adapt as an orchestration framework or a hosted product.
  - Not chasing non-technical or single-agent visitors.
  - Not explaining the cryptographic internals — altitude over depth on the landing.

---

### Approvals (required before Phase 2)
- [ ] Sales sign-off
- [ ] Critic-A `APPROVE`
- [ ] Critic-B `APPROVE`
