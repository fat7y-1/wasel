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
      delivery: true,
    }
    try {
      await axios.post(`http://localhost:3000/order/${user.id}`, orderData)
      await getOrder(user.id)
      setCart([])
      navigate("/user")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="order-container">
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart-msg">
          <h2>Your Order is Empty</h2>
          <p>Go back and add some delicious food!</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, index) => (
              <div key={index} className="order-item">
                <p className="item-details">
                  <span className="item-count">{item.count}x</span> {item.name}
                </p>
                <p className="item-price">
                  ${(item.price * item.count).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="total-section">
            <h3>Total Price</h3>
            <h3 className="total-amount">${totalPrice.toFixed(2)}</h3>
          </div>

          <button className="confirm-btn" onClick={handleSubmitOrder}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  )
}

export default Order
