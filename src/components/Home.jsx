import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Home = ({ restaurants, handleDeleteRestaurant, user }) => {
  const [filter, setFilter] = useState(false) //to show or hide the filter nav
  const [choice, setChoice] = useState(null)
  const [filteredRestaurant, setFilteredRestaurant] = useState(false)
  const [mapFilteredRestaurant, setMapFilteredRestaurant] = useState([])

  const handleChange = (e) => {
    setChoice(e.target.value)
  }
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const res = await axios.get(
        `http://localhost:3000/restaurant/category/${choice}`
      )
      console.log(res.data)
      setMapFilteredRestaurant(res.data)
      setFilteredRestaurant(!filteredRestaurant)
      setChoice(null)
    } catch (error) {
      throw error
    }
  }

  if (user) {
    return (
      <div className="linkAdmin">
        <h1 className="wasel">Wasel </h1>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2676/2676824.png"
          alt="filter"
          onClick={() => {
            setFilter(!filter)
          }}
        />
        {filter ? (
          <nav>
            <h1>filter: </h1>
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="radio"
                  name="restaurantType"
                  value="Desserts"
                  checked={choice === "Desserts"}
                  onChange={handleChange}
                />
                Desserts
              </label>
              <label>
                <input
                  type="radio"
                  name="restaurantType"
                  value="Italian Pizza"
                  checked={choice === "Italian Pizza"}
                  onChange={handleChange}
                />
                Italian Pizza
              </label>
              <label>
                <input
                  type="radio"
                  name="restaurantType"
                  value="American"
                  checked={choice === "American"}
                  onChange={handleChange}
                />
                American
              </label>
              <label>
                <input
                  type="radio"
                  name="restaurantType"
                  value="Pasta"
                  checked={choice === "Pasta"}
                  onChange={handleChange}
                />
                Pasta
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="restaurantType"
                  value="Fried Chicken"
                  checked={choice === "Fried Chicken"}
                  onChange={handleChange}
                />
                Fried Chicken
              </label>
              <label>
                <input
                  type="radio"
                  name="restaurantType"
                  value="Ice Cream"
                  checked={choice === "Ice Cream"}
                  onChange={handleChange}
                />
                Ice Cream
              </label>
              <label>
                <input
                  type="radio"
                  name="restaurantType"
                  value="Traditional"
                  checked={choice === "Traditional"}
                  onChange={handleChange}
                />
                Traditional
              </label>
              <label>
                <input
                  type="radio"
                  name="restaurantType"
                  value="Egyptian"
                  checked={choice === "Egyptian"}
                  onChange={handleChange}
                />
                Egyptian
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="restaurantType"
                  value="Healthy"
                  checked={choice === "Healthy"}
                  onChange={handleChange}
                />
                Healthy
              </label>
              <label>
                <input
                  type="radio"
                  name="restaurantType"
                  value="Sandwiches"
                  checked={choice === "Sandwiches"}
                  onChange={handleChange}
                />
                Sandwiches
              </label>
              <button type="submit">Filter</button>
            </form>
            <br />
          </nav>
        ) : (
          <></>
        )}
        {/*       after filter      */}
        {user.admin ? (
          <>
            <Link to={`/addRestaurant`} className="nav-link">
              add New Restaurant
            </Link>
            <Link to={`/driver`}>
              <h3>Add New Driver Details</h3>
            </Link>
          </>
        ) : (
          <></>
        )}

        {/*        user.admin ^        */}

        <div className="container">
          {
            filteredRestaurant
              ? mapFilteredRestaurant.map((restaurant) => (
                  // this part is the one that I'll edit
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
                    {/*     admin part     */}
                    {user.admin ? (
                      <button
                        onClick={() => handleDeleteRestaurant(restaurant._id)}
                      >
                        Delete
                      </button>
                    ) : (
                      <></>
                    )}{" "}
                    {/* end of user.admin */}
                  </>
                ))
              : /*end od .map to list all restaurants */
                restaurants.map((restaurant) => (
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
                    {/*     admin part     */}
                    {user.admin ? (
                      <button
                        onClick={() => handleDeleteRestaurant(restaurant._id)}
                      >
                        Delete
                      </button>
                    ) : (
                      <></>
                    )}{" "}
                    {/* end of user.admin */}
                  </>
                )) /*end od .map to list all restaurants */
          }
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
