"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import slugify from "slugify"
import dynamic from "next/dynamic"
import { Heart, ShoppingCart } from "lucide-react"
import { useWishlist } from "@/store/wishlistStore"
import { useCart } from "@/store/cartStore"
import { toast } from "react-toastify"
const ReactStars = dynamic(() => import("react-stars"), { ssr: false })

const ProductCard = ({
  id,
  image,
  title,
  price,
  rating,
  ratingCount,
  discount = null,
  className,
  clickable = true,
  compact = false,
  showCartAndWishlistIcon = true,
}) => {
  const { addCartItem, cartItems } = useCart()
  const { wishlistItems, addWishlistItem } = useWishlist()

  const isInCart = cartItems?.some(
    (item) => item.product === id || item.product?.id === id
  )
  const isInWishlist = wishlistItems?.some(
    (item) => item.product === id || item.product?.id === id
  )

  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("access") : null

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price

  const handleAddToCart = async (e, id, title) => {
    e.preventDefault()
    e.stopPropagation()
    if (isInCart) return

    try {
      const response = await fetch("http://localhost:8000/api/carts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product: id,
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
    } catch (error) {
      toast.error("Something went wrong while adding to cart")
    }
  }

  const handleAddToWishlist = async (e, id, title) => {
    e.preventDefault()
    e.stopPropagation()
    if (isInWishlist) return
    try {
      const response = await fetch("http://localhost:8000/api/wishlists/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product: id,
          quantity: 1,
        }),
      })
      if (!response.ok) {
        const errData = await response.json()
        toast.error(errData[0] || "Failed to add product in wishlist")
        return
      }

      const data = await response.json()
      addWishlistItem(data)

      toast.success("Item added to wishlist!")
    } catch (error) {
      toast.error("Something went wrong while adding to wishlist.")
    }
  }
  return (
    <Link
      href={
        clickable
          ? `/products/${slugify(title, {
              replacement: "-",
              lower: true,
            })}?q=${id}`
          : "#"
      }
      className={`block group ${className ? className : ""}`}
    >
      <div
        className={`relative flex flex-col justify-between rounded-xl bg-white overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200`}
      >
        {discount && (
          <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[10px] sm:text-xs font-medium rounded-md px-2 py-0.5">
            -{String(discount).split(".")[0]}%
          </div>
        )}

        {showCartAndWishlistIcon && token && (
          <div className="opacity-100 absolute top-2 right-2 z-10 flex flex-col gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
            <button
              disabled={isInWishlist}
              onClick={(e) => handleAddToWishlist(e, id, title)}
              className={`p-2 rounded-full shadow-md transition-colors duration-200 ${
                isInWishlist
                  ? "bg-red-500 text-white cursor-not-allowed"
                  : "hover:text-red-600 cursor-pointer"
              }`}
              aria-label="Add to wishlist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              disabled={isInCart}
              onClick={(e) => handleAddToCart(e, id, title)}
              className={`p-2 rounded-full shadow-md transition-colors duration-200  ${
                isInCart
                  ? "bg-blue-500 text-white cursor-not-allowed"
                  : "hover:text-blue-600 cursor-pointer"
              } `}
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 " />
            </button>
          </div>
        )}

        <div
          className={`relative w-full ${
            compact ? "h-[200px] sm:h-[220px]" : "aspect-[4/5]"
          } bg-[#f5f5f5] flex justify-center items-center overflow-hidden`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   25vw"
          />
        </div>

        <div
          className={`flex flex-col gap-1 ${compact ? "p-2" : "p-3 sm:p-4"}`}
        >
          <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">
            {title}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-semibold text-red-500">
              Rs. {discountedPrice}
            </span>
            {discount && (
              <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                Rs. {price}
              </span>
            )}
          </div>

          {!compact && (
            <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
              <ReactStars
                count={5}
                size={16}
                value={rating}
                edit={false}
                color1="#d3d3d3"
                color2="#ebb050"
              />
              <span className="text-[11px] sm:text-xs">({ratingCount})</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
