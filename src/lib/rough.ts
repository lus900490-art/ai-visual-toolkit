import rough from "roughjs/bin/rough"

export function drawToolkitMark(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d")
  if (!context) return

  const renderer = rough.canvas(canvas)
  context.clearRect(0, 0, canvas.width, canvas.height)
  renderer.rectangle(28, 28, canvas.width - 56, canvas.height - 56, {
    roughness: 1.4,
    stroke: "#f97316",
    strokeWidth: 3,
    fill: "#fff7ed",
    fillStyle: "solid",
  })
  renderer.circle(canvas.width / 2, canvas.height / 2, 92, {
    roughness: 1.1,
    stroke: "#0f172a",
    strokeWidth: 3,
    fill: "#fed7aa",
    fillStyle: "hachure",
  })
  renderer.line(105, 110, 170, 145, { stroke: "#0f172a", strokeWidth: 3 })
  renderer.line(170, 145, 235, 110, { stroke: "#0f172a", strokeWidth: 3 })
}

