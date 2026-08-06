import { Link, NavLink } from "react-router-dom"

const linkBase =
  "text-sm font-semibold text-ink-600 hover:text-brand-600 transition-colors"

const CartLink = ({ cartCount }) => (
  <Link
    to="/order"
    className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-ink-50 transition-colors"
    aria-label="View cart"
  >
    🛒
    {cartCount > 0 && (
      <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-500 px-1 text-[11px] font-bold text-white">
        {cartCount}
      </span>
    )}
  </Link>
)

const NavBar = ({ user, handleLogOut, cartCount = 0 }) => {
  const signedIn = (
    <>
      <NavLink
        to="/user"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? "text-brand-600" : ""}`
        }
      >
        My Orders
      </NavLink>
      <CartLink cartCount={cartCount} />
      {user?.admin && (
        <>
          <NavLink
            to="/addRestaurant"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-brand-600" : ""}`
            }
          >
            Add Restaurant
          </NavLink>
          <NavLink
            to="/driver"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-brand-600" : ""}`
            }
          >
            Add Driver
          </NavLink>
        </>
      )}
      <Link
        to="/"
        onClick={handleLogOut}
        className="rounded-full border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-700 hover:border-brand-500 hover:text-brand-600 transition-colors"
      >
        Sign Out
      </Link>
    </>
  )

  const notSignedIn = (
    <>
      <CartLink cartCount={cartCount} />
      <Link
        to="/sign-in"
        className="text-sm font-semibold text-ink-600 hover:text-brand-600 transition-colors"
      >
        Sign In
      </Link>
      <Link
        to="/sign-up"
        className="rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-500/30 hover:bg-brand-600 transition-colors"
      >
        Sign Up
      </Link>
    </>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-cream-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-lg font-extrabold text-white">
            W
          </span>
          <span className="text-xl font-extrabold tracking-tight text-ink-900">
            wasel
          </span>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <NavLink
            to="/partner"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-brand-600" : ""}`
            }
          >
            Partner with us
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-brand-600" : ""}`
            }
          >
            Help
          </NavLink>
        </div>

        <div className="flex items-center gap-6">
          {user ? signedIn : notSignedIn}
        </div>
      </nav>
    </header>
  )
}
export default NavBar
