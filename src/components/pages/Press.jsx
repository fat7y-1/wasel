import { PageHero, PageSection } from "./PageShell"

const mentions = [
  {
    outlet: "TechCrunch",
    quote:
      "Wasel is quietly becoming the delivery app locals actually prefer over the giants.",
  },
  {
    outlet: "Gulf Business",
    quote:
      "A refreshingly fast, no-nonsense ordering experience built for the region.",
  },
  {
    outlet: "Forbes Middle East",
    quote:
      "One of the fastest-growing delivery platforms in the Gulf this year.",
  },
]

const Press = () => (
  <div>
    <PageHero
      kicker="Press"
      title="Wasel in the news"
      subtitle="Media coverage, brand assets, and everything you need to write about us."
    />

    <PageSection>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {mentions.map((m) => (
          <blockquote
            key={m.outlet}
            className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm"
          >
            <p className="text-ink-700 italic leading-relaxed">
              "{m.quote}"
            </p>
            <cite className="mt-4 block text-sm font-bold not-italic text-brand-600">
              — {m.outlet}
            </cite>
          </blockquote>
        ))}
      </div>
    </PageSection>

    <PageSection className="bg-cream-50">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-ink-100 bg-white p-10 text-center shadow-sm">
        <span className="text-4xl">📦</span>
        <h2 className="text-xl font-extrabold text-ink-900">Media kit</h2>
        <p className="max-w-md text-sm text-ink-500">
          Logos, brand guidelines, and product screenshots for press and
          partner use.
        </p>
        <a
          href="mailto:press@wasel.example"
          className="mt-2 rounded-full bg-brand-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors"
        >
          Request media kit
        </a>
      </div>

      <p className="mt-8 text-center text-sm text-ink-500">
        For press inquiries, reach us at{" "}
        <a
          href="mailto:press@wasel.example"
          className="font-semibold text-brand-600 hover:underline"
        >
          press@wasel.example
        </a>
      </p>
    </PageSection>
  </div>
)

export default Press
