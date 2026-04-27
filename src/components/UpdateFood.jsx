import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const UpdateFood = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [foodForm, setFoodForm] = useState(null)

  useEffect(() => {
    const getFood = async () => {
      try {
        let response = await axios.get(
          `http://localhost:3000/food/oneFood/${id}`
        )
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
  if (!foodForm) {
    return <div>loading....</div>
  }
  // console.log(foodForm)
  return (
    <div className="admin-container">
      <div className="form-card update-card">
        <h1 className="form-title">Update Food Item</h1>
        <p className="form-subtitle">
          Modify the details for <strong>{foodForm.name}</strong>
        </p>

        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Dish Name</label>
            <input
              type="text"
              id="name"
              name="name"
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
              onChange={handleChange}
              value={foodForm.image}
              required
            />
          </div>

          <button className="submit-btn update-btn" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}
export default UpdateFood
