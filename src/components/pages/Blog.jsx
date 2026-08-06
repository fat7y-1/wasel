import { PageHero, PageSection } from "./PageShell"

const posts = [
  {
    emoji: "🥙",
    category: "Guides",
    title: "5 hidden-gem restaurants you can now order from on Wasel",
    excerpt:
      "From family-run kitchens to late-night favorites, here are five spots our team can't stop ordering from.",
    date: "Jul 28, 2026",
  },
  {
    emoji: "🚴",
    category: "Community",
    title: "Meet the drivers keeping your city fed",
    excerpt:
      "We spent a week riding along with Wasel drivers to see what it really takes to get your order there hot.",
    date: "Jul 14, 2026",
  },
  {
    emoji: "📊",
    category: "Company",
    title: "How we cut average delivery time by 18% this year",
    excerpt:
      "A behind-the-scenes look at the routing and dispatch changes that made deliveries faster across every city.",
    date: "Jun 30, 2026",
  },
  {
    emoji: "👩‍🍳",
    category: "Partners",
    title: "From one location to five: a partner restaurant's growth story",
    excerpt:
      "How a local restaurant used Wasel's ordering data to decide where to open their next branch.",
    date: "Jun 09, 2026",
  },
  {
    emoji: "💳",
    category: "Product",
    title: "Introducing saved addresses and one-tap reorder",
    excerpt:
      "Two small features that make getting your usual order a lot faster.",
    date: "May 22, 2026",
  },
  {
    emoji: "🌍",
    category: "Company",
    title: "Wasel is now live in three new cities",
    excerpt:
      "We're expanding — here's where we're headed next and how restaurants can apply to join.",
    date: "May 02, 2026",
  },
]

const Blog = () => (
  <div>
    <PageHero
      kicker="Blog"
      title="Stories from the Wasel kitchen"
      subtitle="Product updates, partner stories, and everything happening behind the scenes."
    />

    <PageSection>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="flex aspect-16/9 items-center justify-center bg-brand-50 text-5xl">
              {post.emoji}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="text-xs font-bold uppercase tracking-wide text-brand-600">
                {post.category}
              </span>
              <h3 className="mt-2 flex-1 font-bold leading-snug text-ink-900">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{post.excerpt}</p>
              <p className="mt-4 text-xs font-medium text-ink-400">
                {post.date}
              </p>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  </div>
)

export default Blog
