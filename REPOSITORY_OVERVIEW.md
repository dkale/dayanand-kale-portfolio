# Repository Overview

## Table of Contents

- [What this repository is](#what-this-repository-is)
- [Tech stack](#tech-stack)
- [Building and running locally](#building-and-running-locally)
- [Angular to React correlation](#angular-to-react-correlation)
- [Key project areas](#key-project-areas)
  - [Central portfolio content](#central-portfolio-content)
  - [Page sections](#page-sections)
  - [Routing](#routing)
  - [Theme handling](#theme-handling)
  - [Contact form](#contact-form)
- [Important React concepts used](#important-react-concepts-used)
  - [Components](#components)
  - [Hooks](#hooks)
  - [JSX](#jsx)
  - [Props](#props)
- [Testing](#testing)

## What this repository is

This is a personal portfolio website for **Dayanand Kale**, a hands-on technical architect and Senior Specialist Software Engineer.

The website presents:

- Professional summary and career highlights
- 15+ years of experience
- Areas of expertise
- Work history
- Selected architecture and engineering projects
- Education
- AI-assisted engineering work
- Contact details
- A downloadable resume

The main portfolio content is defined in `src/data/portfolio.ts`. The components in `src/components/sections/` render that content.

The homepage is assembled in `src/routes/index.tsx` from these sections:

- Hero
- About
- Expertise
- Experience
- Projects
- Architecture
- AI engineering
- Education
- Contact

The website is a single-page application with:

- Sticky navigation
- Smooth scrolling
- Scroll-aware active section highlighting
- Light and dark themes
- Responsive mobile navigation
- Resume downloads
- SEO and social sharing metadata
- A contact form

## Tech stack

| Technology | Purpose |
|---|---|
| React 19 | User interface framework |
| TypeScript | Type-safe JavaScript |
| TanStack Start | Full-stack React framework, server functions, SSR, and routing |
| TanStack Router | Route matching and navigation |
| TanStack Query | Server and data state management |
| Vite | Development server and production build tool |
| Tailwind CSS 4 | Styling and responsive layout |
| Radix UI | Accessible UI primitives |
| Lucide React | Icons |
| Zod | Form and data validation |
| React Hook Form | Form handling |
| Motion | Animations |
| Vitest | Unit and routing tests |
| Testing Library | Component testing |
| Bun | Package/runtime tooling |
| Web3Forms | Contact-form email delivery |
| Lovable/Nitro | Hosting and server build integration |

The complete dependency list is in `package.json`.

## Building and running locally

### Prerequisites

- Node.js
- npm

Bun is used by the repository, but npm can also be used to install dependencies and run scripts on Windows.

If PowerShell blocks `npm.ps1` because of script execution policy, use `npm.cmd` instead.

### 1. Open the repository

Open a terminal in the repository root:

```powershell
Set-Location 'C:\PANDORA\Workspace\Repositories\dayanand-kale-portfolio'
```

### 2. Install dependencies

```powershell
npm.cmd install
```

This creates `node_modules` and installs the packages defined in `package.json`.

### 3. Run tests

```powershell
npm.cmd run test
```

The current test suite contains 2 test files and 5 passing tests.

### 4. Build the app

```powershell
npm.cmd run build
```

This builds the client, server, and prerendered output. The build currently completes successfully.

### 5. Start the development server

```powershell
npm.cmd run dev -- --host 127.0.0.1
```

Open:

**http://127.0.0.1:8080/**

The homepage should return HTTP 200.

### Optional contact form configuration

The contact form uses Web3Forms. Set the `WEB3FORMS_ACCESS_KEY` environment variable for real message delivery.

If the key is not configured, the form displays a setup message and does not claim that a message was sent.

## Angular to React correlation

If you know Angular, this table provides a simple comparison:

| Angular concept | React equivalent used here |
|---|---|
| Component | React function component, such as `Header` or `Contact` |
| `@Input()` | React component props |
| Signal or RxJS state | `useState`, `useEffect`, or TanStack Query |
| Angular route configuration | TanStack file-based routing |
| `app.module.ts` / standalone imports | `src/routes/__root.tsx` and route imports |
| Angular Router | TanStack Router |
| Angular reactive forms | React Hook Form and Zod |
| Angular service | Server function or custom React hook |
| CSS/Tailwind | Tailwind CSS plus global styles |
| Angular CLI | Vite scripts and Bun |
| Angular TestBed | Vitest and Testing Library |

## Key project areas

### Central portfolio content

`src/data/portfolio.ts` is the main source of truth for portfolio content.

For example, it contains:

- Profile details
- Career highlights
- Expertise categories
- Work experience
- Projects
- Architecture topics
- Education
- Navigation items

This keeps most content edits in one place.

### Page sections

The files in `src/components/sections/` render individual parts of the portfolio:

- `Header.tsx`
- `Hero.tsx`
- `About.tsx`
- `Expertise.tsx`
- `Experience.tsx`
- `Projects.tsx`
- `Architecture.tsx`
- `AIEngineering.tsx`
- `Education.tsx`
- `Contact.tsx`
- `Footer.tsx`

### Routing

`src/routes/index.tsx` defines the main `/` page and adds page title, description, Open Graph, Twitter, and structured profile metadata.

`src/routes/__root.tsx` defines the shared application shell. It provides:

- The HTML shell
- Global styles
- Navigation outlet
- TanStack Query provider
- Default metadata
- Theme initialization
- Page-level error and not-found components

### Theme handling

`src/hooks/useTheme.ts` manages the light/dark theme.

The initial theme is applied before the page is painted to avoid flickering. The selected theme is saved in browser local storage.

### Contact form

The contact form is handled by TanStack server functions:

- `src/components/sections/Contact.tsx` provides the form UI.
- `src/lib/contact-schema.ts` validates its input.
- `src/lib/contact.functions.ts` sends the message to Web3Forms.

The contact form uses a hidden honeypot field and a minimum-fill-time check to reject obvious automated submissions.

The `WEB3FORMS_ACCESS_KEY` server secret must be configured. If it is missing, the form does not claim success and tells visitors to use email instead.

## Important React concepts used

### Components

A React component is usually a TypeScript function that returns JSX:

```tsx
export function Example() {
  return <h1>Hello</h1>;
}
```

This is conceptually similar to an Angular component template, class, and metadata being grouped together in one place.

### Hooks

Hooks are React functions for component behavior.

Common examples in this repository:

- `useState` stores changing UI state.
- `useEffect` runs lifecycle or side-effect logic.
- `useCallback` creates a stable callback function.
- `useServerFn` invokes a TanStack server function.

Custom hooks include:

- `useTheme`
- `useActiveSection`
- `useMobile`

### JSX

JSX combines markup and JavaScript expressions.

For example:

```tsx
<a href={`mailto:${profile.email}`}>
  {profile.email}
</a>
```

An Angular equivalent might use property binding and interpolation inside an HTML template.

### Props

React components receive data through props, which are similar to Angular `@Input()` properties:

```tsx
<Section id="contact" title="Let's connect" />
```

## Testing

The repository includes:

- Routing tests in `src/test/app-routing.test.tsx`
- Contact schema tests in `src/test/contact-schema.test.ts`
- Test setup in `src/test/setup.ts`

The tests use Vitest and Testing Library.
