"use client"
import Image from "next/image"
import { BsHeart, BsEye, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import { useState } from "react"

export default function Card() {
  const [liked, setLiked] = useState({})

  const products = [
    { id: 1, name: "Samsung Galaxy", price: "Rs. 25,000", image: "/mobilephone.png", rating: 4.2 },
    { id: 2, name: "iPhone 14", price: "Rs. 120,000", image: "/mobilephone.png", rating: 4.8 },
    { id: 3, name: "OnePlus Nord", price: "Rs. 45,000", image: "/mobilephone.png", rating: 3.5 },
    { id: 4, name: "Xiaomi Redmi", price: "Rs. 22,000", image: "/mobilephone.png", rating: 4.0 },
    { id: 5, name: "Oppo Reno", price: "Rs. 30,000", image: "/mobilephone.png", rating: 3.2 },
    { id: 6, name: "Techno", price: "Rs. 30,000", image: "/mobilephone.png", rating: 3.5 },
  ]

  return (
    <div className="flex gap-6 overflow-x-scroll scrollbar-hide px-10 py-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative min-w-[250px] rounded-2xl shadow-lg bg-white overflow-hidden transition-transform hover:scale-105"
        >
          {/* Product Image Section */}
          <div className="relative flex items-center justify-center bg-gray-100 rounded-t-2xl p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={220}
              height={200}
              className="object-contain"
            />

            {/* Action Icons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
              {liked[product.id] ? (
                <BsHeartFill
                  onClick={() => setLiked({ ...liked, [product.id]: false })}
                  className="bg-white text-red-500 w-9 h-9 p-2 rounded-full shadow-md cursor-pointer hover:text-red-600"
                />
              ) : (
                <BsHeart
                  onClick={() => setLiked({ ...liked, [product.id]: true })}
                  className="bg-white text-black w-9 h-9 p-2 rounded-full shadow-md cursor-pointer hover:text-red-500"
                />
              )}
              <BsEye className="bg-white text-black w-9 h-9 p-2 rounded-full shadow-md cursor-pointer hover:text-blue-500" />
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.price}</p>

            {/* Rating */}
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => {
                const ratingValue = index + 1
                if (ratingValue <= Math.floor(product.rating)) {
                  return <BsStarFill key={index} className="w-5 h-5 text-yellow-500" />
                } else if (ratingValue - 0.5 <= product.rating) {
                  return <BsStarHalf key={index} className="w-5 h-5 text-yellow-500" />
                } else {
                  return <BsStar key={index} className="w-5 h-5 text-gray-300" />
                }
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
