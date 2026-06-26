import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { PopIn } from "@/components/pop-in"

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-32" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <PopIn className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black dark:border-white rounded-full overflow-hidden bg-[#22C55E] shadow-[-8px_8px_0px_0px_rgba(34,197,94,1)]">
            <Image src="/stem/aboutus.jpg" alt="Students participating in a STEM Sprouts session" fill className="object-cover" />
          </div>
        </PopIn>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
              Who's behind <span className="bg-[#22C55E] text-black px-3 py-1 inline-block">STEM Sprouts?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              STEM Sprouts is a youth-led nonprofit building a global network of student-run chapters, powered by
              Pinboard, our open-source STEM platform. What started as a small group of students is growing into a
              movement, with chapters and partners joining from communities everywhere.
            </p>
          </div>

          <div className="space-y-6">
            <PopIn className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#22C55E] border-2 border-black dark:border-white rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black dark:text-white">Global by Design</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Our chapter program is built so any student, anywhere in the world, can bring hands-on STEM to
                  their own community.
                </p>
              </div>
            </PopIn>

            <PopIn delay={120} className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#22C55E] border-2 border-black dark:border-white rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black dark:text-white">Open Source, Real Impact</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Pinboard is built and maintained by students, fully open source, and free for any chapter or
                  classroom to use.
                </p>
              </div>
            </PopIn>
          </div>

          <Link href="/about">
            <Button className="bg-[#0B0B0B] dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <Users className="w-5 h-5" aria-hidden="true" />
              Learn more about us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
