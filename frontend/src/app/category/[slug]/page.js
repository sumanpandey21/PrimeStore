"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import ProductCard from "@/components/ProductCard"
import Categories from "@/components/Categories"
import ServicePromotion from "@/components/ServicePromotionFilter"
import PriceFilter from "@/components/PriceFilter"
import RatingFilter from "@/components/RatingFilter"
import { Filter, X } from "lucide-react"
import { toast } from "react-toastify"
import { CircleLoader } from "@/components/Loading"
import ProductNotFound from "@/components/ProductNotFound"

export default function CategoryPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("q")
  const [categories, setCategories] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState({})
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const applyFilters = async () => {
    try {
      setLoading(true)
      setHasError(false)
      const params = new URLSearchParams()
      if (id) params.append("category", id)

      // Add all active filters
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value)
      })

      const response = await fetch(
        `http://localhost:8000/api/products/?${params.toString()}`
      )
      if (!response.ok) throw new Error("Failed to fetch products")
      
      const data = await response.json()
      setCategories(data.results ? data.results : data)
    } catch (error) {
      setHasError(true)
      toast.error("Failed to fetch products")
      setCategories([])
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (data) => {
    setFilters((prev) => {
      const updated = { ...prev }
      
      // Update with new data
      Object.entries(data).forEach(([key, value]) => {
        if (value === false || value === null || value === '' || value === undefined) {
          // Remove the filter if it's being unchecked
          delete updated[key]
        } else {
          // Add or update the filter
          updated[key] = value
        }
      })
      
      console.log('Updated filters:', updated) // For debugging
      return updated
    })
  }

  const clearAllFilters = () => {
    setFilters({})
  }

  useEffect(() => {
    applyFilters()
  }, [filters, id])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block sticky top-0 left-0 w-72 xl:w-80 h-screen bg-white shadow-lg overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <Categories />
            </div>

            <div className="mb-8">
              <ServicePromotion onChange={handleFilterChange} />
            </div>

            <div className="mb-8">
              <PriceFilter onChange={handleFilterChange} />
            </div>

            <div className="mb-8">
              <RatingFilter onChange={handleFilterChange} />
            </div>

            {Object.keys(filters).length > 0 && (
              <button
                onClick={clearAllFilters}
                className="w-full py-2 px-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 lg:hidden bg-white border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">Products</h1>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filters</span>
            </button>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
              <div className="flex flex-col items-center gap-4">
                <CircleLoader />
                <p className="text-gray-600 text-sm">Loading products...</p>
              </div>
            </div>
          ) : categories.length === 0 ? (
            /* No Products State */
            <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
              <ProductNotFound />
            </div>
          ) : (
            /* Products Grid */
            <div className="p-4 lg:p-6 xl:p-8">
              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{categories.length}</span> products
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6 mb-8">
                {categories.map((category) => (
                  <ProductCard
                    key={category.id}
                    id={category.id}
                    image={category.image1}
                    title={category.name}
                    price={category.price}
                    rating={category.rating}
                    ratingCount={category.totalRatings}
                    discount={category.discount}
                  />
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center mb-8">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                  Load More
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filter Modal */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isFilterOpen ? "visible" : "invisible"
        }`}
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isFilterOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setIsFilterOpen(false)}
        />

        {/* Filter Drawer */}
        <div
          className={`fixed top-0 left-0 right-0 bg-white rounded-b-2xl shadow-2xl transform transition-transform duration-300 max-h-[80vh] ${
            isFilterOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white rounded-b-2xl z-10">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Filter Content */}
          <div className="overflow-y-auto max-h-[calc(80vh-140px)]">
            <div className="p-4 border-b border-gray-200">
              <ServicePromotion onChange={handleFilterChange} />
            </div>

            <div className="p-4 border-b border-gray-200">
              <PriceFilter onChange={handleFilterChange} />
            </div>

            <div className="p-4 border-b border-gray-200">
              <RatingFilter onChange={handleFilterChange} />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-3 p-4 border-t border-gray-200 bg-white sticky bottom-0">
            <button
              onClick={clearAllFilters}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Clear All
            </button>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="flex-1 py-3 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-md"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}