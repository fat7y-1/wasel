import { useState, useEffect } from "react"
import Home from "./components/Home"
import axios from "axios"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import UserPage from "./components/UserPage"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import { useNavigate } from "react-router-dom"

function App() {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const userData = await CheckSession()
    setUser(userData)
  }

  const handleLogOut = () => {
    setUser(null)
    console.log(user)
    localStorage.clear()
  }

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
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App
