import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Rocket } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CHAPTER_APPLICATION_URL } from "@/lib/nav"
import { breadcrumbJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "High School STEM Leadership Opportunities | STEM Sprouts",
  description:
    "High school students can start and lead a STEM Sprouts chapter: plan hands-on STEM workshops, recruit volunteers, partner with schools and libraries, and bring free STEM education to elementary students.",
  path: "/chapter-leadership",
})

// Responsibilities a Chapter Lead takes on. The `example` lines are drawn from
// the published Siaya chapter story and are only included where that story
// actually describes the task.
const responsibilities = [
  {
    title: "Plan STEM workshops",
    description: "Choose hands-on activities and run sessions that make science, technology, engineering, and math approachable for elementary school students.",
  },
  {
    title: "Recruit and coordinate volunteers",
    description: "Build a team of students who help teach, set up, and keep the chapter running.",
  },
  {
    title: "Work with schools, libraries, and community partners",
    description: "Secure places to meet and people to collaborate with.",
    example: "In Siaya, Kenya, the chapter lead handles school recruitment, negotiations with schools, and partnership logistics.",
  },
  {
    title: "Organize outreach events",
    description: "Bring STEM to more students through events beyond the regular sessions.",
  },
  {
    title: "Adapt or develop activities",
    description: "Fit lessons to the equipment, space, and age group you actually have.",
    example: "In Siaya, the chapter is building offline-first and WhatsApp-native because rural schools often lack reliable power and internet.",
  },
  {
    title: "Manage chapter logistics",
    description: "Handle scheduling, supplies, budgets, and the everyday details that keep sessions running.",
    example: "In Siaya, that includes budget proposals and hands-on equipment troubleshooting.",
  },
  {
    title: "Communicate with STEM Sprouts",
    description: "Stay connected with the STEM Sprouts team and the wider network of chapters.",
  },
  {
    title: "Help expand access to STEM education",
    description: "Reach students who might not otherwise get a hands-on introduction to STEM.",
  },
]

const provided = [
  {
    title: "A Chapter Starter Guide",
    description: "After you apply, STEM Sprouts emails you the Chapter Starter Guide with what you need to launch a chapter.",
  },
  {
    title: "Pinboard, free for every chapter",
    description: "Pinboard is our open-source, browser-based platform for building virtual circuits and coding Arduino and Raspberry Pi projects, with no hardware needed to start.",
    href: "/pinboard",
    cta: "Explore Pinboard",
  },
  {
    title: "Free learning resources",
    description: "A curated set of free platforms and tools for hands-on STEM activities.",
    href: "/resources",
    cta: "Browse STEM resources",
  },
  {
    title: "A worldwide chapter network",
    description: "Join chapters in the United States, India, Bangladesh, Kenya, and the UAE, and learn from what they are doing.",
    href: "/locations",
    cta: "See STEM Sprouts chapter locations",
  },
]

function ContentCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-white dark:bg-black border-[3px] border-black dark:border-white rounded-[24px] p-6 md:p-8">
      {children}
    </div>
  )
}

export default function ChapterLeadershipPage() {
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
              { name: "Chapter Leadership", path: "/chapter-leadership" },
            ]),
          ),
        }}
      />

      <PageHeader
        title="STEM Leadership Opportunities for"
        highlight="High School Students"
        description="High school students can start and lead STEM Sprouts chapters in their schools or communities, bringing free, hands-on STEM education to elementary school students."
      />

      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">
          <div className="flex flex-wrap justify-center gap-4 -mt-10 md:-mt-14">
            <a href={CHAPTER_APPLICATION_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-xl px-8 py-6 text-base font-bold h-auto border-2 border-black">
                <Rocket className="w-5 h-5" aria-hidden="true" />
                Start a STEM Sprouts Chapter ↗
                <span className="sr-only"> (opens in a new tab)</span>
              </Button>
            </a>
            <Link href="/locations">
              <Button
                variant="outline"
                className="rounded-xl px-8 py-6 text-base font-bold h-auto border-2 border-black dark:border-white text-black dark:text-white bg-transparent"
              >
                Find a Chapter
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <section aria-labelledby="opportunity-heading">
            <h2 id="opportunity-heading" className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              What is the chapter leadership opportunity?
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                STEM Sprouts is a student-led nonprofit providing free, hands-on STEM education to elementary school
                students through student-run chapters. Each chapter is started and led by students, and a Chapter Lead
                is the person who gets it going and keeps it running.
              </p>
              <p>
                It is a way to build real leadership experience while doing community service: you organize the
                workshops, the team, and the partnerships, and younger students get a first hands-on introduction to
                STEM. Chapters can be based at a school or in a community.
              </p>
            </div>
          </section>

          <section aria-labelledby="responsibilities-heading">
            <h2 id="responsibilities-heading" className="text-3xl md:text-4xl font-bold mb-3 text-black dark:text-white">
              What does a STEM Sprouts Chapter Lead do?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              A Chapter Lead is more than a title. These are the responsibilities that come with running a chapter.
            </p>
            <ul className="grid md:grid-cols-2 gap-5 list-none">
              {responsibilities.map((item) => (
                <li key={item.title} className="h-full">
                  <ContentCard>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-black dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                    {item.example && (
                      <p className="mt-3 text-sm text-[#15803d] dark:text-[#22C55E] font-semibold leading-relaxed">
                        {item.example}
                      </p>
                    )}
                  </ContentCard>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="example-heading">
            <h2 id="example-heading" className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              What does chapter leadership look like in practice?
            </h2>
            <div className="bg-black border-4 border-black dark:border-white rounded-3xl p-6 md:p-10 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Leading the Siaya chapter in Kenya</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Moses Okoth applied to lead STEM Sprouts&apos; chapter in Siaya and Kisumu, Kenya. As Chapter Lead he
                handles CBO registration, partnership logistics, curriculum design, school recruitment, budget
                proposals, negotiations with schools, teacher training, and hands-on equipment troubleshooting. The
                chapter is targeting a cohort launch across 15 schools in Siaya County.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                This chapter is led by an experienced community organizer rather than a high school student, but it
                shows how wide the role can be when a chapter is built from the ground up.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/news/stem-access-inside-the-siaya-chapter"
                  className="inline-flex items-center gap-2 font-bold text-[#22C55E] underline"
                >
                  Read how the Siaya chapter is run
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/news/stem-sprouts-kenya-launches-the-sister-schools-network"
                  className="inline-flex items-center gap-2 font-bold text-[#22C55E] underline"
                >
                  Read about the Sister Schools Network
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          <section aria-labelledby="eligibility-heading">
            <h2 id="eligibility-heading" className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              Who can start a STEM Sprouts chapter?
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed list-disc pl-6">
              <li>
                <strong className="text-black dark:text-white">High school students</strong> are at the heart of the
                model: they start and lead chapters.
              </li>
              <li>
                <strong className="text-black dark:text-white">At a school or in a community.</strong> Current chapters
                include school-based chapters such as Alpharetta High School and Osborne High School, and city or
                regional chapters such as Tampa, Dubai, and Odisha.
              </li>
              <li>
                <strong className="text-black dark:text-white">Anywhere in the world.</strong> You can apply to start a
                chapter at your school or in your city, wherever you are.
              </li>
              <li>
                <strong className="text-black dark:text-white">What the application asks for:</strong> your name,
                email, school, city and country, what interests you about starting a chapter, and roughly how many
                students you think would join.
              </li>
            </ul>
            <p className="mt-5 text-gray-600 dark:text-gray-300 leading-relaxed">
              Not sure if you qualify, or whether you need a school affiliation? Email{" "}
              <a href="mailto:hello@stem-sprouts.org" className="font-bold underline text-[#15803d] dark:text-[#22C55E]">
                hello@stem-sprouts.org
              </a>{" "}
              and the team will help.
            </p>
          </section>

          <section aria-labelledby="provided-heading">
            <h2 id="provided-heading" className="text-3xl md:text-4xl font-bold mb-8 text-black dark:text-white">
              What does STEM Sprouts provide to chapter leaders?
            </h2>
            <ul className="grid md:grid-cols-2 gap-5 list-none">
              {provided.map((item) => (
                <li key={item.title} className="h-full">
                  <ContentCard>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-black dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                    {item.href && item.cta && (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 mt-3 font-bold text-sm text-[#15803d] dark:text-[#22C55E] underline"
                      >
                        {item.cta}
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    )}
                  </ContentCard>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="start-heading"
            className="text-center bg-[#22C55E] border-4 border-black dark:border-white rounded-3xl p-8 md:p-12"
          >
            <h2 id="start-heading" className="text-2xl md:text-3xl font-bold mb-4 text-black">
              How do I start a chapter?
            </h2>
            <p className="text-black/80 mb-8 max-w-xl mx-auto">
              Fill out the short chapter application. You will receive the Chapter Starter Guide by email from
              hello@stem-sprouts.org.
            </p>
            <a href={CHAPTER_APPLICATION_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-black text-white hover:bg-black/80 rounded-xl px-8 py-6 text-base font-bold h-auto">
                <Rocket className="w-5 h-5" aria-hidden="true" />
                Start a STEM Sprouts Chapter ↗
                <span className="sr-only"> (opens in a new tab)</span>
              </Button>
            </a>
            <p className="mt-6 text-sm text-black/80">
              Want to prepare first?{" "}
              <Link href="/guides/how-to-start-a-student-led-stem-chapter" className="font-bold underline">
                Read how to start a student-led STEM chapter
              </Link>
              . Prefer to join an existing chapter first?{" "}
              <Link href="/locations" className="font-bold underline">
                Find a STEM Sprouts chapter
              </Link>{" "}
              or{" "}
              <Link href="/chapters" className="font-bold underline">
                learn how chapters work
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
