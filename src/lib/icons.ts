import { siGithub, siReact, siTypescript } from "simple-icons"

export const toolkitIcons = [siGithub, siReact, siTypescript]

export function simpleIconPath(icon: { path: string }) {
  return `M${icon.path}`
}

