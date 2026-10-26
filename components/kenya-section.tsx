import { GraduationCap, Sparkles, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PopIn } from "@/components/pop-in"

const highlights = [
  {
    icon: GraduationCap,
    title: "15-School Siaya Cohort Launch",
    description: "STEM Sprouts Kenya is rolling out hands-on programming across 15 schools in Siaya County.",
  },
  {
    icon: Sparkles,
    title: "Girls in STEM, Rural Kenya",
    description: "A dedicated focus on getting girls in rural communities into robotics, coding, and hands-on science.",
  },
  {
    icon: BookOpen,
    title: "CBC Curriculum Alignment",
    description: "Lessons are built to align with Kenya's Competency-Based Curriculum, so schools can adopt them directly.",
  },
]

export function KenyaSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24" id="kenya" aria-labelledby="kenya-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-black dark:bg-white text-white dark:text-black text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            🇰🇪 Chapter Spotlight
          </span>
          <h2 id="kenya-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white">
            STEM Sprouts <span className="bg-[#22C55E] text-black px-3 py-1 inline-block">Kenya</span>
          </h2>
        </div>

        <PopIn className="grid md:grid-cols-2 bg-white dark:bg-black border-[3px] border-black dark:border-white rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] transition-all">
          <div className="relative min-h-[280px] md:min-h-[520px]">
            <Image
              src="/stem/kenya-siaya.jpeg"
              alt="Students in Siaya, Kenya wearing hard hats and safety glasses at a STEM Sprouts activity"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-12 flex flex-col justify-center bg-white dark:bg-black">
            <p className="text-base md:text-[18px] text-[#393939] dark:text-gray-300 mb-8 leading-relaxed md:leading-[30px] font-medium">
              What began as a small pilot is now reaching students across rural Kenya, bringing hands-on STEM to
              communities that rarely have access to it.
            </p>

            <ul className="space-y-6 mb-8">
              {highlights.map((item) => (
                <li key={item.title} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 bg-[#22C55E] border-2 border-black dark:border-white rounded-xl flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black dark:text-white mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/locations"
              className="flex items-center gap-2 min-h-11 font-semibold text-[#0B0B0B] dark:text-white hover:gap-3 transition-all text-sm md:text-base w-fit"
            >
              See our chapters
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PopIn>
      </div>
    </section>
  )
}
