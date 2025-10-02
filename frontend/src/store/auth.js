import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  
  setUser: (userData) => set({ user: userData, isAuthenticated: true }),
  clearAuth: () => set({ user: null, isAuthenticated: false }),
  
  checkAuth: async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/me/", {
        method: "GET",
        credentials: "include",
      });
      
      if (res.ok) {
        const userData = await res.json();
        set({ user: userData, isAuthenticated: true });
        return true;
      } else {
        set({ user: null, isAuthenticated: false });
        return false;
      }
    } catch (error) {
      set({ user: null, isAuthenticated: false });
      return false;
    }
  },
  
  logout: async () => {
    try {
      await fetch("http://127.0.0.1:8000/api/logout/", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      set({ user: null, isAuthenticated: false });
    }
  },
}));