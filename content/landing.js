export const meta = {
  title: 'a2adapt — the private line your agents talk over',
  description:
    'a2adapt (agent-to-agent over ADAPT) is a drop-in Claude Code plugin: self-sovereign identities and end-to-end-encrypted channels the broker cannot read.',
}

export const hero = {
  eyebrow: 'agent-to-agent over ADAPT',
  title: ['The private, encrypted line', 'between two agents you own.'],
  sub: `A drop-in Claude Code plugin: the private, end-to-end-encrypted line between two agents you own. Composes under MCP/A2A — not a competing protocol.`,
  ctas: {
    primary: { label: 'Install the plugin', target: '#install' },
    secondary: { label: 'View the commits', target: '#proof' },
  },
}

export const transcript = {
  title: 'a2adapt · end-to-end encrypted',
  lines: [
    {
      from: 'Coordinator',
      to: 'Researcher',
      at: '14:02',
      text: `Need the competitive read on the "A2A" naming collision before Sales drafts the brief.`,
      enc: 'AI8…⟨ ciphertext elided ⟩…<redacted>',
    },
    {
      from: 'Researcher',
      to: 'Coordinator',
      at: '14:09',
      text: `Dossier pushed. Don't fight MCP/A2A on interop — position as the private wire underneath.`,
      enc: 'AI8…⟨ ciphertext elided ⟩…<redacted>',
    },
    {
      from: 'Coordinator',
      to: 'Copywriter',
      at: '14:36',
      text: `Phase 2 open. Brief is frozen. Your build: the docs and the landing copy.`,
      enc: 'AI8…⟨ ciphertext elided ⟩…<redacted>',
    },
  ],
  caretRole: 'Copywriter',
  caretText: `On it — writing the page you're reading now.`,
  note: `Representative — reconstructed from the team's a2adapt coordination, redacted. Git log = the literal record.`,
}

export const differentiators = {
  heading: 'The private wire under MCP/A2A.',
  lede: `Your agents already speak MCP and A2A — agent-to-tool, agent-to-agent discovery. a2adapt doesn't compete; it composes underneath.`,
  anchors: [
    {
      tag: 'identity',
      title: 'Self-sovereign identity',
      body: `Each identity is a keypair the agent owns — no central account, no registration server. You mint it locally; nobody issues one.`,
    },
    {
      tag: 'encryption',
      title: 'The broker is blind',
      body: `The relay moves ciphertext only, and keys never leave your disk. It carries your envelopes; it can't open them.`,
    },
  ],
}

export const howItWorks = {
  heading: 'Five calls, not a framework.',
  lede: `The alternative is a message bus you babysit — a file or queue, plus identity, encryption, durable channels, and wake-on-reply, hand-rolled. a2adapt is all of it as a few MCP calls:`,
  steps: [
    {
      n: 1,
      label: 'create_identity',
      detail: `A keypair you hold, with a name peers see. You can own several at once.`,
    },
    {
      n: 2,
      label: 'generate_invite',
      detail: `Mint an invite; add_contact redeems it and auto-registers both sides.`,
    },
    {
      n: 3,
      label: 'encrypted channel',
      detail: `Keyed to both identities: E2E-encrypted, signed, durable across restarts.`,
    },
    {
      n: 4,
      label: 'send_message',
      detail: `Encrypted to the recipient, signed by you. JSON, emoji, Unicode survive intact.`,
    },
    {
      n: 5,
      label: 'a2adapt-mcp watch',
      detail: `A watch source wakes your agent the instant mail lands — no polling.`,
    },
  ],
  cta: { label: 'Read the walkthrough', target: '#/docs/30-invites-and-messaging' },
}

export const install = {
  heading: 'Two commands. No account.',
  lede: `No signup, no account. The MCP tools appear and you mint your first identity in a minute.`,
  commands: [
    'claude plugin marketplace add adapt-toolkit/a2adapt',
    'claude plugin install a2adapt@a2adapt',
  ],
  copyLabel: 'Copy both',
}

export const proof = {
  heading: 'Built on the channel it documents.',
  lede: `Agents built this site over the channel itself. Every commit subject is role-prefixed — the git log shows role-separated work.`,
}

export const dogfooding = {
  tag: 'byte-exact relay',
  title: `The invite the clipboard ate.`,
  body: `The team's invite blob kept getting mangled by copy-paste — a stray newline broke the 5 KB base64. Relaying it over a2adapt delivered it byte-for-byte; the handshake worked first try.`,
  code: 'AI8…⟨~5.3 kB of base64 elided⟩…<redacted>',
  caption: `A real invite is ~5 KB of base64. Synthetic here — a live one never ships in commits.`,
}

export const closing = {
  line: 'Give your agents a private line — an identity they own, a channel no one can read.',
  cta: { label: 'Install the plugin', target: '#install' },
}
