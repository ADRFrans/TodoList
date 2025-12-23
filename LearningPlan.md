# Learning Plan

A gentle, beginner-friendly path from "never used React" to "build and ship a small project on GitHub." This plan keeps the pace light and assumes you want to do the coding yourself. I can review what you write and point you in the right direction, but I will not write code for you unless you ask.

## How we'll use this plan

- You work through steps in order.
- After each milestone, we log progress in `history.md`.
- If something feels too fast or too slow, we adjust and update this plan.

## Pace guidelines

- Aim for 3 to 5 short sessions per week (30 to 60 minutes each).
- Focus on one topic at a time until it feels comfortable.
- Build tiny things early and often.
- If a task runs past 60 minutes, pause and log where you got stuck.

## Milestone 0: Setup and orientation (1 to 2 sessions)

Goal: Get a working environment and a basic mental model.

Tasks
- Install Node.js (LTS) and a code editor.
- Create a new React app using Vite.
- Run the dev server and understand the file structure.

Checkpoints
- You can explain what `src`, `public`, and `package.json` are for.
- You can start and stop the dev server without looking it up.

## Milestone 1: JSX and components (3 to 5 sessions)

Goal: Understand how UI is built with components.

Topics
- JSX basics and expressions
- Functional components
- Props and simple composition

Focus note
- If props feel confusing, spend an extra session here and build 2 tiny components that accept different props (title, count, isActive).

Practice ideas
- Build a simple profile card with props.
- Create a small page with a few reusable components.

Checkpoints
- You can create a component and pass props into it.
- You can break a UI into components on paper.

## Milestone 2: State and events (3 to 6 sessions)

Goal: Make the UI interactive.

Topics
- `useState`
- Event handling
- Controlled inputs
 - Common gotchas (empty input checks, prop naming consistency)

Practice ideas
- Build a counter and a basic form.
- Build a simple todo list (no persistence).

Checkpoints
- You can explain the difference between props and state.
- You can update state based on user input.

## Milestone 3: Effects and data (3 to 6 sessions)

Goal: Work with side effects and data flow.

Topics
- `useEffect`
- Fetching data from an API
- Loading and error states

Practice ideas
- Fetch and display a list of items from a public API.
- Add a loading spinner and error message.

Checkpoints
- You can explain why `useEffect` is used.
- You can handle loading and error states gracefully.

## Milestone 4: Forms, lists, and lifting state (3 to 6 sessions)

Goal: Build slightly larger components with shared state.

Topics
- Lifting state up
- Passing callbacks down
- Managing list keys

Practice ideas
- Expand the todo list to include editing and filtering.
- Move state to a parent and pass handlers down.

Checkpoints
- You can move state between parent and child components.
- You can explain why keys matter in lists.

## Milestone 5: Routing and structure (2 to 4 sessions)

Goal: Create a multi-page feel and organize code.

Topics
- React Router basics
- File and folder organization
- Reusable layout components

Practice ideas
- Add a second page (About or Help).
- Create a shared layout with a nav bar.

Checkpoints
- You can navigate between pages using links.
- You can explain your folder structure.

## Milestone 6: Project polish (3 to 6 sessions)

Goal: Prepare a small app for GitHub.

Topics
- Basic styling (CSS modules, plain CSS, or a simple framework)
- Accessibility basics (labels, focus, contrast)
- Readme and deployment
- Separation of concerns (custom hooks and helper files)
- State management overview (Context API, `useReducer`, Redux)

Practice ideas
- Add a clean UI for your todo app.
- Write a short README and deploy to Netlify or GitHub Pages.
- Refactor one feature into a custom hook and a small helper file.
- Compare when to use Context, `useReducer`, or Redux with a tiny example.

Checkpoints
- Your app is usable by someone else.
- You have a public GitHub repo with a working demo link.

## First project idea: Todo app (beginner to intermediate)

Scope
- Add, complete, edit, and delete todos
- Filter by status
- Persist in localStorage
- Clean UI and basic accessibility

Stretch ideas
- Tags or categories
- Due dates
- Keyboard shortcuts

## When to ask for help

- If you are stuck for more than 30 minutes.
- If your app renders but does not behave as expected.
- If you want feedback on your structure or naming.

## Git essentials (use along the way)

- `git status` to check what changed
- `git add .` to stage changes
- `git commit -m "message"` to save progress
- `git log --oneline` to review history
- `git push` to sync with GitHub
- `git pull` to sync from GitHub

## Git checklist (beginner to intermediate)

Basics
- `git status` see working tree state
- `git add <file>` stage specific files
- `git add .` stage everything
- `git commit -m "message"` save a snapshot
- `git log --oneline` quick history view
- `git diff` see unstaged changes
- `git diff --staged` see staged changes

Remote sync
- `git remote -v` verify remotes
- `git push -u origin main` first push
- `git push` subsequent pushes
- `git pull` fetch + merge from remote

Branches
- `git branch` list branches
- `git branch <name>` create a branch
- `git checkout <name>` switch branches (older)
- `git switch <name>` switch branches (newer)
- `git checkout -b <name>` create + switch (older)
- `git switch -c <name>` create + switch (newer)
- `git merge <name>` merge a branch into current

Undo and recover
- `git restore <file>` discard unstaged changes
- `git restore --staged <file>` unstage a file
- `git reset --soft HEAD~1` undo last commit, keep changes staged
- `git reset --mixed HEAD~1` undo last commit, keep changes unstaged
- `git revert <commit>` undo via a new commit (safe for shared history)

Stash and clean
- `git stash` save work in progress
- `git stash pop` reapply stash and remove it
- `git stash list` list stashes

Tags (optional)
- `git tag` list tags
- `git tag -a v1.0.0 -m "message"` create a tag

Conflicts
- `git status` shows conflicts
- Edit files to resolve conflicts, then `git add` and `git commit`

## Daily Git practice

- I will sprinkle 1 to 2 Git commands into each session so you practice regularly.
- Commands will match the task (status, diff, add, commit, push).

## Session continuity

- When you ask "Where did we leave off" or for "next steps", I will read both `history.md` and `LearningPlan.md` before answering.
- Response format: short recap of the last session completed, then next steps.
- I will update history.md and LearningPlan.md during the session (as needed) and at the end of each session without prompting.
- At logical checkpoints, I will prompt you to update your git repo (status/add/commit, and push if desired).
## How I will help

- I will review your code and point out mistakes.
- I will explain concepts and suggest next steps.
- I will not write your app code unless you ask me to.




