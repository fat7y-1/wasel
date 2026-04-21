import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

const Order = () => {
  const { id } = useParams()
  const [bill, setBill] = useState(null)

  useEffect(() => {
    const getBill = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/order/${userId}`)
        setBill(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBill()
  }, [])

  // const getOreder

  return (
    <div>
      <h1>Cart</h1>
      <h2>Your Order</h2>
    </div>
  )
}

export default Order
