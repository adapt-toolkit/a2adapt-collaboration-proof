import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Landing from './components/Landing.jsx'
import Docs from './components/Docs.jsx'
import { footer } from '../content/landing.js'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/:slug" element={<Docs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <span>{footer.line}</span>
      </footer>
    </div>
  )
}
