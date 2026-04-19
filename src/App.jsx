import { useState, useEffect } from "react"
import Home from "./components/Home"
import axios from "axios"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import UserPage from "./components/UserPage"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* restaurants={restaurants} />} /> */}
          <Route path="/user" element={<UserPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App
