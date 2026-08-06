import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {
  FormShell,
  FormField,
  SubmitButton,
  inputClass,
} from "./ui/FormShell"

const AddDriver = () => {
  const navigate = useNavigate()

  const [driverForm, setDriverForm] = useState({
    driverName: "",
    phoneNumber: "",
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`/driver`, driverForm)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setDriverForm({ ...driverForm, [event.target.name]: event.target.value })
  }

  return (
    <FormShell
      icon="🚚"
      title="Register Driver"
      subtitle="Add a new driver to the delivery fleet"
    >
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <FormField label="Full Name">
          <input
            type="text"
            name="driverName"
            placeholder="e.g. Ahmed Ali"
            onChange={handleChange}
            value={driverForm.driverName}
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
            value={driverForm.phoneNumber}
            required
            className={inputClass}
          />
        </FormField>

        <SubmitButton>Add Driver to System</SubmitButton>
      </form>
    </FormShell>
  )
}

export default AddDriver
