export const PageHero = ({ kicker, title, subtitle }) => (
  <section className="bg-linear-to-br from-brand-500 to-brand-700">
    <div className="mx-auto max-w-6xl px-6 py-16 text-center">
      {kicker && (
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {kicker}
        </span>
      )}
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-brand-50">{subtitle}</p>
      )}
    </div>
  </section>
)

export const PageSection = ({ className = "", children }) => (
  <section className={className}>
    <div className="mx-auto max-w-6xl px-6 py-14">{children}</div>
  </section>
)

export const LegalSection = ({ number, title, children }) => (
  <div className="border-b border-ink-100 py-6 last:border-b-0">
    <h2 className="flex items-baseline gap-3 text-lg font-bold text-ink-900">
      <span className="text-brand-500">{number}.</span> {title}
    </h2>
    <div className="mt-2 space-y-2 text-sm leading-relaxed text-ink-600">
      {children}
    </div>
  </div>
)

export const StatGrid = ({ stats }) => (
  <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
    {stats.map((s) => (
      <div
        key={s.label}
        className="rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-sm"
      >
        <p className="text-3xl font-extrabold text-brand-600">{s.value}</p>
        <p className="mt-1 text-sm text-ink-500">{s.label}</p>
      </div>
    ))}
  </div>
)
