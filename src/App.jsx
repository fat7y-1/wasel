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
import Order from "./components/Order"
import AddRestaurant from "./components/AddRestaurant"
import UpdateFood from "./components/UpdateFood"
import AddDriver from "./components/AddDriver"

function App() {
  const [restaurants, setRestaurant] = useState([])
  const [user, setUser] = useState(null)
  const [orders, setOrder] = useState([])
  const [cart, setCart] = useState([])

  const getOrder = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/order/${id}`)
      setOrder(response.data)
    } catch (error) {
      console.log(error)
    }
  }

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
  const checkToken = async () => {
    try {
      const userData = await axios.get("http://localhost:3000/auth/session")
      setUser(userData.data)
    } catch (error) {
      console.log(error)
    }
  }

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
    try {
      const userData = await axios.get("http://localhost:3000/auth/session")
      setUser(userData.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  useEffect(() => {
    const getOrder = async () => {
      if (!user) return
      try {
        // console.log(user)
        console.log(user.id)
        const response = await axios.get(
          `http://localhost:3000/order/${user.id}`
        )
        console.log(`response.data: ${response.data}`)
        if (Object.keys(response.data[0]).length == 0) return setOrder([""])
        setOrder(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getOrder()
  }, [user])

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
  console.log(orders)
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
                user={user}
              />
            }
          />
          <Route
            path="/:id"
            element={<Restaurant cart={cart} setCart={setCart} user={user} />}
          />
          <Route
            path="/order"
            element={
              <Order
                cart={cart}
                setCart={setCart}
                user={user}
                getOrder={getOrder}
              />
            }
          />
          <Route path="/addFood/:id" element={<AddFood />} />
          <Route
            path="/user"
            element={<UserPage user={user} orders={orders} />}
          />
          <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/food/update/:id" element={<UpdateFood />} />
          <Route
            path="/addRestaurant"
            element={
              <AddRestaurant
                restaurants={restaurants}
                setRestaurant={setRestaurant}
              />
            }
          />
          <Route path="/driver" element={<AddDriver />} />
        </Routes>
      </div>
    </>
  )
}

export default App
