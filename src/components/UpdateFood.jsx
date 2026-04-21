import { useEffect, useState } from "react"
import axios from "axios"
import AddFood from "./AddFood"
import { useParams } from "react-router-dom"
import Restaurant from "./Restaurant"

const UpdateFood = () => {
  const { id } = useParams()

  const init = {
    name: "",
    price: 0,
    description: "",
    image: "",
    restaurant: id,
  }
  const [foodForm, setFoodForm] = useState(init)

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(`http://localhost:3000/food/${id}`, foodForm)
      navigate(`/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = (event) => {
    setFoodForm({ ...foodForm, [event.target.name]: event.target.value })
  }
  const handleEditClick = (foodItem) => {
    setEditingFood(foodItem)
  }

  return (
    <>
      <h1>Update Food</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={foodForm.name}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={foodForm.price}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          onChange={handleChange}
          value={foodForm.description}
        ></textarea>
        <label htmlFor="image">Image</label>
        <input type="text" onChange={handleChange} value={foodForm.image} />
        <button type="submit">UPDATE</button>
        <button
          onClick={() =>
            handleUpdateFood(food._id, { name: "Updated Name", price: [] })
          }
        ></button>
      </form>
    </>
  )
}

export default UpdateFood
