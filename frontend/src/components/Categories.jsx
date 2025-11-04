"use client"
import React, { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import slugify from "slugify"
import { toast } from "react-toastify"

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const searchParams = useSearchParams()
  
  const displayCategories = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/categories/", {
        method: "GET",
      })

      const data = await response.json()
      setCategories(data)
    } catch (error) {
      toast.error(("Error fetching categories:", error))
    }
  }

  useEffect(() => {
    displayCategories()
  }, [])

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId)
  }

  return (
    <div className="space-y-1 lg:px-13 lg:mt-2">
      {categories.map((category) => (
        <Link
          href={`/category/${slugify(category.name, {
            replacement: "-",
            lower: true,
          })}/?q=${category.id}`}
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`
            block px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out text-sm lg:text-base
          `}
        >
          <div className="flex items-center justify-between">
            <span>{category.name}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Categories
