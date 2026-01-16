---
name: commit-and-pr
description: Handles git commits and pull request creation. Use when committing changes, creating PRs, pushing code, saying "/commit-and-pr", or when work is complete and needs to be committed.
---

# Commit and PR Workflow

## When to Use

This skill applies when:

- User says `/commit-and-pr`
- User asks to "commit and create a PR"
- User says "push my changes and open a PR"
- Work is complete and should be committed
- User says "commit", "push", "create PR", "open PR", etc.

---

## Step 1: Clean Up & Review Changes

Run these commands in parallel:

```bash
# Remove any temporary files first
rm -rf tmpclaude-* 2>/dev/null

git status                    # See all changed files (NEVER use -uall flag)
git diff --stat               # Review changed files summary
git log --oneline -5          # Check recent commit style
```

---

## Step 2: Stage Changes

- Review the changes and stage appropriate files
- **Exclude sensitive files**: `.env`, `credentials.json`, API keys, secrets
- **Exclude local settings**: `.claude/settings.local.json`
- Ask the user if unclear which files to include

```bash
git add <files>
```

---

## Step 3: Commit

Draft a clear, concise commit message:

- Focus on "why" not "what"
- Follow the repository's commit message style (check Step 1 output)
- Use accurate verbs: "add" for new features, "update" for enhancements, "fix" for bugs

```bash
git commit -m "$(cat <<'EOF'
Commit message here.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

### If Pre-Commit Hooks Modify Files

Pre-commit hooks (Prettier/ESLint) run automatically via Husky. If hooks modify files:

```bash
# Amend the commit to include hook-modified files
git add <modified-files>
git commit --amend --no-edit
```

### Amend Rules

ONLY use `--amend` when ALL conditions are met:

1. User explicitly requested it, OR commit SUCCEEDED but pre-commit hook auto-modified files
2. HEAD commit was created by you in this conversation (verify: `git log -1 --format='%an %ae'`)
3. Commit has NOT been pushed to remote (verify: `git status` shows "Your branch is ahead")

**CRITICAL**: If commit FAILED or was REJECTED by hook, NEVER amend - fix the issue and create a NEW commit.

---

## Step 4: Sync with Remote

```bash
git fetch origin

# Stash any remaining unstaged changes before rebase
git stash

git rebase origin/main        # Rebase on top of main branch

# Restore stashed changes (if any were stashed)
git stash pop 2>/dev/null || true
```

- Resolve any conflicts if they occur
- If conflicts exist, inform the user and help resolve them

---

## Step 5: Push to Remote

```bash
# Use --force-with-lease after rebase (safe force push)
git push -u origin <branch-name> --force-with-lease
```

**Note:** `--force-with-lease` is required after rebase since history changed. It's safe because it won't overwrite others' work.

---

## Step 6: Create PR

```bash
gh pr create --title "Title here" --body "$(cat <<'EOF'
## Summary
- Bullet point 1
- Bullet point 2
- Bullet point 3

## Test plan
- [ ] Test item 1
- [ ] Test item 2

Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

Include:

- Summary of changes (bullet points)
- Test plan section with checklist
- Claude Code attribution footer

Return the PR URL to the user.

---

## Step 7: Check PR Status (Automatic Background Timer)

**IMPORTANT**: This step runs automatically in the background. Do NOT skip this step.

Immediately after creating the PR, start a background task that waits 3 minutes then checks the status:

```bash
# Run this with run_in_background: true and timeout: 300000
sleep 180 && gh pr view <pr-number> --json state,reviewDecision,statusCheckRollup,reviews
```

**Implementation**:

- Use Bash tool with `run_in_background: true`
- Set `timeout: 300000` (5 minutes to allow for the 3-minute wait + command execution)
- The task will complete in the background while the conversation continues
- Check the background task output later using `TaskOutput` or by reading the output file

When the result is ready, report whether the PR is:

- **Approved** - Ready to merge
- **Changes Requested** - Review feedback and suggest fixes
- **Pending Review** - Still awaiting reviewer
- **CI/CD Status** - Pass/Fail of automated checks

If changes are requested, summarize the feedback and offer to fix the issues.

---

## Git Safety Rules

- NEVER update git config
- NEVER run destructive commands (`push --force`, `hard reset`) unless explicitly requested
- NEVER skip hooks (`--no-verify`, `--no-gpg-sign`) unless explicitly requested
- NEVER force push to main/master - warn user if requested
- NEVER use interactive flags (`-i`) like `git rebase -i` or `git add -i`
- NEVER commit unless explicitly asked - don't be too proactive
- NEVER create empty commits if there are no changes

---

## Formatting Changes Reminder

When pre-commit hooks modify files that weren't in the original commit:

1. Stage all formatting changes
2. Either amend the commit (if safe per Amend Rules) OR create a separate "Apply formatting" commit
3. **Don't leave formatting changes uncommitted** - this was a common miss!
