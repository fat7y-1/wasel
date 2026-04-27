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
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setDriverForm({ ...driverForm, [event.target.name]: event.target.value })
  }

  return (
    <div className="admin-container">
      <div className="form-card">
        <div className="icon-header">
          <span className="driver-icon">🚚</span>
        </div>
        <h1 className="form-title">Register Driver</h1>
        <p className="form-subtitle">Add a new driver to the delivery fleet</p>

        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="driverName">Full Name</label>
            <input
              type="text"
              id="driverName"
              name="driverName"
              placeholder="e.g. Ahmed Ali"
              onChange={handleChange}
              value={driverForm.driverName}
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
              value={driverForm.phoneNumber}
              required
            />
          </div>

          <button className="submit-btn driver-btn" type="submit">
            Add Driver to System
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddDriver
