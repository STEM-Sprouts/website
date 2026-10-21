"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export interface MapChapter {
  name: string
  region: string
  coordinates: [number, number]
}

const chapterIcon = L.divIcon({
  className: "",
  // 16px dot inside a 40px transparent box so markers are easy to tap.
  html: `<span style="display:flex;align-items:center;justify-content:center;width:40px;height:40px;"><span style="display:block;width:16px;height:16px;border-radius:9999px;background:#22C55E;border:2px solid black;box-shadow:0 0 0 1px white;"></span></span>`,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  tooltipAnchor: [0, -10],
})

function FitToChapters({ chapters }: { chapters: MapChapter[] }) {
  const map = useMap()

  useEffect(() => {
    if (chapters.length === 0) return
    const bounds = L.latLngBounds(chapters.map(({ coordinates: [lng, lat] }) => [lat, lng] as [number, number]))
    map.fitBounds(bounds, { padding: [32, 32], maxZoom: 5 })
  }, [chapters, map])

  return null
}

export function WorldMap({ chapters }: { chapters: MapChapter[] }) {
  return (
    <div className="w-full aspect-square sm:aspect-[800/500] rounded-2xl overflow-hidden border-2 border-black dark:border-white">
      <MapContainer
        center={[20, 10]}
        zoom={2}
        scrollWheelZoom={false}
        // One-finger drag would trap page scrolling on touch screens; pinch-zoom still works.
        dragging={!L.Browser.mobile}
        className="w-full h-full dark:[&_.leaflet-tile-pane]:brightness-90 dark:[&_.leaflet-tile-pane]:invert dark:[&_.leaflet-tile-pane]:hue-rotate-180 dark:[&_.leaflet-tile-pane]:contrast-90"
        aria-label="Map showing STEM Sprouts chapter locations. Use the list below for a text version."
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitToChapters chapters={chapters} />
        {chapters.map((chapter) => (
          <Marker
            key={chapter.name}
            position={[chapter.coordinates[1], chapter.coordinates[0]]}
            icon={chapterIcon}
            alt={`${chapter.name}, ${chapter.region}`}
          >
            <Tooltip direction="top">
              {chapter.name}, {chapter.region}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
