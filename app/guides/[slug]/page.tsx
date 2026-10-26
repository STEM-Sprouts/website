import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Rocket } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { GUIDES, getGuide } from "@/lib/guides"
import { CHAPTER_APPLICATION_URL } from "@/lib/nav"
import { SITE_URL } from "@/lib/site"
import { absoluteUrl, breadcrumbJsonLd, DEFAULT_OG_IMAGE, jsonLdScript, pageMetadata } from "@/lib/seo"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  return pageMetadata({ title: guide.seoTitle, description: guide.description, path: `/guides/${guide.slug}` })
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const path = `/guides/${guide.slug}`
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: absoluteUrl(path),
    datePublished: guide.datePublished,
    dateModified: guide.datePublished,
    image: [absoluteUrl(DEFAULT_OG_IMAGE.url)],
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
  }
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Guides", path: "/guides" },
    { name: guide.title, path },
  ])

  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <article className="container mx-auto px-4 py-16 md:py-24">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbs) }} />
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold text-[#15803d] dark:text-[#22C55E] mb-3">
            <Link href="/guides" className="underline">
              STEM Sprouts Guides
            </Link>
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4 leading-tight">{guide.title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            By STEM Sprouts &middot; <time dateTime={guide.datePublished}>Published October 10, 2026</time>
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-10">{guide.intro}</p>

          <div className="space-y-10">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3">{section.heading}</h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items && (
                    <ul className="list-disc pl-6 space-y-1">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          <aside
            aria-labelledby="guide-cta-heading"
            className="mt-14 bg-[#22C55E] border-4 border-black dark:border-white rounded-3xl p-8 md:p-10"
          >
            <h2 id="guide-cta-heading" className="text-2xl md:text-3xl font-bold text-black mb-3">
              Ready to lead a STEM Sprouts chapter?
            </h2>
            <p className="text-black/80 mb-6 leading-relaxed">
              High school students can start and lead chapters that bring free, hands-on STEM education to elementary
              school students.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href={CHAPTER_APPLICATION_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-black text-white hover:bg-black/80 rounded-xl px-6 py-5 text-base font-bold h-auto">
                  <Rocket className="w-5 h-5" aria-hidden="true" />
                  Start a STEM Sprouts Chapter ↗
                  <span className="sr-only"> (opens in a new tab)</span>
                </Button>
              </a>
              {guide.related.map((link) => (
                <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 min-h-11 font-bold text-black underline">
                  {link.label}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </article>
      <Footer />
    </main>
  )
}
