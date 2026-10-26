import Link from "next/link"
import { ArrowRight } from "lucide-react"

const paths = [
  {
    title: "Lead a chapter",
    description: "High school students can start and lead a STEM Sprouts chapter.",
    href: "/chapter-leadership",
    cta: "Explore Chapter Leadership",
  },
  {
    title: "Join a chapter",
    description: "Find a student-led chapter running free STEM workshops near you.",
    href: "/locations",
    cta: "Find a STEM Sprouts chapter",
  },
  {
    title: "Partner with us",
    description: "Schools, libraries, companies, and nonprofits can help reach more students.",
    href: "/partner",
    cta: "Partner With STEM Sprouts",
  },
]

export function GetInvolvedSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24" aria-labelledby="get-involved-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="get-involved-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-black dark:text-white">
          Get <span className="bg-[#22C55E] text-black px-3 py-1 inline-block">involved</span>
        </h2>
        <ul className="grid md:grid-cols-3 gap-6 list-none">
          {paths.map((path) => (
            <li
              key={path.title}
              className="flex flex-col bg-white dark:bg-black border-[3px] border-black dark:border-white rounded-[24px] p-8 hover:shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-black dark:text-white">{path.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{path.description}</p>
              <Link
                href={path.href}
                className="mt-auto inline-flex items-center gap-2 min-h-11 font-bold underline text-[#15803d] dark:text-[#22C55E]"
              >
                {path.cta}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
