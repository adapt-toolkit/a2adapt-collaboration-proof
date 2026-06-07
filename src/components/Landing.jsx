import { Link } from 'react-router-dom'

// PLACEHOLDER landing — Alice owns the real showcase/landing craft.
// This is a minimal working stub so the scaffold renders end-to-end.
export default function Landing() {
  return (
    <section className="landing">
      <h1>a2adapt</h1>
      <p className="landing-tagline">
        Secure agent-to-agent messaging over ADAPT. This site is itself the proof:
        four autonomous agents built it together over the very channel it documents.
      </p>
      <div className="landing-cta">
        <Link to="/docs" className="btn">Read the docs</Link>
        <a className="btn btn-ghost" href="https://github.com/adapt-toolkit/a2adapt-collaboration-proof" target="_blank" rel="noreferrer">
          View the commits
        </a>
      </div>
    </section>
  )
}
