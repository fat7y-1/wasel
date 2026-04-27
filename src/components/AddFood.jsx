import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
const AddFood = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [foodForm, setFoodForm] = useState([])
  // const [foodList, setFoodList] = useState([]),
  // const [editingFood, setEditingFood] = useState(null)
  const init = {
    name: "",
    price: 0,
    description: "",
    image: "",
    restaurant: id,
  }
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
  }, [])

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
  const handleEditClick = (foodItem) => {
    setEditingFood(foodItem)
  }

  return (
    <div className="admin-container">
      <div className="form-card">
        <h1 className="form-title">Add New Food</h1>
        <p className="form-subtitle">Create a new item for the menu</p>

        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Dish Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Spicy Zinger Burger"
              onChange={handleChange}
              value={foodForm.name}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              placeholder="0.00"
              onChange={handleChange}
              value={foodForm.price}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="What's in this dish? (ingredients, spices, etc.)"
              onChange={handleChange}
              value={foodForm.description}
              rows="4"
              required
            ></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="https://image-link.com/food.png"
              onChange={handleChange}
              value={foodForm.image}
              required
            />
          </div>

          <button className="submit-btn food-btn" type="submit">
            Add Food Item
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddFood
