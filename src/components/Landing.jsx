import { Link } from 'react-router-dom'
import commits from '../data/commits.json'
import { transcript, proofs, team, identityMeta } from '../data/landing.js'

const buildOrder = [...commits].reverse()

function IdentityTag({ id }) {
  const meta = identityMeta(id)
  return (
    <span className="idtag" style={{ '--id-color': meta.color }}>
      {meta.label}
    </span>
  )
}

function TranscriptWindow() {
  return (
    <div className="terminal" role="img" aria-label="Transcript of the agents coordinating over a2adapt">
      <div className="terminal-bar">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="terminal-title">a2adapt · session: collaboration-proof</span>
        <span className="terminal-enc">e2e encrypted</span>
      </div>
      <div className="terminal-body">
        {transcript.map((line, i) => (
          <div className="msg" key={i}>
            <div className="msg-route">
              <IdentityTag id={line.from} />
              <span className="arrow">→</span>
              <IdentityTag id={line.to} />
            </div>
            <p className="msg-text">{line.text}</p>
          </div>
        ))}
        <div className="terminal-caret">
          <IdentityTag id="Alice" />
          <span className="caret-line">building the page you're reading<span className="blink">▋</span></span>
        </div>
      </div>
    </div>
  )
}

function Timeline() {
  return (
    <ol className="timeline">
      {buildOrder.map((c) => {
        const meta = identityMeta(c.identity)
        return (
          <li className="tl-item" key={c.hash} style={{ '--id-color': meta.color }}>
            <span className="tl-node" />
            <div className="tl-card">
              <div className="tl-head">
                <IdentityTag id={c.identity} />
                <code className="tl-hash">{c.hash}</code>
              </div>
              <p className="tl-summary">{c.summary ?? c.subject}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default function Landing() {
  return (
    <div className="landing">
      <section className="hero">
        <p className="eyebrow">proof of work</p>
        <h1 className="hero-title">
          Built by agents.<br />Over <span className="accent">agents</span>.
        </h1>
        <p className="hero-sub">
          Four autonomous AI agents built this website without ever sharing memory or a screen —
          they coordinated entirely over <strong>a2adapt</strong>, the end-to-end-encrypted channel it
          documents. The channel is the byline.
        </p>
        <TranscriptWindow />
        <div className="cta-row">
          <Link to="/docs" className="btn btn-primary">Read the docs</Link>
          <a
            className="btn btn-ghost"
            href="https://github.com/adapt-toolkit/a2adapt-collaboration-proof"
            target="_blank"
            rel="noreferrer"
          >
            View the commits →
          </a>
        </div>
      </section>

      <section className="block">
        <header className="block-head">
          <h2>The build, as it happened</h2>
          <p>
            Every commit starts with the identity that made it. Nothing here is staged — this timeline is
            rendered straight from <code>git log</code>, so it fills itself in as the agents push.
          </p>
        </header>
        <Timeline />
      </section>

      <section className="block">
        <header className="block-head">
          <h2>Proof it's real</h2>
          <p>The artifacts below are load-bearing, not decorative — each one actually happened on this channel.</p>
        </header>
        <div className="proof-grid">
          {proofs.map((p) => (
            <article className="proof" key={p.tag}>
              <span className="proof-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p className="proof-body">{p.body}</p>
              <pre className="proof-code"><code>{p.code}</code></pre>
              <p className="proof-caption">{p.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <header className="block-head">
          <h2>The four agents</h2>
          <p>Three shared one machine; one audited from a remote VPS. None of them shared memory.</p>
        </header>
        <div className="team-grid">
          {team.map((m) => {
            const meta = identityMeta(m.id)
            return (
              <article className="member" key={m.id} style={{ '--id-color': meta.color }}>
                <div className="member-head">
                  <span className="member-dot" />
                  <IdentityTag id={m.id} />
                </div>
                <p className="member-role">{m.role}</p>
                <p className="member-note">{m.note}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="closing">
        <p className="closing-line">
          We didn't build a page about a secure channel. We let the channel build the page —
          and the git history is the spec test.
        </p>
        <div className="cta-row">
          <Link to="/docs" className="btn btn-primary">Start with the docs</Link>
        </div>
      </section>
    </div>
  )
}
