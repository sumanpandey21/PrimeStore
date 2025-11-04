"use client"
import React, { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { Package } from "lucide-react"
import { toast } from "react-toastify"

function CancellationsPage() {
  const [cancellations, setCancellations] = useState([])
  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("access") : null

  useEffect(() => {
    const getCancelledOrder = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cancellations/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        if (!response.ok) {
          toast.error("Couldn't fetch the cancelled orders!")
          return
        }
        const data = await response.json()
        setCancellations(data.results)
      } catch (error) {
        toast.error("Network error, try again!")
      }
    }
    getCancelledOrder()
  }, [])

  const mergedCancellations = useMemo(() => {
    const merged = []

    cancellations.forEach((cancellation) => {
      const productId = Number(cancellation.product_id)
      const productPrice = Number(cancellation.product_price)
      const name = cancellation.order_item_name?.trim()

      const existingIndex = merged.findIndex(
        (m) =>
          Number(m.product_id) === productId &&
          m.order_item_name === name &&
          Number(m.product_price) === productPrice
      )

      if (existingIndex >= 0) {
        merged[existingIndex].totalQuantity += cancellation.canceled_quantity
        merged[existingIndex].cancellationCount += 1
        merged[existingIndex].cancellationIds.push(cancellation.id)
        merged[existingIndex].latestCancelDate =
          new Date(cancellation.cancelled_at) >
          new Date(merged[existingIndex].latestCancelDate)
            ? cancellation.cancelled_at
            : merged[existingIndex].latestCancelDate
      } else {
        merged.push({
          id: cancellation.id,
          product_id: cancellation.product_id,
          order_item_name: cancellation.order_item_name,
          product_image: cancellation.product_image,
          product_price: parseFloat(cancellation.product_price),
          totalQuantity: cancellation.canceled_quantity,
          cancellationCount: 1,
          cancellationIds: [cancellation.id],
          latestCancelDate: cancellation.cancelled_at,
          order_status: cancellation.order_status,
          user: cancellation.user,
        })
      }
    })

    return merged
  }, [cancellations])
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Cancelled Items
          </h1>
          <p className="text-gray-600">
            View all your cancelled products and quantities
          </p>
        </div>

        {mergedCancellations && mergedCancellations.length > 0 ? (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-300 text-black font-semibold uppercase">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs  tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-center text-xs  tracking-wider">
                      Qty
                    </th>
                    <th className="px-6 py-3 text-center text-xs  tracking-wider">
                      Unit Price
                    </th>
                    <th className="px-6 py-3 text-center text-xs  tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-center text-xs  tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mergedCancellations.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={item.product_image}
                            alt={item.order_item_name}
                            width={60}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900 line-clamp-2">
                              {item.order_item_name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-lg font-bold text-red-600">
                          {item.totalQuantity}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.totalQuantity === 1 ? "item" : "items"}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {item.product_price?.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-lg font-bold text-green-600">
                          {(
                            item.totalQuantity * item.product_price
                          ).toLocaleString()}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <div className="text-sm text-gray-900">
                          {formatDate(item.latestCancelDate)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <Package size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-lg text-gray-500">No cancelled items found.</p>
            <p className="text-sm text-gray-400 mt-2">
              Your cancelled products will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CancellationsPage
