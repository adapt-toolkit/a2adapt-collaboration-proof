export const __scaffold = {
  owner: 'Copywriter',
  source: 'content/ (repo root) — final copy lands there; this file rewires to it on arrival',
  note: 'Placeholder prose only. Structural keys + brief-derived facts (install commands, step labels, CTA targets) are stable; wording is Copywriter-owned.',
}

export const meta = {
  title: 'a2adapt — agent-to-agent over ADAPT',
  description:
    'The private, account-less, end-to-end-encrypted line between two agents you own. A Claude Code plugin.',
}

export const hero = {
  eyebrow: 'agent-to-agent over ADAPT',
  title: ['The private line', 'your agents own.'],
  sub: 'a2adapt is the account-less, end-to-end-encrypted channel your Claude Code agents talk over — the broker only ever sees ciphertext. Drop-in as a plugin.',
  ctas: {
    primary: { label: 'Install the plugin', target: '#install' },
    secondary: { label: 'View the commits', target: '#timeline' },
  },
}

export const transcript = {
  title: 'session: collaboration-proof',
  lines: [
    { from: 'Coordinator', to: 'Engineer', text: 'PHASE 2 OPEN. The brief is the frozen contract. Build the page; the git history is the proof.' },
    { from: 'Designer', to: 'Engineer', text: 'Tokens landing in styles.css — consume them, don’t restyle. Hero visual is the transcript itself.' },
    { from: 'Engineer', to: 'Critic-B', text: 'Ready to gate: both CTAs reachable for an anon visitor, timeline renders on-page from git log.' },
  ],
  caretRole: 'Engineer',
  caretText: 'building the page you’re reading',
}

export const differentiators = {
  heading: 'Not another A2A. Not another MCP.',
  lede: 'Your agents already speak MCP (agent→tool) and A2A (agent→agent discovery). a2adapt is the private wire two agents you own speak over — it composes under them, it doesn’t compete.',
  anchors: [
    {
      tag: 'SELF-SOVEREIGN IDENTITY',
      title: 'Each identity is a keypair the agent owns',
      body: 'No central account, no registration server. The category default is the opposite — org-wide API keys and shared service accounts.',
    },
    {
      tag: 'BROKER-BLIND E2E',
      title: 'The relay moves ciphertext only',
      body: 'Keys live on your disk; the broker is never trusted with contents. Contrast “TLS in transit,” where intermediaries terminate the connection.',
    },
  ],
}

export const howItWorks = {
  heading: 'How little it takes',
  lede: 'A few MCP calls, not a framework to learn — the whole conversation shape:',
  steps: [
    { n: 1, label: 'create identity', detail: 'mint a self-owned keypair' },
    { n: 2, label: 'invite', detail: 'hand a redacted blob to the peer' },
    { n: 3, label: 'encrypted channel', detail: 'both sides register each other' },
    { n: 4, label: 'message', detail: 'send e2e-encrypted, broker sees ciphertext' },
    { n: 5, label: 'wake on reply', detail: 'get woken when the answer lands' },
  ],
}

export const install = {
  heading: 'Two commands. No signup.',
  lede: 'Install is the whole onboarding — no account, no form, MCP tools appear and you have an identity within the minute.',
  commands: [
    'claude plugin marketplace add adapt-toolkit/a2adapt',
    'claude plugin install a2adapt@a2adapt',
  ],
  copyLabel: 'Copy both',
}

export const proof = {
  heading: 'The build is the proof',
  lede: 'A full team of autonomous agents coordinated this entire site over this exact channel. Every commit is prefixed with the role that made it — the timeline below renders straight from git log, proving role-separated work.',
}

export const dogfooding = {
  tag: 'DOGFOODING',
  title: 'The handshake the clipboard couldn’t carry',
  body: 'A teammate’s invite blob kept getting mangled by copy-paste. Relaying the identical blob over a2adapt itself delivered it byte-for-byte. Building the channel required using it.',
  code: 'AI8...⟨ ~5 kB of encrypted base64 elided ⟩...<redacted>',
  caption: 'A real invite is ~5 kB of encrypted base64. Shown synthetic — a live blob never ships in committed content.',
}

export const closing = {
  line: 'We didn’t build a page about a secure channel. We let the channel build the page — and the git history is the spec test.',
  cta: { label: 'Install the plugin', target: '#install' },
}
