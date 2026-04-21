import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const UpdateFood = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [foodForm, setFoodForm] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
    restaurant: "",
  })

  useEffect(() => {
    const getFood = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/food/${id}`)
        setFoodForm(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFood()
  }, [id])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(`http://localhost:3000/food/${id}`, foodForm)
      navigate(`/${foodForm.restaurant}`) // Redirect back to the specific restaurant page
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setFoodForm({ ...foodForm, [event.target.name]: event.target.value })
  }

  return (
    <>
      <h1>Update Food</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={foodForm.name}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={foodForm.price}
        />
        <label>Description</label>
        <textarea
          name="description"
          onChange={handleChange}
          value={foodForm.description}
        ></textarea>
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={foodForm.image}
        />
        <button type="submit">UPDATE</button>
      </form>
    </>
  )
}
export default UpdateFood
