import React from "react"
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

function MemberCard() {
  const members = [
    {
      id: 1,
      fullname: "Sandesh Lamichhane",
      role: "Founder & Chairman",
      image: "about/member.svg",
    },
    {
      id: 2,
      fullname: "Suman Pandey",
      role: "Managing Director",
      image: "about/member.svg",
    },
    {
      id: 3,
      fullname: "Biplav",
      role: "Product Designer",
      image: "about/member.svg",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-7 sm:flex-row sm:flex-wrap sm:gap-7">
      {members.map((member) => (
        <div
          key={member.id}
          className="w-full max-w-xs rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-2xl overflow-hidden">
            <img
              src={member.image}
              alt="member_dummy_image"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {member.fullname}
          </h3>
          <p className="text-gray-600 mb-6">{member.role}</p>

          <div className="flex justify-center space-x-4">
            <a href="#">
              <FaTwitter className="w-5 h-5 hover:text-blue-500" />
            </a>
            <a href="#">
              <FaInstagram className="w-5 h-5 hover:text-pink-500" />
            </a>
            <a href="#">
              <FaLinkedinIn className="w-5 h-5 hover:text-blue-500" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
export default MemberCard