import type { ReactNode } from "react"
import { Rocket, ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { BannerCarousel, type CarouselSlide } from "@/components/banner-carousel"

function PhotoSlide({
  image,
  alt,
  headline,
  highlight,
  subtext,
  children,
  priority,
}: {
  image: string
  alt: string
  headline: string
  highlight: string
  subtext: string
  children: ReactNode
  priority?: boolean
}) {
  return (
    <div className="relative w-full h-[400px] sm:h-[420px] md:h-[460px] overflow-hidden">
      <Image src={image} alt={alt} fill priority={priority} className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-12 sm:px-14 md:px-16">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2 sm:mb-4">
              {headline} <span className="bg-[#22C55E] text-black px-2 sm:px-3 py-0.5 sm:py-1 inline-block">{highlight}</span>
            </h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-6 max-w-xl line-clamp-2 sm:line-clamp-none">
              {subtext}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const slides: CarouselSlide[] = [
  {
    id: "global",
    label: "A student-led STEM movement, going global",
    content: (
      <PhotoSlide
        image="/stem/background.jpg"
        alt="STEM Sprouts students at a workshop"
        headline="A student-led STEM movement,"
        highlight="going global"
        subtext="A growing international network of youth-led chapters, backed by Pinboard, our open-source platform for hands-on STEM."
        priority
      >
        <a href="https://chapters.stem-sprouts.org" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-lg py-3 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-xs sm:text-sm md:text-base font-bold h-auto border-2 border-black">
            <Rocket className="w-5 h-5" aria-hidden="true" />
            Start a Chapter ↗
          </Button>
        </a>
        <Link href="/pinboard">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg py-3 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-xs sm:text-sm md:text-base font-bold h-auto"
          >
            Explore Pinboard
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>
        </Link>
      </PhotoSlide>
    ),
  },
  {
    id: "locations",
    label: "Now active in chapters worldwide",
    content: (
      <PhotoSlide
        image="/stem/aboutus.jpg"
        alt="Students participating in a STEM Sprouts session"
        headline="Now active"
        highlight="around the world"
        subtext="From Georgia to Kenya to India, STEM Sprouts chapters are popping up everywhere, run by students, for students."
      >
        <Link href="/locations">
          <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-lg py-3 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-xs sm:text-sm md:text-base font-bold h-auto border-2 border-black">
            See our chapters
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>
        </Link>
      </PhotoSlide>
    ),
  },
  {
    id: "pinboard",
    label: "Pinboard: open source, built by students",
    content: (
      <PhotoSlide
        image="/stem/virtualcircuitbuilding.png"
        alt="Screenshot of the Pinboard virtual circuit building tool"
        headline="Built by students."
        highlight="Open source."
        subtext="Pinboard is our own browser-based platform for building virtual circuits and coding logic, free for every chapter and classroom to adopt."
      >
        <Link href="/pinboard">
          <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-lg py-3 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-xs sm:text-sm md:text-base font-bold h-auto border-2 border-black">
            Explore Pinboard
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>
        </Link>
        <a href="https://github.com/STEM-Sprouts/pinboard" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg py-3 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-xs sm:text-sm md:text-base font-bold h-auto"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
            View on GitHub ↗
          </Button>
        </a>
      </PhotoSlide>
    ),
  },
  {
    id: "partner",
    label: "Help us reach more students everywhere",
    content: (
      <PhotoSlide
        image="/stem/background.jpg"
        alt="STEM Sprouts students at a workshop"
        headline="Help us reach"
        highlight="more students"
        subtext="Sponsorships and donations fund Pinboard development, chapter resources, and STEM kits for students around the world."
      >
        <Link href="/partner">
          <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-lg py-3 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-xs sm:text-sm md:text-base font-bold h-auto border-2 border-black">
            Become a partner
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>
        </Link>
        <a href="https://hcb.hackclub.com/donations/start/stem-sprouts" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg py-3 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-xs sm:text-sm md:text-base font-bold h-auto"
          >
            Donate ↗
          </Button>
        </a>
      </PhotoSlide>
    ),
  },
]

export function HeroSection() {
  return (
    <header>
      <BannerCarousel slides={slides} />
    </header>
  )
}
