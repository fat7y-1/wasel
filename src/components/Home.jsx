import { Link } from "react-router-dom"

const Home = ({ restaurants, handleDeleteRestaurant, user }) => {
  if (user) {
    return (
      <div className="linkAdmin">
        <h1 className="wasel">Wasel </h1>
        <div>
          {user.admin ? (
            <>
              <Link to={`/addRestaurant`} className="nav-link">
                <h3>add New Restaurant</h3>
              </Link>
              <Link to={`/driver`} className="nav-link">
                <h3>Add New Driver Details</h3>
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="container">
          {restaurants.map((restaurant) => (
            <>
              <div className="item">
                <div>
                  <Link to={`/${restaurant._id}`} className="nav-link">
                    <div key={restaurant._id} className="restaurant">
                      <h3>{restaurant.name}</h3>
                      <img src={restaurant.logo} alt={restaurant.name} />
                    </div>
                  </Link>
                  <p>
                    📍Location:
                    <a className="linkAddress" href={restaurant.location}>
                      Click here
                    </a>
                  </p>

                  <p>Phone Number: {restaurant.phoneNumber}</p>
                </div>

                {user.admin ? (
                  <button
                    className="buttonFun"
                    onClick={() => handleDeleteRestaurant(restaurant._id)}
                  >
                    Delete
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h1 className="wasel">Wasel</h1>

        <div className="container">
          {restaurants.map((restaurant) => (
            <div className="item" key={restaurant._id}>
              <div>
                <Link to={`/${restaurant._id}`} className="nav-link">
                  <div className="restaurant">
                    <h3>{restaurant.name}</h3>
                    <img src={restaurant.logo} alt={restaurant.name} />
                  </div>
                </Link>

                <p>
                  📍Location:
                  <a className="linkAddress" href={restaurant.location}>
                    Click here
                  </a>
                </p>
                <p>Phone Number: {restaurant.phoneNumber}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default Home
