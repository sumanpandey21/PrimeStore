import React from "react"
import { DollarSign, Gift, Wallet } from "lucide-react"
import MemberCard from "./MemberCard"
import StatisticsCard from "./StatisticsCard"
import FeaturesSection from "./FeatureSection"

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
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
          {/* Text */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Our Story
            </h1>

            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Launched in 2025, PrimeStore is Nepal's premier online shopping
                marketplace with an active presence in Nepal. Supported by a
                wide range of tailored marketing, data and service solutions,
                PrimeStore has different brands and serves many customers across
                the region.
              </p>

              <p>
                PrimeStore has a variety of trusted brand products to offer,
                growing very fast. PrimeStore offers genuine quality products at
                minimum cost as possible, ensuring maximum customer
                satisfaction.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="w-100">
              <img
                src="about/rightcard.svg"
                alt="Happy women shopping with colorful shopping bags"
                className="w-100 h-100 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-10">
        <div className="bg-white py-10">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-4">
            <StatisticsCard
              message="Monthly Product Sale"
              number="33k"
              symbol={DollarSign}
              className="bg-red-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              iconBg="bg-white/20 text-white"
            />

            <StatisticsCard
              message="Customer active in our site"
              number="45.5k"
              symbol={Gift}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              iconBg="bg-gray-200 text-black"
            />

            <StatisticsCard
              message="Annual gross sale in our site"
              number="25k"
              symbol={Wallet}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              iconBg="bg-gray-200 text-black"
            />
          </div>
        </div>
      </div>
      <MemberCard />
      <FeaturesSection />
    </div>
  )
}

export default AboutUsPage
