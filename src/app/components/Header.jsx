"use client";
import { useState } from "react";
import { BsSearch, BsHeart, BsCart } from "react-icons/bs"; 

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-white shadow-md py-5 px-25 mt-4 flex items-center justify-between gap-3 mb-1">
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Primestore Logo"
          className="w-10 h-10 object-contain"
        />
        
        <span className="text-xl font-bold text-gray-800">Primestore</span>
      </div>

      <ul className="flex gap-12 text-xl text-black">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Sign Up</li>
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
  );
}
