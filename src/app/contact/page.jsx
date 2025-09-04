"use client"
import { useState } from "react"
import Error from "../components/Error"
import { BsTelephone, BsEnvelope } from "react-icons/bs"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [error, setError] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Fields with * must be required")
      return
    }
    if (!/^[A-Za-z\s]{2,50}$/.test(formData.name)) {
      setError("Name should be 2-50 letters only.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Invalid email address.")
      return
    }

    if (!/^(\+977|0)?9\d{9}$/.test(formData.phone.trim())) {
      setError("Invalid phone number.")
      return
    }

    setError("Message sent successfully!")

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }
  return (
    <div className=" bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            {/* Call To Us Section */}
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <BsTelephone className="text-white text-xl" />
                  </div>
                </div>
                <h2 className="ml-3 text-xl font-semibold text-gray-900">
                  Call To Us
                </h2>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +977-9800000254</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <BsEnvelope className="text-white text-xl" />
                  </div>
                </div>
                <h2 className="ml-3 text-xl font-semibold text-gray-900">
                  Write To Us
                </h2>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>Email: customer@primestore.com</p>
                <p>Email: support@primestore.com</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-lg p-9 shadow-sm shrink-0">
            <form onSubmit={handleSubmit} className="space-y-9">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name *"
                  className="w-full px-5 py-3 border-0 bg-gray-100 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email *"
                  className="w-full px-4 py-3 border-0 bg-gray-100 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone *"
                  className="w-full px-4 py-3 border-0 bg-gray-100 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Message Field */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="8"
                className="w-full px-4 py-3 border-0 bg-gray-100 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white resize-none transition-colors"
              />

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 active:bg-red-800 transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="mt-3">
              <Error message={error} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
