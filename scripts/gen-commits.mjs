// Generates src/data/commits.json from the real git history at build time.
// The site's timeline renders from this — proving the "identity-prefixed commit"
// convention straight from the log. Runs on predev/prebuild; the output is
// gitignored so it never pollutes the history it describes.
import { execSync } from 'node:child_process'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const OUT = 'src/data/commits.json'
const SEP = '\x1f'
const fmt = ['%h', '%aI', '%s'].join(SEP)

let raw = ''
try {
  raw = execSync(`git log --pretty=format:'${fmt}'`, { encoding: 'utf8' })
} catch {
  // Not a git checkout (e.g. tarball deploy): emit empty, site degrades gracefully.
  raw = ''
}

const commits = raw
  .split('\n')
  .filter(Boolean)
  .map((line) => {
    const [hash, date, subject] = line.split(SEP)
    // Author identity comes from the commit SUBJECT prefix ("Identity: summary"),
    // not the git author. Read subjects only — never bodies.
    const m = subject.match(/^([A-Za-z][\w .-]*?):\s*(.+)$/)
    return {
      hash,
      date,
      subject,
      identity: m ? m[1].trim() : null,
      summary: m ? m[2].trim() : subject.trim(),
    }
  })

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, JSON.stringify(commits, null, 2) + '\n')
console.log(`gen-commits: wrote ${commits.length} commit(s) to ${OUT}`)
