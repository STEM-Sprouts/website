import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "STEM Sprouts Programs | Hands-On STEM Education",
  description:
    "STEM Sprouts programs: student-led chapter workshops for elementary school students, Pinboard (our open-source Arduino and Raspberry Pi platform), and research and policy work by students.",
  path: "/programs",
})

type ProgramLink = { label: string; href: string }

const programs: {
  id: string
  title: string
  summary: string
  examples: string[]
  links: ProgramLink[]
}[] = [
  {
    id: "chapters",
    title: "STEM Sprouts chapter workshops",
    summary:
      "Our core education model. Student-run chapters teach free, hands-on STEM to elementary school students, led by high school students who plan and run the sessions.",
    examples: [
      "Chapters operate across the United States, India, Bangladesh, Kenya, and the UAE.",
      "In Siaya County, Kenya, a chapter is building toward a 15-school cohort launch with offline-first, WhatsApp-native lessons.",
      "STEM Sprouts Kenya's Sister Schools Network connects girls from Mombasa, Nairobi, Siaya, and Mumias around STEM, AI, coding, and robotics.",
    ],
    links: [
      { label: "How STEM Sprouts chapters work", href: "/chapters" },
      { label: "Explore Chapter Leadership", href: "/chapter-leadership" },
      { label: "Read about the Siaya chapter", href: "/news/stem-access-inside-the-siaya-chapter" },
      { label: "Browse our past curriculum", href: "/resources#curriculum" },
    ],
  },
  {
    id: "pinboard",
    title: "Pinboard",
    summary:
      "A separate, free, open-source project built by students: a browser-based block-coding platform where anyone can simulate Arduino and Raspberry Pi circuits. Chapters can use it, but it is open to every classroom.",
    examples: [
      "Place LEDs, buttons, servos, and buzzers on a virtual board and watch them respond.",
      "Blocks generate real Arduino code, so learners can see how blocks map to code.",
      "Recent updates added new lessons and Google login.",
    ],
    links: [
      { label: "Explore Pinboard", href: "/pinboard" },
      { label: "Read the latest Pinboard update", href: "/news/pinboard-gets-a-major-update-new-lessons-google-login-and-more" },
    ],
  },
  {
    id: "research",
    title: "Research and community programs",
    summary:
      "Students also do research and policy work on STEM education: the Policy Fellowship pairs students with mentors to write and publish policy papers, and STEM Sprouts partners with other youth and research organizations.",
    examples: [
      "The Policy Fellowship gives students a dedicated mentor, structured review, and support toward publication at no cost.",
      "STEM Sprouts launched a research program with the National Student Research Institute.",
      "STEM Sprouts brought a proposal for statewide elementary STEM access to the office of a Georgia state representative, who asked for a local pilot first.",
      "STEM Sprouts is officially partnered with the UN Major Group for Children and Youth.",
    ],
    links: [
      { label: "Apply to the Policy Fellowship", href: "/policy-fellowship" },
      { label: "Read about the NSRI research partnership", href: "/news/nsri-x-stem-sprouts-research-partnership" },
      { label: "Read about the statewide STEM access proposal", href: "/news/stem-sprouts-pitches-a-path-to-statewide-stem-access" },
    ],
  },
]

export default function ProgramsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Programs", path: "/programs" },
            ]),
          ),
        }}
      />
      <PageHeader
        title="STEM Sprouts"
        highlight="Programs"
        description="Free, hands-on STEM education for elementary school students, led by students, plus the open-source tools and research that support it."
      />
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto space-y-10">
          {programs.map((program) => (
            <section
              key={program.id}
              id={program.id}
              aria-labelledby={`${program.id}-heading`}
              className="scroll-mt-28 bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-6 md:p-10"
            >
              <h2 id={`${program.id}-heading`} className="text-2xl md:text-3xl font-bold mb-3 text-black dark:text-white">
                {program.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-5">{program.summary}</p>
              <h3 className="font-bold text-black dark:text-white mb-2">Examples and impact</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {program.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none">
                {program.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 min-h-11 font-bold underline text-[#15803d] dark:text-[#22C55E]"
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
