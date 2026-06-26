import type { Metadata } from "next"
import { Target, Eye } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer"
import { PopIn } from "@/components/pop-in"

export const metadata: Metadata = {
  title: "About - STEM Sprouts",
  description: "A youth-led nonprofit building a global network of student-run STEM chapters and Pinboard, our open-source learning platform.",
}

const team = [
  {
    initials: "HC",
    name: "Harshit Chaturvedy",
    role: "Founder & CEO",
    bio: "Leads STEM Sprouts and designs creative, hands-on workshops. Loves computer science, teaching, and helping kids discover how fun STEM can be.",
  },
  {
    initials: "LY",
    name: "Lokesh Yarlagadda",
    role: "VP - Operations",
    bio: "Organizes and runs events smoothly behind the scenes. Keeps everything on track and makes sure each workshop is a great experience for every kid.",
  },
  {
    initials: "SP",
    name: "Saisohan Panda",
    role: "VP - Public Relations",
    bio: "Spreads the word about our events and helps connect with new families. He's also into robotics and loves sharing cool STEM ideas with others.",
  },
  {
    initials: "DP",
    name: "Dhavi Pabolu",
    role: "Workshop Expert",
    bio: "Designs and leads engaging STEM sessions, bringing complex concepts to life through hands-on activities and creative experiments.",
  },
  {
    initials: "AG",
    name: "Aadhya Guntupalli",
    role: "Workshop Expert",
    bio: "Expert in creating fun, educational content for workshops. Passionate about inspiring kids to explore the wonders of science and technology.",
  },
  {
    initials: "KB",
    name: "Kashish Bhargava",
    role: "Graphic Design",
    bio: "Creates all the visual magic for STEM Sprouts, from social media graphics to workshop materials, ensuring our brand is as vibrant as our missions.",
  },
]

const openRoles = [
  {
    title: "Grant Writer",
    description: "Help us secure funding to keep our workshops free and expand our reach to more communities.",
  },
  {
    title: "Pinboard Developer",
    description: "Work on our open-source virtual circuit builder and help shape the future of our learning platform.",
  },
]

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <PageHeader
        title="About"
        highlight="STEM Sprouts"
        description="A youth-led nonprofit building a global network of student-run STEM chapters and Pinboard, our open-source learning platform."
      />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">Our Purpose</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <PopIn className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-8 hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] transition-shadow">
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

            <PopIn delay={120} className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-8 hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] transition-shadow">
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

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {team.map((member, index) => (
              <PopIn
                key={member.name}
                delay={(index % 3) * 120}
                className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl p-6 text-center hover:shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#22C55E] border-2 border-black dark:border-white flex items-center justify-center font-bold text-xl text-black">
                  {member.initials}
                </div>
                <h3 className="font-bold text-lg text-black dark:text-white">{member.name}</h3>
                <div className="text-[#15803d] dark:text-[#22C55E] text-xs font-bold uppercase tracking-wide mb-3">{member.role}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </PopIn>
            ))}
          </div>

          <PopIn className="bg-white dark:bg-black rounded-3xl border-4 border-black dark:border-white p-8 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">We&apos;re Hiring!</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Join our youth-led team and help us empower the next generation of STEM leaders. We are looking for
              passionate individuals to join us in the following roles:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
              {openRoles.map((role, index) => (
                <PopIn key={role.title} delay={index * 120} className="bg-white border-4 border-black dark:border-white rounded-2xl p-6 text-left">
                  <h3 className="font-bold text-lg text-black mb-2">{role.title}</h3>
                  <p className="text-[#393939] text-sm leading-relaxed">{role.description}</p>
                </PopIn>
              ))}
            </div>

            <div className="inline-block bg-[#22C55E] border-2 border-black dark:border-white rounded-2xl px-8 py-5">
              <p className="font-bold text-black mb-1">Interested in joining us?</p>
              <p className="text-black text-sm">
                Email your resume to{" "}
                <a href="mailto:hello@stem-sprouts.org" className="underline font-bold">
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
