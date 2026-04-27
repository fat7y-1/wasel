import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import UserPage from "./UserPage"

const Restaurant = ({ cart, setCart, user }) => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()
  const [listFood, setListFood] = useState([])

  const handleDeleteFood = async (foodId) => {
    try {
      await axios.delete(`http://localhost:3000/food/${foodId}`)
      setListFood(listFood.filter((food) => food._id !== foodId))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getFood = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/food/${id}`)
        setListFood(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFood()
  }, [id])

  const addCart = (food, selectQuantity) => {
    const newOrderItem = {
      foodItem: food._id,
      count: selectQuantity,
      price: food.price,
      name: food.name,
    }

    setCart([...cart, newOrderItem])
    setQuantity(1)

    alert("added to cart")
  }

  if (!user) {
    return <div>You must sign in or sign up if you dont have account</div>
  }
  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Menu</h1>
        <div className="header-links">
          {user.admin && (
            <Link to={`/addFood/${id}`} className="admin-btn">
              + Add Food
            </Link>
          )}
          <Link to={`/order`} className="cart-link">
            🛒 View Cart ({cart.length})
          </Link>
        </div>
      </div>

      <div className="menu-grid">
        {listFood.map((food) => (
          <div key={food._id} className="food-card">
            <div className="food-image-wrapper">
              <img src={food.image} alt={food.name} />
              <span className="price-tag">${food.price}</span>
            </div>

            <div className="food-info">
              <h3 className="desc">{food.name}</h3>
              <p className="desc">{food.description}</p>
              <div className="order-controls">
                <div className="qty-input">
                  <label>Qty:</label>
                  <input
                    type="number"
                    id={food._id}
                    min={1}
                    defaultValue={1}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                </div>
                <button
                  className="add-cart-btn"
                  onClick={() => addCart(food, quantity)}
                >
                  ADD TO CART
                </button>
              </div>

              {user.admin && (
                <div className="admin-controls">
                  <Link to={`/food/update/${food._id}`} className="update-link">
                    Edit
                  </Link>
                  <button
                    className="delete-food-btn"
                    onClick={() => handleDeleteFood(food._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Restaurant
