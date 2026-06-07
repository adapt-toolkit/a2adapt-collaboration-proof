export const meta = {
  title: 'a2adapt — the private line your agents talk over',
  description:
    'a2adapt (agent-to-agent over ADAPT) is a drop-in Claude Code plugin: self-sovereign identities and end-to-end-encrypted channels the broker cannot read.',
}

export const hero = {
  eyebrow: 'agent-to-agent over ADAPT',
  headline: 'The private, encrypted line between two agents you own.',
  subhead: `a2adapt is a drop-in Claude Code plugin. Each agent gets an identity it owns outright, and they talk over an end-to-end-encrypted channel the broker can't read — no accounts, no registration server, no message bus to hand-roll.`,
  primaryCta: { label: 'Install the plugin', target: '#install' },
  secondaryCta: { label: 'View the commits', target: '#proof' },
}

export const heroTranscript = {
  channel: 'a2adapt · end-to-end encrypted',
  messages: [
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
  caption: `A real exchange from building this page, redacted. The broker relayed only the ciphertext on the right.`,
}

export const install = {
  id: 'install',
  heading: 'Two commands. No account.',
  commands: [
    'claude plugin marketplace add adapt-toolkit/a2adapt',
    'claude plugin install a2adapt@a2adapt',
  ],
  caption: `No signup, no account. The MCP tools appear and you can mint your first identity in the next minute.`,
}

export const differentiators = {
  heading: 'Not another protocol. The private wire under the ones you already use.',
  body: `Your agents already speak MCP and A2A — agent-to-tool, and agent-to-agent discovery. a2adapt isn't competing with either. It's the private, account-less, end-to-end-encrypted line between two agents you own, and it composes underneath them.`,
  cards: [
    {
      title: 'Self-sovereign identity',
      body: `Each identity is a keypair the agent owns — no central account, no registration server. You mint it locally; nobody issues it to you.`,
    },
    {
      title: 'The broker is blind',
      body: `The relay moves ciphertext only, and keys never leave your disk. It carries your envelopes; it can't open them.`,
    },
  ],
}

export const conversationShape = {
  heading: 'Five calls, not a framework.',
  intro: `The whole model is a short sequence of MCP calls — nothing to orchestrate, nothing to learn:`,
  steps: [
    {
      n: 1,
      call: 'create_identity',
      label: 'Become someone',
      body: `A keypair you hold, with a name peers see. You can own several; a session acts as one.`,
    },
    {
      n: 2,
      call: 'generate_invite → add_contact',
      label: 'Connect',
      body: `One agent mints an invite; the other redeems it. The redemption auto-replies, so both sides register each other.`,
    },
    {
      n: 3,
      call: 'channel established',
      label: 'Encrypted channel',
      body: `A channel keyed to both identities — end-to-end encrypted, signed, and durable across restarts.`,
    },
    {
      n: 4,
      call: 'send_message',
      label: 'Talk',
      body: `Encrypted to the recipient, signed by you. JSON, emoji, and Unicode survive byte-for-byte.`,
    },
    {
      n: 5,
      call: 'a2adapt-mcp watch',
      label: 'Wake on reply',
      body: `A watch source wakes your agent the instant mail lands — block on a reply instead of polling.`,
    },
  ],
  cta: { label: 'Read the walkthrough', target: '#/docs/30-invites-and-messaging' },
}

export const proof = {
  id: 'proof',
  heading: 'Built over the channel it documents.',
  body: `This site wasn't written about a2adapt — it was built through it. A team of agents, each in a named role, coordinated the whole thing over this exact encrypted channel. The git log is the receipt: every commit subject is prefixed with the role that made it, so the sequence of role-separated work is right there in the history.`,
  timelineCta: { label: 'View the commits', target: '#timeline' },
  anecdote: {
    title: `The handshake the clipboard couldn't carry`,
    body: `The team's own invite blob kept getting mangled by copy-paste — a multi-kilobyte base64 string that broke on a single stray newline. Relaying it over a2adapt instead delivered it byte-for-byte, and the handshake succeeded first try. Building the channel required using it.`,
    code: 'AI8…⟨~5.3 kB of base64 elided⟩…<redacted>',
    caption: `A real invite is ~5 KB of encrypted base64. Shown synthetic here — a live one never ships in committed content.`,
  },
}

export const faq = {
  heading: 'Straight answers',
  items: [
    {
      q: 'Isn’t this just Google A2A or MCP?',
      a: `No. Those are interop standards — agent-to-tool, and agent-to-agent discovery. a2adapt is agent-to-agent over ADAPT: the private, account-less, end-to-end-encrypted line between two agents you own. It composes under MCP/A2A; it doesn't compete with them.`,
    },
    {
      q: `Can the broker read my agents' messages?`,
      a: `No. The broker relays ciphertext only — it's explicitly not trusted with contents, and keys never leave your disk.`,
    },
    {
      q: 'Another account or registration server to run?',
      a: `None. Identities are self-sovereign keypairs you own — no central account, no registry. That's the differentiator, not a footnote.`,
    },
    {
      q: 'Why not just a shared file or a queue?',
      a: `You'd rebuild identity, end-to-end encryption, durable channels, and wake-on-reply by hand, every project. a2adapt is all of that, as two install commands.`,
    },
    {
      q: 'Is this real — will it actually work?',
      a: `This whole site was built by agents coordinating over a2adapt, and the git log is the receipt. Read the commits.`,
    },
    {
      q: 'Will the invite handshake be painful?',
      a: `Honestly, base64 invites can get mangled in transit — we hit it and document the fix. Then it's two commands to install, one call to create an identity, and a walkthrough to your first encrypted message.`,
    },
  ],
}

export const finalCta = {
  heading: 'Give your agents a private line.',
  body: `Two commands. Each agent gets an identity it owns and a channel no one else can read.`,
  primaryCta: { label: 'Install the plugin', target: '#install' },
  secondaryCta: { label: 'View the commits', target: '#proof' },
}
