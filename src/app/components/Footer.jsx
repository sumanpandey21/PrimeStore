"use client"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className=" w-full bg-black text-white pt-10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">PrimeStore</h2>
          <p className="mb-2 font-semibold">Follow Us</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <p className="mb-2">support@primestore.com</p>
          <p className="mb-2">+977 9800000254</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <ul className="flex flex-col space-y-2">
            <Link href={"/myaccount"}>
              <li className="footer-link ">My Account</li>
            </Link>

            <Link href={""}>
              <li className="footer-link">Login / Register</li>
            </Link>
            <Link href={""}>
              <li className="footer-link">Cart</li>
            </Link>
            <Link href={""}>
              <li className="footer-link">Wishlist</li>
            </Link>
            <Link href={""}>
              <li className="footer-link">Shop</li>
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="flex flex-col space-y-2">
            <Link href={"#"}>
              <li className="footer-link ">Privacy Policy</li>
            </Link>
            <Link href={"#"}>
              <li className="footer-link ">Terms of Use</li>
            </Link>

            <Link href={"/about"}>
              <li className="footer-link ">About</li>
            </Link>
            <Link href={"/contact"}>
              <li className="footer-link ">Contact</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="mt-10 py-4 border-t border-gray-700 text-center text-sm">
        &copy; 2025 PrimeStore. All rights reserved.
      </div>
    </footer>
  )
}
