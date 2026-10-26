import type { ReactNode } from "react"
import { Rocket, ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CHAPTER_APPLICATION_URL } from "@/lib/nav"
import { BannerCarousel, type CarouselSlide } from "@/components/banner-carousel"

function PhotoSlide({
  image,
  alt,
  headline,
  highlight,
  subtext,
  children,
  priority,
  imagePosition = "object-center",
  isFirst = false,
}: {
  image: string
  alt: string
  headline: string
  highlight: string
  subtext: string
  children: ReactNode
  priority?: boolean
  imagePosition?: string
  isFirst?: boolean
}) {
  // Only the first slide renders as an <h1> - a page should have exactly one.
  // The rest use a <p> styled identically, since they're carousel content, not
  // distinct document sections.
  const Heading = isFirst ? "h1" : "p"

  return (
    <div className="relative w-full h-[440px] sm:h-[420px] md:h-[460px] overflow-hidden">
      <Image src={image} alt={alt} fill priority={priority} className={`object-cover ${imagePosition}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-14 md:px-16">
          <div className="max-w-2xl">
            <Heading className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2 sm:mb-4">
              {headline} <span className="bg-[#22C55E] text-black px-2 sm:px-3 py-0.5 sm:py-1 inline-block">{highlight}</span>
            </Heading>
            <p
              className={`text-gray-200 text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-6 max-w-xl ${isFirst ? "" : "line-clamp-2 sm:line-clamp-none"}`}
            >
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
    label: "Free STEM education, led by students",
    content: (
      <PhotoSlide
        image="/stem/background.jpg"
        alt="STEM Sprouts students at a workshop"
        headline="Free STEM Education,"
        highlight="Led by Students."
        subtext="STEM Sprouts is a student-led nonprofit providing free, hands-on STEM education to elementary school students through student-run chapters."
        priority
        isFirst
      >
        <a href={CHAPTER_APPLICATION_URL} target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-lg py-3.5 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-sm md:text-base font-bold h-auto border-2 border-black">
            <Rocket className="w-5 h-5" aria-hidden="true" />
            Start a Chapter ↗
            <span className="sr-only"> (opens in a new tab)</span>
          </Button>
        </a>
        <Link href="/programs">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg py-3.5 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-sm md:text-base font-bold h-auto"
          >
            Explore STEM Programs
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
        image="/stem/lego-rocket-demo.jpeg"
        alt="A student presenting a LEGO rocket model to fellow STEM Sprouts students"
        headline="Now active"
        highlight="around the world"
        subtext="From Georgia to Kenya to India, STEM Sprouts chapters are run by students and bring free STEM education to younger learners."
      >
        <Link href="/locations">
          <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-lg py-3.5 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-sm md:text-base font-bold h-auto border-2 border-black">
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
          <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-lg py-3.5 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-sm md:text-base font-bold h-auto border-2 border-black">
            Explore Pinboard
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>
        </Link>
        <a href="https://github.com/STEM-Sprouts/pinboard" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg py-3.5 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-sm md:text-base font-bold h-auto"
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
        image="/stem/tedx-talk.jpeg"
        alt="A STEM Sprouts student speaking at a TEDx event"
        imagePosition="object-[center_20%]"
        headline="Help us reach"
        highlight="more students"
        subtext="Sponsorships and donations fund Pinboard development, chapter resources, and STEM kits for students around the world."
      >
        <Link href="/partner">
          <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-lg py-3.5 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-sm md:text-base font-bold h-auto border-2 border-black">
            Become a partner
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>
        </Link>
        <a href="https://hcb.hackclub.com/donations/start/stem-sprouts" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg py-3.5 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8 text-sm md:text-base font-bold h-auto"
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
