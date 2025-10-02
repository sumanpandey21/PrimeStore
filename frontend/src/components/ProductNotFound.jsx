import { Search, Home, ShoppingBag, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Animated Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-6 md:p-8">
                <Search className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Error Code */}
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
              Error 404
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Product Not Found
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the product you're looking for. It may have
            been removed or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href={"/"}>
              <button className="group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Back to Home
              </button>
            </Link>
          </div>


          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-5 py-3 pl-12 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
