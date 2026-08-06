import { useState } from "react"
import { PageHero, PageSection, StatGrid } from "./PageShell"
import { inputClass, labelClass } from "../ui/FormShell"

const steps = [
  { icon: "📱", title: "Sign up", body: "Fill out the form below — it takes less than five minutes." },
  { icon: "🪪", title: "Get verified", body: "Submit your documents and we'll verify you within 24 hours." },
  { icon: "🛵", title: "Start earning", body: "Go online whenever you want and start accepting deliveries." },
]

const Drive = () => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", city: "", vehicle: "Motorbike" })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        kicker="Drive With Wasel"
        title="Earn on your own schedule"
        subtitle="Deliver when you want, get paid weekly, and keep 100% of your tips."
      />

      <PageSection>
        <StatGrid
          stats={[
            { value: "$18/hr", label: "Average earnings" },
            { value: "100%", label: "Tips kept" },
            { value: "24h", label: "Verification time" },
            { value: "Weekly", label: "Payouts" },
          ]}
        />
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
              <span className="text-4xl">🛵</span>
              <h3 className="mt-3 text-lg font-bold text-ink-900">
                Welcome aboard, {form.name.split(" ")[0] || "there"}!
              </h3>
              <p className="mt-1 text-sm text-ink-500">
                We'll text you at {form.phone || "your number"} with next
                steps to get verified.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-extrabold text-ink-900">
                Sign up to deliver
              </h2>
              <p className="mt-1 text-sm text-ink-500">
                Tell us a bit about yourself to get started.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Full Name</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Ahmed Ali"
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
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>City</label>
                  <input
                    name="city"
                    required
                    value={form.city}
                    onChange={handleChange}
                    placeholder="e.g. Manama"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Vehicle Type</label>
                  <select
                    name="vehicle"
                    value={form.vehicle}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option>Motorbike</option>
                    <option>Car</option>
                    <option>Bicycle</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-brand-500 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors"
                >
                  Sign Up to Deliver
                </button>
              </form>
            </>
          )}
        </div>
      </PageSection>
    </div>
  )
}

export default Drive
