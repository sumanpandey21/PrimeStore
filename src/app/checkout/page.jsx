"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useCart } from "../context/CartContext"
import AlertMessage from "../components/AlertMessage"

const CheckoutPage = () => {
  const { cartItems } = useCart()

  // Billing form state
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
  })

  // Other states
  const [couponCode, setCouponCode] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("cash")
  const [saveInfo, setSaveInfo] = useState(true)
  const [subtotal, setSubtotal] = useState(0)
  const shipping = 0

  const [message, setMessage] = useState("")
  const [alertTrigger, setAlertTrigger] = useState(0)

  const showMessage = (msg) => {
    setMessage(msg)
    setAlertTrigger((prev) => prev + 1)
  }

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    setSubtotal(total)
  }, [cartItems])

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setBillingDetails((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Apply coupon
  const applyCoupon = () => {
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" applied!`)
      setCouponCode("")
    }
  }

  // Place order
  const handlePlaceOrder = () => {
    // Basic validation
    const requiredFields = [
      "firstName",
      "streetAddress",
      "townCity",
      "phoneNumber",
      "emailAddress",
    ]
    const missingFields = requiredFields.filter(
      (field) => !billingDetails[field].trim()
    )

    if (missingFields.length > 0) {
      showMessage(`Please fill in: ${missingFields.join(", ")}`)
      return
    }

    showMessage("Order placed successfully!")

    setBillingDetails({
      firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
    })

  }

  const formatPrice = (price) => `Rs ${price.toLocaleString()}`

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href={"/"}>
            {" "}
            <span className="hover:text-gray-800 cursor-pointer">Home</span>
          </Link>
          <span className="mx-2">/</span>
          <span className="hover:text-gray-800 cursor-pointer">Product</span>
          <span className="mx-2">/</span>
          <Link href={"/cart"}>
            <span className="hover:text-gray-800 cursor-pointer">
              View Cart
            </span>
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">CheckOut</span>
        </nav>

        {cartItems.length === 0 ? (
          /* Empty Cart Message */
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">Add some items before checkout</p>
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Billing Details Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    value={billingDetails.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={billingDetails.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={billingDetails.streetAddress}
                      onChange={(e) =>
                        handleInputChange("streetAddress", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 bg-gray-50 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowMap(true)}
                      className="absolute right-3 top-3 text-red-500 hover:text-red-600"
                      title="Select location on map"
                    ></button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Apartment, floor, etc. (optional)
                  </label>
                  <input
                    type="text"
                    value={billingDetails.apartment}
                    onChange={(e) =>
                      handleInputChange("apartment", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Town/City*
                  </label>
                  <input
                    type="text"
                    value={billingDetails.townCity}
                    onChange={(e) =>
                      handleInputChange("townCity", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    value={billingDetails.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    value={billingDetails.emailAddress}
                    onChange={(e) =>
                      handleInputChange("emailAddress", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 bg-gray-50"
                    required
                  />
                </div>

                <div className="flex items-center mt-6">
                  <input
                    type="checkbox"
                    id="saveInfo"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                    className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                  />
                  <label
                    htmlFor="saveInfo"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Save this information for faster check-out next time
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-3 border-b"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-lg bg-gray-100"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="inline-block text-grey-50 text-sm">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>

                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span>{formatPrice(subtotal + shipping)}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="online"
                    name="payment"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w- h-4 text-red-500"
                  />
                  <label
                    htmlFor="online"
                    className="ml-3 flex items-center justify-between w-full"
                  >
                    <span>Online payment</span>
                    <div className="flex items">
                      <img src="/image.png" alt="" width={70} height={70} />
                    </div>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cash"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-red-500"
                  />
                  <label htmlFor="cash" className="ml-3">
                    Cash on delivery
                  </label>
                </div>
              </div>

              {/* Coupon Section */}
              <div className="flex mb-6">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-red-500"
                />
                <button
                  onClick={applyCoupon}
                  className="px-6 py-3 bg-red-500 text-white rounded-r-lg hover:bg-red-600 transition-colors"
                >
                  Apply Coupon
                </button>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-medium active:bg-red-600 mb-6 cursor-pointer"
              >
                Place Order
              </button>
              <AlertMessage message={message} trigger={alertTrigger}/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CheckoutPage
