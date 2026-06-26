import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PopIn } from "@/components/pop-in"

const fieldClass =
  "border-[3px] border-black dark:border-white rounded-xl px-4 h-12 w-full bg-white dark:bg-black text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 text-base"

export function ContactSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24" id="contact">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            Get in <span className="bg-[#22C55E] text-black px-3 py-1 inline-block">touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            Want to start a chapter, sponsor our growth, or get involved? Fill out the form below and we&apos;ll get
            back to you soon.
          </p>
        </div>

        <PopIn>
        <form
          action="https://formspree.io/f/xqaykpjv"
          method="POST"
          className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block mb-2 font-bold text-black dark:text-white">
                Name *
              </label>
              <Input id="name" name="name" required aria-required="true" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-bold text-black dark:text-white">
                Email *
              </label>
              <Input id="email" name="email" type="email" required aria-required="true" className={fieldClass} />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 font-bold text-black dark:text-white">
              Phone
            </label>
            <Input id="phone" name="phone" type="tel" className={fieldClass} />
          </div>

          <div>
            <label htmlFor="interest" className="block mb-2 font-bold text-black dark:text-white">
              I&apos;m interested in *
            </label>
            <select id="interest" name="interest" required aria-required="true" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Please select...
              </option>
              <option value="starting-chapter">Starting a chapter</option>
              <option value="sponsorship">Sponsoring or partnering with us</option>
              <option value="donating">Making a donation</option>
              <option value="volunteering">Volunteering with STEM Sprouts</option>
              <option value="enrolling-child">Enrolling my child in a session</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-bold text-black dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us more about your interest or any questions you have..."
              className={`${fieldClass} h-auto py-3 resize-vertical`}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#22C55E] text-black hover:bg-[#1ea750] rounded-xl py-6 text-base font-bold h-auto"
          >
            <Send className="w-5 h-5" aria-hidden="true" />
            Send Message
          </Button>
        </form>
        </PopIn>
      </div>
    </section>
  )
}
