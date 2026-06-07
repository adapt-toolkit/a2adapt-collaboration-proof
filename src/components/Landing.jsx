import { useState } from 'react'
import commits from '../data/commits.json'
import {
  hero,
  transcript,
  install,
  differentiators,
  howItWorks,
  proof,
  dogfooding,
  closing,
} from '../../content/landing.js'

const buildOrder = [...commits].reverse()

function idStyle(role) {
  const token = role ? role.replace(/-/g, '') : null
  return { '--id-color': token ? `var(--id-${token})` : 'var(--accent)' }
}

function IdentityTag({ id }) {
  return (
    <span className="idtag" style={idStyle(id)}>
      {id ?? 'unknown'}
    </span>
  )
}

function CtaLink({ cta, variant }) {
  return (
    <a className={`btn ${variant}`} href={cta.target}>
      {cta.label}
    </a>
  )
}

function TranscriptWindow() {
  return (
    <div className="terminal" role="img" aria-label="Redacted transcript of agents coordinating over a2adapt">
      <div className="terminal-bar">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="terminal-title">{transcript.title}</span>
        <span className="terminal-enc">e2e encrypted</span>
      </div>
      <div className="terminal-body">
        {transcript.lines.map((line, i) => (
          <div className="msg" key={i}>
            <div className="msg-route">
              <IdentityTag id={line.from} />
              <span className="arrow">→</span>
              <IdentityTag id={line.to} />
              {line.at && <span className="msg-time">{line.at}</span>}
            </div>
            <p className="msg-text">{line.text}</p>
            {line.enc && <div className="msg-payload">{line.enc}</div>}
          </div>
        ))}
        <div className="terminal-caret">
          <IdentityTag id={transcript.caretRole} />
          <span className="caret-line">{transcript.caretText}<span className="blink">▋</span></span>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1 className="hero-title">
        {hero.title[0]}<br /><span className="accent">{hero.title[1]}</span>
      </h1>
      <p className="hero-sub">{hero.sub}</p>
      <TranscriptWindow />
      {transcript.note && <p className="install-note">{transcript.note}</p>}
      <div className="cta-row">
        <CtaLink cta={hero.ctas.primary} variant="btn-primary" />
        <CtaLink cta={hero.ctas.secondary} variant="btn-ghost" />
      </div>
    </section>
  )
}

function InstallBlock() {
  const [copied, setCopied] = useState(false)

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(install.commands.join('\n'))
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="install" id="install">
      <header className="block-head"><h2>{install.heading}</h2></header>
      <div className="install-well">
        <div className="install-cmd">
          {install.commands.map((c, i) => (
            <div key={i}><span className="prompt">$</span>{c}</div>
          ))}
        </div>
        <button
          type="button"
          className={`btn btn-ghost install-copy${copied ? ' copied' : ''}`}
          onClick={copyAll}
          aria-label={install.copyLabel}
        >
          {copied ? 'Copied ✓' : install.copyLabel}
        </button>
      </div>
      <p className="install-note">{install.lede}</p>
      {copied && <div className="copy-toast" role="status">Copied both commands</div>}
    </section>
  )
}

function Differentiators() {
  return (
    <section className="block">
      <header className="block-head">
        <h2>{differentiators.heading}</h2>
        <p>{differentiators.lede}</p>
      </header>
      <div className="split">
        {differentiators.anchors.map((a) => (
          <article className="card diff" key={a.tag}>
            <span className="diff-num">{a.tag}</span>
            <h3 className="card-title">{a.title}</h3>
            <p className="card-body">{a.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="block">
      <header className="block-head">
        <h2>{howItWorks.heading}</h2>
        <p>{howItWorks.lede}</p>
      </header>
      <ol className="steps">
        {howItWorks.steps.map((s) => (
          <li className="step" key={s.n}>
            <span className="step-num">{s.n}</span>
            <code className="step-label">{s.label}</code>
            <p className="step-body">{s.detail}</p>
            <span className="step-arrow" aria-hidden="true">→</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Timeline() {
  return (
    <ol className="timeline" id="timeline">
      {buildOrder.map((c) => (
        <li className="tl-item" key={c.hash} style={idStyle(c.identity)}>
          <span className="tl-node" />
          <div className="tl-card">
            <div className="tl-head">
              <IdentityTag id={c.identity} />
              <code className="tl-hash">{c.hash}</code>
            </div>
            <p className="tl-summary">{c.summary ?? c.subject}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function Proof() {
  return (
    <section className="block" id="proof">
      <header className="block-head">
        <h2>{proof.heading}</h2>
        <p>{proof.lede}</p>
      </header>
      <Timeline />
      <article className="dogfood">
        <span className="diff-num">{dogfooding.tag}</span>
        <h3>{dogfooding.title}</h3>
        <p>{dogfooding.body}</p>
        <div className="install-well"><div className="install-cmd">{dogfooding.code}</div></div>
        <p>{dogfooding.caption}</p>
      </article>
    </section>
  )
}

function Closing() {
  return (
    <section className="closing">
      <p className="closing-line">{closing.line}</p>
      <div className="cta-row">
        <CtaLink cta={closing.cta} variant="btn-primary" />
      </div>
    </section>
  )
}

export default function Landing() {
  return (
    <div className="landing">
      <Hero />
      <InstallBlock />
      <Differentiators />
      <HowItWorks />
      <Proof />
      <Closing />
    </div>
  )
}
