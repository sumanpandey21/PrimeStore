"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import NProgress from "nprogress"

export default function RouteLoader() {
  const pathname = usePathname()

  useEffect(() => {
    NProgress.start()
    const timer = setTimeout(() => {
      NProgress.done()
    }, 300) 

    return () => {
      clearTimeout(timer)
      NProgress.done()
    }
  }, [pathname])

  return null
}
