import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import UserPage from "./UserPage"

// // --- SUB-COMPONENT: Each food item manages its own quantity ---
// const FoodItem = ({ food, onAddToCart }) => {
//   const [qty, setQty] = useState(1)

//   return (
//     <div
//       className="food-card"
//       style={{
//         border: "1px solid #ccc",
//         padding: "15px",
//         margin: "10px",
//         borderRadius: "8px",
//       }}
//     >
//       <h1>{food.name}</h1>
//       <img
//         src={food.image}
//         alt={food.name}
//         style={{ width: "200px", borderRadius: "5px" }}
//       />
//       <p>{food.description}</p>
//       <p>
//         <strong>Price: ${food.price}</strong>
//       </p>

//       <div style={{ marginTop: "10px" }}>
//         <label htmlFor={`qty-${food._id}`}>Quantity: </label>
//         <input
//           id={`qty-${food._id}`}
//           type="number"
//           min="1"
//           max="10"
//           value={qty}
//           onChange={(e) => setQty(parseInt(e.target.value))}
//           style={{ width: "50px", marginRight: "10px" }}
//         />
//         <button
//           onClick={() => onAddToCart(food, qty)}
//           style={{
//             backgroundColor: "#28a745",
//             color: "white",
//             border: "none",
//             padding: "5px 10px",
//             cursor: "pointer",
//           }}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   )
// }

// --- MAIN COMPONENT ---
// const Restaurant1 = ({ user }) => {
//   console.log("Current User in Restaurant Page:", user)
//   const { id } = useParams() // The Restaurant ID from the URL
//   const navigate = useNavigate()

//   const [foods, setFoods] = useState([])
//   const [cart, setCart] = useState([])

//   // 1. Fetch all food items for this specific restaurant
//   useEffect(() => {
//     const getFood = async () => {
//       try {
//         let response = await axios.get(`http://localhost:3000/food/${id}`)
//         setFoods(response.data)
//       } catch (error) {
//         console.error("Error fetching food:", error)
//       }
//     }
//     if (id) getFood()
//   }, [id])

//   // 2. Add an item to the local cart state
//   const addCart1 = (food, selectedQty) => {
//     const newOrderItem = {
//       foodItem: food._id,
//       count: selectedQty,
//       price: food.price, // stored for total calculation
//       name: food.name, // stored for UI display
//     }

//     setCart([...cart, newOrderItem])
//     alert(`${selectedQty} x ${food.name} added to cart!`)
//   }

//   // 3. Calculate total and send to backend
//   const handleSubmitOrder = async () => {
//     if (!user || (!user.id && !user._id)) {
//       return alert("Please sign in to place an order!")
//     }
//     if (cart.length === 0) return alert("Your cart is empty!")

//     // Calculate Total Price: sum of (price * count)
//     const totalPrice = cart.reduce(
//       (sum, item) => sum + item.price * item.count,
//       0
//     )

//     const orderData = {
//       totalPrice: totalPrice,
//       food: cart, // The array of {foodItem, count}
//       user: user.id || user._id, // From your App.jsx user state
//       delivery: true, // Or add a toggle for this
//     }

//     try {
//       // POST to your order route
//       const response = await axios.post(
//         `http://localhost:3000/order/${user.id}`,
//         orderData
//       )
//       console.log("Order Created:", response.data)

//       // Clear cart and go to user page or a success page
//       setCart([])
//       navigate(`/user`)
//     } catch (error) {
//       console.error("Order failed:", error)
//       alert("There was an error placing your order.")
//     }
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
//         ← Back to Restaurants
//       </Link>
//       <br />
//       <Link
//         to={`/addFood/${id}`}
//         style={{ display: "inline-block", marginTop: "10px", color: "green" }}
//       >
//         + Add New Food to Menu
//       </Link>

//       <div
//         className="menu-container"
//         style={{ display: "flex", flexWrap: "wrap" }}
//       >
//         {foods.length > 0 ? (
//           foods.map((food) => (
//             <FoodItem key={food._id} food={food} onAddToCart={addCart} />
//           ))
//         ) : (
//           <p>Loading menu...</p>
//         )}
//       </div>

//       {/* --- FLOATING CART SUMMARY --- */}
//       {cart.length > 0 && (
//         <div
//           style={{
//             position: "fixed",
//             bottom: "20px",
//             right: "20px",
//             background: "white",
//             padding: "20px",
//             boxShadow: "0 0 10px rgba(0,0,0,0.2)",
//             borderRadius: "10px",
//             zIndex: 1000,
//           }}
//         >
//           <h3>Cart Summary</h3>
//           <p>Total Items: {cart.length}</p>
//           <p>
//             <strong>
//               Current Total: ${cart.reduce((s, i) => s + i.price * i.count, 0)}
//             </strong>
//           </p>
//           <button
//             onClick={handleSubmitOrder}
//             style={{
//               width: "100%",
//               backgroundColor: "#007bff",
//               color: "white",
//               padding: "10px",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Checkout & Pay
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

const Restaurant = ({ food, onAddToCart, user }) => {
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()
  const navigate = useNavigate()
  const [listFood, setListFood] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const getFood = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/food/${id}`)
        setListFood(response.data)
      } catch (error) {
        console.log(error)
      }
      getFood()
    }
  }, [id])
}

const addCart = (food, selectQuantity) => {
  const newOrderItem = {
    foodItem: food._id,
    count: selectQuantity,
    price: food.price,
    name: food.name,
  }
  setCart([...cart, newOrderItem])
  alert(`You Select ${selectQuantity} of ${food.name}`)
  alert("added to cart")
}

const handleSubmitOrder = async () => {
  if (!user.id) {
    return alert("Please Sign In !")
  }
  if (cart.length === 0) {
    return <h2>You cart is Empty</h2>
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  )

  const orderData = {
    totalPrice: totalPrice,
    food: cart,
    user: user._id,
  }

  try {
    let response = await axios.post(
      `http://localhost:3000/order/${user.id}`,
      orderData
    )
    setCart([])
    navigate(`/user`)
  } catch (error) {
    console.log(error)
  }
}

return (
  <div>
    <Link to={`/addFood/${id}`}>+ add New food to Menu</Link>

    <div>
      {listFood.length > 0 ? (
        listFood.map((food) => (
          <div>
            <h1>{food.name}</h1>
            <img src={food.image} alt={food.name} />
            <p>$ {food.price}</p>
            <label htmlFor="quantity">quantity:</label>
            <input
              type="number"
              id={food._id}
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button onClick={() => addCart(food, quantity)}>ADD CART</button>
          </div>
        ))
      ) : (
        <h2>No Menu List</h2>
      )}
    </div>

    {cart.length > 0 && (
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "white",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          borderRadius: "10px",
          zIndex: 1000,
        }}
      >
        <h3>Cart Summary</h3>
        <p>Total Items: {cart.length}</p>
        <p>
          <strong>
            Current Total: ${cart.reduce((s, i) => s + i.price * i.count, 0)}
          </strong>
        </p>
        <button
          onClick={handleSubmitOrder}
          style={{
            width: "100%",
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Checkout & Pay
        </button>
      </div>
    )}
  </div>
)

export default Restaurant
