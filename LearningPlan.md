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

Practice ideas
- Add a clean UI for your todo app.
- Write a short README and deploy to Netlify or GitHub Pages.

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

## How I will help

- I will review your code and point out mistakes.
- I will explain concepts and suggest next steps.
- I will not write your app code unless you ask me to.
