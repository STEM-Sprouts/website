import { PopIn } from "@/components/pop-in"

const pressMentions = [
  {
    name: "NRI Pulse",
    logo: "/presslogos/nri-pulse.jpg",
    href: "https://nripulse.com/how-one-youth-led-nonprofit-is-transforming-stem-education-in-rural-kenya/",
  },
  {
    name: "Innovation World",
    logo: "/presslogos/innovation-world.png",
    href: "https://innovationworld.org/innovation-insider/",
  },
  {
    name: "VoyageATL",
    logo: "/presslogos/voyage-atl.png",
    href: "https://voyageatl.com/interview/inspiring-conversations-with-harshit-chaturvedy-of-stem-sprouts/",
    invertOnDark: true,
  },
]

export function PressSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24" aria-labelledby="press-heading">
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="press-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-black dark:text-white">
          As seen <span className="bg-[#22C55E] text-black px-3 py-1 inline-block">in the press</span>
        </h2>

        <PopIn className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(34,197,94,1)]">
          <ul className="flex flex-wrap items-center justify-center gap-10 md:gap-16 list-none">
            {pressMentions.map((mention) => (
              <li key={mention.name}>
                <a
                  href={mention.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`STEM Sprouts feature on ${mention.name}`}
                  className="block hover:scale-105 transition-transform"
                >
                  <img
                    src={mention.logo}
                    alt={mention.name}
                    className={`h-10 md:h-12 w-auto object-contain ${mention.invertOnDark ? "dark:invert" : ""}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </PopIn>
      </div>
    </section>
  )
}
