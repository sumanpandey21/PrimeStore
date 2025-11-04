"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

export function AdvancedPagination({ totalPages = 100, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1)
  const siblingCount = 1

  const handlePageChange = (page) => {
    setCurrentPage(page)
    onPageChange?.(page)
  }

  const getPaginationItems = () => {
    const totalItems = siblingCount * 2 + 3 + 2 // siblings + first + last + ellipsis

    if (totalPages <= totalItems) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

    const showLeftEllipsis = leftSiblingIndex > 2
    const showRightEllipsis = rightSiblingIndex < totalPages - 2

    const items = []

    items.push(1)

    if (showLeftEllipsis) {
      items.push("...")
    } else if (leftSiblingIndex > 2) {
      for (let i = 2; i < leftSiblingIndex; i++) {
        items.push(i)
      }
    }

    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      items.push(i)
    }

    if (showRightEllipsis) {
      items.push("...")
    } else if (rightSiblingIndex < totalPages - 1) {
      for (let i = rightSiblingIndex + 1; i < totalPages; i++) {
        items.push(i)
      }
    }

    items.push(totalPages)

    return items
  }

  const paginationItems = getPaginationItems()

  return (
    <div className="flex items-center justify-center gap-2 mt-5">
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft size={20} className="cursor-pointer" />
      </button>

      <div className="flex gap-1">
        {paginationItems.map((item, idx) =>
          item === "..." ? (
            <span key={`ellipsis-${idx}`} className="px-3 py-2 text-gray-500">
              <MoreHorizontal size={20} />
            </span>
          ) : (
            <button
              key={item}
              onClick={() => handlePageChange(item)}
              className={`px-3 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                currentPage === item
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "border border-gray-300 hover:bg-gray-100 hover:scale-105"
              }`}
              aria-current={currentPage === item ? "page" : undefined}
            >
              {item}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Next page"
      >
        <ChevronRight size={20} className="cursor-pointer" />
      </button>
    </div>
  )
}
