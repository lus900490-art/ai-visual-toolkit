import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { simpleIconPath, toolkitIcons } from "@/lib/icons"
import { renderMermaid } from "@/lib/mermaid"
import { drawToolkitMark } from "@/lib/rough"

const diagram = `flowchart LR
  Prompt[Prompt] --> Toolkit[AI Visual Toolkit]
  Toolkit --> Rough[Rough.js]
  Toolkit --> Mermaid[Mermaid]
  Toolkit --> UI[shadcn/ui]
  UI --> Tokens[Radix Colors]`

export function ToolkitDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [diagramSvg, setDiagramSvg] = useState("")

  useEffect(() => {
    if (canvasRef.current) drawToolkitMark(canvasRef.current)
    void renderMermaid("toolkit-diagram", diagram).then(setDiagramSvg)
  }, [])

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:px-10">
      <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-800">
            <Sparkles className="size-3.5" /> Starter kit
          </p>
          <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-7xl">
            Make ideas look <span className="text-orange-600">alive.</span>
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            A focused playground for expressive diagrams, hand-drawn visuals, accessible UI primitives, and self-hosted typography.
          </p>
        </div>
        <Button size="lg" className="w-fit">
          Explore the toolkit <ArrowUpRight className="size-4" />
        </Button>
      </header>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-orange-200 bg-orange-50 p-5 shadow-sm">
          <canvas ref={canvasRef} width={320} height={280} className="h-auto w-full rounded-2xl" aria-label="Rough.js toolkit illustration" />
          <div className="mt-5 flex items-center justify-between text-sm font-semibold text-orange-950">
            <span>Rough.js canvas</span>
            <span className="rounded-full bg-white px-3 py-1 text-orange-700">editable</span>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-orange-600">Composable flow</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">From prompt to visual system</h2>
            </div>
            <div className="flex gap-2">
              {toolkitIcons.map((icon) => (
                <svg key={icon.title} viewBox="0 0 24 24" className="size-5 fill-slate-400" aria-label={icon.title} role="img">
                  <path d={simpleIconPath(icon)} />
                </svg>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto rounded-2xl bg-slate-50 p-4" dangerouslySetInnerHTML={{ __html: diagramSvg }} />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          ["Rough.js", "Hand-drawn primitives"],
          ["Mermaid", "Text-to-diagram flows"],
          ["shadcn/ui", "Composable interface"],
        ].map(([title, description]) => (
          <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

