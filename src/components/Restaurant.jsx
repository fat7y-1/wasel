import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import AddFood from "./AddFood"

const Restaurant = ({ user }) => {
  const { id } = useParams()
  const [foods, setFoods] = useState([])

  const init = {
    name: "",
    price: 0,
    description: "",
    image: "",
    restaurant: id,
  }

  const [foodForm, setFoodForm] = useState(init)

  console.log(id)
  useEffect(() => {
    const getFood = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/food/${id}`)
        setFoods(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFood()
  }, [])

  useEffect(() => {
    const getfoodForm = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/food/${id}`)
        setFoodForm(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getfoodForm()
  }, [])

  const handleDeleteFood = async (foodId) => {
    try {
      await axios.delete(`http://localhost:3000/food/${foodId}`)
      setFoods(foods.filter((food) => food._id !== foodId))
    } catch (error) {
      console.log(error)
    }
  }

  if (!user) {
    return <div>You must sign in or sign up if you dont have account</div>
  }
  return (
    <>
      <div>
        {user.admin === true ? (
          <Link to={`/addFood/${id}`}>ADD Food</Link>
        ) : (
          <></>
        )}
        {Array.isArray(foods) &&
          foods.map((food) => (
            <div key={food._id}>
              <h1>{food.name}</h1>
              <img src={food.image} alt={food.name} />
              <p>{food.description}</p>
              <p>{food.price}</p>
              <Link to={`/food/update/${food._id}`}>Update</Link>
            </div>
          ))}
      </div>
    </>
  )
}

export default Restaurant
