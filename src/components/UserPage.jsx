const UserPage = ({ user, orders }) => {
  if (!user) return <h1>Please Sign In</h1>
  if (!orders) return <h1>Loading your orders...</h1>
  if (orders.length == 0) {
    return <h1 id="fff">you don't have any order</h1>
  }
  return (
    <div className="user-orders-container">
      <h1 className="welcome-msg">Welcome, {user.username}!</h1>
      <h2 className="section-title">Your Order History</h2>

      <div className="orders-grid">
        {orders.map((ord) => (
          <div key={ord._id} className="order-card">
            <div className="order-header">
              <span className="order-id">Order #{ord._id.slice(-6)}</span>
              <span className="order-total">${ord.totalPrice.toFixed(2)}</span>
            </div>

            <ul className="order-items-list">
              {ord.food.map((item, index) => (
                <li key={index}>
                  <span className="item-name">{item.foodItem?.name}</span>
                  <span className="item-qty">x{item.count}</span>
                </li>
              ))}
            </ul>

            <div className="driver-info-section">
              {ord.driver ? (
                <div className="driver-assigned">
                  <p>
                    <strong>Driver:</strong> {ord.driver.driverName}
                  </p>
                  <p>
                    <strong>Phone:</strong> {ord.driver.phoneNumber}
                  </p>
                </div>
              ) : (
                <div className="no-driver">
                  <p>Waiting for driver assignment...</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserPage
