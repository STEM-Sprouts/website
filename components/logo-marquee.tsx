import { LogoLoop } from "@/components/logo-loop"

const sponsors = [
  { src: "/partnerlogos/hcbhackclub.png", alt: "Hack Club Bank" },
  { src: "/partnerlogos/futurelead.avif", alt: "Future Lead" },
  { src: "/partnerlogos/VolunteerHub.jpg", alt: "VolunteerHub" },
  { src: "/partnerlogos/nata.jpg", alt: "NATA" },
  { src: "/partnerlogos/nsri.png", alt: "NSRI" },
  { src: "/partnerlogos/TEDxJohnsCreekLogo.jpeg", alt: "TEDx Johns Creek" },
  { src: "/partnerlogos/minoritiesinstem.png", alt: "Minorities in STEM" },
  { src: "/partnerlogos/gatech-ceismc.jpeg", alt: "Georgia Tech CEISMC" },
]

export function LogoMarquee() {
  return (
    <div id="partners">
      <p className="text-center text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
        Trusted by organizations supporting our growth
      </p>
      <div className="relative overflow-hidden bg-white dark:bg-black border-y-4 border-black dark:border-white py-16 mt-6 mb-16 w-full">
        <LogoLoop
          logos={sponsors}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={64}
          fadeOut
          scaleOnHover
          ariaLabel="STEM Sprouts partners and supporters"
        />
      </div>
    </div>
  )
}
