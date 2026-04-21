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
    <form onSubmit={handleSubmit}>
      <h1>Update Restaurant Info</h1>
      <input
        name="name"
        value={restForm.name}
        onChange={(e) => setRestForm({ ...restForm, name: e.target.value })}
        placeholder="Name"
      />
      <input
        name="location"
        value={restForm.location}
        onChange={(e) => setRestForm({ ...restForm, location: e.target.value })}
        placeholder="Location"
      />
      <input
        name="phoneNumber"
        value={restForm.phoneNumber}
        onChange={(e) =>
          setRestForm({ ...restForm, phoneNumber: e.target.value })
        }
        placeholder="Phone"
      />
      <input
        name="logo"
        value={restForm.logo}
        onChange={(e) => setRestForm({ ...restForm, logo: e.target.value })}
        placeholder="Logo URL"
      />
      <button type="submit">Save Changes</button>
    </form>
  )
}
export default UpdateRestaurant
