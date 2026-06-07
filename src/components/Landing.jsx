import { useState } from 'react'
import commits from '../data/commits.json'
import { roleMeta } from '../content/identities.js'
import {
  hero,
  transcript,
  differentiators,
  howItWorks,
  install,
  proof,
  dogfooding,
  closing,
} from '../content/landing.js'

const buildOrder = [...commits].reverse()

function IdentityTag({ id }) {
  const meta = roleMeta(id)
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
        <span className="terminal-title">a2adapt · {transcript.title}</span>
        <span className="terminal-enc">e2e encrypted</span>
      </div>
      <div className="terminal-body">
        {transcript.lines.map((line, i) => (
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
          <IdentityTag id={transcript.caretRole} />
          <span className="caret-line">{transcript.caretText}<span className="blink">▋</span></span>
        </div>
      </div>
    </div>
  )
}

function CtaLink({ cta, variant }) {
  return (
    <a className={`btn ${variant}`} href={cta.target}>
      {cta.label}
    </a>
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
      <div className="cta-row">
        <CtaLink cta={hero.ctas.primary} variant="btn-primary" />
        <CtaLink cta={hero.ctas.secondary} variant="btn-ghost" />
      </div>
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
      <div className="diff-grid">
        {differentiators.anchors.map((a) => (
          <article className="diff" key={a.tag}>
            <span className="proof-tag">{a.tag}</span>
            <h3>{a.title}</h3>
            <p className="diff-body">{a.body}</p>
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
            <span className="step-n">{s.n}</span>
            <div className="step-body">
              <code className="step-label">{s.label}</code>
              <span className="step-detail">{s.detail}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function InstallBlock() {
  const [copied, setCopied] = useState(false)
  const block = install.commands.join('\n')

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(block)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="block install" id="install">
      <header className="block-head">
        <h2>{install.heading}</h2>
        <p>{install.lede}</p>
      </header>
      <div className="install-block">
        <pre className="install-code"><code>{install.commands.map((c) => `$ ${c}`).join('\n')}</code></pre>
        <button type="button" className="btn btn-primary install-copy" onClick={copyAll}>
          {copied ? 'Copied ✓' : install.copyLabel}
        </button>
      </div>
    </section>
  )
}

function Timeline() {
  return (
    <ol className="timeline">
      {buildOrder.map((c) => {
        const meta = roleMeta(c.identity)
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

function Proof() {
  return (
    <section className="block" id="timeline">
      <header className="block-head">
        <h2>{proof.heading}</h2>
        <p>{proof.lede}</p>
      </header>
      <Timeline />
      <article className="proof">
        <span className="proof-tag">{dogfooding.tag}</span>
        <h3>{dogfooding.title}</h3>
        <p className="proof-body">{dogfooding.body}</p>
        <pre className="proof-code"><code>{dogfooding.code}</code></pre>
        <p className="proof-caption">{dogfooding.caption}</p>
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
      <Differentiators />
      <HowItWorks />
      <Proof />
      <InstallBlock />
      <Closing />
    </div>
  )
}
