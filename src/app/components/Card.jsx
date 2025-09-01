"use client"
import Image from "next/image"
import { useState } from "react"
import { BsHeart, BsEye, BsStar } from "react-icons/bs"

export default function Card() {
  const [star, setStar] = useState(1)
  const totalRating = 5
  return (
    <div className="w-full px-40 mb-3">
      <div className="w-70 h-80 shadow">
        <div className="flex bg-gray-100">
          <div className="flex items-center justify-center h-50 rounded-2xl">
            <Image
              src="/mobilephone.png"
              alt="A description of the image"
              width={220}
              height={200}
            />
          </div>
          <div className="mt-2">
            <BsHeart className="bg-white py-4 px-4 rounded-full mb-1.5 text-black"/>
            <BsEye className="bg-white py-4 px-4 rounded-full text-black " />
          </div>
        </div>
            <div className="px-2 py-2 text-xl">
                <h3 className="py-1">Samsung Galaxy</h3>
                <h3 className="py-1">Rs.25,000</h3>
                {[...Array(totalRating)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  
                  />
                ))}
                <BsStar className="text-yellow-500"/>  

            </div>
      </div>
    </div>
  )
}
