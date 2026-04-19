import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

const Restaurant = ({ restaurant }) => {
  const { id } = useParams()
  console.log(restaurant)
  const { addFood, setAddFood } = useState([])

  const selectedFood = restaurant.find((res) => rest._id === id)
  console.log(selectedFood)

  useEffect(() => {
    const getFood = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/food/${id}`)
        console.log(response.data)
        setAddFood(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFood()
  }, [])

  const handleDeleteFood = async (foodId) => {
    try {
      await axios.delete(`http://localhost:3000/food/${foodId}`)
      setAddFood(addFood.filter((food) => food._id !== foodId))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div key={selectedFood._id}>
      <h1>scsaca</h1>
      <img src={selectedFood.image} alt={selectedFood.name} />
      <h3>{selectedFood.name}</h3>
      <p>{selectedFood.description}</p>
      <p>${selectedFood.price}</p>
    </div>
  )
}

export default Restaurant
