import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import AddFood from "./AddFood"
const Restaurant = () => {
  const { id } = useParams()
  const [foods, setFoods] = useState([])
  const [bill, setBill] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState([])
  console.log(id)

  const addCart = (food, quantity1) => {
    const newOrder = {
      foodItem: food._id,
      count: quantity1.count,
      price: food.price,
      name: food.name,
    }
    setCart([...addCart, newOrder])
    alert(`${food.name} is Add to Cart`)
  }

  useEffect(() => {
    const getFood = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/food/${id}`)
        setFoods(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFood()
  }, [])

  const handleDeleteFood = async (foodId) => {
    try {
      await axios.delete(`http://localhost:3000/food/${foodId}`)
      setFoods(foods.filter((food) => food._id !== foodId))
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitOrder = async () => {
    const totalPrice = cart.reduce(
      (total, food) => total + food.price * food.count,
      0
    )
    const orderData = {
      totalPrice: totalPrice,
      food: cart,
      user: userId,
    }

    try {
      await axios.post(`http://localhost:3000/order/${userId}`, orderData)
      navigate(`/order`)
      // console.log(quantity)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    // setBill({ ...bill, [event.target.bill]: event.target.value })
    setQuantity({ ...quantity, [event.target.quantity]: event.target.value })
  }

  return (
    <>
      <div>
        <Link to={`/addFood/${id}`}>ADD Food</Link>
        {foods.map((food) => (
          <div>
            <h1>{food.name}</h1>
            <img src={food.image} alt={food.name} />
            <p>{food.description}</p>
            <p>$ {food.price}</p>
            <form onSubmit={handleSubmitOrder}>
              <label htmlFor="price">Quantity:</label>
              <input
                type="number"
                name="quantity"
                onChange={handleChange}
                value={quantity}
                min="1"
              />

              <button onClick={() => addCart(food, quantity1)}>
                Add to Cart
              </button>
            </form>
          </div>
        ))}
      </div>
    </>
  )
}

export default Restaurant
