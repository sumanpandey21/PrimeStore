import React from "react"

function StatisticsCard({message, number, symbol, className}) {
  return (
    <div>
      <div className={`${className} w-70`}>
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
        </div>
        <div className="text-4xl font-bold mb-2">{number}</div>
        <div className="text-red-100 font-medium">{message}</div>
      </div>
    </div>
  )
}

export default StatisticsCard
