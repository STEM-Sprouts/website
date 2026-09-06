import type { Metadata } from "next"
import { Target, Eye } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { PopIn } from "@/components/pop-in"

export const metadata: Metadata = {
  title: "About - STEM Sprouts",
  description: "A youth-led nonprofit building a global network of student-run STEM chapters and Pinboard, our open-source learning platform.",
  alternates: { canonical: "/about" },
}

const team = [
  {
    initials: "HC",
    photo: "/team/harshit-chaturvedy.jpeg",
    name: "Harshit Chaturvedy",
    role: "Founder & Executive",
    bio: "Founder of STEM Sprouts, leading the organization's vision and maintaining community connections.",
  },
  {
    initials: "LY",
    name: "Lokesh Yarlagadda",
    role: "Vice-President of Operations",
    bio: "Manages day-to-day operations and supports the digital experience for visitors and chapters.",
  },
  {
    initials: "SP",
    name: "Saisohan Panda",
    role: "Vice-President of Policy",
    bio: "Oversees organizational policies, compliance, and strategic outreach to expand program impact.",
  },
  {
    initials: "AM",
    name: "Abishek Mohan",
    role: "Website Developer",
    bio: "Builds and refines website features to help present STEM Sprouts' programs clearly and effectively.",
  },
  {
    initials: "HR",
    photo: "/team/hridhun-regupathi.jpeg",
    name: "Hridhun Regupathi",
    role: "Head Grant Writer",
    bio: "Secures critical funding and grants to keep our workshops completely free and accessible for more communities globally.",
  },
]

const ambassadorLeads = [
  {
    photo: "/team/tanishi-srivastava.jpeg",
    name: "Tanishi Srivastava",
    role: "Head of Marketing",
    note: "Fun fact: my favorite movie is 27 Dresses.",
  },
]

const ambassadors = [
  {
    photo: "/team/nikhil-kolisetty.jpeg",
    name: "Nikhil Kolisetty",
    role: "Social Media Ambassador",
    note: "Fun fact: I like to play FC26 in my free time.",
  },
  {
    photo: "/team/raaga-maddala.jpeg",
    name: "Raaga Maddala",
    role: "Social Media Ambassador",
    note: "Fun fact: my favorite artist is SZA.",
  },
  {
    photo: "/team/aanya-bhardwaj.jpeg",
    name: "Aanya Bhardwaj",
    role: "Social Media Ambassador",
    note: "Fun fact: my favorite artist is Ariana Grande.",
  },
]

const openRoles = [
  {
    title: "Pinboard Developer",
    description: "Work on our open-source virtual circuit builder and help shape the future of our learning platform.",
  },
]

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <Navigation />
      
      <PageHeader
        title="About"
        highlight="STEM Sprouts"
        description="A youth-led nonprofit building a global network of student-run STEM chapters and Pinboard, our open-source learning platform."
      />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-24">
          
          {/* Purpose Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">Our Purpose</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <PopIn className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-8 hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] transition-all">
                <div className="w-12 h-12 bg-[#22C55E] border-2 border-black dark:border-white rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  STEM Sprouts exists to spark curiosity and build confidence in young learners by making
                  STEM (Science, Technology, Engineering, and Math) fun, creative, and accessible. Through interactive
                  workshops, real-world challenges, and beginner-friendly coding projects, we empower students to
                  explore, experiment, and enjoy learning.
                </p>
              </PopIn>

              <PopIn delay={120} className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-8 hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] transition-all">
                <div className="w-12 h-12 bg-[#22C55E] border-2 border-black dark:border-white rounded-xl flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We believe that every child deserves a joyful, hands-on introduction to STEM, no matter their
                  background or experience. Our goal is to plant the seeds of problem-solving, collaboration, and
                  innovation that will grow into the skills and passions of tomorrow&apos;s changemakers.
                </p>
              </PopIn>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <PopIn
                  key={member.name}
                  delay={(index % 3) * 120}
                  className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-6 text-center hover:shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transition-all flex flex-col items-center"
                >
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-black dark:border-white"
                    />
                  ) : (
                    <div className="w-20 h-20 mb-4 rounded-full bg-[#22C55E] border-2 border-black dark:border-white flex items-center justify-center font-bold text-xl text-black">
                      {member.initials}
                    </div>
                  )}
                  <h3 className="font-bold text-lg text-black dark:text-white">{member.name}</h3>
                  <div className="text-[#15803d] dark:text-[#22C55E] text-xs font-bold uppercase tracking-wide mb-3">{member.role}</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-auto">{member.bio}</p>
                </PopIn>
              ))}
            </div>
          </div>

          {/* Social Media Ambassador Team Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
              Social Media <span className="bg-[#22C55E] text-black px-3 py-1 inline-block">Ambassador Team</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
              Students creating reels and content across our channels to bring STEM Sprouts&apos; mission to more
              people, led by our Founder and Head of Marketing.
            </p>

            <div className="grid gap-6 mb-6 max-w-sm mx-auto">
              {ambassadorLeads.map((person, index) => (
                <PopIn
                  key={person.name}
                  delay={index * 120}
                  className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-6 text-center hover:shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transition-all flex flex-col items-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-black dark:border-white"
                  />
                  <h3 className="font-bold text-lg text-black dark:text-white">{person.name}</h3>
                  <div className="text-[#15803d] dark:text-[#22C55E] text-xs font-bold uppercase tracking-wide mb-3">
                    {person.role}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-auto">{person.note}</p>
                </PopIn>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {ambassadors.map((person, index) => (
                <PopIn
                  key={person.name}
                  delay={(index % 3) * 120}
                  className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-6 text-center hover:shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transition-all flex flex-col items-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-black dark:border-white"
                  />
                  <h3 className="font-bold text-lg text-black dark:text-white">{person.name}</h3>
                  <div className="text-[#15803d] dark:text-[#22C55E] text-xs font-bold uppercase tracking-wide mb-3">
                    {person.role}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-auto">{person.note}</p>
                </PopIn>
              ))}
            </div>
          </div>

          {/* Hiring Section */}
          <PopIn className="bg-white dark:bg-black rounded-3xl border-4 border-black dark:border-white p-8 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">We&apos;re Hiring!</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Join our youth-led team and help us empower the next generation of STEM leaders. We are looking for
              passionate individuals to join us in the following roles:
            </p>

            <div className="grid gap-6 max-w-md mx-auto mb-10">
              {openRoles.map((role, index) => (
                <PopIn key={role.title} delay={index * 120} className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-2xl p-6 text-left">
                  <h3 className="font-bold text-lg text-black dark:text-white mb-2">{role.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{role.description}</p>
                </PopIn>
              ))}
            </div>

            <div className="inline-block bg-[#22C55E] border-2 border-black dark:border-white rounded-2xl px-8 py-5 text-left sm:text-center">
              <p className="font-bold text-black mb-1">Interested in joining us?</p>
              <p className="text-black text-sm">
                Email your resume to{" "}
                <a href="mailto:hello@stem-sprouts.org" className="underline font-bold hover:text-neutral-800 transition-colors">
                  hello@stem-sprouts.org
                </a>
              </p>
            </div>
          </PopIn>

        </div>
      </section>

      <Footer />
    </main>
  )
}
