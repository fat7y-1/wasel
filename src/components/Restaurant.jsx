import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import UserPage from "./UserPage"

const Restaurant = ({ cart, setCart, user }) => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()
  const [listFood, setListFood] = useState([])

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

  return (
    <div>
      <Link to={`/addFood/${id}`}>+ add New food to Menu</Link>
      <Link to={`/order`}>View Your Cart</Link>
      <div>
        {listFood.map((food) => (
          <div key={food._id}>
            <h1>{food.name}</h1>
            <img src={food.image} alt={food.name} />
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
            {user.admin === true ? (
              <Link to={`/food/update/${food._id}`}>Update</Link>
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
