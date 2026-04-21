// import { useEffect } from "react"
// import axios from "axios"
const UserPage = ({ user, order }) => {
  console.log(user)
  console.log(order)
  // console.log(order[0].order)
  // console.log(order[0].driver)
  // console.log(`order: ${order}`)

  return (
    <>
      <h1>Your list of orders {user.username}</h1>
      {order.map((ord) => (
        <>
          <h1>{ord.totalPrice}</h1>
          <ul>
            {ord.food.map((item) => (
              <li>
                {item.foodItem.name} quantity:{item.count}
              </li>
            ))}
          </ul>
        </>
      ))}
      {/* {order.map((details) => (
        <div>
          <h3>your Order is:</h3>
          <ul>
            {details.food.map((item) => (
              <li>
                {item.foodItem} quantity:{item.count}
              </li>
            ))}
          </ul>
          <h4>Total Price: {details.totalPrice}</h4>
          <h4>Your driver is: {details.driver.driverName}</h4>
          <h4>contact your driver: {details.driver.phoneNumber}.phoneNumber</h4>
        </div>
      ))} */}
    </>
  )
}
export default UserPage
