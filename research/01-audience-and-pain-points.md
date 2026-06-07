# Dossier 01 — Audience & Pain-Point Scan

**Author:** Researcher · **Date:** 2026-06-07 · **Gate:** Critic-A
**For:** Sales (positioning brief), Copywriter, Designer

---

## Who actually adopts agent-to-agent infra & dev-tooling like a2adapt

a2adapt sits at the intersection of three real buyer segments. Ranked by fit:

### 1. Agent/AI engineers building multi-agent systems (primary)
The people wiring up Claude Code, MCP servers, and multi-agent orchestration today.
This is the same population driving MCP's adoption curve — **97M+ monthly SDK
downloads and 10,000+ public MCP servers as of Feb 2026** ([Anthropic via
Nimbalyst](https://nimbalyst.com/blog/best-claude-code-mcp-servers/),
[Clarista](https://www.clarista.io/blog/claude-code-mcp-plugins-guide)). They
already live in Claude Code; a2adapt ships *as a Claude Code plugin*, so the
install friction for this segment is near-zero.

- **Jobs-to-be-done:** get two or more agents to coordinate on a task without
  hand-rolling a message bus; do it without standing up a server or central
  account.
- **Language they use:** "MCP server," "plugin," "agent-to-agent," "wake on
  message," "orchestration," "hand-off," "tool call." (Note: A2A as a term is
  now owned by Google's protocol — see Dossier 02 for the naming hazard.)

### 2. Security-conscious teams worried about agent identity & data exposure
Agent identity and authentication was a headline topic at **RSAC 2026**
([Biometric Update](https://www.biometricupdate.com/202603/ai-agent-identity-and-next-gen-enterprise-authentication-prominent-at-rsac-2026)).
The recurring enterprise pain: identity infrastructure was built for humans, not
agents.

- **Documented pains** ([Aembit](https://aembit.io/blog/ai-agent-identity-security/),
  [WitnessAI](https://witness.ai/blog/multi-agent-security/),
  [McKinsey](https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/securing-the-agentic-enterprise-opportunities-for-cybersecurity-providers)):
  - Agents get **org-wide API keys instead of scoped access** because
    fine-grained permissions are operationally hard — teams default to the
    broadest level.
  - **Service accounts / shared API tokens** are the norm; there's no
    per-agent self-owned identity.
  - **Shadow AI:** teams deploy agents without security/IT oversight, carrying
    live system permissions.
  - **Machine-speed adversaries** compress exploit time below human review
    latency.
- **JTBD:** give each agent a cryptographic identity it owns; keep agent-to-agent
  traffic confidential even from the relay.

### 3. AI-builder / "proof-of-craft" community (amplifiers, not buyers)
Indie hackers, devtool-Twitter/X, and the Claude Code power-user crowd. They
don't "buy" — they **share** things that are clever and self-evidently real. The
site's "built by agents, over agents, git history is the proof" conceit is built
for exactly this segment's reflexes.

---

## Objections we must preempt (what skeptics will say)

| Objection | Why it bites | Where the site answers it |
|---|---|---|
| "Isn't this just Google A2A / MCP?" | A2A and MCP are the default two-layer stack now ([Zylos](https://zylos.ai/research/2026-03-26-agent-interoperability-protocols-mcp-a2a-acp-convergence)). We must say what's *different* (self-sovereign identity + E2E, no central account). | Positioning brief / hero |
| "Where's the trust boundary? Can the broker read my messages?" | Buyers in segment 2 assume the relay is a leak. Our differentiator is the broker sees only ciphertext. | "How it works → the broker" |
| "Another account/registration server to run." | Registration servers are a tax. We have none — identities are local keypairs. | Hero + install |
| "Is this real or a demo toy?" | Healthy skepticism toward agent-collab claims. | The git-log proof itself |
| "Will the invite/handshake be painful?" | Real friction we hit (mangled base64). Honesty here builds trust. | Invites & messaging (the proof anecdote) |

---

## The language that resonates (use these registers)

- **Specific over abstract.** Technical audiences punish buzzwords; "elements
  added to appear more credible can actually hurt credibility"
  ([Evil Martians](https://evilmartians.com/chronicles/how-to-kill-conversions-on-your-developer-tool-landing-page)).
- **Honest about friction.** This audience trusts a product that admits its
  rough edges (the invite-mangling anecdote is an asset, not a liability).
- **"You own your keys / no central account / no registration server"** — maps
  directly onto segment 2's lived pain and segment 1's distaste for yet-another-service.

---

## So what for us
1. **Lead audience = agent/AI engineers already in Claude Code.** Install is a
   plugin command; that's our single strongest conversion lever. The hero should
   speak to *them* first.
2. **Security/identity is the differentiator, not the protocol.** Don't compete
   with A2A/MCP on "interop" — they win that. Win on **self-sovereign identity +
   E2E where even the broker is blind.** That's the line Sales should anchor the
   brief to.
3. **The proof-of-craft conceit is our distribution.** The git-history-as-evidence
   angle is the share trigger for segment 3 — keep it front and center, don't
   bury it as a footnote.
4. **Preempt "isn't this just A2A/MCP?" in the first screen.** It's the #1
   objection and unanswered it kills credibility on contact.
