import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const Restaurant = ({ cart, setCart, user }) => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [listFood, setListFood] = useState([])
  const [addedId, setAddedId] = useState(null)

  const handleDeleteFood = async (foodId) => {
    try {
      await axios.delete(`http://localhost:3000/food/${foodId}`)
      setListFood(listFood.filter((food) => food._id !== foodId))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getFood = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/food/${id}`)
        setListFood(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getFood()
  }, [id])

  const addCart = (food, selectQuantity) => {
    const newOrderItem = {
      foodItem: food._id,
      count: selectQuantity,
      price: food.price,
      name: food.name,
    }

    setCart([...cart, newOrderItem])
    setQuantity(1)
    setAddedId(food._id)
    setTimeout(() => setAddedId(null), 1200)
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-extrabold text-ink-900">Menu</h1>
        <div className="flex items-center gap-3">
          {user?.admin && (
            <Link
              to={`/addFood/${id}`}
              className="rounded-full border border-brand-500 px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50"
            >
              + Add Food
            </Link>
          )}
          <Link
            to="/order"
            className="rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white hover:bg-ink-700"
          >
            🛒 View Cart ({cart.length})
          </Link>
        </div>
      </div>

      {listFood.length === 0 ? (
        <p className="text-ink-500">This restaurant hasn't added any dishes yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listFood.map((food) => (
            <div
              key={food._id}
              className="flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-ink-50">
                <img
                  src={food.image}
                  alt={food.name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-brand-600 shadow">
                  ${food.price}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-bold text-ink-900">
                  {food.name}
                </h3>
                <p className="mt-1 flex-1 text-sm text-ink-500">
                  {food.description}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <input
                    type="number"
                    id={food._id}
                    min={1}
                    defaultValue={1}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-16 rounded-lg border border-ink-200 px-2 py-1.5 text-center text-sm focus:border-brand-500 focus:outline-none"
                  />
                  <button
                    onClick={() => addCart(food, quantity)}
                    className={`flex-1 rounded-lg py-1.5 text-sm font-semibold text-white transition-colors ${
                      addedId === food._id
                        ? "bg-green-600"
                        : "bg-brand-500 hover:bg-brand-600"
                    }`}
                  >
                    {addedId === food._id ? "Added ✓" : "Add to Cart"}
                  </button>
                </div>

                {user?.admin && (
                  <div className="mt-3 flex gap-2 border-t border-ink-100 pt-3 text-sm">
                    <Link
                      to={`/food/update/${food._id}`}
                      className="font-semibold text-ink-600 hover:text-brand-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteFood(food._id)}
                      className="font-semibold text-red-600 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Restaurant
