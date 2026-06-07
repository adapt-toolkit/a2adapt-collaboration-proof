import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="nav">
      <NavLink to="/" className="nav-brand">a2adapt</NavLink>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/docs">Docs</NavLink>
        <a href="https://github.com/adapt-toolkit/a2adapt-collaboration-proof" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>
  )
}
