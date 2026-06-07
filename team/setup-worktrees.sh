#!/usr/bin/env bash
# Provision one git worktree + branch per agent, with git author preset to the role.
# Safe to re-run: skips worktrees that already exist. Run from anywhere.
set -euo pipefail

REPO="/home/shakhvit/work/adapt/a2adapt-collaboration-proof"
BASE="/home/shakhvit/work/adapt/a2adapt-team"

# slug -> "Role Name"
slugs=(researcher sales designer engineer copywriter auditor critic-a critic-b)
roles=(Researcher Sales Designer Engineer Copywriter Auditor Critic-A Critic-B)

mkdir -p "$BASE"

for i in "${!slugs[@]}"; do
  slug="${slugs[$i]}"
  role="${roles[$i]}"
  wt="$BASE/$slug"
  branch="work/$slug"
  if [ -d "$wt" ]; then
    echo "skip  $slug (worktree exists)"
  else
    git -C "$REPO" worktree add -b "$branch" "$wt" main >/dev/null
    echo "added $slug -> $wt (branch $branch)"
  fi
  git -C "$wt" config user.name  "$role"
  git -C "$wt" config user.email "${slug}@a2adapt.agents"
done

echo "---"
git -C "$REPO" worktree list
