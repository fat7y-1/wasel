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
import UpdateFood from "./components/UpdateFood"

function App() {
  const [restaurants, setRestaurant] = useState([])
  const [user, setUser] = useState(null)
  const [order, setOrder] = useState([])

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/restaurant`)
        setRestaurant(response.data)
        // console.log(response.data)
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

  const checkToken = async () => {
    const userData = await CheckSession()
    setUser(userData)
  }

  const handleLogOut = () => {
    setUser(null)
    // console.log(user)
    localStorage.clear()
  }
  const RegisterUser = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/auth/sign-up", data)
      return res.data
    } catch (error) {
      throw error
    }
  }

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
          <Route
            path="/sign-up"
            element={<SignUp RegisterUser={RegisterUser} />}
          />

          <Route path="/food/update/:id" element={<UpdateFood />} />
        </Routes>
      </div>
    </>
  )
}

export default App
