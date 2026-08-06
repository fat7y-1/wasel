import { useState, useEffect, use } from "react"
import Home from "./components/Home"
import axios from "axios"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
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
import UpdateRestaurant from "./components/UpdateRestaurant"
import NotFound from "./components/NotFound"
import About from "./components/pages/About"
import Careers from "./components/pages/Careers"
import Blog from "./components/pages/Blog"
import Press from "./components/pages/Press"
import Help from "./components/pages/Help"
import Partner from "./components/pages/Partner"
import Drive from "./components/pages/Drive"
import Terms from "./components/pages/Terms"
import Privacy from "./components/pages/Privacy"
import Cookies from "./components/pages/Cookies"

function App() {
  const [restaurants, setRestaurant] = useState([])
  const [user, setUser] = useState(null)
  const [orders, setOrder] = useState([])
  const [cart, setCart] = useState([])
  const [loadingRestaurants, setLoadingRestaurants] = useState(true)

  const getOrder = async (id) => {
    try {
      const response = await axios.get(`/order/${id}`)
      setOrder(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const response = await axios.get(`/restaurant`)
        setRestaurant(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoadingRestaurants(false)
      }
    }
    getRestaurant()
  }, [])
  const checkToken = async () => {
    try {
      const userData = await axios.get("/auth/session")
      setUser(userData.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteRestaurant = async (restId) => {
    try {
      console.log(restId)
      await axios.delete(`/restaurant/${restId}`)
      setRestaurant(restaurants.filter((rest) => rest._id !== restId))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const userId = user?.id

    if (userId) {
      getOrder(userId)
    }
    console.log(orders)
  }, [user])

  const handleLogOut = () => {
    setUser(null)
    // console.log(user)
    localStorage.clear()
  }

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
  console.log(orders)
  return (
    <>
      <div className="flex min-h-screen flex-col bg-cream-100">
        <NavBar
          user={user}
          handleLogOut={handleLogOut}
          cartCount={cart.length}
        />
        <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                restaurants={restaurants}
                handleDeleteRestaurant={handleDeleteRestaurant}
                user={user}
                loading={loadingRestaurants}
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

          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/press" element={<Press />} />
          <Route path="/help" element={<Help />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
