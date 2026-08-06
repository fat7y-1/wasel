import { Link } from "react-router-dom"

const NotFound = () => (
  <div className="mx-auto max-w-md px-6 py-24 text-center">
    <p className="text-6xl">🍔</p>
    <h1 className="mt-4 text-3xl font-extrabold text-ink-900">
      Page not found
    </h1>
    <p className="mt-2 text-ink-500">
      We looked everywhere but couldn't find that page.
    </p>
    <Link
      to="/"
      className="mt-6 inline-block rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
    >
      Back to Home
    </Link>
  </div>
)

export default NotFound
