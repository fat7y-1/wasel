import { useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
const AddFood = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const init = {
    name: "",
    price: 0,
    description: "",
    image: "",
    restaurant: id,
  }
  const [foodForm, setFoodForm] = useState([init])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`http://localhost:3000/food/${id}`, foodForm)
      navigate(`/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = (event) => {
    setFoodForm({ ...foodForm, [event.target.name]: event.target.value })
  }
  return (
    <>
      <h1>Add new food</h1>
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
        <input
          type="text"
          onChange={handleChange}
          name="image"
          value={foodForm.image}
        />

        <button type="submit">AddFood</button>
      </form>
    </>
  )
}
export default AddFood
