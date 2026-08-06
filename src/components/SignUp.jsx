import axios from "axios"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const SignUp = () => {
  let navigate = useNavigate()

  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const [formValues, setFormValues] = useState(initialState)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/auth/sign-up", formValues)
      setFormValues(initialState)
      navigate("/sign-in")
    } catch (err) {
      setError("Could not create account. Please check your details.")
    }
  }

  const inputClass =
    "rounded-lg border border-ink-200 px-3.5 py-2.5 text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
  const labelClass = "text-sm font-semibold text-ink-700"

  return (
    <div className="mx-auto flex max-w-md flex-col px-6 py-16">
      <h1 className="text-center text-3xl font-extrabold text-ink-900">
        Create your account
      </h1>
      <p className="mt-2 text-center text-ink-500">
        Join Wasel and start ordering
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm"
      >
        {error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
            {error}
          </p>
        )}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="username" className={labelClass}>
            Username
          </label>
          <input
            name="username"
            type="text"
            placeholder="John Doe"
            onChange={handleChange}
            value={formValues.username}
            required
            autoComplete="username"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="example@example.com"
            onChange={handleChange}
            value={formValues.email}
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className={labelClass}>
            Password
          </label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={formValues.password}
            required
            autoComplete="off"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="confirmPassword" className={labelClass}>
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            value={formValues.confirmPassword}
            required
            autoComplete="off"
            className={inputClass}
          />
        </div>
        <button
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.password === formValues.confirmPassword)
          }
          className="mt-2 rounded-full bg-brand-500 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-ink-200"
        >
          Register
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-ink-500">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-semibold text-brand-600 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
export default SignUp
