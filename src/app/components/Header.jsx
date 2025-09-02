"use client"
import { useState } from "react"
import { BsSearch, BsHeart, BsCart } from "react-icons/bs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [search, setSearch] = useState("")
  const pathname = usePathname()
  const linkClass = (path) =>
  `transition-colors duration-200 ${
    pathname === path
      ? "underline decoration-orange-500 text-orange-600"
      : "hover:text-orange-500"
  }`;

  return (
    <nav className="bg-white shadow-md py-5 px-25 mt-4 flex items-center justify-between gap-3 mb-1">
      <div className="flex items-center gap-1">
        <Image src="/icon.svg" alt="My Icon" width={50} height={50} />

        <span className="text-xl font-bold text-gray-800 mt-5">Primestore</span>
      </div>

      <ul className="flex gap-12 text-xl text-black">
        <Link href={"/"} className={linkClass("/")}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link href={"/contact"} className={linkClass("/contact")}>
          <li className="cursor-pointer">Contact</li>
        </Link>
        <Link href={"/about"} className={linkClass("/about")}>
          <li className="cursor-pointer">About</li>
        </Link>
        <li className="cursor-pointer">Sign Up</li>
      </ul>

      <div className="flex items-center gap-5">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-1">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none px-3 py-2 w-64 sm:w-55"
          />
          <BsSearch className="text-black w-4 h-5" />
        </div>

        <BsHeart className="w-6 h-6 text-gray-700 hover:text-red-500 cursor-pointer" />

        <BsCart className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
      </div>
    </nav>
  )
}
