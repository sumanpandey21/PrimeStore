"use client"
import React, { useState, useEffect } from "react"
import { Trash2, Plus, Minus } from "lucide-react"
import Link from "next/link"
import { useCart } from "../context/CartContext"

const CartPage = () => {
  // Mock cart data
  const {cartItems, setCartItems} = useCart();

  React.useEffect(() => {
    setCartItems([
      {
        id: 1,
        name: "LCD Monitor",
        price: 15000,
        quantity: 1,
        image: "/monitor.png",
      },
      {
        id: 2,
        name: "Motorola X20",
        price: 12999,
        quantity: 1,
        image: "/mobilephone.png",
      },
    ])
  }, [setCartItems])

  const [couponCode, setCouponCode] = useState("")
  const [subtotal, setSubtotal] = useState(0)
  const shipping = 0 // Free shipping

  // Calculate subtotal whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    setSubtotal(total)
  }, [cartItems])

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  // Apply coupon (mock functionality)
  const applyCoupon = () => {
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" applied!`)
      setCouponCode("")
    }
  }

  const formatPrice = (price) => `Rs ${price.toLocaleString()}`

  return (
    <div className={`min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href={"/"}>
            <span className="hover:text-gray-800 cursor-pointer">Home</span>
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">Cart</span>
        </nav>

        {cartItems.length !== 0 && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="xl:col-span-3">
              {/* Header - Only visible on large screens */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 shadow font-medium text-gray-700 text-sm">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Subtotal</div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-2 md:grid-cols-12 gap-4 p-4 items-center mb-3 shadow"
                >
                  {/* Product Info */}
                  <div className="flex items-center space-x-4 md:col-span-6">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gray-100"
                      />
                      <button
                        onClick={() => removeItem(item.id)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-2 text-sm sm:text-base font-medium text-gray-700 md:text-center">
                    <span className="block md:hidden font-semibold">
                      Price:{" "}
                    </span>
                    {formatPrice(item.price)}
                  </div>

                  {/* Quantity */}
                  <div className="md:col-span-2 flex md:justify-center">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 sm:p-2 hover:bg-gray-100 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <span className="px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-medium border-x">
                        {item.quantity.toString().padStart(2, "0")}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 sm:p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="md:col-span-2 text-sm sm:text-base font-medium text-gray-700 md:text-center">
                    <span className="block md:hidden font-semibold">
                      Subtotal:{" "}
                    </span>
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href={"/"}>
                  <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors active:bg-gray-200 cursor-pointer">
                    Return To Shop
                  </button>
                </Link>

                <div className="flex flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-red-500"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-6 py-3 bg-red-500 text-white rounded-r-lg hover:bg-red-600 transition-colors active:bg-red-700 cursor-pointer"
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Total Section - Right aligned on mobile */}
            <div className="xl:col-span-3  flex justify-end">
              <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-sm">
                <h2 className="text-xl font-semibold mb-6">Cart Total</h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>

                  <div className="flex justify-between items-center py-3 text-lg font-semibold">
                    <span>Total:</span>
                    <span>{formatPrice(subtotal + shipping)}</span>
                  </div>
                  <Link href={{ pathname: "/checkout", query: { cartItems } }}>
                    <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-medium active:bg-red-700 cursor-pointer">
                      Proceed to checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty Cart Message */}
        {cartItems.length === 0 && (
          <div className="flex flex-col items-center justify-center h-90 text-center">
            <div className="text-gray-400 text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">Add some items to get started</p>
            <Link href={"/"}>
              <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 active:bg-red-600 transition-colors">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage
