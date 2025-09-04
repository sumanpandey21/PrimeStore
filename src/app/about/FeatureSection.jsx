import { Truck, Headphones, ShieldCheck } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      subtitle: "Free delivery for all orders over Rs.25000",
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      subtitle: "Friendly 24/7 customer support",
    },
    {
      icon: ShieldCheck,
      title: "MONEY BACK GUARANTEE",
      subtitle: "We return money within 30 days",
    },
  ]
return (
  <div className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-12">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center px-6 group max-w-xs"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-500">
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.subtitle}</p>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

}
