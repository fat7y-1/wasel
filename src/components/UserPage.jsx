const UserPage = ({ user, order }) => {
  if (!user) {
    return <div>loading.........</div>
  }

  console.log(user)
  console.log(order)

  return (
    <>
      <h1>Welcome {user.username} to List Orders</h1>
      {order.length === 0} ? (<h3>You have no order yet</h3>
      ):(
      {order.map((ord) => (
        <div key={ord._id}>
          <ul>
            {ord.food.map((item, index) => (
              <li key={index}>{item.foodItem.name}</li>
            ))}
          </ul>
          <p>Total Price: $ {item.totalPrice}</p>
        </div>
      ))}
      )
    </>
  )
}
export default UserPage
