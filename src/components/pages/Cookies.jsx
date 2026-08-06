import { useState } from "react"
import { PageHero, PageSection } from "./PageShell"

const Toggle = ({ checked, onChange, disabled }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={() => onChange(!checked)}
    className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
      disabled ? "bg-brand-300 cursor-not-allowed" : checked ? "bg-brand-500" : "bg-ink-200"
    }`}
  >
    <span
      className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
        checked ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </button>
)

const categories = [
  {
    key: "necessary",
    title: "Strictly Necessary",
    body: "Required for sign-in, cart, and checkout to work. These can't be turned off.",
    locked: true,
  },
  {
    key: "analytics",
    title: "Analytics",
    body: "Helps us understand how people use Wasel so we can improve the app.",
  },
  {
    key: "marketing",
    title: "Marketing",
    body: "Used to show you more relevant offers from restaurants and Wasel.",
  },
]

const Cookies = () => {
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <PageHero
        kicker="Legal"
        title="Cookie Settings"
        subtitle="Control what data Wasel collects while you browse."
      />

      <PageSection>
        <div className="mx-auto max-w-2xl">
          <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-sm">
            {categories.map((cat) => (
              <div
                key={cat.key}
                className="flex items-start justify-between gap-6 px-6 py-5"
              >
                <div>
                  <h3 className="font-bold text-ink-900">{cat.title}</h3>
                  <p className="mt-1 text-sm text-ink-500">{cat.body}</p>
                </div>
                <Toggle
                  checked={prefs[cat.key]}
                  disabled={cat.locked}
                  onChange={(v) => setPrefs({ ...prefs, [cat.key]: v })}
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={handleSave}
              className="rounded-full bg-brand-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors"
            >
              Save Preferences
            </button>
            {saved && (
              <span className="text-sm font-semibold text-green-600">
                Preferences saved ✓
              </span>
            )}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-ink-500">
            For more detail on what each category means and how long data is
            kept, see our{" "}
            <a href="/privacy" className="font-semibold text-brand-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </PageSection>
    </div>
  )
}

export default Cookies
