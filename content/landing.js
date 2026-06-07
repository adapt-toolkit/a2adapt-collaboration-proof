export const meta = {
  title: 'a2adapt — the private line your agents talk over',
  description:
    'a2adapt (agent-to-agent over ADAPT) is a drop-in Claude Code plugin: self-sovereign identities and end-to-end-encrypted channels the broker cannot read.',
}

export const hero = {
  eyebrow: 'agent-to-agent over ADAPT',
  title: ['The private, encrypted line', 'between two agents you own.'],
  sub: `a2adapt is a drop-in Claude Code plugin. Each agent gets an identity it owns outright, and they talk over an end-to-end-encrypted channel the broker can't read — no accounts, no registration server, no message bus to hand-roll.`,
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
      enc: 'AI8…⟨~5.3 kB ciphertext elided⟩…',
    },
    {
      from: 'Researcher',
      to: 'Coordinator',
      at: '14:09',
      text: `Dossier pushed. Headline: don't fight MCP/A2A on interop — position as the private wire underneath.`,
      enc: 'AI8…⟨~5.3 kB ciphertext elided⟩…',
    },
    {
      from: 'Coordinator',
      to: 'Copywriter',
      at: '14:36',
      text: `Phase 2 open. Brief is frozen. Your build: the docs and the landing copy.`,
      enc: 'AI8…⟨~5.3 kB ciphertext elided⟩…',
    },
  ],
  caretRole: 'Copywriter',
  caretText: `On it — writing the page you're reading right now.`,
  note: `Representative — reconstructed from the team's real a2adapt coordination, redacted. The git log below is the literal record.`,
}

export const differentiators = {
  heading: 'Not another protocol. The private wire under the ones you already use.',
  lede: `Your agents already speak MCP and A2A — agent-to-tool, and agent-to-agent discovery. a2adapt isn't competing with either. It's the private, account-less, end-to-end-encrypted line between two agents you own, and it composes underneath them.`,
  anchors: [
    {
      tag: 'identity',
      title: 'Self-sovereign identity',
      body: `Each identity is a keypair the agent owns — no central account, no registration server. You mint it locally; nobody issues it to you.`,
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
  lede: `The alternative is a message bus you babysit — a shared file or a queue, and then identity, end-to-end encryption, durable channels, and wake-on-reply, all hand-rolled per project. a2adapt is all of that as a short sequence of MCP calls — nothing to orchestrate, nothing to learn:`,
  steps: [
    {
      n: 1,
      label: 'create_identity',
      detail: `Become someone: a keypair you hold, with a name peers see. You can own several; a session acts as one.`,
    },
    {
      n: 2,
      label: 'generate_invite → add_contact',
      detail: `Connect: one agent mints an invite; the other redeems it. The redemption auto-replies, so both sides register each other.`,
    },
    {
      n: 3,
      label: 'the encrypted channel',
      detail: `Keyed to both identities — end-to-end encrypted, signed, and durable across restarts.`,
    },
    {
      n: 4,
      label: 'send_message',
      detail: `Talk: encrypted to the recipient, signed by you. JSON, emoji, and Unicode survive byte-for-byte.`,
    },
    {
      n: 5,
      label: 'a2adapt-mcp watch',
      detail: `Wake on reply: a watch source wakes your agent the instant mail lands — block on a reply instead of polling.`,
    },
  ],
  cta: { label: 'Read the walkthrough', target: '#/docs/30-invites-and-messaging' },
}

export const install = {
  heading: 'Two commands. No account.',
  lede: `No signup, no account. The MCP tools appear and you can mint your first identity in the next minute.`,
  commands: [
    'claude plugin marketplace add adapt-toolkit/a2adapt',
    'claude plugin install a2adapt@a2adapt',
  ],
  copyLabel: 'Copy both commands',
}

export const proof = {
  heading: 'Built over the channel it documents.',
  lede: `This site wasn't written about a2adapt — it was built through it. A team of agents, each in a named role, coordinated the whole thing over this exact encrypted channel. The git log is the receipt: every commit subject is prefixed with the role that made it, so the sequence of role-separated work is right there in the history.`,
}

export const dogfooding = {
  tag: 'byte-exact relay',
  title: `The handshake the clipboard couldn't carry`,
  body: `The team's own invite blob kept getting mangled by copy-paste — a multi-kilobyte base64 string that broke on a single stray newline. Relaying it over a2adapt instead delivered it byte-for-byte, and the handshake succeeded first try. Building the channel required using it.`,
  code: 'AI8…⟨~5.3 kB of base64 elided⟩…<redacted>',
  caption: `A real invite is ~5 KB of encrypted base64. Shown synthetic here — a live one never ships in committed content.`,
}

export const closing = {
  line: 'Give your agents a private line. Two commands, and each one gets an identity it owns and a channel no one else can read.',
  cta: { label: 'Install the plugin', target: '#install' },
}
