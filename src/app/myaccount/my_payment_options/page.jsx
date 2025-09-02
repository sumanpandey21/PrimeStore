"use client"
import { useState } from "react"
import Error from "../../components/Error"
export default function MyPaymentOptionsPage() {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "Visa", last4: "1234", expiry: "12/26", isDefault: true },
    {
      id: 2,
      type: "MasterCard",
      last4: "5678",
      expiry: "08/25",
      isDefault: false,
    },
  ])

  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")
  const [error, setError] = useState("")

  const handleSetDefault = (id) => {
    setPaymentMethods((methods) =>
      methods.map((m) => ({ ...m, isDefault: m.id === id }))
    )
  }

  const handleDelete = (id) => {
    setPaymentMethods((methods) => methods.filter((m) => m.id !== id))
  }

  const handleAddPayment = (e) => {
    e.preventDefault()

    if (!cardNumber || !expiry || !cvv) {
      setError("⚠️ Please fill in all fields.")
      return
    }

    if (cardNumber.length < 12) {
      setError("Card number must be at least 12 digits.")
      return
    }

    // Extract last 4 digits
    const last4 = cardNumber.slice(-4)

    // Detect card type (very simple check)
    let type = "Card"
    if (cardNumber.startsWith("4")) type = "Visa"
    else if (cardNumber.startsWith("5")) type = "MasterCard"
    else if (cardNumber.startsWith("3")) type = "Amex"

    // Add new card
    setPaymentMethods((methods) => [
      ...methods,
      { id: Date.now(), type, last4, expiry, isDefault: false },
    ])

    setCardNumber("")
    setExpiry("")
    setCvv("")
    setError("")
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 text-black">
      <h2 className="text-2xl font-semibold mb-6 text-red-500">
        My Payment Options
      </h2>

      {/* Existing Payment Methods */}
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between border p-4 rounded-lg"
          >
            <div>
              <p className="font-medium">
                {method.type} •••• {method.last4}
              </p>
              <p className="text-sm text-gray-600">Expires {method.expiry}</p>
              {method.isDefault && (
                <span className="text-xs bg-black text-white px-2 py-1 rounded mt-1 inline-block">
                  Default
                </span>
              )}
            </div>

            <div className="flex gap-2">
              {!method.isDefault && (
                <button
                  onClick={() => handleSetDefault(method.id)}
                  className="px-3 py-1 text-sm border border-black rounded hover:bg-black hover:text-white transition"
                >
                  Set Default
                </button>
              )}
              <button
                onClick={() => handleDelete(method.id)}
                className="px-3 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Payment Method */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Add New Payment Method</h3>
        <form onSubmit={handleAddPayment} className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition"
          >
            Add Payment Method
          </button>
        </form>
          <div className="mt-3">
            <Error message={error} />

          </div>
      </div>
    </div>
  )
}
