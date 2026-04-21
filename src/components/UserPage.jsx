const UserPage = ({ user, order }) => {
  console.log(user)
  console.log(order)

  return (
    <>
      <h1>Your list of orders {user.username}</h1>
      {order.map((ord) => (
        <>
          <h3>your Order is:</h3>
          <ul>
            {ord.food.map((item) => (
              <li>
                {item.foodItem.name} quantity:{item.count}
              </li>
            ))}
          </ul>
          <h4>Total Price: {ord.totalPrice}</h4>
          <h4>Your driver is: {ord.driver.driverName}</h4>
          <h4>contact your driver: {ord.driver.phoneNumber}</h4>
          <br />
        </>
      ))}
    </>
  )
}
export default UserPage
