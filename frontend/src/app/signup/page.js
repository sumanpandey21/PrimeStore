"use client"

import React, { useState } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, User, Mail, Lock, UserPlus } from "lucide-react"
import { ButtonLoader } from "@/components/Loading"

function page() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const requiredFields = ["username", "email", "password", "password2"]
    const missingFields = requiredFields.filter(
      (field) => !formData[field].trim()
    )
    if (missingFields.length > 0) {
      toast.error(`Please fill in: ${missingFields.join(", ")}`)
      return
    }
    const regex = /^(?!.*[_.]{2})(?![_.])[a-zA-Z0-9._]{3,15}(?<![_.])$/
    if (!regex.test(formData.username)) {
      toast.error("Invalid username")
      return
    }

    setLoading(true)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
            password2: formData.password2,
          }),
        }
      )

      const contentType = response.headers.get("content-type") || ""

      if (contentType.includes("application/json")) {
        const data = await response.json()

        if (response.ok) {
          toast.success(
            data.message || "Check your email to confirm your account"
          )
        } else {
          const errMsg =
            typeof data === "object"
              ? Object.entries(data)
                  .map(
                    ([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`
                  )
                  .join(" / ")
              : data.message || "Registration failed"
          toast.error(errMsg)
        }
      } else {
        const text = await response.text()
        toast.error(
          text
            ? text.length > 200
              ? text.slice(0, 200) + "..."
              : text
            : `Unexpected response (content-type: ${contentType})`
        )
      }
    } catch (err) {
      toast.error(err.message || "Network error")
    } finally {
      setLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
        </div>

        {/* Form Container */}
        <form action="" onSubmit={handleFormSubmit}>
          <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm">
            <div className="space-y-5">
              {/* Username */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Password */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={!showPassword ? "password" : "text"}
                  placeholder="Password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer hover:text-blue-500 transition-colors"
                  onClick={togglePasswordVisibility}
                >
                  {!showPassword ? (
                    <Eye className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={!showPassword ? "password" : "text"}
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  value={formData.password2}
                  onChange={(e) =>
                    setFormData({ ...formData, password2: e.target.value })
                  }
                />
              </div>

              <ButtonLoader loading={loading} type="submit" message="creating">
                Create Account
              </ButtonLoader>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  className="text-blue-500 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                >
                  Sign in here
                </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
