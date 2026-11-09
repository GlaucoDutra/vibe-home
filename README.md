# Vibe Home

A free, MIT-licensed home for all your projects and their infrastructure. Inspired by the simplicity of Bubble's project dashboard, with an original interface for any development stack.

## Features

- Searchable project cards, pinned projects, and sorting.
- Separate live and test application URLs on every card.
- Infrastructure resources scoped to Live, Test, or Shared.
- Provider and category selectors for GitHub, domains, DNS, Supabase, AWS, Azure, Google Cloud, Vercel, Cloudflare, Bitwarden, monitoring, analytics, email, storage, and custom resources.
- Create, edit, and delete projects and resources.
- Local browser persistence and portable JSON backup import/export. Imports merge by project ID and ask before overwriting matches.
- Responsive layout, native dialogs, labeled controls, and HTTP/HTTPS link validation.

## Run locally

Requires Node.js 22 or newer. No dependencies or build step.

```sh
npm start
```

Open http://localhost:5173. Run `npm test` for import validation and URL safety checks.

## Deploy

Serve `index.html`, `style.css`, `app.js`, and `model.js` on any static host. Vercel: choose Other, no build command, output directory `.`. Cloudflare Pages: no framework, no build command, output directory `.`. GitHub Pages can serve the repository root. No backend or environment variables are required.

## Data and access

This initial release is a single-user, local-first application. Records are stored in localStorage for the current browser and origin; they do not sync across devices. Export backups before changing domains or clearing browser data. Private browsing can discard data. A public code repository or static deployment does not publish your browser records. Exported backups contain your resource links, so share them deliberately.

Store links to password vault items, never actual passwords, connection strings with credentials, tokens, or API keys. The app is an infrastructure directory, not a password manager, provider API integration, or health monitor. Sign in to each provider using its own access controls. Authentication, team permissions, and server-backed synchronization are future extensions.

Google Fonts is used for typography, with local sans-serif fallbacks when unavailable.

## Contributing

Open an issue describing the problem or improvement, then submit a focused pull request. Keep environment separation, URL validation, accessibility, and portable backups intact. Do not commit credentials or real private infrastructure data.

## License

[MIT](LICENSE). Free to use, modify, self-host, and distribute.

## SimpleDev CRM project

Import [examples/simpledev-crm.json](examples/simpledev-crm.json) using the **Import** button to add the known CRM infrastructure links. The record includes its live app, GitHub repository, Supabase database/auth/storage dashboards, Vercel dashboard, deployment history, documentation, and `version_test` branch. The test URL, DNS provider, and password vault are unconfirmed and remain unset. No credentials are included. Importing does not provision infrastructure or grant access to provider dashboards.
