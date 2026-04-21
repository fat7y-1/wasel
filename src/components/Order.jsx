import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

const Order = ({ cart, user, setCart, getOrder }) => {
  const navigate = useNavigate()

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  )

  const handleSubmitOrder = async () => {
    if (!user) {
      return alert("please Sign In !!")
    }

    const orderData = {
      totalPrice: totalPrice,
      food: cart,
      user: user.id,
    }
    try {
      await axios.post(`http://localhost:3000/order/${user.id}`, orderData)
      await getOrder()
      setCart([])
      navigate("/user")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <h2>Your Order</h2>
      ) : (
        <>
          {cart.map((item, index) => (
            <div>
              <p>
                {item.name} x {item.count}{" "}
              </p>
              <p>$ {item.price * item.count}</p>
            </div>
          ))}
          <h3>Total Price: $ {totalPrice}</h3>
          <button onClick={handleSubmitOrder}>Confirm Order</button>
        </>
      )}
    </div>
  )
}

export default Order
