import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {
  FormShell,
  FormField,
  SubmitButton,
  inputClass,
} from "./ui/FormShell"

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
        `/restaurant`,
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
    <FormShell
      title="Add New Restaurant"
      subtitle="Enter the details to register a new partner"
    >
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <FormField label="Restaurant Name">
          <input
            type="text"
            name="name"
            placeholder="e.g. Burger Palace"
            onChange={handleChange}
            value={restaurantForm.name}
            required
            className={inputClass}
          />
        </FormField>

        <FormField label="Location (URL or Address)">
          <input
            type="text"
            name="location"
            placeholder="Google Maps link"
            onChange={handleChange}
            value={restaurantForm.location}
            required
            className={inputClass}
          />
        </FormField>

        <FormField label="Logo URL">
          <input
            type="text"
            name="logo"
            placeholder="https://image-link.com/logo.png"
            onChange={handleChange}
            value={restaurantForm.logo}
            required
            className={inputClass}
          />
        </FormField>

        <FormField label="Phone Number">
          <input
            type="number"
            name="phoneNumber"
            placeholder="973XXXXXXXX"
            onChange={handleChange}
            value={restaurantForm.phoneNumber}
            required
            className={inputClass}
          />
        </FormField>

        <FormField label="Cuisine Type">
          <input
            type="text"
            name="type"
            placeholder="e.g. Italian, Fast Food"
            onChange={handleChange}
            value={restaurantForm.type}
            required
            className={inputClass}
          />
        </FormField>

        <SubmitButton>Create Restaurant</SubmitButton>
      </form>
    </FormShell>
  )
}
export default AddRestaurant
