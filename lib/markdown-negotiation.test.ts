import { describe, expect, it } from "vitest"
import { NextRequest } from "next/server"
import { prefersMarkdown } from "./accept-negotiation"
import { renderNotFoundMarkdown } from "./markdown-pages"
import { GET as markdownRoute } from "@/app/md/[[...slug]]/route"
import { middleware } from "@/middleware"

describe("homepage Markdown negotiation", () => {
  it("selects Markdown when the client explicitly requests it", () => {
    expect(prefersMarkdown("text/markdown")).toBe(true)
  })

  it("keeps HTML for an HTML-preferring browser request", () => {
    expect(prefersMarkdown("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")).toBe(false)
  })

  it("rewrites Markdown requests for the homepage but leaves HTML requests alone", async () => {
    const markdownResponse = await middleware(
      new NextRequest("https://stem-sprouts.org/", { headers: { accept: "text/markdown" } }),
    )
    const htmlResponse = await middleware(
      new NextRequest("https://stem-sprouts.org/", { headers: { accept: "text/html" } }),
    )

    expect(markdownResponse.headers.get("x-middleware-rewrite")).toContain("/md")
    expect(htmlResponse.headers.get("x-middleware-next")).toBe("1")
  })

  it("serves a nonempty Markdown homepage with the negotiated representation headers", async () => {
    const response = await markdownRoute(
      new NextRequest("https://stem-sprouts.org/", { headers: { accept: "text/markdown" } }),
      { params: Promise.resolve({}) },
    )

    expect(response.status).toBe(200)
    expect(response.headers.get("content-type")).toContain("text/markdown")
    expect(response.headers.get("vary")).toContain("Accept")
    expect(await response.text()).toContain("# STEM Sprouts")
  })
})

describe("Markdown 404 responses", () => {
  it("provides an explanatory Markdown body and discovery links", () => {
    const body = renderNotFoundMarkdown("/__ora-404-probe-hessjasx")

    expect(body.length).toBeGreaterThanOrEqual(20)
    expect(body).toContain("doesn't exist")
    expect(body).toContain("https://stem-sprouts.org/sitemap.xml")
    expect(body).toContain("https://stem-sprouts.org/llms.txt")
  })

  it("preserves a 404 status and Markdown headers for an unknown route", async () => {
    const response = await markdownRoute(
      new NextRequest("https://stem-sprouts.org/__ora-404-probe-hessjasx", {
        headers: { accept: "text/markdown" },
      }),
      { params: Promise.resolve({ slug: ["__ora-404-probe-hessjasx"] }) },
    )

    expect(response.status).toBe(404)
    expect(response.headers.get("content-type")).toContain("text/markdown")
    expect(response.headers.get("vary")).toContain("Accept")
    expect(await response.text()).toContain("https://stem-sprouts.org/llms.txt")
  })
})
