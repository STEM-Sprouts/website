"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const HIGHLIGHTED_COUNTRIES = new Set(["United States of America", "Kenya", "India"])

export interface MapChapter {
  name: string
  region: string
  coordinates: [number, number]
}

export function WorldMap({ chapters }: { chapters: MapChapter[] }) {
  const [active, setActive] = useState<MapChapter | null>(null)

  return (
    <div className="relative">
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 160 }}
        className="w-full h-auto"
        role="group"
        aria-label="World map showing STEM Sprouts chapter locations. Use the list below for a text version."
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = HIGHLIGHTED_COUNTRIES.has(geo.properties.name)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  aria-hidden="true"
                  tabIndex={-1}
                  className={
                    isHighlighted
                      ? "fill-[#22C55E]/25 dark:fill-[#22C55E]/20 stroke-black dark:stroke-white outline-none"
                      : "fill-gray-100 dark:fill-gray-800 stroke-black dark:stroke-white outline-none"
                  }
                  style={{
                    default: { strokeWidth: 0.6 },
                    hover: { strokeWidth: 0.6 },
                    pressed: { strokeWidth: 0.6 },
                  }}
                />
              )
            })
          }
        </Geographies>

        {chapters.map((chapter) => (
          <Marker
            key={chapter.name}
            coordinates={chapter.coordinates}
            onMouseEnter={() => setActive(chapter)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(chapter)}
            onBlur={() => setActive(null)}
          >
            <circle
              r={13}
              className="fill-transparent cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label={`${chapter.name}, ${chapter.region}`}
            />
            <circle r={7} className="fill-[#22C55E] stroke-black dark:stroke-white pointer-events-none" strokeWidth={2} />
            <title>
              {chapter.name}, {chapter.region}
            </title>
          </Marker>
        ))}
      </ComposableMap>

      {active && (
        <div
          className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-sm font-bold px-4 py-2 rounded-lg border-2 border-[#22C55E] whitespace-nowrap"
          role="status"
          aria-live="polite"
        >
          {active.name}, {active.region}
        </div>
      )}
    </div>
  )
}
