import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const AddRestaurant = ({ restaurants, setRestaurant }) => {
  const navigate = useNavigate()
  const init = {
    name: "",
    location: "",
    logo: "",
    phoneNumber: "",
    type: "",
  }
  const [restaurantForm, setRestaurantForm] = useState(init)

  const handleChange = (event) => {
    setRestaurantForm({
      ...restaurantForm,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post(
        `http://localhost:3000/restaurant`,
        restaurantForm
      )
      let list = [...restaurants]
      list.push(res.data)
      setRestaurant(list)
      setRestaurantForm(init)

      navigate(`/`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="admin-container">
      <div className="form-card">
        <h1 className="form-title">Add New Restaurant</h1>
        <p className="form-subtitle">
          Enter the details to register a new partner
        </p>

        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Restaurant Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Burger Palace"
              onChange={handleChange}
              value={restaurantForm.name}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="location">Location (URL or Address)</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Google Maps link"
              onChange={handleChange}
              value={restaurantForm.location}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="logo">Logo URL</label>
            <input
              type="text"
              id="logo"
              name="logo"
              placeholder="https://image-link.com/logo.png"
              onChange={handleChange}
              value={restaurantForm.logo}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="973XXXXXXXX"
              onChange={handleChange}
              value={restaurantForm.phoneNumber}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="type">Cuisine Type</label>
            <input
              type="text"
              id="type"
              name="type"
              placeholder="e.g. Italian, Fast Food"
              onChange={handleChange}
              value={restaurantForm.type}
              required
            />
          </div>

          <button className="submit-btn" type="submit">
            Create Restaurant
          </button>
        </form>
      </div>
    </div>
  )
}
export default AddRestaurant
