import type { Metadata } from "next"
import Link from "next/link"
import { Check, Download, HandHeart } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { PopIn } from "@/components/pop-in"

export const metadata: Metadata = {
  title: "Partner - STEM Sprouts",
  description: "Partner with STEM Sprouts to make STEM education free and accessible to every child.",
}

const benefits = [
  {
    title: "Brand Recognition",
    description:
      "Your logo will be prominently displayed on our website, in chapter materials, and across our social media platforms, showing your commitment to global STEM access.",
  },
  {
    title: "Tax Benefits",
    description:
      "As we operate under a 501(c)(3) fiscal sponsor, your financial contributions are tax-deductible, providing a meaningful way to support youth while meeting your social responsibility goals.",
  },
  {
    title: "Direct Global Impact",
    description:
      "Sponsorships directly fund Pinboard development, chapter resources, and STEM kits for students who might not otherwise have access to high-quality robotics or coding tools.",
  },
]

const waysToSupport = [
  {
    title: "Financial Sponsorship",
    description: "Funds go directly towards Pinboard development, chapter resources, and STEM kits.",
  },
  {
    title: "In-Kind Donations",
    description: "Donate STEM kits, robotics hardware, or host space for a local chapter's sessions.",
  },
  {
    title: "Mentorship & Speaking",
    description: "Share your professional journey and expertise with students across our chapter network.",
  },
]

export default function PartnerPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <PageHeader
        title="Partner with"
        highlight="STEM Sprouts"
        description="We're on a mission to make STEM education free and accessible to every child. Join us in building the next generation of innovators and problem solvers."
      />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
            Sponsorship Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {benefits.map((b, index) => (
              <PopIn
                key={b.title}
                delay={index * 120}
                className="bg-white dark:bg-black border-[3px] border-black dark:border-white rounded-[24px] p-8 hover:shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{b.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{b.description}</p>
              </PopIn>
            ))}
          </div>

          <PopIn className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-8 md:p-12 mb-20">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">Ways to Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  There are many ways your organization can help STEM Sprouts expand its reach and impact.
                </p>
                <div className="bg-black/5 dark:bg-white/5 border border-[#22C55E]/30 rounded-2xl p-5">
                  <p className="text-gray-700 dark:text-gray-200 text-sm">
                    Check out some of our{" "}
                    <Link href="/#partners" className="text-[#15803d] dark:text-[#22C55E] font-bold underline">
                      current sponsors on the homepage
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <ul className="space-y-5">
                {waysToSupport.map((way) => (
                  <li key={way.title} className="flex gap-3 items-start">
                    <span className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-black" />
                    </span>
                    <div>
                      <strong className="text-black dark:text-white block mb-1">{way.title}</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{way.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </PopIn>

          <PopIn className="text-center bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">Partnership Guide</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
              Download our comprehensive guide to learn more about our mission, impact, and specific sponsorship
              tiers.
            </p>
            <a href="/stem/STEM_Sprouts_Partnership_Guide.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-xl px-8 py-6 text-base font-bold h-auto">
                <Download className="w-5 h-5" aria-hidden="true" />
                Download Partnership Guide (PDF)
              </Button>
            </a>
          </PopIn>

          <PopIn className="text-center bg-[#22C55E] border-4 border-black dark:border-white rounded-3xl p-8 md:p-12">
            <HandHeart className="w-10 h-10 text-black mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Let&apos;s Create Something Together</h3>
            <p className="text-black/80 mb-8 max-w-xl mx-auto">
              Interested in becoming a partner? We&apos;d love to hear from you and explore how we can work
              together.
            </p>
            <Link href="/#contact">
              <Button className="bg-black text-white hover:bg-black/80 rounded-xl px-8 py-6 text-base font-bold h-auto">
                Get in Touch
              </Button>
            </Link>
            <p className="mt-6 text-sm text-black/70">
              Or email us directly at{" "}
              <a href="mailto:hello@stem-sprouts.org" className="font-bold underline">
                hello@stem-sprouts.org
              </a>
            </p>
          </PopIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
