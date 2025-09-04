import React from "react"

function StatisticsCard({ message, number, symbol: Icon, className, iconBg }) {
  return (
    <div
      className={`${className} w-fit flex flex-col items-center text-center p-6`}
    >
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${iconBg}`}
      >
        {Icon && <Icon className="w-8 h-8" />}
      </div>

      <div className="text-2xl font-bold mb-2">{number}</div>

      <div className="text-sm opacity-80">{message}</div>
    </div>
  )
}

export default StatisticsCard
