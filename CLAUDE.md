# SSC-FILES: working rules for this repo

## Branches: never create one

- Do not create any git branch in this repo. No feature, fix, topic, session, or `claude/*` branches, ever.
- Work on `main` and commit there. Do not run `git checkout -b`, `git switch -c`, `git branch <name>`, or `git worktree add` with a new branch.
- Do not push to a new remote branch. Push `main` only when the user asks.
- If a task seems to need a branch, do the work on `main` and tell the user why no branch was made.

## Why

The repo had one extra branch (`gate-v3-cloud`) that was merged into `main` and deleted. It is now a single-branch repo, and the owner wants it to stay that way.

## Before any git write

- Check the state first: `git status --short -uno` for tracked changes. The full `git status` is very slow here because of large untracked folders.
- Never delete a file, branch, or stash to make a git command pass. Stop and ask instead.
- Do not drop `stash@{0}` (`stellar-map-and-optics-stash`) unless the user asks for it.
