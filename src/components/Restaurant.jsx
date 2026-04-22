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

    alert("added to cart")
  }

  if (!user) {
    return <div>You must sign in or sign up if you dont have account</div>
  }
  return (
    <div>
      {user.admin ? (
        <Link to={`/addFood/${id}`} className="nav-link">
          + add New food to Menu
        </Link>
      ) : (
        <></>
      )}

      <Link to={`/order`} className="nav-link">
        View Your Cart
      </Link>
      <div>
        {listFood.map((food) => (
          <div key={food._id}>
            <h1>{food.name}</h1>
            <img src={food.image} alt={food.name} />
            <p>{food.description}</p>
            <p>$ {food.price}</p>
            <label htmlFor="quantity">quantity:</label>
            <input
              type="number"
              id={food._id}
              min="1"
              defaultValue={1}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button onClick={() => addCart(food, quantity)}>ADD CART</button>

            {user.admin ? (
              <>
                <button onClick={() => handleDeleteFood(food._id)}>
                  Delete
                </button>
                <Link to={`/food/update/${food._id}`} className="nav-link">
                  Update
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Restaurant
