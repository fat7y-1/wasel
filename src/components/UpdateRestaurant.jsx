import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const UpdateRestaurant = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [restForm, setRestForm] = useState({
    name: "",
    location: "",
    phoneNumber: "",
    logo: "",
  })

  useEffect(() => {
    const getRest = async () => {
      const response = await axios.get(`http://localhost:3000/restaurant/${id}`)
      setRestForm(response.data)
    }
    getRest()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3000/restaurant/${id}`, restForm)
    navigate(`/${id}`)
  }

  return (
    <div className="admin-container">
      <div className="form-card update-card">
        <h1 className="form-title">Update Restaurant Info</h1>
        <p className="form-subtitle">
          Modify the details for <strong>{restForm.name}</strong>
        </p>

        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Restaurant Name</label>
            <input
              id="name"
              name="name"
              value={restForm.name}
              onChange={(e) =>
                setRestForm({ ...restForm, name: e.target.value })
              }
              placeholder="Name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="location">Location (URL or Address)</label>
            <input
              id="location"
              name="location"
              value={restForm.location}
              onChange={(e) =>
                setRestForm({ ...restForm, location: e.target.value })
              }
              placeholder="Location"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              value={restForm.phoneNumber}
              onChange={(e) =>
                setRestForm({ ...restForm, phoneNumber: e.target.value })
              }
              placeholder="Phone"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="logo">Logo URL</label>
            <input
              id="logo"
              name="logo"
              value={restForm.logo}
              onChange={(e) =>
                setRestForm({ ...restForm, logo: e.target.value })
              }
              placeholder="Logo URL"
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
export default UpdateRestaurant
