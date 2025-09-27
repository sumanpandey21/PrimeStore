"use client"
import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { toast } from "react-toastify"
import LoadingOverlay from "@/components/LoadingOverlay"

export default function ActivatePage() {
  const router = useRouter()
  const { uid, token } = useParams()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const activateAccount = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/activate/${uid}/${token}/`
        )
        const data = await res.json()

        if (res.ok) {
          toast.success(data.message)
          router.push("/login") // redirect to login
        } else {
          toast.error(data.error || "Activation failed")
        }
      } catch (err) {
        toast.error("Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    if (uid && token) {
      activateAccount()
    }
  }, [uid, token, router])

  return <LoadingOverlay show={loading} text="Activating your account..." />
}
