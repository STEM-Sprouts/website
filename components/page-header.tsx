import type { ReactNode } from "react"

export function PageHeader({ title, highlight, description }: { title: string; highlight: string; description: ReactNode }) {
  return (
    <header className="bg-white dark:bg-black py-20 md:py-28">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-[1.15]">
          {title} <span className="bg-[#22C55E] text-black px-3 py-1 inline-block">{highlight}</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">{description}</p>
      </div>
    </header>
  )
}
