import mermaid from "mermaid"

let initialized = false

export function initializeMermaid() {
  if (initialized) return
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: "base",
    themeVariables: {
      primaryColor: "#ffedd5",
      primaryTextColor: "#0f172a",
      primaryBorderColor: "#f97316",
      lineColor: "#64748b",
    },
  })
  initialized = true
}

export async function renderMermaid(id: string, definition: string) {
  initializeMermaid()
  const { svg } = await mermaid.render(id, definition)
  return svg
}

