import Link from "next/link"
import { ArrowRight, Newspaper } from "lucide-react"
import { PopIn } from "@/components/pop-in"
import { supabasePublic } from "@/lib/supabase-public"
import { formatCategory } from "@/lib/format-category"

async function getLatestPosts() {
  const { data } = await supabasePublic
    .from("posts")
    .select("id, slug, title, excerpt, category, image_url, published_at")
    .eq("published", true)
    .order("published_at", { ascending: false })
    .limit(3)
  return data ?? []
}

export async function NewsTeaser() {
  const posts = await getLatestPosts()
  if (posts.length === 0) return null

  return (
    <section className="container mx-auto px-4 py-16 md:py-24" aria-labelledby="news-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 id="news-heading" className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Latest <span className="bg-[#22C55E] text-black px-3 py-1 inline-block">News</span>
          </h2>
          <Link
            href="/news"
            className="flex items-center gap-2 min-h-11 font-semibold text-black dark:text-white hover:gap-3 transition-all text-sm md:text-base"
          >
            View all news
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <PopIn key={post.id} delay={(index % 3) * 120} className="h-full">
              <Link
                href={`/news/${post.slug}`}
                className="h-full flex flex-col bg-white dark:bg-black border-[3px] border-black dark:border-white rounded-[24px] overflow-hidden hover:shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transition-shadow"
              >
                {post.image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.image_url} alt="" className="w-full aspect-video object-cover" />
                ) : null}
                <div className="p-6 flex flex-col flex-1">
                {!post.image_url && (
                  <div
                    className="w-10 h-10 bg-[#22C55E] border-2 border-black dark:border-white rounded-xl flex items-center justify-center mb-4"
                    aria-hidden="true"
                  >
                    <Newspaper className="w-5 h-5 text-black" />
                  </div>
                )}
                {post.category !== "news" && (
                  <span className="inline-block bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-2 w-fit">
                    {formatCategory(post.category)}
                  </span>
                )}
                <h3 className="font-bold text-black dark:text-white mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            </PopIn>
          ))}
        </div>
      </div>
    </section>
  )
}
