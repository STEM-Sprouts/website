import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PopIn } from "@/components/pop-in"

export function PortfolioSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24" id="pinboard">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            A real, shipped product, <br />
            <span className="bg-[#22C55E] text-black px-3 py-1 inline-block">not a prototype</span>
          </h2>
        </div>

        <PopIn className="group grid md:grid-cols-2 bg-white dark:bg-black border-[3px] border-black dark:border-white rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] transition-all">
          <div className="p-6 md:p-12 flex flex-col justify-center bg-white dark:bg-black">
            <span className="inline-block bg-black dark:bg-white text-white dark:text-black text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
              Our Own Platform
            </span>

            <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B] dark:text-white">
              Pinboard: open-source, browser-based, growing fast
            </h3>

            <p className="text-base md:text-[18px] text-[#393939] dark:text-gray-300 mb-8 leading-relaxed md:leading-[30px] font-medium">
              Built and maintained by our own students, Pinboard lets young makers anywhere build virtual circuits,
              code logic, and explore STEM concepts, right in the browser, fully open source on GitHub, and free
              for every chapter to adopt.
            </p>

            <Link
              href="/pinboard"
              className="flex items-center gap-2 font-semibold text-[#0B0B0B] dark:text-white hover:gap-3 transition-all text-sm md:text-base"
            >
              Explore Pinboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-[#22C55E] relative overflow-hidden min-h-[250px] md:min-h-[500px] flex items-center justify-center p-12">
            <Image
              src="/stem/pinboard_logo.png"
              alt="Pinboard platform logo"
              width={260}
              height={260}
              className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
        </PopIn>
      </div>
    </section>
  )
}
