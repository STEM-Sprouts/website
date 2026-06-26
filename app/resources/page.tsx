import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ExternalLink,
  Code,
  Blocks,
  GraduationCap,
  Puzzle,
  Rocket,
  Calculator,
  Cpu,
  FlaskConical,
  Box,
  Terminal,
  type LucideIcon,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { PopIn } from "@/components/pop-in"

export const metadata: Metadata = {
  title: "Resources - STEM Sprouts",
  description: "Explore platforms and tools to continue your STEM journey at home.",
}

const learningPlatforms: { tag: string; icon: LucideIcon; title: string; description: string; href: string }[] = [
  {
    tag: "Coding",
    icon: Code,
    title: "Tynker",
    description: "Learn to code through games, puzzles, and creative projects. Perfect for beginners with drag-and-drop programming and advanced text-based coding.",
    href: "https://www.tynker.com/",
  },
  {
    tag: "Programming",
    icon: Blocks,
    title: "Scratch",
    description: "Create interactive stories, games, and animations with MIT's visual programming language. Great for learning programming concepts.",
    href: "https://scratch.mit.edu/",
  },
  {
    tag: "Multi-Subject",
    icon: GraduationCap,
    title: "Khan Academy Kids",
    description: "Free educational content covering math, science, reading, and more. Adaptive learning with personalized lessons.",
    href: "https://www.khanacademy.org/kids",
  },
  {
    tag: "Logic",
    icon: Puzzle,
    title: "Blockly Games",
    description: "Learn programming concepts through fun puzzle games. Visual programming that teaches computational thinking.",
    href: "https://blockly.games/",
  },
  {
    tag: "Space Science",
    icon: Rocket,
    title: "NASA Kids",
    description: "Explore space with games, activities, and educational content straight from NASA. Perfect for budding astronauts!",
    href: "https://www.nasa.gov/audience/forkids/",
  },
  {
    tag: "Mathematics",
    icon: Calculator,
    title: "Cool Math Games",
    description: "Make math fun with puzzles, logic games, and brain teasers that develop problem-solving skills.",
    href: "https://www.coolmathgames.com/",
  },
]

const stemTools: { tag: string; icon: LucideIcon; title: string; description: string; href: string; internal?: boolean }[] = [
  {
    tag: "Circuit Simulator",
    icon: Cpu,
    title: "Pinboard",
    description: "Our own open-source platform for building virtual circuits and coding logic. Perfect for young makers to explore electronics safely in the browser.",
    href: "/pinboard",
    internal: true,
  },
  {
    tag: "Science Sims",
    icon: FlaskConical,
    title: "PhET Simulations",
    description: "Interactive science and math simulations from the University of Colorado. Explore physics, chemistry, biology, and more.",
    href: "https://phet.colorado.edu/",
  },
  {
    tag: "3D Design",
    icon: Box,
    title: "Tinkercad",
    description: "Free 3D design and 3D printing app. Create and design objects, circuits, and codeblocks with easy-to-use tools.",
    href: "https://www.tinkercad.com/",
  },
  {
    tag: "Coding",
    icon: Terminal,
    title: "Codecademy",
    description: "Interactive coding lessons in various programming languages. Hands-on practice with real coding projects.",
    href: "https://www.codecademy.com/",
  },
]

function ResourceCard({
  tag,
  icon: Icon,
  title,
  description,
  href,
  internal,
}: {
  tag: string
  icon: LucideIcon
  title: string
  description: string
  href: string
  internal?: boolean
}) {
  const inner = (
    <div className="group bg-white dark:bg-black border-[3px] border-black dark:border-white rounded-[24px] p-6 h-full hover:shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transition-shadow">
      <span className="inline-block bg-[#22C55E] text-black text-xs font-bold px-3 py-1 rounded-full mb-4">{tag}</span>
      <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold mb-2 flex items-center gap-1.5 text-black dark:text-white">
        {title}
        {!internal && (
          <>
            <ExternalLink className="w-4 h-4 opacity-60" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </>
        )}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  )

  if (internal) {
    return <Link href={href}>{inner}</Link>
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  )
}

export default function ResourcesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <PageHeader
        title="Learning"
        highlight="Resources"
        description="Explore these amazing platforms and tools to continue your STEM journey at home. From coding games to science experiments, there's something for every young learner!"
      />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-20">
          <PopIn className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-8 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Our Past Curriculum</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Explore the workshops we&apos;ve created for our STEM Sprouts community: lesson plans, activities, and
              materials from our previous sessions. These materials are designed for supervised, live learning;
              adult guidance is recommended for all activities.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1_tcRSgrX0NFVvjNNlHO3rsulC-ZHWPYS?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-xl px-8 py-6 text-base font-bold h-auto">
                Access All Curriculum Materials For FREE ↗
              </Button>
            </a>
            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              Questions about our curriculum?{" "}
              <a href="mailto:hello@stem-sprouts.org" className="text-[#15803d] dark:text-[#22C55E] font-bold underline">
                Contact us
              </a>
            </p>
          </PopIn>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black dark:text-white">Featured Tool</h2>
            <PopIn className="max-w-3xl mx-auto bg-white dark:bg-black border-[3px] border-[#22C55E] rounded-[32px] p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8 hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] transition-shadow">
              <div className="w-24 h-24 bg-white rounded-2xl border-2 border-black flex items-center justify-center flex-shrink-0 p-3">
                <Image src="/stem/pinboard_logo.png" alt="Pinboard logo" width={80} height={80} className="object-contain" />
              </div>
              <div>
                <span className="inline-block bg-[#22C55E] text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
                  Our Own Platform
                </span>
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">Pinboard</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  An open-source, browser-based platform designed for young makers to build virtual circuits, code
                  logic, and explore STEM concepts safely in the browser.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href="/pinboard"
                    className="inline-flex items-center gap-1 bg-[#22C55E] text-black text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#1ea750] transition-colors"
                  >
                    Explore Pinboard
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://pinboard.stem-sprouts.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border-2 border-black dark:border-white text-black dark:text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  >
                    Launch App ↗
                  </a>
                </div>
              </div>
            </PopIn>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-black dark:text-white">
              Online Learning Platforms
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
              Interactive websites and apps that make learning STEM fun and engaging
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningPlatforms.map((p, index) => (
                <PopIn key={p.title} delay={(index % 3) * 120} className="h-full">
                  <ResourceCard {...p} />
                </PopIn>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-black dark:text-white">
              STEM Tools & Simulators
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
              Interactive tools and simulators for hands-on learning experiences
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stemTools.map((t, index) => (
                <PopIn key={t.title} delay={(index % 4) * 120} className="h-full">
                  <ResourceCard {...t} />
                </PopIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
