import { createRoot } from "react-dom/client"
import axios from "axios"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"

axios.defaults.baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
