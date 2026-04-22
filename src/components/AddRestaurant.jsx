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
    <>
      <h1>Add Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={restaurantForm.name}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          value={restaurantForm.location}
        />
        <label htmlFor="logo">logo</label>
        <input
          type="text"
          onChange={handleChange}
          name="logo"
          value={restaurantForm.logo}
        />
        <label htmlFor="phoneNumber">phoneNumber</label>
        <input
          type="number"
          onChange={handleChange}
          name="phoneNumber"
          value={restaurantForm.phoneNumber}
        />
        <label htmlFor="type">type</label>
        <input
          type="text"
          onChange={handleChange}
          name="type"
          value={restaurantForm.type}
        />
        <button type="submit">AddRestaurant</button>
      </form>
    </>
  )
}
export default AddRestaurant
