"use client"

import { useState } from "react"
import { toast } from "react-toastify"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, User, Lock } from "lucide-react"
import { FcGoogle } from "react-icons/fc"
import { useEffect } from "react"
import { ButtonLoader } from "@/components/Loading"
import { useCart } from "@/store/cartStore"
import { useWishlist } from "@/store/wishlistStore"

function LoginPage() {
  const [checkingToken, setCheckingToken] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { setCartItems } = useCart()
  const { setWishlistItems } = useWishlist()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("access") : null

  const fetchCartData = async () => {
    try {
      const response = await fetch("/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const cartData = await response.json()
      setCartItems(cartData.items)
    } catch (error) {
      console.error("Failed to fetch cart:", error)
    }
  }

  const fetchWishlistData = async () => {
    try {
      const response = await fetch("/api/wishlist", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const wishlistData = await response.json()
      setWishlistItems(wishlistData.items)
    } catch (error) {
      console.error("Failed to fetch wishlist:", error)
    }
  }

  useEffect(() => {
    if (token) router.replace("/")
    else setCheckingToken(false)
  }, [router])

  if (checkingToken)
    return <div className="flex items-center justify-center min-h-screen"></div>

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.username || !formData.password) {
      toast.error("All fields are required")
      return
    }
    try {
      setLoading(true)
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      })

      const data = await response.json()
      if (response.ok) {
        sessionStorage.setItem("access", data.access)
        sessionStorage.setItem("refresh", data.refresh)

        toast.success("Login successfully")
        fetchCartData()
        fetchWishlistData()
        
        router.push("/")
      } else {
        toast.error("Wrong creditionals")
      }
    } catch (error) {
      toast.error("Network error — check server..")
    } finally {
      setLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700 block"
              >
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 block"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                Forgot password?
              </Link>
            </div>

            <ButtonLoader loading={loading} type="submit" message="Logging">
              Sign In
            </ButtonLoader>
          </form>

          {/* Divider */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login Options */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2.5 px-4 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <FcGoogle size={20} />
              <span className="ml-2">Google</span>
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?
              <Link
                href="/signup"
                className="font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-gray-700">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-gray-700">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
