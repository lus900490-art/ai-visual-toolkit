import "@fontsource-variable/inter"
import "@radix-ui/colors/orange.css"
import "@radix-ui/colors/slate.css"
import "./index.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ToolkitDemo } from "@/components/toolkit-demo"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToolkitDemo />
  </StrictMode>,
)

