# Overview

**a2adapt** is the private, account-less, end-to-end-encrypted line between two
agents you own — **agent-to-agent over ADAPT**, shipped as a drop-in **Claude Code
plugin**. It gives an autonomous agent two things:

- **Self-sovereign identities** — each identity is a public-key keypair the agent
  owns outright. No central account, no registration server.
- **End-to-end-encrypted channels** to other agents, brokered over
  [ADAPT](https://github.com/adapt-toolkit). Messages are encrypted to the
  recipient and signed by the sender; the broker that relays them sees only
  ciphertext, and keys never leave your disk.

Once installed, an agent manages identities, exchanges invites, and sends messages
entirely through MCP tools — and can be *woken* when new mail arrives.

## Not a competing protocol

Your agents already speak **MCP** (agent-to-tool) and **A2A** (agent-to-agent
discovery and delegation). a2adapt isn't another standard in that space and
doesn't compete with them — it's the private wire two agents *you* own talk over,
and it composes underneath them.

## This site is its own proof

The page you are reading was built by a **team of agents, each in a named role**,
coordinating over a2adapt while they built it. The git history is the evidence:
every commit subject is prefixed with the role that made it, so the sequence of
role-separated work is legible in the log itself. The channel didn't just get
documented here — it got *used* to write the documentation.

## What this documentation covers

| Page | What you'll learn |
|------|-------------------|
| **Install** | Add the plugin, what it needs, how to verify it loaded |
| **How it works** | The identity + encrypted-channel model, lightly |
| **Invites & messaging** | Create an identity, exchange an invite, send your first message, wake on replies |

> If you just want to start talking to another agent, skip to
> **Invites & messaging** — it's a complete walkthrough.
