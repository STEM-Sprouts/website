"use client"

import dynamic from "next/dynamic"
import type { MapChapter } from "@/components/world-map"

const WorldMap = dynamic(() => import("@/components/world-map").then((mod) => mod.WorldMap), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[800/600] flex items-center justify-center text-gray-400 dark:text-gray-600">
      Loading map…
    </div>
  ),
})

export function WorldMapLoader({ chapters }: { chapters: MapChapter[] }) {
  return <WorldMap chapters={chapters} />
}
