"use client"

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

export interface CarouselSlide {
  id: string
  label: string
  content: ReactNode
}

export function BannerCarousel({ slides }: { slides: CarouselSlide[] }) {
  const [index, setIndex] = useState(0)
  const [hovering, setHovering] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const swipeStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) setUserPaused(true)
  }, [])

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % slides.length) + slides.length) % slides.length)
    },
    [slides.length],
  )

  const paused = hovering || userPaused

  useEffect(() => {
    if (paused || slides.length <= 1) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 7000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, slides.length])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") goTo(index - 1)
    if (e.key === "ArrowRight") goTo(index + 1)
  }

  // Swipe left/right on touch screens. touch-pan-y keeps vertical page scrolling native.
  const handlePointerDown = (e: PointerEvent) => {
    if (e.pointerType === "mouse") return
    swipeStart.current = { x: e.clientX, y: e.clientY }
  }
  const handlePointerUp = (e: PointerEvent) => {
    const start = swipeStart.current
    swipeStart.current = null
    if (!start) return
    const dx = e.clientX - start.x
    const dy = e.clientY - start.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) goTo(index + (dx < 0 ? 1 : -1))
  }

  return (
    <section
      className="relative w-full border-b-4 border-black dark:border-white"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => (swipeStart.current = null)}
    >
      <div className="sr-only" aria-live="polite">
        {slides[index].label}, slide {index + 1} of {slides.length}
      </div>

      <div className="overflow-hidden touch-pan-y">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={i !== index}
              inert={i !== index ? true : undefined}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-black/40 hover:bg-[#22C55E] border-2 border-white rounded-full flex items-center justify-center transition-colors text-white hover:text-black"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-black/40 hover:bg-[#22C55E] border-2 border-white rounded-full flex items-center justify-center transition-colors text-white hover:text-black"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>

          <div className="absolute bottom-0 md:bottom-2 left-0 right-0 flex items-center justify-center gap-1 z-10">
            <div className="flex" role="tablist" aria-label="Slide navigation">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}: ${slide.label}`}
                  onClick={() => goTo(i)}
                  className="w-8 h-11 flex items-center justify-center"
                >
                  <span
                    className={`w-3 h-3 rounded-full border-2 border-white transition-colors ${
                      i === index ? "bg-[#22C55E]" : "bg-white/20"
                    }`}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? "Play automatic slide rotation" : "Pause automatic slide rotation"}
              aria-pressed={userPaused}
              className="group w-11 h-11 flex items-center justify-center"
            >
              <span className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-white text-white group-hover:bg-[#22C55E] group-hover:text-black transition-colors">
                {userPaused ? <Play className="w-3 h-3" aria-hidden="true" /> : <Pause className="w-3 h-3" aria-hidden="true" />}
              </span>
            </button>
          </div>
        </>
      )}
    </section>
  )
}
