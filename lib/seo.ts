import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site"

export const SITE_NAME = "STEM Sprouts"
export const SITE_DESCRIPTION =
  "STEM Sprouts is a youth-led nonprofit building a global network of student-run STEM chapters and free, hands-on STEM learning opportunities."
export const DEFAULT_OG_IMAGE = {
  url: "/stem/team-workshop.jpeg",
  width: 1600,
  height: 1200,
  alt: "STEM Sprouts students participating in a hands-on STEM workshop",
}

export const SITE_SOCIAL_PROFILES = [
  "https://www.instagram.com/stemsprouts_/",
  "https://www.linkedin.com/company/stemsprouts/",
  "https://www.tiktok.com/@stemsprouts",
  "https://www.facebook.com/share/16ywQJWuVR/?mibextid=wwXIfr",
]

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | STEM Sprouts",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/stem/favicon.png",
    apple: "/stem/favicon.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/stem/logo.png`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
  description: SITE_DESCRIPTION,
  email: "hello@stem-sprouts.org",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "General inquiries",
    email: "hello@stem-sprouts.org",
  },
  address: {
    "@type": "PostalAddress",
    name: "Fiscal sponsor mailing address",
    streetAddress: "8605 Santa Monica Boulevard #86294",
    addressLocality: "West Hollywood",
    addressRegion: "CA",
    postalCode: "90069",
    addressCountry: "US",
  },
  areaServed: "Worldwide",
  knowsAbout: ["STEM education", "Arduino", "Raspberry Pi", "coding education", "youth leadership"],
  sameAs: SITE_SOCIAL_PROFILES,
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
