import type { Metadata } from "next"
import { MapPin, Sparkles, Rocket } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { PopIn } from "@/components/pop-in"
import { Button } from "@/components/ui/button"
import { WorldMapLoader } from "@/components/world-map-loader"
import type { MapChapter } from "@/components/world-map"

export const metadata: Metadata = {
  title: "Locations - STEM Sprouts",
  description: "STEM Sprouts chapters around the world: from Georgia to Kenya to India, and growing.",
  alternates: { canonical: "/locations" },
}

const chapters: (MapChapter & { flag: string; badge?: string })[] = [
  { name: "Forsyth County", region: "Georgia, USA", flag: "🇺🇸", badge: "Founding Chapter", coordinates: [-84.1557, 34.2098] },
  { name: "Alpharetta High School", region: "Georgia, USA", flag: "🇺🇸", coordinates: [-84.2941, 34.0754] },
  { name: "Osborne High School", region: "Georgia, USA", flag: "🇺🇸", coordinates: [-84.5499, 33.9526] },
  { name: "Dublin", region: "Ohio, USA", flag: "🇺🇸", coordinates: [-83.1141, 40.0992] },
  { name: "Fremont", region: "California, USA", flag: "🇺🇸", coordinates: [-121.9886, 37.5485] },
  { name: "Tampa", region: "Florida, USA", flag: "🇺🇸", coordinates: [-82.4572, 27.9506] },
  { name: "St. Louis", region: "Missouri, USA", flag: "🇺🇸", coordinates: [-90.1994, 38.627] },
  { name: "New Jersey", region: "USA", flag: "🇺🇸", coordinates: [-74.4057, 40.0583] },
  { name: "West Bengal", region: "India", flag: "🇮🇳", coordinates: [88.3639, 22.5726] },
  { name: "Odisha", region: "India", flag: "🇮🇳", coordinates: [85.8245, 20.2961] },
  { name: "Gopalganj", region: "Bangladesh", flag: "🇧🇩", coordinates: [89.8266, 23.005] },
  { name: "Siaya STEAM Hub", region: "Kenya", flag: "🇰🇪", coordinates: [34.2881, 0.0607] },
  { name: "Dubai", region: "UAE", flag: "🇦🇪", coordinates: [55.2708, 25.2048] },
]

export default function LocationsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <PageHeader
        title="Chapters"
        highlight="around the world"
        description="From Georgia to Kenya to India, STEM Sprouts chapters are run by students, for students, wherever they are."
      />

      <section className="container mx-auto px-4 py-16 md:py-24" id="locations" aria-labelledby="map-heading">
        <div className="max-w-5xl mx-auto">
          <PopIn className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-4 md:p-8 mb-12 hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] transition-shadow">
            <h2 id="map-heading" className="sr-only">
              Map of current chapter locations
            </h2>
            <WorldMapLoader chapters={chapters} />
          </PopIn>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none mb-16">
            {chapters.map((chapter, index) => (
              <li key={chapter.name} className="h-full">
                <PopIn
                  delay={(index % 3) * 100}
                  className="h-full bg-white dark:bg-black border-[3px] border-black dark:border-white rounded-[24px] p-6 flex items-start gap-4 hover:shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-full bg-[#22C55E] border-2 border-black dark:border-white flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    {chapter.badge && (
                      <span className="inline-block bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-2">
                        {chapter.badge}
                      </span>
                    )}
                    <h3 className="font-bold text-lg text-black dark:text-white">
                      <span aria-hidden="true">{chapter.flag}</span> {chapter.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{chapter.region}</p>
                  </div>
                </PopIn>
              </li>
            ))}

            <li className="h-full">
              <PopIn delay={(chapters.length % 3) * 100} className="h-full border-[3px] border-dashed border-black/40 dark:border-white/40 rounded-[24px] p-6 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 border-2 border-black/40 dark:border-white/40 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <Sparkles className="w-6 h-6 text-black dark:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black dark:text-white">More coming soon</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">New chapters launch every season.</p>
                </div>
              </PopIn>
            </li>
          </ul>

          <PopIn className="text-center bg-black border-4 border-black dark:border-white rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Don&apos;t see your city?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Apply to start a chapter at your school or in your city, anywhere in the world.
            </p>
            <a href="https://chapters.stem-sprouts.org" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-xl px-8 py-6 text-base font-bold h-auto">
                <Rocket className="w-5 h-5" aria-hidden="true" />
                Start a Chapter ↗
              </Button>
            </a>
          </PopIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
