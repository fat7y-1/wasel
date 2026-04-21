import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddDriver = () => {
  const navigate = useNavigate()

  const [driverForm, setDriverForm] = useState({
    driverName: "",
    phoneNumber: "",
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`http://localhost:3000/driver`, driverForm)
      navigate(`/`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setDriverForm({ ...driverForm, [event.target.name]: event.target.value })
  }

  return (
    <>
      <h1>Add New Driver</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="driverName">Driver Name</label>
        <input
          type="text"
          name="driverName"
          onChange={handleChange}
          value={driverForm.driverName}
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="number"
          name="phoneNumber"
          onChange={handleChange}
          value={driverForm.phoneNumber}
        />

        <button type="submit">Add Driver</button>
      </form>
    </>
  )
}

export default AddDriver
