import React from "react"
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

function MemberCard() {
  const members = [
    {
      id: 1,
      fullname: "Sandesh Lamichhane",
      role: "Founder & Chairman",
    },
    {
      id: 2,
      fullname: "Suman Pandey",
      role: "Managing Director",
    },
    {
      id: 3,
      fullname: "Biplav",
      role: "Product Designer",
    },
  ]

  return (
    <>
      {members.map((member) => (
        <div key={member.id} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <div className="w-20 h-20 bg-gray-500 rounded-full"></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
           { member.fullname}
          </h3>
          <p className="text-gray-600 mb-6">{member.role}</p>

          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
      ))}
    </>
  )
}

export default MemberCard
