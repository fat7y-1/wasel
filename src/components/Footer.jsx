import { Link } from "react-router-dom"

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Blog", to: "/blog" },
      { label: "Press", to: "/press" },
    ],
  },
  {
    title: "Get Help",
    links: [
      { label: "Help Center", to: "/help" },
      { label: "Add your restaurant", to: "/partner" },
      { label: "Sign up to deliver", to: "/drive" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Cookie Settings", to: "/cookies" },
    ],
  },
]

const socials = [
  { label: "Instagram", icon: "📷" },
  { label: "X", icon: "🕊️" },
  { label: "Facebook", icon: "📘" },
  { label: "TikTok", icon: "🎵" },
]

const Footer = () => (
  <footer className="mt-16 border-t border-ink-100 bg-ink-900 text-ink-200">
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-lg font-extrabold text-white">
              W
            </span>
            <span className="text-xl font-extrabold tracking-tight text-white">
              wasel
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink-400">
            Great food from your favorite local restaurants, delivered fast
            to your door.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <span
                key={s.label}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-sm hover:bg-brand-600 transition-colors cursor-pointer"
              >
                {s.icon}
              </span>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-bold text-white">{col.title}</h4>
            <ul className="mt-3 flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 text-sm text-ink-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Wasel. All rights reserved.</p>
        <p>Made with 🧡 for food lovers everywhere.</p>
      </div>
    </div>
  </footer>
)

export default Footer
