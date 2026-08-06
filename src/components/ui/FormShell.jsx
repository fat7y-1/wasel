export const inputClass =
  "rounded-lg border border-ink-200 px-3.5 py-2.5 text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
export const labelClass = "text-sm font-semibold text-ink-700"

export const FormShell = ({ icon, title, subtitle, children }) => (
  <div className="mx-auto max-w-md px-6 py-16">
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
      {icon && <div className="mb-2 text-3xl">{icon}</div>}
      <h1 className="text-2xl font-extrabold text-ink-900">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-ink-500">{subtitle}</p>}
      {children}
    </div>
  </div>
)

export const FormField = ({ label, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className={labelClass}>{label}</label>
    {children}
  </div>
)

export const SubmitButton = ({ children }) => (
  <button
    type="submit"
    className="mt-2 rounded-full bg-brand-500 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-600"
  >
    {children}
  </button>
)
