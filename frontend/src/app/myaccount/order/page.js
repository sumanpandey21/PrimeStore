"use client"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  Eye,
  X,
  Check,
  Package,
  Truck,
  CheckCircle,
  Minus,
  Plus,
} from "lucide-react"
import { toast } from "react-toastify"

function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [cancelModal, setCancelModal] = useState(null)
  const [cancelQuantity, setCancelQuantity] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [confirmCancelModal, setConfirmCancelModal] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)
  const buttonRef = useRef(null)
  const modalRef = useRef(null)
  const cancelModalRef = useRef(null)
  const cancelOverlayRef = useRef(null)
  const confirmOverlayRef = useRef(null)

  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("access") : null

  const closeModal = () => setSelectedOrder(null)

  const handleModal = () => setIsModalOpen((prev) => !prev)

  const closeCancelModal = () => {
    setCancelModal(null)
    setCancelQuantity(1)
    getOrders()
  }

  const status = selectedOrder?.delivery_status
  const steps = [
    { id: 1, label: "Placed", icon: Package },
    { id: 2, label: "Processed", icon: Truck },
    { id: 3, label: "Delivered", icon: CheckCircle },
  ]

  let currentStep = 0
  if (status === "PENDING") currentStep = 1
  if (status === "APPROVED") currentStep = 2
  if (status === "DELIVERED") currentStep = 3

  const handleCancelEntireOrder = async (orderId) => {
    try {
      const response = await fetch("http://localhost:8000/api/cancellations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          order: orderId,
          order_item: null,
          cancelled_at: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        toast.error("Failed to cancel order.")
        return
      }

      toast.success("Order cancelled successfully!")
      setConfirmCancelModal(false)
      closeModal()

      await getOrders()
    } catch (error) {
      toast.error("Network error, try again!")
    }
  }

  const handleItemCancelClick = (itemId, itemName, maxQuantity) => {
    setCancelModal({ itemId, itemName, maxQuantity })
    setCancelQuantity(1)
  }

  const handleConfirmItemCancel = async (itemId, itemName, cancelQuantity) => {
    try {
      const response = await fetch("http://localhost:8000/api/cancellations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          order: selectedOrder.order_id,
          order_item: itemId,
          canceled_quantity: cancelQuantity,
          cancelled_at: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        toast.error("Failed to cancel item.")
        return
      }

      toast.success("Item cancelled successfully!")

      setSelectedOrder((prevOrder) => {
        const updatedItems = prevOrder.order_items
          .map((item) =>
            item.id === itemId
              ? { ...item, quantity: item.quantity - cancelQuantity }
              : item
          )
          .filter((item) => item.quantity > 0)

        if (updatedItems.length === 0) closeModal()

        return { ...prevOrder, order_items: updatedItems }
      })

      closeCancelModal()
    } catch (error) {
      toast.error("Network error, try again!")
    }
  }

  const getOrders = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/orders/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        toast.error("Could not fetch orders")
        return
      }

      const data = await response.json()
      setOrders(data)
    } catch (error) {
      toast.error("Network error, try again!")
    }
  }

  useEffect(() => {
    getOrders()
  }, [])

  const formattedDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formattedOrderID = (orderId) => {
    return orderId.split("-")[0] + orderId.split("-")[1]
  }
  const activeOrders = orders.filter(
    (order) => order["delivery_status"] !== "CANCELLED"
  )
  // console.log(typeof(orders))
  activeOrders.map((order)=>{
    console.log(order)
  })

  

  useEffect(() => {
    const handleClickOutside = (event) => {
      const confirmModalEl = document.getElementById("confirm-cancel-modal")

      // Was any sub-modal open?
      const subModalOpen = !!cancelModal || !!confirmCancelModal

      // Consider click "inside parent" if it's inside modalRef OR inside any sub-modal overlay
      const clickedInsideParent =
        (modalRef.current && modalRef.current.contains(event.target)) ||
        (cancelOverlayRef.current &&
          cancelOverlayRef.current.contains(event.target)) ||
        (confirmOverlayRef.current &&
          confirmOverlayRef.current.contains(event.target))

      // -------------------- PARENT OUTSIDE CLICK --------------------
      // Parent should close only when NO sub-modal is open and click is outside parent area & button
      if (
        isModalOpen &&
        !subModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsModalOpen(false)
        setSelectedOrder(null)
        return
      }

      // If any sub-modal is open, freeze parent closing on clicks outside whole parent.
      if (subModalOpen) {
        // If clicked completely outside parent (and overlays) — do nothing (freeze parent).
        if (!clickedInsideParent) return

        // If clicked inside parent area (or on submodal overlay), allow closing the specific sub-modal
        // Close cancel sub-modal when clicked outside its inner container but inside parent area
        if (
          cancelModal &&
          cancelModalRef.current &&
          !cancelModalRef.current.contains(event.target)
        ) {
          setCancelModal(null)
          setCancelQuantity(1)
          return
        }

        // Close confirm sub-modal when clicked outside its inner container but inside parent area
        if (
          confirmCancelModal &&
          confirmModalEl &&
          !confirmModalEl.contains(event.target)
        ) {
          setConfirmCancelModal(false)
          return
        }

        // If click is inside a sub-modal's inner container, do nothing (keep everything open)
        return
      }
    }

    if (isModalOpen || cancelModal || confirmCancelModal) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isModalOpen, cancelModal, confirmCancelModal])

  const handleCancelConfirmation = () => {
    setConfirmCancelModal(true)
  }
  const closeEntireCancelModal = () => {
    setConfirmCancelModal(false)
  }
  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeOrders && activeOrders.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-300 text-black text-xs uppercase">
                  <tr>
                    <th className="px-6 py-3 text-center tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-center tracking-wider hidden sm:table-cell">
                      Date
                    </th>
                    <th className="px-6 py-3 text-center tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-center tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-center tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {activeOrders.map((order) => (
                    <tr
                      key={order.order_id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm text-gray-900">
                          #{formattedOrderID(order.order_id)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center hidden sm:table-cell">
                        <div className="text-sm text-gray-500">
                          {formattedDate(order.created_at)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            order.delivery_status === "DELIVERED"
                              ? "bg-green-800 text-white"
                              : order.delivery_status === "CANCELLED"
                              ? "bg-red-100 text-red-800"
                              : order.delivery_status === "PENDING"
                              ? "bg-yellow-500 text-white"
                              : order.delivery_status === "APPROVED"
                              ? "bg-blue-800 text-white"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {order.delivery_status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {activeOrders.length!==0 && order.order_items.map((item) => (
                          <div 
                          id={item.id}
                          className="text-sm font-medium text-gray-900">
                            Rs.{" "}
                            {Math.ceil(
                              item.price * item.quantity
                            ).toLocaleString()}
                          </div>
                        ))}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button
                          ref={buttonRef}
                          onClick={() => {
                            handleModal()
                            setSelectedOrder(order)
                          }}
                          // ref={buttonRef}
                          className="inline-flex items-center p-2 rounded-full text-gray-400 hover:text-red-600 transition-colors duration-150 cursor-pointer"
                        >
                          <Eye size={18} className=" hover:text-red-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Package size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-lg text-gray-500">No orders found.</p>
            <p className="text-sm text-gray-400 mt-2">
              Your orders will appear here once you make a purchase.
            </p>
          </div>
        )}

        {/* ====================== ORDER DETAILS MODAL ====================== */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
              ref={modalRef}
              className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-xl">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Order #{formattedOrderID(selectedOrder.order_id)}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Placed on {formattedDate(selectedOrder.created_at)}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <X size={24} className="cursor-pointer hover:text-red-600" />
                </button>
              </div>

              <div className="p-6">
                {/* Order Summary */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Package size={16} className="mr-2" />
                      Order Summary
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment Method:</span>
                        <span className="font-medium">
                          {selectedOrder.payment_method
                            .charAt(0)
                            .toUpperCase() +
                            selectedOrder.payment_method.slice(1)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment Status:</span>
                        <span className="font-medium">
                          {selectedOrder.payment_status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Charge:</span>
                        <span className="font-medium">
                          {selectedOrder.delivery_charge > 0 ? "Rs." : null}
                          {selectedOrder.delivery_charge}
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-gray-600">Total Amount:</span>
                        <span className="font-bold text-lg">
                          Rs.
                          {Math.ceil(
                            selectedOrder.total_price.toLocaleString()
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Truck size={16} className="mr-2" />
                      Shipping Address
                    </h3>
                    <div className="text-sm space-y-1">
                      <p className="font-medium">{selectedOrder.full_name}</p>
                      <p className="text-black">
                        {selectedOrder.city}, {selectedOrder.district},{" "}
                        {selectedOrder.province}
                      </p>
                      <p className="text-black">{selectedOrder.phone_number}</p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Order Items
                  </h3>
                  <div className="bg-white border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-5 gap-4 bg-gray-50 p-4 text-xs font-medium text-gray-600">
                      <span>Product</span>
                      <span className="text-center">Quantity</span>
                      <span className="text-center">Price</span>
                      <span className="text-center">Total</span>
                      {status === "PENDING" && (
                        <span className="text-center">Action</span>
                      )}
                    </div>
                    {selectedOrder.order_items
                      .filter((item) => item.quantity !== 0)
                      .map((item) => (
                        <div
                          key={item.product_id}
                          className="grid grid-cols-5 gap-4 items-center p-4 border-t"
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={item.product_image1 || "/placeholder.jpg"}
                              alt={item.product_name}
                              width={48}
                              height={48}
                              className="rounded-lg object-cover"
                            />
                            <span className="text-sm font-medium line-clamp-2">
                              {item.product_name}
                            </span>
                          </div>
                          <span className="text-center font-medium">
                            {item.quantity}
                          </span>
                          <span className="text-center">
                            Rs {Math.ceil(item.price.toLocaleString())}
                          </span>
                          <span className="text-center font-bold">
                            {Math.ceil(
                              item.price * item.quantity
                            ).toLocaleString()}
                          </span>

                          {status === "PENDING" && (
                            <button
                              onClick={() =>
                                handleItemCancelClick(
                                  item.id,
                                  item.product_name,
                                  item.quantity
                                )
                              }
                              className="flex items-center justify-center text-red-600 hover:text-red-800 text-sm hover:bg-red-50 rounded p-1 transition-colors cursor-pointer"
                              title="Cancel Item"
                            >
                              <Minus size={16} className="mr-1" />
                              Cancel
                            </button>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Delivery Tracking */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-6 text-center text-lg">
                    Delivery Tracking
                  </h3>

                  <div className="flex justify-center mb-8">
                    <div className="flex items-center space-x-8">
                      {steps.map((step, index) => {
                        const isCompleted = step.id <= currentStep
                        const isLast = index === steps.length - 1
                        const StepIcon = step.icon

                        return (
                          <React.Fragment key={step.id}>
                            <div className="flex flex-col items-center">
                              <div
                                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors duration-300 ${
                                  isCompleted
                                    ? "bg-green-500 border-green-500 text-white shadow-lg"
                                    : "bg-white border-gray-300 text-gray-400"
                                }`}
                              >
                                {isCompleted ? (
                                  <Check size={20} className="font-bold" />
                                ) : (
                                  <StepIcon size={20} />
                                )}
                              </div>
                              <div className="mt-3 text-center">
                                <div
                                  className={`text-sm font-medium ${
                                    isCompleted
                                      ? "text-green-600"
                                      : "text-gray-500"
                                  }`}
                                >
                                  {step.label}
                                </div>
                              </div>
                            </div>
                            {!isLast && (
                              <div
                                className={`flex-1 h-1 rounded-full transition-colors duration-300 ${
                                  isCompleted ? "bg-green-500" : "bg-gray-300"
                                }`}
                                style={{ width: "60px" }}
                              />
                            )}
                          </React.Fragment>
                        )
                      })}
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                      <div
                        className={`w-3 h-3 rounded-full mr-2 ${
                          selectedOrder.delivery_status === "DELIVERED"
                            ? "bg-green-500"
                            : selectedOrder.delivery_status === "APPROVED"
                            ? "bg-blue-500"
                            : selectedOrder.delivery_status === "PENDING"
                            ? "bg-yellow-500"
                            : ""
                        }`}
                      ></div>
                      <span className="font-medium text-gray-900">
                        Current Status: {selectedOrder.delivery_status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {selectedOrder.delivery_status !== "DELIVERED" &&
                  selectedOrder.delivery_status !== "APPROVED" &&
                  selectedOrder.delivery_status !== "CANCELLED" && (
                    <div className="relative mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => {
                          handleCancelConfirmation()
                        }}
                        className="px-6 py-2 border bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-lg transition-colors duration-150 cursor-pointer"
                      >
                        Cancel Entire Order
                      </button>
                    </div>
                  )}
              </div>
            </div>
          </div>
        )}

        {/* ====================== QUANTITY CANCEL MODAL ====================== */}
        {cancelModal && (
          <div
            ref={cancelOverlayRef}
            className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[60] p-4"
          >
            <div
              ref={cancelModalRef}
              className="bg-white rounded-lg max-w-md w-full mx-4 shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Cancel Item
                  </h3>
                  <button
                    onClick={closeCancelModal}
                    className="text-gray-400 hover:text-red-600 cursor-pointer transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-4">
                    How many items of <b>"{cancelModal.itemName}"</b> would you
                    like to cancel?
                  </p>

                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Quantity to Cancel (Max: {cancelModal.maxQuantity})
                    </label>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() =>
                          setCancelQuantity(Math.max(1, cancelQuantity - 1))
                        }
                        disabled={cancelQuantity <= 1}
                        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <Minus size={18} />
                      </button>

                      <input
                        type="number"
                        min="1"
                        max={cancelModal.maxQuantity}
                        value={cancelQuantity}
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 1
                          setCancelQuantity(
                            Math.min(
                              Math.max(1, value),
                              cancelModal.maxQuantity
                            )
                          )
                        }}
                        className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />

                      <button
                        onClick={() =>
                          setCancelQuantity(
                            Math.min(
                              cancelModal.maxQuantity,
                              cancelQuantity + 1
                            )
                          )
                        }
                        disabled={cancelQuantity >= cancelModal.maxQuantity}
                        className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="flex space-x-2 mt-2">
                      {[
                        ...new Set([
                          1,
                          Math.floor(cancelModal.maxQuantity / 2),
                          cancelModal.maxQuantity,
                        ]),
                      ]
                        .filter((qty) => qty > 0)
                        .map((qty) => (
                          <button
                            key={qty}
                            onClick={() => setCancelQuantity(qty)}
                            className={`px-3 py-1 text-xs rounded-full border transition-colors cursor-pointer ${
                              cancelQuantity === qty
                                ? "bg-blue-100 border-blue-300 text-blue-700"
                                : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                            }`}
                          >
                            {qty === 1
                              ? "1"
                              : qty === cancelModal.maxQuantity
                              ? "All"
                              : `${qty}`}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={closeCancelModal}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() =>
                      handleConfirmItemCancel(
                        cancelModal.itemId,
                        cancelModal.itemName,
                        cancelQuantity
                      )
                    }
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                  >
                    Confirm Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====================== CONFIRM ENTIRE ORDER CANCEL MODAL ====================== */}
        {confirmCancelModal && (
          <div
            ref={confirmOverlayRef}
            className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[60] p-4"
          >
            <div
              id="confirm-cancel-modal"
              className="bg-white rounded-lg max-w-md w-full mx-4 shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Cancel Entire Order
                  </h3>
                  <button
                    onClick={closeEntireCancelModal}
                    className="text-gray-400 hover:text-red-600 cursor-pointer transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Are you sure to cancel{" "}
                    <span className="font-bold text-red-500">entire order</span>{" "}
                    ?
                  </p>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={closeEntireCancelModal}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() =>
                      handleCancelEntireOrder(selectedOrder.order_id)
                    }
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                  >
                    Confirm Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrdersPage
