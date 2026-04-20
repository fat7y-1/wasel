import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
import AddFood from "./AddFood"
const Restaurant = () => {
  const { id } = useParams()
  const [foods, setFoods] = useState([])
  console.log(id)
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

  return (
    <>
      <div>
        <Link to={`/addFood/${id}`}>ADD Food</Link>
        {foods.map((food) => (
          <div>
            <h1>{food.name}</h1>
            <img src={food.image} alt={food.name} />
            <p>{food.description}</p>
            <p>{food.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Restaurant
