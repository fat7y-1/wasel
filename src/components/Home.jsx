import { Link } from "react-router-dom"

const Home = ({ restaurants, handleDeleteRestaurant, user }) => {
  if (user) {
    return (
      <div>
        <h1 className="wasel">Wasel </h1>
        {user.admin ? (
          <Link to={`/addRestaurant`} className="nav-link">
            add New Restaurant
          </Link>
        ) : (
          <></>
        )}

        <div className="container">
          {restaurants.map((restaurant) => (
            <>
              <div className="item">
                <Link to={`/${restaurant._id}`} className="nav-link">
                  <div key={restaurant._id} className="restaurant">
                    <h3>{restaurant.name}</h3>
                    <img src={restaurant.logo} alt={restaurant.name} />
                  </div>
                </Link>
                <p>
                  Location:
                  <a href={restaurant.location}>{restaurant.location}</a>
                </p>

                <p>Phone Number: {restaurant.phoneNumber}</p>
              </div>
              {user.admin ? (
                <button onClick={() => handleDeleteRestaurant(restaurant._id)}>
                  Delete
                </button>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h1 className="wasel">Wasel </h1>

        <div className="container">
          {restaurants.map((restaurant) => (
            <>
              <Link to={`/${restaurant._id}`} className="nav-link">
                <div key={restaurant._id}>
                  <h3>{restaurant.name}</h3>
                  <img src={restaurant.logo} alt={restaurant.name} />
                  <p>Location:{restaurant.location} </p>
                  <p>Phone Number: {restaurant.phoneNumber}</p>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    )
  }
}
export default Home
