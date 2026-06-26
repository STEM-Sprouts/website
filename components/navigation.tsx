"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Partner", href: "/partner" },
  { label: "Pinboard", href: "/pinboard" },
  { label: "Resources", href: "/resources" },
  { label: "Chapters", href: "https://chapters.stem-sprouts.org", external: true },
  { label: "Contact", href: "/#contact" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark")

  return (
    <div className="container mx-auto px-4 pt-2 pb-4 sticky top-2 z-50">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-between bg-white dark:bg-black border-4 border-black dark:border-white rounded-xl px-5 py-3 max-w-7xl mx-auto shadow-[6px_6px_0px_0px_rgba(34,197,94,1)]"
      >
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-black dark:border-white flex-shrink-0">
            <Image src="/stem/logo.png" alt="STEM Sprouts logo" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-lg leading-none hidden sm:inline text-black dark:text-white">STEM Sprouts</span>
        </Link>

        <div className="hidden xl:flex items-center gap-4 flex-1 justify-center px-4">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center py-2.5 text-[15px] font-bold leading-[20px] hover:text-[#15803d] dark:hover:text-[#22C55E] transition-colors whitespace-nowrap text-black dark:text-white"
              >
                {link.label} ↗
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center py-2.5 text-[15px] font-bold leading-[20px] hover:text-[#15803d] dark:hover:text-[#22C55E] transition-colors whitespace-nowrap text-black dark:text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="https://hcb.hackclub.com/donations/start/stem-sprouts"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-sm px-5 py-3 font-bold text-sm border-2 border-black dark:border-white transition-colors"
          >
            Donate ↗
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex items-center justify-center w-10 h-10 border-2 border-black dark:border-white rounded-sm text-black dark:text-white"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Moon className="w-5 h-5" aria-hidden="true" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="xl:hidden flex items-center justify-center w-10 h-10 border-2 border-black dark:border-white rounded-sm text-black dark:text-white"
          >
            {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="xl:hidden max-w-7xl mx-auto mt-3 bg-white dark:bg-black border-4 border-black dark:border-white rounded-xl p-4 shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] flex flex-col gap-3">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="py-1.5 text-base font-bold text-black dark:text-white hover:text-[#15803d] dark:hover:text-[#22C55E] transition-colors"
              >
                {link.label} ↗
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1.5 text-base font-bold text-black dark:text-white hover:text-[#15803d] dark:hover:text-[#22C55E] transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
          <a
            href="https://hcb.hackclub.com/donations/start/stem-sprouts"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="bg-[#22C55E] text-black rounded-sm px-5 py-3 font-bold text-sm border-2 border-black dark:border-white text-center"
          >
            Donate ↗
          </a>
        </div>
      )}
    </div>
  )
}
