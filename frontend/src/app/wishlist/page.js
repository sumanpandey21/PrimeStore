"use client"
import React, { useEffect } from "react"
import { useWishlist } from "@/store/wishlistStore"
import { useCart } from "@/store/cartStore"
import { toast } from "react-toastify"
import EmptyCart from "@/components/EmptyCart"
import ProductCard from "@/components/ProductCard"
import { Trash2, ShoppingCart } from "lucide-react"
import {AdvancedPagination} from "@/components/Pagination"

function WishlistPage() {
  const { wishlistItems, setWishlistItems, removeWishlistItem } = useWishlist()
  const { addCartItem } = useCart()

  const token =
    typeof window !== "undefined" ? sessionStorage.getItem("access") : null

  useEffect(() => {
    const fetchWishListItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/wishlists/?limit=8", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          toast.error("Could not fetch products")
          return
        }

        const data = await response.json()
        console.log("Fetched wishlist data:", data)
        console.log(
          "data.results type:",
          typeof data.results,
          Array.isArray(data.results)
        )

        const items = Array.isArray(data.results)
          ? data.results
          : Array.isArray(data)
          ? data
          : []
        setWishlistItems(items)
      } catch (error) {
        toast.error("Something went wrong while fetching wishlost")
      }
    }

    fetchWishListItems()
  }, [])

  const handleRemoveWishlist = async (id, product_name) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/wishlists/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (!response.ok) {
        toast.error("Could not delete wishlist products")
        return
      }

      removeWishlistItem(id)
      product_name ? toast.info(`${product_name} is remove from wishlist`) : ""
    } catch (error) {
      toast.error("Something went wrong while deleting wishlist")
    }
  }

  const handleAddToCart = async (item) => {
    try {
      const response = await fetch("http://localhost:8000/api/carts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product: item.product,
          quantity: 1,
        }),
      })

      if (!response.ok) {
        toast.error("Failed to add to cart!")
        return
      }

      const data = await response.json()
      toast.success(`${item.product_name} added to cart`)
      addCartItem(data)
      handleRemoveWishlist(item.id)
    } catch (error) {
      toast.error("Something went wrong while add to cart")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {wishlistItems.length !== 0 && (
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            Wishlist ({wishlistItems.length})
          </h1>
        )}

        {wishlistItems.length === 0 && (
          <EmptyCart
            title={"You doesn't have wishlist yet"}
            message={"Add some items for add to cart"}
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.isArray(wishlistItems) && wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="relative">
                  <button
                    onClick={() =>
                      handleRemoveWishlist(item.id, item.product_name)
                    }
                    className="absolute top-3 right-3 z-10 p-2 rounded-full shadow-sm bg-red-500 text-white  cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </button>

                  <ProductCard
                    key={item.id}
                    id={item.product}
                    image={item.product_image1}
                    title={item.product_name}
                    price={item.final_price}
                    rating={item.rating}
                    ratingCount={item.totalRatings}
                    discount={item.discount}
                    className="cursor-pointer"
                    clickable={true}
                    compact={true}
                    showCartAndWishlistIcon={false}
                  />
                </div>

                <div className="p-4 pt-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.product_stock}
                    className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
                      item.product_stock
                        ? "bg-red-500 hover:bg-red-600 text-white cursor-pointer active:bg-red-700"
                        : "bg-gray-300 cursor-not-allowed text-gray-500"
                    }`}
                  >
                    <ShoppingCart size={18} />
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <AdvancedPagination/> 
    </div>
  )
}

export default WishlistPage
