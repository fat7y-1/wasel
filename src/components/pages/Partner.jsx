import { useState } from "react"
import { PageHero, PageSection } from "./PageShell"
import { inputClass, labelClass } from "../ui/FormShell"

const steps = [
  { icon: "📝", title: "Apply", body: "Tell us about your restaurant — takes two minutes." },
  { icon: "✅", title: "Get approved", body: "Our team reviews and onboards you, usually within 48 hours." },
  { icon: "🚀", title: "Start selling", body: "Go live on Wasel and start reaching new customers immediately." },
]

const benefits = [
  { icon: "📈", title: "Reach more customers", body: "Get discovered by thousands of hungry users browsing nearby." },
  { icon: "💵", title: "Fair commission", body: "Transparent, competitive rates — no hidden fees." },
  { icon: "📊", title: "Simple dashboard", body: "Manage your menu, prices, and orders in one place." },
]

const Partner = () => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ restaurant: "", name: "", email: "", phone: "" })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        kicker="Partner With Us"
        title="Grow your restaurant with Wasel"
        subtitle="Join hundreds of restaurants reaching new customers every day."
      />

      <PageSection>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <span className="text-3xl">{b.icon}</span>
              <h3 className="mt-3 font-bold text-ink-900">{b.title}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{b.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-cream-50">
        <h2 className="text-center text-2xl font-extrabold text-ink-900">
          How it works
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-sm">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-ink-900 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="mt-2 block text-3xl">{s.icon}</span>
              <h3 className="mt-3 font-bold text-ink-900">{s.title}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{s.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="mx-auto max-w-md rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
          {submitted ? (
            <div className="py-8 text-center">
              <span className="text-4xl">🎉</span>
              <h3 className="mt-3 text-lg font-bold text-ink-900">
                Thanks, {form.name.split(" ")[0] || "there"}!
              </h3>
              <p className="mt-1 text-sm text-ink-500">
                We've got your application for {form.restaurant || "your restaurant"}.
                Our partnerships team will reach out within 48 hours.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-extrabold text-ink-900">
                Apply to partner
              </h2>
              <p className="mt-1 text-sm text-ink-500">
                Fill this out and our team will be in touch.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Restaurant Name</label>
                  <input
                    name="restaurant"
                    required
                    value={form.restaurant}
                    onChange={handleChange}
                    placeholder="e.g. Burger Palace"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Your Name</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@restaurant.com"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Phone Number</label>
                  <input
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="973XXXXXXXX"
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-brand-500 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </>
          )}
        </div>
      </PageSection>
    </div>
  )
}

export default Partner
