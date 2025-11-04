"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useCart = create(
  persist(
    (set) => ({
      cartItems: [],
      cartCount: 0, 

      setCartItems: (items) =>
        set({ cartItems: items, cartCount: items.length }),

      addCartItem: (item) =>
        set((state) => {
          const existing = state.cartItems.find((i) => i.id === item.id)
          if (existing) {
            return {
              cartItems: state.cartItems.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
              cartCount: state.cartCount, 
            }
          }
          return {
            cartItems: [...state.cartItems, item],
            cartCount: state.cartCount + 1,
          }
        }),

      updateQuantity: (id, newQuantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          ),
          cartCount: state.cartCount, 
        })),

      removeCartItem: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
          cartCount: state.cartCount - 1,
        })),

      clearCart: () => set({ cartItems: [], cartCount: 0 }),
    }),
    {
      name: "cart-storage",
    }
  )
)
