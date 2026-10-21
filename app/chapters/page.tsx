import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MapPin, Rocket, Users } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CHAPTER_APPLICATION_URL } from "@/lib/nav"
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "STEM Sprouts Chapters | Start a Student-Led STEM Chapter",
  description:
    "STEM Sprouts chapters are student-run groups that teach free, hands-on STEM to elementary school students. Find a chapter near you or apply to start and lead your own.",
  path: "/chapters",
})

const steps = [
  { title: "Student leaders", description: "High school students start and lead a chapter at their school or in their community." },
  { title: "Chapters", description: "Each chapter organizes its own team, partners, and schedule." },
  { title: "STEM programs", description: "Chapters run free, hands-on STEM workshops and activities." },
  { title: "Younger learners", description: "Elementary school students get an approachable first experience with STEM." },
]

const paths = [
  {
    icon: MapPin,
    title: "Join an existing chapter",
    description: "See where STEM Sprouts chapters are running today, from Georgia to Kenya to India.",
    href: "/locations",
    cta: "Find a STEM Sprouts chapter",
  },
  {
    icon: Users,
    title: "Lead a chapter",
    description: "See what a Chapter Lead does, who can apply, and what STEM Sprouts provides.",
    href: "/chapter-leadership",
    cta: "Explore Chapter Leadership",
  },
]

export default function ChaptersPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Chapters", path: "/chapters" },
            ]),
          ),
        }}
      />

      <PageHeader
        title="Student-Led STEM"
        highlight="Chapters"
        description="STEM Sprouts chapters are run by students and teach free, hands-on STEM to elementary school students. You can join an existing chapter, or start and lead one yourself."
      />

      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
          <section aria-labelledby="how-heading">
            <h2 id="how-heading" className="text-3xl md:text-4xl font-bold text-center mb-10 text-black dark:text-white">
              How a STEM Sprouts chapter works
            </h2>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="bg-white dark:bg-black border-[3px] border-black dark:border-white rounded-[24px] p-6"
                >
                  <span
                    aria-hidden="true"
                    className="w-10 h-10 mb-4 rounded-full bg-[#22C55E] border-2 border-black dark:border-white flex items-center justify-center font-bold text-black"
                  >
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-black dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="paths-heading">
            <h2 id="paths-heading" className="text-3xl md:text-4xl font-bold text-center mb-10 text-black dark:text-white">
              Two ways to take part
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {paths.map((path) => (
                <div
                  key={path.title}
                  className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-8 flex flex-col"
                >
                  <div className="w-12 h-12 bg-[#22C55E] border-2 border-black dark:border-white rounded-xl flex items-center justify-center mb-5">
                    <path.icon className="w-6 h-6 text-black" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{path.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{path.description}</p>
                  <Link
                    href={path.href}
                    className="mt-auto inline-flex items-center gap-2 min-h-11 font-bold underline text-[#15803d] dark:text-[#22C55E]"
                  >
                    {path.cta}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="start-heading"
            className="text-center bg-black border-4 border-black dark:border-white rounded-3xl p-8 md:p-12"
          >
            <h2 id="start-heading" className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to start a chapter?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Apply to start a chapter at your school or in your city, anywhere in the world. You will receive the
              Chapter Starter Guide by email.
            </p>
            <a href={CHAPTER_APPLICATION_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-xl px-8 py-6 text-base font-bold h-auto">
                <Rocket className="w-5 h-5" aria-hidden="true" />
                Start a STEM Sprouts Chapter ↗
                <span className="sr-only"> (opens in a new tab)</span>
              </Button>
            </a>
            <p className="mt-6 text-sm text-gray-300">
              New to this?{" "}
              <Link href="/guides/how-to-start-a-student-led-stem-chapter" className="font-bold underline text-[#22C55E]">
                Read our guide to starting a chapter
              </Link>
              . Looking for activities to run?{" "}
              <Link href="/resources" className="font-bold underline text-[#22C55E]">
                Browse free STEM resources
              </Link>{" "}
              or{" "}
              <Link href="/pinboard" className="font-bold underline text-[#22C55E]">
                explore Pinboard
              </Link>
              .
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
