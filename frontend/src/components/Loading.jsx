import { Loader2, ShoppingCart, Package } from "lucide-react"
import { useState } from "react"

// 1. Spinner Loader
export function SpinnerLoader({
  size = "md",
  color = "blue",
  fullScreen = true,
}) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }
  const colors = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    white: "text-white",
  }

  const spinner = (
    <Loader2 className={`${sizes[size]} ${colors[color]} animate-spin`} />
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        {spinner}
      </div>
    )
  }

  return spinner
}

// 2. Dots Loader
export function DotsLoader({ fullScreen = true }) {
  const dots = (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        ></div>
      ))}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        {dots}
      </div>
    )
  }

  return dots
}

// 3. Pulse Loader
export function PulseLoader({ fullScreen = true }) {
  const pulses = (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"
          style={{ animationDelay: `${i * 0.2}s` }}
        ></div>
      ))}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        {pulses}
      </div>
    )
  }

  return pulses
}

// 4. Progress Bar
export function ProgressBar({ progress = 0, fullScreen = true }) {
  const progressBar = (
    <div className="w-full max-w-md">
      <div className="bg-slate-200 rounded-full h-2 overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center text-slate-600 text-sm">{progress}%</p>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50 p-8">
        {progressBar}
      </div>
    )
  }

  return progressBar
}

// 5. Skeleton Loader - Product Card
export function SkeletonCard({ fullScreen = false }) {
  const skeleton = (
    <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
      <div className="bg-slate-200 h-48 rounded-lg mb-4"></div>
      <div className="bg-slate-200 h-4 rounded w-3/4 mb-2"></div>
      <div className="bg-slate-200 h-4 rounded w-1/2 mb-4"></div>
      <div className="flex justify-between items-center">
        <div className="bg-slate-200 h-6 rounded w-20"></div>
        <div className="bg-slate-200 h-8 w-8 rounded"></div>
      </div>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-slate-50 z-50 p-8">
        {SkeletonCard}
      </div>
    )
  }

  return skeleton
}

// 6. Skeleton Loader - List Item
export function SkeletonList({ items = 3, fullScreen = false }) {
  const skeletonList = (
    <div className="space-y-4 w-full max-w-2xl">
      {Array.from({ length: items }).map((_, i) => (
        <div
          key={i}
          className="flex items-center space-x-4 bg-white p-4 rounded-lg animate-pulse"
        >
          <div className="bg-slate-200 w-16 h-16 rounded-lg flex-shrink-0"></div>
          <div className="flex-1 space-y-2">
            <div className="bg-slate-200 h-4 rounded w-3/4"></div>
            <div className="bg-slate-200 h-3 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-slate-50 z-50 p-8">
        {skeletonList}
      </div>
    )
  }

  return skeletonList
}

// 7. Full Page Loader (Always full screen)
export function FullPageLoader({ message = "Loading..." }) {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-4">
              <Package className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        </div>
        <p className="text-slate-700 font-medium">{message}</p>
      </div>
    </div>
  )
}

// 8. Button Loader (Inline only, not full screen)

export function ButtonLoader({ children, loading, onClick, type = "button", className = "" , message = "Loading"}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>{message}...</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}

// 9. Spinner with Overlay (Can be full screen or relative)
export function SpinnerOverlay({
  message = "Please wait...",
  fullScreen = true,
}) {
  const content = (
    <div className="text-center">
      <Loader2 className="w-10 h-10 text-blue-500 animate-spin mx-auto mb-2" />
      <p className="text-slate-600 text-sm">{message}</p>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
        {content}
      </div>
    )
  }

  return (
    <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center rounded-lg">
      {content}
    </div>
  )
}

// 10. Linear Progress
export function LinearProgress({ fullScreen = true }) {
  const progress = (
    <div className="w-full max-w-md">
      <div className="h-1 bg-slate-200 overflow-hidden rounded-full">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>
      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50 p-8">
        {progress}
      </div>
    )
  }

  return progress
}

// 11. Circle Loader (New - Modern circular progress)
export function CircleLoader({ fullScreen = true, message = "Loading..." }) {
  const loader = (
    <div className="text-center">
      <div className="relative inline-flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-slate-200 rounded-full"></div>
        <div className="absolute w-20 h-20 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
      {message && <p className="mt-4 text-slate-600 font-medium">{message}</p>}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        {loader}
      </div>
    )
  }

  return loader
}

