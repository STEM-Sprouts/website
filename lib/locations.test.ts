import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { findMarkdownPage } from "./markdown-pages"

describe("public organization locations and press mentions", () => {
  it("lists St. Louis, Missouri on the locations page and Markdown representation", () => {
    const locationsPage = readFileSync(new URL("../app/locations/page.tsx", import.meta.url), "utf8")
    const locationsMarkdown = findMarkdownPage("/locations")?.body

    expect(locationsPage).toContain('name: "St. Louis", region: "Missouri, USA"')
    expect(locationsMarkdown).toContain("St. Louis, MO")
  })

  it("does not include Lian's Corner in the press mentions", () => {
    const pressSection = readFileSync(new URL("../components/press-section.tsx", import.meta.url), "utf8")

    expect(pressSection).not.toContain("Lian's Corner")
    expect(pressSection).not.toContain("lian-corner.jpeg")
  })
})
