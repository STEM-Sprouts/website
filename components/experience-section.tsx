import { Rocket, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PopIn } from "@/components/pop-in"

const stats: { value?: string; icon?: typeof Globe; label: string }[] = [
  { icon: Globe, label: "International Reach" },
  { value: "Free", label: "to Apply" },
  { value: "K–5", label: "Focus" },
]

export function ExperienceSection() {
  return (
    <section className="bg-white dark:bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-black dark:text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              <span className="bg-[#22C55E] text-black px-3 py-1 inline-block">Start a chapter</span>, anywhere
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              STEM Sprouts is expanding internationally. Join a growing network of student leaders bringing hands-on
              STEM to young learners, whether down the street or across the world.
            </p>
            <a href="https://chapters.stem-sprouts.org" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
                <Rocket className="w-5 h-5" aria-hidden="true" />
                Apply now ↗
              </Button>
            </a>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <PopIn
                  key={stat.label}
                  delay={index * 120}
                  className="bg-white border-4 border-black rounded-3xl flex flex-col items-center justify-center text-center py-8 px-2"
                >
                  {stat.icon ? (
                    <stat.icon className="w-7 h-7 md:w-9 md:h-9 text-[#15803d] mb-2" aria-hidden="true" />
                  ) : (
                    <div className="text-2xl md:text-4xl font-bold text-[#0B0B0B] mb-2">{stat.value}</div>
                  )}
                  <div className="text-[11px] md:text-xs uppercase tracking-wide text-[#393939] font-semibold">
                    {stat.label}
                  </div>
                </PopIn>
              ))}
            </div>

            <PopIn delay={360} className="bg-white border-4 border-black rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(34,197,94,1)]">
              <h3 className="text-xl md:text-[24px] font-bold text-[#0B0B0B] mb-2">
                Ready to lead STEM, wherever you are?
              </h3>
              <p className="text-[#393939] text-sm md:text-base leading-relaxed mb-4">
                Apply to start a chapter at your school or in your city, anywhere in the world. We&apos;ll provide
                curriculum, resources, and support to get you launched.
              </p>
              <a href="https://chapters.stem-sprouts.org" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-lg px-6 py-3 text-sm md:text-base font-semibold h-auto">
                  Apply Now ↗
                </Button>
              </a>
            </PopIn>
          </div>
        </div>
      </div>
    </section>
  )
}
