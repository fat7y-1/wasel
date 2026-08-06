import { PageHero, PageSection } from "./PageShell"

const perks = [
  { icon: "🏥", title: "Health coverage", body: "Full medical, dental, and vision from day one." },
  { icon: "🍔", title: "Meal credits", body: "Monthly Wasel credit — obviously." },
  { icon: "🕒", title: "Flexible hours", body: "Work when you're most productive." },
  { icon: "📈", title: "Real growth", body: "Small teams, big ownership, fast promotions." },
]

const openings = [
  { title: "Senior Backend Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", dept: "Design", location: "Manama, BH", type: "Full-time" },
  { title: "Delivery Operations Manager", dept: "Operations", location: "Manama, BH", type: "Full-time" },
  { title: "Customer Support Specialist", dept: "Support", location: "Remote", type: "Part-time" },
  { title: "Restaurant Partnerships Lead", dept: "Sales", location: "Manama, BH", type: "Full-time" },
]

const Careers = () => (
  <div>
    <PageHero
      kicker="Careers"
      title="Help us build the future of delivery"
      subtitle="We're a small team moving fast. Join us and own real problems from day one."
    />

    <PageSection>
      <h2 className="text-2xl font-extrabold text-ink-900">
        Why work at Wasel
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((p) => (
          <div key={p.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
            <span className="text-3xl">{p.icon}</span>
            <h3 className="mt-3 font-bold text-ink-900">{p.title}</h3>
            <p className="mt-1.5 text-sm text-ink-500">{p.body}</p>
          </div>
        ))}
      </div>
    </PageSection>

    <PageSection className="bg-cream-50">
      <h2 className="text-2xl font-extrabold text-ink-900">Open positions</h2>
      <div className="mt-8 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-sm">
        {openings.map((job) => (
          <div
            key={job.title}
            className="flex flex-wrap items-center justify-between gap-4 px-6 py-5"
          >
            <div>
              <h3 className="font-bold text-ink-900">{job.title}</h3>
              <div className="mt-1 flex flex-wrap gap-2 text-xs font-semibold text-ink-500">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-700">
                  {job.dept}
                </span>
                <span>{job.location}</span>
                <span>·</span>
                <span>{job.type}</span>
              </div>
            </div>
            <a
              href="mailto:careers@wasel.example"
              className="rounded-full border border-ink-200 px-5 py-2 text-sm font-semibold text-ink-700 hover:border-brand-500 hover:text-brand-600 transition-colors"
            >
              Apply
            </a>
          </div>
        ))}
      </div>
    </PageSection>
  </div>
)

export default Careers
