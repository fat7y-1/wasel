import { Link } from "react-router-dom"

const Home = ({ restaurants, handleDeleteRestaurant }) => {
  return (
    <div>
      <h1>Wasel </h1>

      <div>
        {restaurants.map((restaurant) => (
          <Link to={`/${restaurant._id}`}>
            <div key={restaurant._id}>
              <h3>{restaurant.name}</h3>
              <img src={restaurant.logo} alt={restaurant.name} />
              <p>Location:{restaurant.location} </p>
              <p>Phone Number: {restaurant.phoneNumber}</p>

              <button onClick={() => handleDeleteRestaurant(restaurant._id)}>
                Delete
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Home
