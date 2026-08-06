import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import {
  FormShell,
  FormField,
  SubmitButton,
  inputClass,
} from "./ui/FormShell"

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
    <FormShell
      title="Update Restaurant Info"
      subtitle={
        <>
          Modify the details for <strong>{restForm.name}</strong>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <FormField label="Restaurant Name">
          <input
            name="name"
            value={restForm.name}
            onChange={(e) =>
              setRestForm({ ...restForm, name: e.target.value })
            }
            placeholder="Name"
            required
            className={inputClass}
          />
        </FormField>

        <FormField label="Location (URL or Address)">
          <input
            name="location"
            value={restForm.location}
            onChange={(e) =>
              setRestForm({ ...restForm, location: e.target.value })
            }
            placeholder="Location"
            required
            className={inputClass}
          />
        </FormField>

        <FormField label="Phone Number">
          <input
            name="phoneNumber"
            value={restForm.phoneNumber}
            onChange={(e) =>
              setRestForm({ ...restForm, phoneNumber: e.target.value })
            }
            placeholder="Phone"
            required
            className={inputClass}
          />
        </FormField>

        <FormField label="Logo URL">
          <input
            name="logo"
            value={restForm.logo}
            onChange={(e) =>
              setRestForm({ ...restForm, logo: e.target.value })
            }
            placeholder="Logo URL"
            required
            className={inputClass}
          />
        </FormField>

        <SubmitButton>Save Changes</SubmitButton>
      </form>
    </FormShell>
  )
}
export default UpdateRestaurant
