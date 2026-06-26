import { PopIn } from "@/components/pop-in"

export function FounderSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-black dark:text-white">
          A message from <span className="bg-[#22C55E] text-black px-3 py-1 inline-block">our founder</span>
        </h2>

        <PopIn className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(34,197,94,1)]">
          <a
            href="https://youtu.be/ThK3jej4E2U?si=15Uajb0iNRS6YldV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch video message from our founder on YouTube"
            className="group block relative w-full overflow-hidden rounded-2xl border-2 border-black dark:border-white"
            style={{ paddingBottom: "56.25%" }}
          >
            <img
              src="https://img.youtube.com/vi/ThK3jej4E2U/maxresdefault.jpg"
              alt="Video thumbnail: message from the STEM Sprouts founder"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(34,197,94,1)] group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="#ff0000" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </a>

          <p className="mt-6 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Watch our founder share the vision behind STEM Sprouts and how we&apos;re making STEM education
            accessible to every child, everywhere.
          </p>
        </PopIn>
      </div>
    </section>
  )
}
