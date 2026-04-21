const UserPage = ({ user, order }) => {
  // 1. Guard clause: If user isn't logged in yet
  if (!user) {
    return <h1>Please Sign In to view your orders.</h1>
  }

  // 2. Guard clause: If orders are still fetching
  if (!order || order.length === 0) {
    return (
      <>
        <h1>Welcome, {user.username}</h1>
        <p>You haven't placed any orders yet.</p>
      </>
    )
  }

  return (
    <>
      <h1>Your list of orders {user.username}</h1>
      {/* <h1>{order.totalPrice}</h1> */}
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
        </>
      ))}
    </>
  )
}

export default UserPage
