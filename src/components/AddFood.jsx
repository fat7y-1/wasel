import { useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import {
  FormShell,
  FormField,
  SubmitButton,
  inputClass,
} from "./ui/FormShell"

const AddFood = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [foodForm, setFoodForm] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
    restaurant: id,
  })

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
    <FormShell title="Add New Food" subtitle="Create a new item for the menu">
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <FormField label="Dish Name">
          <input
            type="text"
            name="name"
            placeholder="e.g. Spicy Zinger Burger"
            onChange={handleChange}
            value={foodForm.name}
            required
            className={inputClass}
          />
        </FormField>

        <FormField label="Price ($)">
          <input
            type="number"
            name="price"
            step="0.01"
            placeholder="0.00"
            onChange={handleChange}
            value={foodForm.price}
            required
            className={inputClass}
          />
        </FormField>

        <FormField label="Description">
          <textarea
            name="description"
            placeholder="What's in this dish? (ingredients, spices, etc.)"
            onChange={handleChange}
            value={foodForm.description}
            rows="4"
            required
            className={inputClass}
          ></textarea>
        </FormField>

        <FormField label="Image URL">
          <input
            type="text"
            name="image"
            placeholder="https://image-link.com/food.png"
            onChange={handleChange}
            value={foodForm.image}
            required
            className={inputClass}
          />
        </FormField>

        <SubmitButton>Add Food Item</SubmitButton>
      </form>
    </FormShell>
  )
}

export default AddFood
