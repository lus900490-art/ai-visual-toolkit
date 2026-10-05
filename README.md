# AI Visual Toolkit

An expressive React + Vite starter for AI-assisted frontend work. It combines hand-drawn canvas primitives, text-to-diagram rendering, composable UI components, accessible color tokens, simple icon data, and self-hosted typography.

## Included integrations

- [Rough.js](https://roughjs.com/) for sketch-like canvas graphics
- [shadcn/ui](https://ui.shadcn.com/) with Tailwind CSS v4, React 19, Radix Slot, CVA, and a ready `components.json`
- [Radix Colors](https://www.radix-ui.com/colors) for accessible color scales
- [Mermaid](https://mermaid.js.org/) for diagrams rendered from text
- [Simple Icons](https://simpleicons.org/) for brand icon data
- [Fontsource](https://fontsource.org/) for bundled Inter Variable typography

## Quick start

```bash
npm install
npm run dev
```

Build and type-check the project with:

```bash
npm run build
```

Add more shadcn/ui components with:

```bash
npm run shadcn add button
```

## README stats and badges

The badges below point to the `lus900490-art` account.

![GitHub stars](https://img.shields.io/github/stars/lus900490-art/ai-visual-toolkit?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/lus900490-art/ai-visual-toolkit?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/lus900490-art/ai-visual-toolkit?style=flat-square)
![License](https://img.shields.io/github/license/lus900490-art/ai-visual-toolkit?style=flat-square)

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=lus900490-art&show_icons=true&hide_border=true&theme=transparent)

## Project structure

```text
src/
├── components/
│   ├── ui/button.tsx       # shadcn/ui-compatible primitive
│   └── toolkit-demo.tsx    # integration showcase
├── lib/
│   ├── icons.ts            # Simple Icons helpers
│   ├── mermaid.ts          # Mermaid initialization/rendering
│   ├── rough.ts            # Rough.js drawing helper
│   └── utils.ts            # cn() class utility
├── index.css               # Tailwind v4 + global styles
└── main.tsx                # Fontsource and app bootstrap
```

## License

MIT

