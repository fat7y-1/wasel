import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

const Order = ({ cart, user, setCart, getOrder }) => {
  const navigate = useNavigate()

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  )

  const handleSubmitOrder = async () => {
    if (!user) return

    const orderData = {
      totalPrice: totalPrice,
      food: cart,
      user: user.id,
      delivery: true,
    }
    try {
      await axios.post(`/order/${user.id}`, orderData)
      await getOrder(user.id)
      setCart([])
      navigate("/user")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="text-3xl font-extrabold text-ink-900">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-ink-200 py-16 text-center">
          <p className="text-5xl">🛒</p>
          <h2 className="mt-4 text-lg font-bold text-ink-900">
            Your cart is empty
          </h2>
          <p className="mt-1 text-ink-500">
            Go back and add some delicious food!
          </p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Browse Restaurants
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-6 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-sm">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-5 py-4"
              >
                <p className="text-ink-800">
                  <span className="mr-2 font-bold text-brand-600">
                    {item.count}x
                  </span>
                  {item.name}
                </p>
                <p className="font-semibold text-ink-900">
                  ${(item.price * item.count).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-2xl bg-ink-900 px-5 py-4 text-white">
            <h3 className="text-base font-medium text-ink-100">
              Total Price
            </h3>
            <h3 className="text-xl font-extrabold">
              ${totalPrice.toFixed(2)}
            </h3>
          </div>

          {user ? (
            <button
              onClick={handleSubmitOrder}
              className="mt-6 w-full rounded-full bg-brand-500 py-3 text-base font-bold text-white shadow-sm shadow-brand-500/30 hover:bg-brand-600 transition-colors"
            >
              Confirm Order
            </button>
          ) : (
            <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-center">
              <p className="font-semibold text-ink-900">
                Sign in to complete your order
              </p>
              <p className="mt-1 text-sm text-ink-500">
                Your cart is saved — just sign in or create an account to
                check out.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <Link
                  to="/sign-in"
                  className="rounded-full bg-brand-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="rounded-full border border-ink-200 px-6 py-2.5 text-sm font-bold text-ink-700 hover:border-brand-500 hover:text-brand-600 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Order
