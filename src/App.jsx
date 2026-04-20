import { useState, useEffect, use } from "react"
import Home from "./components/Home"
import axios from "axios"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import UserPage from "./components/UserPage"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Restaurant from "./components/Restaurant"
import AddFood from "./components/AddFood"
import { useNavigate } from "react-router-dom"

function App() {
  const [restaurants, setRestaurant] = useState([])
  const [user, setUser] = useState(null)
  const [order, setOrder] = useState([])

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/restaurant`)
        setRestaurant(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getRestaurant()
  }, [])

  const handleDeleteRestaurant = async (restId) => {
    try {
      console.log(restId)
      await axios.delete(`http://localhost:3000/restaurant/${restId}`)
      setRestaurant(restaurants.filter((rest) => rest._id !== restId))
    } catch (error) {
      console.log(error)
    }
  }
  //check the token
  const checkToken = async () => {
    try {
      const userData = await axios.get("http://localhost:3000/auth/session")
      setUser(userData)
    } catch (error) {
      console.log(error)
    }
  }
  //sign out
  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }
  console.log(user)
  useEffect(() => {
    const getOrder = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/order/${user.id}`
        )
        console.log(`response.data (Order):${user.id}`)
        console.log(`response.data (Order): ${response.data}`)
        setOrder(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getOrder()
  }, [2])

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  axios.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("token")

      if (token) {
        config.headers["authorization"] = `Bearer ${token}`
      }

      return config
    },
    async (error) => {
      console.log({ msg: "Axios Interceptor Error!", error })
      throw error
    }
  )
  return (
    <>
      <div>
        <NavBar user={user} handleLogOut={handleLogOut} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                restaurants={restaurants}
                handleDeleteRestaurant={handleDeleteRestaurant}
              />
            }
          />
          <Route
            path="/:id"
            element={<Restaurant restaurants={restaurants} />}
          />
          <Route path="/addFood/:id" element={<AddFood />} />
          <Route
            path="/user"
            element={<UserPage user={user} order={order} />}
          />
          <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App
