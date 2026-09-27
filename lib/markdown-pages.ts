import { SITE_URL } from "@/lib/site"

/**
 * Hand-maintained Markdown representations of the site's static pages,
 * served to agents that request `Accept: text/markdown` (see
 * app/__markdown/[[...slug]]/route.ts). Keep these in sync with the
 * corresponding page.tsx content when either changes.
 */

export interface MarkdownPage {
  /** Path as it appears in the URL, e.g. "/about". "" is the homepage. */
  path: string
  title: string
  body: string
}

const PAGES: MarkdownPage[] = [
  {
    path: "",
    title: "STEM Sprouts",
    body: `STEM Sprouts is a youth-led nonprofit building a global network of student-run STEM chapters, powered by Pinboard, our free open-source hardware coding platform. Chapters run hands-on STEM programming for K-5 students from Georgia to Kenya to India.

## What we do

- **Chapters** - student-led STEM programs run at schools and in communities worldwide. See [Locations](${SITE_URL}/locations).
- **Pinboard** - a free, open-source, browser-based block-coding platform for Arduino and Raspberry Pi. See [Pinboard](${SITE_URL}/pinboard).
- **Policy Fellowship** - a research fellowship pairing students with mentors to write policy papers on STEM education. See [Policy Fellowship](${SITE_URL}/policy-fellowship).

## STEM Sprouts Kenya

What began as a small pilot is now reaching students across rural Kenya: a 15-school cohort launch in Siaya County, a dedicated focus on girls in STEM, and lessons aligned to Kenya's Competency-Based Curriculum.

## Get involved

- Start a chapter: https://chapters.stem-sprouts.org
- Partner or sponsor: [Partner](${SITE_URL}/partner)
- Donate: https://hcb.hackclub.com/donations/start/stem-sprouts
- Contact: hello@stem-sprouts.org

See [llms.txt](${SITE_URL}/llms.txt) for full guidance on when to point an agent or user at STEM Sprouts.`,
  },
  {
    path: "/about",
    title: "About - STEM Sprouts",
    body: `A youth-led nonprofit building a global network of student-run STEM chapters and Pinboard, our open-source learning platform.

## Mission

STEM Sprouts exists to spark curiosity and build confidence in young learners by making STEM (Science, Technology, Engineering, and Math) fun, creative, and accessible through interactive workshops, real-world challenges, and beginner-friendly coding projects.

## Vision

Every child deserves a joyful, hands-on introduction to STEM, no matter their background or experience.

## Team

- **Harshit Chaturvedy** - Founder & Executive
- **Lokesh Yarlagadda** - Vice-President of Operations
- **Saisohan Panda** - Vice-President of Policy
- **Abishek Mohan** - Website Developer
- **Hridhun Regupathi** - Head Grant Writer
- **Tanishi Srivastava** - Head of Social Media Strategy

## Open roles

- Pinboard Developer
- Social Media Ambassador

Interested in joining? Email hello@stem-sprouts.org.`,
  },
  {
    path: "/locations",
    title: "Locations - STEM Sprouts",
    body: `STEM Sprouts chapters around the world: from Georgia to Kenya to India, and growing. Chapters are run by students, for students, wherever they are.

Current chapters include Forsyth County, GA (founding chapter), Alpharetta High School, Osborne High School, Dublin OH, Fremont CA, Tampa FL, St. Louis, MO, New Jersey, West Bengal (India), Odisha (India), Gopalganj (Bangladesh), Siaya STEAM Hub (Kenya), and Dubai (UAE).

Don't see your city? Apply to start a chapter at your school or in your city, anywhere in the world, at https://chapters.stem-sprouts.org.`,
  },
  {
    path: "/pinboard",
    title: "Pinboard - STEM Sprouts",
    body: `A free, open-source block-coding platform for Arduino and Raspberry Pi. Build real hardware projects, simulate them live in your browser, and learn through guided lessons.

## Features

- **Live Hardware Simulation** - place real components (LEDs, buttons, potentiometers, servos, buzzers) on a virtual board and watch them respond exactly like the real thing. No physical hardware required.
- **Blocks that generate real code** - drag-and-drop blocks generate actual Arduino C code in real time; click any block to trace which lines it produced.
- **Guided lessons, open source** - built and maintained by students, with step-by-step guided lessons and free cloud project sync. Fully open source on GitHub.

Launch Pinboard: https://pinboard.stem-sprouts.org
Source code: https://github.com/STEM-Sprouts/pinboard`,
  },
  {
    path: "/policy-fellowship",
    title: "Policy Fellowship - STEM Sprouts",
    body: `The STEM Sprouts Policy Fellowship pairs students with mentors to research, write, and publish policy papers that reach real decision-makers, on issues in STEM education and emerging technology.

## What fellows get

- A dedicated mentor for the whole process
- Structured peer and Editorial Board review
- Support toward publication, at no cost to the fellow
- A platform to present findings at events like the STEM Summit
- Papers routed to school districts, legislative offices, and stakeholder groups
- A Policy Fellow title and a cohort community

## How it works

1. Apply & propose a topic
2. Get matched with a mentor
3. Research & draft (problem, evidence, stakeholders, recommendations)
4. Peer & Editorial Review
5. Publish & present
6. Track impact

Apply on the page itself: ${SITE_URL}/policy-fellowship`,
  },
  {
    path: "/partner",
    title: "Partner - STEM Sprouts",
    body: `Partner with STEM Sprouts to make STEM education free and accessible to every child.

## Sponsorship benefits

- Brand recognition on the website, chapter materials, and social media
- Tax benefits (contributions are tax-deductible via our 501(c)(3) fiscal sponsor)
- Direct global impact funding Pinboard development, chapter resources, and STEM kits

## Ways to support

- Financial sponsorship
- In-kind donations (STEM kits, robotics hardware, host space)
- Mentorship & speaking

Donate directly: https://hcb.hackclub.com/donations/start/stem-sprouts
Download the partnership guide: ${SITE_URL}/stem/STEM_Sprouts_Partnership_Guide.pdf
Contact: hello@stem-sprouts.org`,
  },
  {
    path: "/resources",
    title: "Resources - STEM Sprouts",
    body: `Explore platforms and tools to continue your STEM journey at home.

## Learning platforms

- Tynker - coding through games and puzzles
- Scratch - MIT's visual programming language
- Khan Academy Kids - math, science, reading
- Blockly Games - programming concepts through puzzles
- NASA Kids - space science content
- Cool Math Games - math puzzles and logic games

## STEM tools

- Pinboard - our own open-source virtual circuit builder (${SITE_URL}/pinboard)
- PhET Simulations - interactive physics/chemistry/biology sims
- Tinkercad - free 3D design and 3D printing
- Codecademy - interactive coding lessons`,
  },
  {
    path: "/news",
    title: "News - STEM Sprouts",
    body: `Updates, announcements, and research from STEM Sprouts. See the full list at ${SITE_URL}/news, or the RSS feed at ${SITE_URL}/news/feed.xml. Individual articles are available at ${SITE_URL}/news/<slug> and also negotiate Markdown via Accept: text/markdown.`,
  },
  {
    path: "/legal",
    title: "Legal & Tax-Exempt Status - STEM Sprouts",
    body: `STEM Sprouts is not itself a separately incorporated 501(c)(3) organization. It operates as a fiscally sponsored project of The Hack Foundation, doing business as Hack Club, a 501(c)(3) public charity (EIN 81-2908499), since December 31, 2025.

Donations made to support STEM Sprouts are made to The Hack Foundation and are tax-deductible to the extent allowed by law. The Hack Foundation holds legal and fiduciary responsibility for funds raised on STEM Sprouts' behalf.

STEM Sprouts Kenya is separately registered as a Community Based Organization (CBO) with the Kenyan Directorate of Social Development (Registration No. CC/SST/CBO/HC 1450, Siaya County).

Fiscal sponsor: The Hack Foundation (d.b.a. Hack Club), 8605 Santa Monica Boulevard #86294, West Hollywood, CA 90069. Email: hcb@hackclub.com

Questions: hello@stem-sprouts.org`,
  },
  {
    path: "/privacy",
    title: "Privacy Policy - STEM Sprouts",
    body: `How STEM Sprouts collects, uses, and protects your information. Read the full policy at ${SITE_URL}/privacy. Contact hello@stem-sprouts.org with privacy questions.`,
  },
]

export function findMarkdownPage(path: string): MarkdownPage | null {
  const normalized = path === "/" ? "" : path.replace(/\/+$/, "")
  return PAGES.find((p) => p.path === normalized) ?? null
}

export function renderMarkdownPage(page: MarkdownPage): string {
  return `# ${page.title}\n\n${page.body}\n`
}

export function renderNotFoundMarkdown(requestedPath: string): string {
  return `# 404 Not Found

The path \`${requestedPath}\` doesn't exist on STEM Sprouts.

## Where to look next

- [Homepage](${SITE_URL}/)
- [Sitemap](${SITE_URL}/sitemap.xml)
- [llms.txt](${SITE_URL}/llms.txt) - site guide for agents
- [News](${SITE_URL}/news)
- [Locations](${SITE_URL}/locations)

If you followed a broken link here, contact hello@stem-sprouts.org.
`
}
