const UserPage = ({ user, order }) => {
  console.log(user)
  console.log(order)
  return (
    <>
      <h1>Your list of orders {user.username}</h1>
      {order.map((details) => (
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
          <h4>Your driver is: {details.driver}</h4>
          <h4>contact your driver: {details.driver}.phoneNumber</h4>
        </div>
      ))}
    </>
  )
}
export default UserPage
