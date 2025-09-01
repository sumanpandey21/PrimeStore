"use client"
import React, { useState, useEffect } from "react"
import { ChevronRight, ArrowRight, ChevronLeft } from "lucide-react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 59,
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const categories = [
    { name: "Women's Fashion", hasSubmenu: true },
    { name: "Men's Fashion", hasSubmenu: true },
    { name: "Electronics", hasSubmenu: false },
    { name: "Home & Lifestyle", hasSubmenu: false },
    { name: "Medicine", hasSubmenu: false },
    { name: "Sports & Outdoor", hasSubmenu: false },
    { name: "Baby's & Toys", hasSubmenu: false },
    { name: "Groceries & Pets", hasSubmenu: false },
    { name: "Health & Beauty", hasSubmenu: false },
  ]

  const [currentSlide, setCurrentSlide] = useState(2) // Middle dot is active
  const totalSlides = 5

  const formatTime = (time) => {
    return time.toString().padStart(2, "0")
  }

  return (
    <div className=" bg-white">
      {/* Main Container */}
      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-6">
          <nav className="space-y-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded-lg cursor-pointer group"
              >
                <span className="text-gray-800 text-sm font-medium group-hover:text-gray-900">
                  {category.name}
                </span>
                {category.hasSubmenu && (
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Hero Banner */}
          <div className="relative bg-black rounded-xl overflow-hidden mb-8 h-95">
            <div className="flex items-center justify-between h-full px-12">
              <div className="text-white space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <div
                      className="w-8 h-8 bg-black rounded"
                      style={{
                        clipPath:
                          "polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)",
                      }}
                    ></div>
                  </div>
                  <span className="text-white text-lg font-medium">
                    iPhone 14 Series
                  </span>
                </div>

                <div>
                  <h1 className="text-5xl font-bold leading-tight mb-4">
                    Up to 10%
                    <br />
                    off Voucher
                  </h1>
                </div>

                <button className="flex items-center space-x-2 text-white group">
                  <span className="border-b border-white pb-1 font-medium">
                    Shop Now
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="relative">
                <div className="w-80 h-64 relative">
                  {/* iPhone images */}
                  <div className="absolute inset-0 transform rotate-12 scale-110 z-20">
                    <img
                      src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=600&fit=crop&crop=center"
                      alt="iPhone 14 Pro Pink"
                      className="w-48 h-64 object-cover rounded-3xl shadow-2xl mx-auto"
                    />
                  </div>
                  <div className="absolute inset-0 transform -rotate-6 scale-90 z-10">
                    <img
                      src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=600&fit=crop&crop=center"
                      alt="iPhone 14 Pro Space Black"
                      className="w-48 h-64 object-cover rounded-3xl shadow-xl mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-red-500 border-white" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <div className="ml-10 pr-6">
          <div className="flex-1 items-center space-x-3">
            <div className="w-4 h-8 bg-red-500 rounded-sm"></div>
            <span className="text-red-500 font-semibold text-lg">Today's</span>
          </div>

         

          <div className="flex items-center justify-between mb-10">
            
            <div className="flex items-center text-center space-x-20">
                
              {/* Flash Sales title */}
              <h2 className="text-3xl font-bold text-gray-900 mt-4">Flash Sales</h2>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-xs font-semibold mb-1">Days</div>
                  <div className="text-3xl font-bold text-gray-900">
                    {formatTime(timeLeft.days)}
                  </div>
                </div>
                <div className="text-2xl font-bold text-red-500">:</div>
                <div className="text-center">
                  <div className="text-xs font-semibold mb-1">Hours</div>
                  <div className="text-3xl font-bold text-gray-900">
                    {formatTime(timeLeft.hours)}
                  </div>
                </div>
                <div className="text-2xl font-bold text-red-500">:</div>
                <div className="text-center">
                  <div className="text-xs font-semibold mb-1">Minutes</div>
                  <div className="text-3xl font-bold text-gray-900">
                    {formatTime(timeLeft.minutes)}
                  </div>
                </div>
                <div className="text-2xl font-bold text-red-500">:</div>
                <div className="text-center">
                  <div className="text-xs font-semibold mb-1">Seconds</div>
                  <div className="text-3xl font-bold text-gray-900">
                    {formatTime(timeLeft.seconds)}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Navigation arrows positioned at the rightmost */}
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                <FaArrowLeft className="w-5 h-5 text-black" />
              </button>
              <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                <FaArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
