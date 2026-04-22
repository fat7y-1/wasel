const UserPage = ({ user, orders }) => {
  if (!user) return <h1>Please Sign In</h1>
  if (!orders) return <h1>Loading your orders...</h1>
  if (orders.length == 0) {
    return <div>you don't have any order</div>
  }
  return (
    <>
      <h1>Welcome {user.username} to List Orders</h1>
      {orders.map((ord) => (
        <div key={ord._id}>
          <ul>
            {ord.food.map((item, index) => (
              <li key={index}>
                {item.foodItem.name} x{item.count}
              </li>
            ))}
          </ul>
          <p>Total Price: $ {ord.totalPrice}</p>
        </div>
      ))}
    </>
  )
}

export default UserPage
