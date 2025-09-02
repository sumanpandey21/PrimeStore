import React from "react"
import { DollarSign, ShoppingBag, TrendingUp } from "lucide-react"
import MemberCard from "./MemberCard"
import StatisticsCard from "./StatisticsCard"
const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-gray-500">About</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Our Story
            </h1>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Launched in 2025, PrimeStore is Nepal's premier online shopping
                marketplace with an active presence in Nepal. Supported by wide
                range of tailored marketing, data and service solutions,
                PrimeStore has different brands and serves many customers across
                the region.
              </p>

              <p>
                PrimeStore has different variety products of different trusted
                brands to offer, growing at a very fast. PrimeStore offers
                genuine quality of product at minimum cost as possible ensuring
                customers maximum satisfaction.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl overflow-hidden">
              <img
                src="about/rightcard.svg"
                alt="Happy women shopping with colorful shopping bags"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Monthly Product Sale */}
            <StatisticsCard
              message={"Monthly Product Sale"}
              number={"32K"}
              symbol={DollarSign}
              className={
                "bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              }
            />

            <StatisticsCard
              message={"Customer active in our site"}
              number={"45.5K"}
              className={
                "bg-white border-2 border-gray-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              }
            />

            <StatisticsCard
              message={"Customer active in our site"}
              number={"45.5K"}
              className={
                "bg-white border-2 border-gray-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              }
            />
            <MemberCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
