import { PageHero, PageSection, StatGrid } from "./PageShell"

const values = [
  {
    icon: "⚡",
    title: "Speed",
    body: "From tap to doorstep, every part of Wasel is built to get food to you while it's still hot.",
  },
  {
    icon: "🍽️",
    title: "Quality",
    body: "We partner with restaurants that care about their craft, not just their delivery volume.",
  },
  {
    icon: "🤝",
    title: "Community",
    body: "Every order supports a local restaurant owner and the driver who brings it to your door.",
  },
  {
    icon: "🔒",
    title: "Trust",
    body: "Transparent pricing, real order tracking, and support that actually picks up.",
  },
]

const About = () => (
  <div>
    <PageHero
      kicker="Our Story"
      title="Food is better when it's shared"
      subtitle="Wasel started with a simple idea: connect people to the restaurants they love, without the wait, the guesswork, or the markup games."
    />

    <PageSection>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-ink-900">
            Why we built Wasel
          </h2>
          <p className="mt-4 leading-relaxed text-ink-600">
            We were tired of clunky ordering apps that made local restaurants
            feel like an afterthought. So we built Wasel — a platform that
            puts the restaurant and the customer first, with a fast,
            no-friction ordering experience and fair terms for the people
            cooking your food.
          </p>
          <p className="mt-4 leading-relaxed text-ink-600">
            Today, Wasel connects thousands of hungry customers with local
            restaurants every day — from neighborhood favorites to
            international brands — all in one place.
          </p>
        </div>
        <StatGrid
          stats={[
            { value: "500+", label: "Partner restaurants" },
            { value: "50k+", label: "Orders delivered" },
            { value: "12", label: "Cities served" },
            { value: "4.8★", label: "Average rating" },
          ]}
        />
      </div>
    </PageSection>

    <PageSection className="bg-cream-50">
      <h2 className="text-center text-2xl font-extrabold text-ink-900">
        What we stand for
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm"
          >
            <span className="text-3xl">{v.icon}</span>
            <h3 className="mt-3 font-bold text-ink-900">{v.title}</h3>
            <p className="mt-1.5 text-sm text-ink-500">{v.body}</p>
          </div>
        ))}
      </div>
    </PageSection>
  </div>
)

export default About
