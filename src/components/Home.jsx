import { Link } from "react-router-dom"

const Home = ({ restaurants, handleDeleteRestaurant, user }) => {
  return (
    <div>
      <h1>Wasel</h1>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            className="restaurant-card"
            style={{ marginBottom: "20px" }}
          >
            <Link
              to={`/${restaurant._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>
                <h3>{restaurant.name}</h3>
                <img
                  src={restaurant.logo}
                  alt={restaurant.name}
                  style={{ width: "200px" }}
                />
                <p>Location: {restaurant.location}</p>
                <p>Phone Number: {restaurant.phoneNumber}</p>
              </div>
            </Link>

            {/* Admin-only Delete Control */}
            {user && user.admin && (
              <button onClick={() => handleDeleteRestaurant(restaurant._id)}>
                Delete Restaurant
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
