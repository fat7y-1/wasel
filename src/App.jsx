import { useState, useEffect } from "react"
import Home from "./components/Home"
import axios from "axios"
import "./App.css"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home restaurants={restaurants} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
