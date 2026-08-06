import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import {
  FormShell,
  FormField,
  SubmitButton,
  inputClass,
} from "./ui/FormShell"

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
      navigate(`/${foodForm.restaurant}`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setFoodForm({ ...foodForm, [event.target.name]: event.target.value })
  }
  if (!foodForm) {
    return (
      <div className="mx-auto max-w-md px-6 py-24 text-center text-ink-500">
        Loading…
      </div>
    )
  }
  return (
    <FormShell
      title="Update Food Item"
      subtitle={
        <>
          Modify the details for <strong>{foodForm.name}</strong>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <FormField label="Dish Name">
          <input
            type="text"
            name="name"
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
            onChange={handleChange}
            value={foodForm.price}
            required
            className={inputClass}
          />
        </FormField>

        <FormField label="Description">
          <textarea
            name="description"
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
            onChange={handleChange}
            value={foodForm.image}
            required
            className={inputClass}
          />
        </FormField>

        <SubmitButton>Save Changes</SubmitButton>
      </form>
    </FormShell>
  )
}
export default UpdateFood
