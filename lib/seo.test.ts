import { describe, expect, it } from "vitest"
import { organizationJsonLd } from "./seo"

describe("organizationJsonLd", () => {
  it("identifies STEM Sprouts as an Organization with complete contact details", () => {
    expect(organizationJsonLd["@type"]).toBe("Organization")
    expect(organizationJsonLd.name).toBe("STEM Sprouts")
    expect(organizationJsonLd.url).toBe("https://stem-sprouts.org")
    expect(organizationJsonLd.contactPoint).toMatchObject({
      "@type": "ContactPoint",
      contactType: "General inquiries",
      email: "hello@stem-sprouts.org",
    })
    expect(organizationJsonLd.address).toMatchObject({
      "@type": "PostalAddress",
      streetAddress: "8605 Santa Monica Boulevard #86294",
      addressLocality: "West Hollywood",
      addressRegion: "CA",
      postalCode: "90069",
      addressCountry: "US",
    })
  })
})
