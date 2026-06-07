import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function htmlMetaFromContent() {
  return {
    name: 'html-meta-from-content',
    async transformIndexHtml(html) {
      let meta = { title: 'a2adapt', description: '' }
      try {
        const mod = await import('./content/landing.js')
        if (mod.meta) meta = mod.meta
      } catch {}
      return html
        .replace(/%APP_TITLE%/g, meta.title ?? 'a2adapt')
        .replace(/%APP_DESC%/g, meta.description ?? '')
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), htmlMetaFromContent()],
  server: { port: 5180 },
})
