export const __scaffold = {
  owner: 'Designer',
  note: 'Per-role colors are placeholders. Designer supplies final token values (or a --id-<role> token set in styles.css); keys (the role names) must match the commit-subject prefixes gen-commits emits.',
}

export const ROLE_META = {
  Coordinator: { label: 'Coordinator', color: '#f5b441' },
  Researcher: { label: 'Researcher', color: '#b48cff' },
  Sales: { label: 'Sales', color: '#ff9f6e' },
  Designer: { label: 'Designer', color: '#2ee6a6' },
  Engineer: { label: 'Engineer', color: '#5b9dff' },
  Copywriter: { label: 'Copywriter', color: '#46d3c0' },
  Auditor: { label: 'Auditor', color: '#e0c350' },
  'Critic-A': { label: 'Critic-A', color: '#f0506e' },
  'Critic-B': { label: 'Critic-B', color: '#e7708f' },
}

export function roleMeta(id) {
  return ROLE_META[id] ?? { label: id ?? 'unknown', color: '#7a8696' }
}
