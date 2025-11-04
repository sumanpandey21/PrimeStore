"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useWishlist = create(
  persist(
    (set) => ({
      wishlistItems: [],
      wishlistCount: 0,

      setWishlistItems: (items) =>
        set({ wishlistItems: items, wishlistCount: items.length }),

      addWishlistItem: (item) =>
        set((state) => {
          const exists = state.wishlistItems.some((i) => i.product === item.product)
          if (exists) return state
          return {
            wishlistItems: [...state.wishlistItems, item],
            wishlistCount: state.wishlistCount + 1,
          }
        }),

      removeWishlistItem: (id) =>
        set((state) => ({
          wishlistItems: state.wishlistItems.filter((item) => item.id !== id),
          wishlistCount: state.wishlistCount - 1,
        })),

      clearWishlist: () => set({ wishlistItems: [], wishlistCount: 0 }),
    }),
    {
      name: "wishlist-storage",
    }
  )
)