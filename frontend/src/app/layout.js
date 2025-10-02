"use client"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { usePathname, useParams } from "next/navigation"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import RouteLoader from "@/components/RouteLoader"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  const { uid, token } = useParams()
  const pathname = usePathname()

  const hideLayout = [
    "/login",
    "/signup",
    "/forgot-password",
    `activate/${uid}/${token}/`,
  ]
  const isActivatePage = pathname.startsWith("/activate")

  const shouldHideLayout = hideLayout.includes(pathname) || isActivatePage

  return (
    <html lang="en" className="h-full w-full">
      <body className="antialiased">
        {!shouldHideLayout && (
          <header className="sticky top-0 z-50 bg-white shadow-sm">
            <Navbar />
          </header>
        )}

        <RouteLoader />
        <main className="w-full">{children}</main>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        {!shouldHideLayout && <Footer />}
      </body>
    </html>
  )
}
