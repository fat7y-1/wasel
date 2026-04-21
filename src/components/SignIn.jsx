import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()

  const initialState = { email: "", password: "" }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const userData = await axios.post(
        "http://localhost:3000/auth/sign-in",
        formValues
      )
      localStorage.setItem("token", userData.data.token)
      console.log(userData)
      setFormValues(initialState)
      setUser(userData.data.user)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="col signin">
      <img src="/images/signin.png" alt="Sign In Title Image" />
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="example@example.com"
            onChange={handleChange}
            value={formValues.email}
            required
            autoComplete="email"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={formValues.password}
            required
            autoComplete="off"
          />
        </div>
        <button disabled={!formValues.email || !formValues.password}>
          Sign In
        </button>
      </form>
    </div>
  )
}
export default SignIn
