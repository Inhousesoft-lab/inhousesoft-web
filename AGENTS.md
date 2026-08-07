INHOUSESOFT Website — Codex Project Instructions

## Working mode

- Treat this repository as a normal local web development project.
- Modify the existing source directly. Do not reinitialize, replace, or scaffold the project again.
- Treat implementation and UI-update requests as local-only unless the user explicitly asks to publish or deploy.
- Do not run Sites hosting, create a hosted site, or change deployment access unless the user explicitly requests deployment.
- Keep internal skill, plugin, tool, and command names out of user-facing progress messages unless the user asks about them.

## Project structure

- Preserve the existing Vinext/Next.js-compatible structure and package manager.
- Keep the Home page implementation primarily in `app/page.tsx` and `app/globals.css` unless a reusable component materially improves maintainability.
- Reuse existing dependencies. Add a dependency only when the requested feature cannot be implemented cleanly without it.
- Preserve SEO metadata, structured data, favicon, and Open Graph metadata unless the requested change concerns them.

## Design direction

- Present INHOUSESOFT as a credible B2B/public-sector IT company, not a trendy startup or web agency.
- Use white, light gray, charcoal, navy, and one restrained blue accent.
- Avoid excessive gradients, 3D objects, decorative cards, large border radii, glass effects, and unnecessary animation.
- Prefer generous whitespace, large typography, precise alignment, visible structure, and clear information hierarchy.
- Keep section backgrounds full-bleed while constraining actual content to a maximum width of `1620px`.
- Maintain responsive layouts for desktop, tablet, and mobile. Do not solve responsiveness by hiding essential content.
- Preserve accessible navigation, readable contrast, keyboard behavior, and reduced-motion support.

## Content rules

- Use only verified company information supplied by the user or already present in the approved site copy.
- Do not invent clients, certifications, partners, project results, metrics, addresses, people, or contact details.
- Keep client identities confidential where required and use `Confidential` consistently.
- State AI products and capabilities as being in development until the user provides verified release information.
- Do not exaggerate the company’s age, delivery record, organization size, or experience.

## Implementation and validation

- Inspect the relevant existing files before editing.
- Preserve unrelated user changes.
- Keep changes focused on the user’s request and avoid speculative features.
- After code changes, run the existing production build and fix actual failures.
- Do not perform browser screenshots, interaction testing, deployment, or publishing unless explicitly requested.
- Summarize the visible result, responsive behavior, and validation outcome concisely when handing off.
