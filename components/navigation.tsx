"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Actual Image */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <Image
                src="/images/rk-logo.jpg"
                alt="RK Doors Logo"
                width={50}
                height={50}
                className="rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="font-heading text-2xl font-bold text-black">RK Doors</span>
              <div className="text-xs text-gray-600 font-medium">Premium Craftsmanship</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-all duration-300 relative group px-3 py-2 rounded-lg ${
                  pathname === item.href 
                    ? "text-red-600 bg-red-50" 
                    : "text-gray-800 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-3/4 ${
                    pathname === item.href ? "w-3/4" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 rounded-xl hover:bg-red-50 text-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white border-t border-gray-200 rounded-b-2xl shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl ${
                    pathname === item.href 
                      ? "text-red-600 bg-red-50" 
                      : "text-gray-800 hover:text-red-600 hover:bg-red-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
