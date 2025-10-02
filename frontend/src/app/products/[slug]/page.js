"use client"
import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { Heart, Truck } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { toast } from "react-toastify"
import { useWishlist } from "@/store/wishlistStore"
import ReviewSection from "@/components/ReviewSection"
import { CircleLoader } from "@/components/Loading"
import { useCart } from "@/store/cartStore"

const ProductDetailsPage = () => {
  const { addCartItem } = useCart()
  const [products, setProducts] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [backgroundPosition, setBackgroundPosition] = useState("center")
  const [loading, setLoading] = useState(false)
  const { wishlistItems, addWishlistItem } = useWishlist()
  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("access") : null

  const searchParams = useSearchParams()
  const id = searchParams.get("q")

  const [isZoomed, setIsZoomed] = useState(false)
  const imgRef = useRef(null)

  const ReactStars = dynamic(() => import("react-stars"), { ssr: false })

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const response = await fetch("http://localhost:8000/api/products/")
      const data = await response.json()
      setProducts(data.results ? data.results : data)
    } catch (error) {
      toast.error("Failed to fetch")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleAddToCart = async () => {
    if (!token) {
      toast.error(
        "Please log in to add items to your cart"
      )
      return
    }
    try {
      const response = await fetch("http://localhost:8000/api/carts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product: product.id,
          quantity: 1,
        }),
      })
      if (!response.ok) {
        const errData = await response.json()
        toast.error(errData[0] || "Failed to add to cart")
        return
      }

      const data = await response.json()
      addCartItem(data)

      toast.success("Item added to cart!")

      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, stock: p.stock - 1 } : p
        )
      )
    } catch (error) {
      toast.error("Something went wrong while adding to cart")
    }
  }

  const product = products.find((p) => p.id === parseInt(id))

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image1)
    }
  }, [product])
  if (!product) {
    return <CircleLoader />
  }

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.pageX - left - window.scrollX) / width) * 100
    const y = ((e.pageY - top - window.scrollY) / height) * 100
    setBackgroundPosition(`${x}% ${y}%`)
  }

  // fix discount calculation
  const discountPercent = product?.discount ? parseFloat(product.discount) : 0
  const discountedPrice = Math.round(
    parseFloat(product.price) -
      (parseFloat(product.price) * discountPercent) / 100
  )

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ))
  }

  const isInWishlist = wishlistItems.some((item) => item.id === product.id)

  const handleAddToWishList = () => {
    if (!isInWishlist) {
      addWishlistItem({
        id: product.id,
        name: product.name,
        price: product.price,
        discount: product.discount,
        image: product.image1,
        item_left: product.stock,
        in_stock: product.stock > 0,
        rating: product.rating,
        totalRatings: product.totalRatings,
      })
      toast.success("Product added to wishlist successfully!")
    } else {
      toast.info("Already in wishlist")
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Images */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Side Images */}
          <div className="flex lg:flex-col gap-2 order-2 lg:order-1">
            {[product.image1, product.image2, product.image3]
              .filter(Boolean)
              .map((img, index) => (
                <div
                  key={index}
                  className="w-20 h-20 lg:w-24 lg:h-24 border-2 rounded-lg cursor-pointer hover:border-red-500 transition-colors overflow-hidden bg-gray-50"
                  onMouseEnter={() => setSelectedImage(img)}
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt={`${product.name} - view ${index + 1}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
          </div>

          {/* Main Image with zoom */}
          <div className="flex-1 order-1 lg:order-2">
            <div
              className="w-full h-80 lg:h-96 xl:h-[500px] border rounded-lg overflow-hidden bg-gray-50 cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
              ref={imgRef}
              style={{
                backgroundImage: `url(${selectedImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: isZoomed ? "200%" : "contain",
                backgroundPosition: isZoomed ? backgroundPosition : "center",
                transition: "background-size 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="space-y-5 space-x-3">
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-sm text-gray-500">
              ({product.totalRatings} Reviews)
            </span>
            {product.stock > 0 ? (
              <span className="text-sm text-green-600 ml-2">In Stock</span>
            ) : (
              <span className="text-sm text-red-600 ml-2">Out of Stock</span>
            )}
          </div>

          {/* Price */}
          <div className="text-2xl font-semibold text-gray-900">
            Rs.{" "}
            {discountedPrice > 0
              ? discountedPrice.toLocaleString()
              : parseFloat(product.price).toLocaleString()}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
                product.stock > 0
                  ? "bg-red-500 hover:bg-red-600 text-white cursor-pointer active:bg-red-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={handleAddToCart}
              disabled={product.stock < 1}
            >
              Add to cart
            </button>

            <button
              className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              onClick={handleAddToWishList}
            >
              <Heart
                className={`w-5 h-5 cursor-pointer ${
                  isInWishlist ? "text-red-500 fill-red-500" : "text-gray-500"
                }`}
              />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-gray-600" />
              <div>
                <div className="font-medium">Free Delivery inside Chitwan</div>
                <div className="text-sm text-gray-500">
                  Checkout dropdown box for Delivery Availability
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewSection productId={product.id} />
    </div>
  )
}

export default ProductDetailsPage
