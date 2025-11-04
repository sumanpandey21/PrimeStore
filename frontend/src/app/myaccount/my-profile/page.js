"use client"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function MyProfilePage() {
  const [userData, setUserData] = useState([])
  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("access") : null

  useEffect(() => {
    async function fetchUserName() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/users/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          toast.error("Failed to fetch user")
          return
        }

        const data = await response.json()
        setUserData(data)
      } catch (error) {
        toast.error("Something went wrong!")
      }
    }
    fetchUserName()
  }, [])


  return (
    <div className="lg:w-full">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-red-500 mb-6">
          Edit Your Profile
        </h2>
        <form className="space-y-6 mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userData.map((data) => (
              <div key={data.id}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={data.username}
                  className="w-full px-3 py-2 rounded-md shadow-sm bg-gray-50 outline text-black focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="text"
                  value={data.email}
                  className="w-full px-3 py-2 rounded-md shadow-sm bg-gray-50 outline text-black focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  )
}
