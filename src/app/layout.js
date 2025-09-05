import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "PrimeStore",
  description: "E-commerce platform",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="min-h-screen w-screen max-w-none bg-white">
        <Header />
        <CartProvider>
          <main className="w-full">{children}</main>

        </CartProvider>
        <Footer />
      </body>
    </html>
  )
}


