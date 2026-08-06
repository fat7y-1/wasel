import { useMemo, useState } from "react"
import { Link } from "react-router-dom"

const RestaurantCard = ({ restaurant, isAdmin, onDelete }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
    <Link to={`/${restaurant._id}`}>
      <div className="flex aspect-4/3 w-full items-center justify-center overflow-hidden bg-white p-6">
        <img
          src={restaurant.logo}
          alt={restaurant.name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>

    <div className="p-4">
      <div className="flex items-start justify-between gap-2">
        <Link to={`/${restaurant._id}`}>
          <h3 className="text-lg font-bold text-ink-900 hover:text-brand-600">
            {restaurant.name}
          </h3>
        </Link>
        {restaurant.type && (
          <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
            {restaurant.type}
          </span>
        )}
      </div>

      <p className="mt-1 text-sm text-ink-500">
        {restaurant.phoneNumber && `📞 ${restaurant.phoneNumber}`}
      </p>

      {restaurant.location && (
        <a
          href={restaurant.location}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-block text-sm font-medium text-brand-600 hover:underline"
        >
          📍 View location
        </a>
      )}

      {isAdmin && (
        <button
          onClick={() => onDelete(restaurant._id)}
          className="mt-3 w-full rounded-lg border border-red-200 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
        >
          Delete Restaurant
        </button>
      )}
    </div>
  </div>
)

const CardSkeleton = () => (
  <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm">
    <div className="aspect-4/3 w-full animate-pulse bg-ink-100" />
    <div className="p-4">
      <div className="h-4 w-2/3 animate-pulse rounded bg-ink-100" />
      <div className="mt-3 h-3 w-1/2 animate-pulse rounded bg-ink-100" />
      <div className="mt-2 h-3 w-1/3 animate-pulse rounded bg-ink-100" />
    </div>
  </div>
)

const Home = ({ restaurants, handleDeleteRestaurant, user, loading }) => {
  const [query, setQuery] = useState("")
  const [activeCuisine, setActiveCuisine] = useState("All")

  const cuisines = useMemo(() => {
    const types = restaurants.map((r) => r.type).filter(Boolean)
    return ["All", ...new Set(types)]
  }, [restaurants])

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((r) => {
      const matchesQuery = r.name
        ?.toLowerCase()
        .includes(query.trim().toLowerCase())
      const matchesCuisine =
        activeCuisine === "All" || r.type === activeCuisine
      return matchesQuery && matchesCuisine
    })
  }, [restaurants, query, activeCuisine])

  return (
    <div>
      <section className="bg-linear-to-br from-brand-500 to-brand-700">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Great food, delivered fast.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-50">
            Order from the best restaurants near you, and have it at your
            door in minutes.
          </p>

          <div className="mx-auto mt-8 flex max-w-lg items-center gap-2 rounded-full bg-white p-1.5 shadow-lg">
            <span className="pl-3 text-ink-400">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search restaurants..."
              className="w-full bg-transparent px-1 py-2 text-ink-900 placeholder:text-ink-400 focus:outline-none"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-ink-900">
            Restaurants near you
          </h2>

          {cuisines.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => setActiveCuisine(cuisine)}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                    activeCuisine === cuisine
                      ? "bg-ink-900 text-white"
                      : "bg-white text-ink-600 border border-ink-200 hover:border-brand-400"
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : filteredRestaurants.length === 0 ? (
          <p className="text-ink-500">
            {restaurants.length === 0
              ? "No restaurants available yet."
              : "No restaurants match your search."}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant._id}
                restaurant={restaurant}
                isAdmin={user?.admin}
                onDelete={handleDeleteRestaurant}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
export default Home
