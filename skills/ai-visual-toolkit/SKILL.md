---
name: ai-visual-toolkit
description: Build or extend React frontend experiences that combine expressive hand-drawn graphics, text-to-diagram rendering, composable shadcn/ui components, accessible Radix Colors, Simple Icons, or self-hosted Fontsource typography. Use when a visual frontend task needs this toolkit; do not use for unrelated backend work or generic image generation.
metadata:
  short-description: Expressive React visuals and UI primitives
---

# AI Visual Toolkit

Use this skill to integrate the toolkit into an existing React project, especially Vite + TypeScript + Tailwind CSS v4 projects. Preserve the host project's framework, package manager, existing design language, and unrelated changes.

## Workflow

1. Inspect the project before changing it. Reuse existing aliases, CSS entry points, shadcn configuration, and component conventions. Do not scaffold a second app inside an existing app.
2. Check `package.json` before installing. Add only missing packages, using the project's package manager and lockfile. Prefer the existing versions when they are already compatible.
3. Build the smallest reusable integration that proves the requested behavior. Keep library-specific code in focused modules such as `src/lib/rough.ts`, `src/lib/mermaid.ts`, and `src/lib/icons.ts`.
4. Verify the result with the project's type-check/build command. For UI changes, run the development server or preview and inspect the rendered result when that environment is available.

## Library guidance

- **Rough.js:** create and redraw the renderer from a canvas ref in a client-side effect. Keep canvas dimensions explicit or respond to resize changes; do not draw during render.
- **Mermaid:** initialize once with `startOnLoad: false` and an appropriate security level, then call `mermaid.render` for each diagram. Treat rendering as asynchronous, show a useful fallback on errors, and do not pass untrusted text into a diagram without an application-level content policy.
- **shadcn/ui:** treat components as local source owned by the project. Keep the `@/*` alias and `components.json` consistent, use `cn()` for class composition, and add only the primitives the feature needs.
- **Radix Colors:** import each scale once at the application CSS entry point and map semantic roles to scale steps instead of scattering raw colors across components.
- **Simple Icons:** use package path data for brand marks, provide an accessible label or title, and do not imply endorsement by a brand.
- **Fontsource:** import the selected font package once from the application entry point. Prefer a variable package when available and keep the CSS font-family name explicit.

## README and repository metadata

When the user requests README polish, use shields.io badges and GitHub Readme Stats with the actual `owner/repository` values. Never leave placeholder usernames in a finished README, and never expose tokens or other secrets in badges, URLs, or source files.

## Completion criteria

Before reporting completion, confirm that the requested integration is present, the package manifest and lockfile agree, the project builds or type-checks successfully, and any README links or badge URLs point to the actual repository.

