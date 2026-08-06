const UserPage = ({ user, orders }) => {
  if (!user)
    return (
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <h1 className="text-xl font-bold text-ink-900">Please sign in</h1>
      </div>
    )
  if (!orders)
    return (
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <h1 className="text-xl font-bold text-ink-900">
          Loading your orders...
        </h1>
      </div>
    )
  if (orders.length === 0) {
    return (
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <p className="text-5xl">📦</p>
        <h1 className="mt-4 text-xl font-bold text-ink-900">
          You don't have any orders yet
        </h1>
      </div>
    )
  }
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-extrabold text-ink-900">
        Welcome, {user.username}!
      </h1>
      <h2 className="mt-1 text-ink-500">Your order history</h2>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {orders.map((ord) => (
          <div
            key={ord._id}
            className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-ink-100 pb-3">
              <span className="text-sm font-semibold text-ink-500">
                Order #{ord._id.slice(-6)}
              </span>
              <span className="text-lg font-extrabold text-brand-600">
                ${ord.totalPrice.toFixed(2)}
              </span>
            </div>

            <ul className="mt-3 flex flex-col gap-1.5">
              {ord.food.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-sm text-ink-700"
                >
                  <span>{item.foodItem?.name}</span>
                  <span className="font-semibold text-ink-500">
                    x{item.count}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-lg bg-ink-50 px-3 py-2.5 text-sm">
              {ord.driver ? (
                <div className="flex flex-col gap-0.5">
                  <p className="text-ink-800">
                    <span className="font-semibold">Driver:</span>{" "}
                    {ord.driver.driverName}
                  </p>
                  <p className="text-ink-800">
                    <span className="font-semibold">Phone:</span>{" "}
                    {ord.driver.phoneNumber}
                  </p>
                </div>
              ) : (
                <p className="text-ink-500">
                  Waiting for driver assignment...
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserPage
