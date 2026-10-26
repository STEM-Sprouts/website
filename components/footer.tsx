import { Facebook, Instagram, Linkedin, Github, Mail, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TikTokIcon } from "@/components/icons/tiktok-icon"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { CHAPTER_APPLICATION_URL, DONATE_URL } from "@/lib/nav"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="bg-white border-4 border-black dark:border-white rounded-3xl py-6 px-6 md:py-8 md:px-10 flex flex-col md:flex-row items-center gap-6 shadow-[6px_6px_0px_0px_rgba(34,197,94,1)]">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-black">Bring STEM Sprouts to your city</h3>
                <p className="text-[#393939] text-sm md:text-base mt-1">
                  Join our growing network of student-led chapters around the world.
                </p>
              </div>
              <a
                href={CHAPTER_APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-xl px-8 py-4 font-bold text-base whitespace-nowrap flex items-center gap-2 transition-colors w-full md:w-auto justify-center"
              >
                <Rocket className="w-5 h-5" aria-hidden="true" />
                Start a Chapter ↗
              </a>
            </div>
          </div>

          <div className="mb-12 md:mb-16">
            <div className="bg-white border-4 border-black dark:border-white rounded-3xl py-6 px-6 md:py-8 md:px-10 shadow-[6px_6px_0px_0px_rgba(34,197,94,1)]">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-1">Subscribe to our newsletter</h3>
              <p className="text-[#393939] text-sm md:text-base mb-6">
                Get updates on new chapters, resources, and STEM Sprouts news.
              </p>
              <div className="max-w-md">
                <NewsletterSignup />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border-2 border-black dark:border-white">
                  <Image src="/stem/logo.png" alt="STEM Sprouts logo" width={32} height={32} className="object-cover" />
                </div>
                <span className="text-lg md:text-xl font-bold">STEM Sprouts</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                A student-led nonprofit providing free, hands-on STEM education to elementary school students through
                student-run chapters.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/stemsprouts_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram"
                  className="w-11 h-11 md:w-10 md:h-10 bg-[#22C55E] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://www.tiktok.com/@stemsprouts"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our TikTok"
                  className="w-11 h-11 md:w-10 md:h-10 bg-[#22C55E] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <TikTokIcon className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://www.facebook.com/share/16ywQJWuVR/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook"
                  className="w-11 h-11 md:w-10 md:h-10 bg-[#22C55E] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://www.linkedin.com/company/stemsprouts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn"
                  className="w-11 h-11 md:w-10 md:h-10 bg-[#22C55E] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5 text-black" />
                </a>
                <a
                  href="http://github.com/STEM-Sprouts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our GitHub"
                  className="w-11 h-11 md:w-10 md:h-10 bg-[#22C55E] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Github className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="grid grid-cols-2 gap-x-4 md:block md:space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <Link href="/" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/chapters" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Chapters
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/chapter-leadership" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Chapter Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Chapter Locations
                  </Link>
                </li>
                <li>
                  <Link href="/pinboard" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Pinboard
                  </Link>
                </li>
                <li>
                  <Link href="/policy-fellowship" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Policy Fellowship
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/partner" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Legal &amp; Tax Status
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Get Involved</h3>
              <ul className="md:space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <Link href="/chapter-leadership" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    Explore Chapter Leadership
                  </Link>
                </li>
                <li>
                  <a
                    href={CHAPTER_APPLICATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Start a Chapter ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://pinboard.stem-sprouts.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Launch Pinboard ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/STEM-Sprouts/pinboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Pinboard on GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href={DONATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors"
                  >
                    Donate ↗
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact us</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@stem-sprouts.org" className="inline-flex items-center min-h-11 md:min-h-0 py-1 hover:text-black dark:hover:text-white transition-colors">
                    hello@stem-sprouts.org
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 dark:border-gray-800 pt-8 text-center text-gray-600 dark:text-gray-400 text-sm space-y-2">
            <p>This site is built to meet accessibility standards so STEM education is reachable for everyone.</p>
            <p>
              &copy; 2026 STEM Sprouts &middot; A fiscally sponsored project of{" "}
              <Link href="/legal" className="underline hover:text-black dark:hover:text-white transition-colors">
                The Hack Foundation 501(c)(3)
              </Link>{" "}
              &middot;{" "}
              <Link href="/privacy" className="underline hover:text-black dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
