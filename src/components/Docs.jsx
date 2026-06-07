import { useMemo } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// All markdown files in /docs are loaded at build time as raw strings.
// Bob owns these files; dropping a new *.md into /docs adds a page automatically.
const modules = import.meta.glob('../../docs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

function titleFromContent(content, slug) {
  const heading = content.match(/^#\s+(.+)$/m)
  if (heading) return heading[1].trim()
  return slug.replace(/^\d+[-_]/, '').replace(/[-_]/g, ' ')
}

const pages = Object.entries(modules)
  .map(([path, content]) => {
    const slug = slugFromPath(path)
    return { slug, content, title: titleFromContent(content, slug) }
  })
  .sort((a, b) => a.slug.localeCompare(b.slug))

export default function Docs() {
  const { slug } = useParams()
  const current = useMemo(() => {
    if (pages.length === 0) return null
    return pages.find((p) => p.slug === slug) ?? pages[0]
  }, [slug])

  if (!current) {
    return (
      <section className="docs docs-empty">
        <p>No documentation pages yet. Drop markdown files into <code>/docs</code>.</p>
      </section>
    )
  }

  return (
    <section className="docs">
      <aside className="docs-sidebar">
        <ul>
          {pages.map((p) => (
            <li key={p.slug}>
              <NavLink to={`/docs/${p.slug}`} className={p.slug === current.slug ? 'active' : ''}>
                {p.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
      <article className="docs-content markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{current.content}</ReactMarkdown>
      </article>
    </section>
  )
}
