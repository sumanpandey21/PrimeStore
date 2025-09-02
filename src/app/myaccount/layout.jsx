"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountLayout({ children }) {
  const pathname = usePathname()
  const linkClass = (path) =>    
    `block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      pathname === path
        ? "text-orange-600 bg-orange-50" 
        : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
    }`;

  return (
    <div className="min-h-screen">
      <div className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">My Account</span>
          </nav>
          <div className="text-sm">
            Welcome! <span className="text-red-500 font-medium">Ram Poudel</span>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-sm p-6 px-5">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Manage My Account
            </h2>

            <nav className="space-y-4">
              <Link href="/myaccount/my_profile" className={linkClass("/myaccount/my_profile")}>
                My Profile
              </Link>
              <Link href="/myaccount/my_payment_options" className={linkClass("/myaccount/my_payment_options")}>
                My Payment Options
              </Link>
            </nav>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                My Orders
              </h3>
              <nav className="space-y-3">
                <Link href="/myaccount/returns" className={linkClass("/myaccount/returns")}>
                  My Returns
                </Link>
                <Link href="/myaccount/cancellations" className={linkClass("/myaccount/cancellations")}>
                  My Cancellations
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="lg:w-3/4">{children}</div>
      </div>
    </div>
  );
}
