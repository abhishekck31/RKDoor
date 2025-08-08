"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation" // Import useScrollAnimation
import { ArrowRight } from 'lucide-react' // Import ArrowRight icon

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  useScrollAnimation() // Initialize scroll animation hook

  const categories = ["All", "Interior Doors", "Exterior Doors", "Sliding Doors", "Custom"]

  const products = [
    {
      name: "Classic Oak",
      category: "Exterior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Classic+Oak",
      badge: "Best Seller",
    },
    {
      name: "Elegant Walnut",
      category: "Interior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Elegant+Walnut",
      badge: "Premium",
    },
    {
      name: "Mahogany Royal",
      category: "Exterior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Mahogany+Royal",
      badge: "Luxury",
    },
    {
      name: "Cherry Blossom",
      category: "Interior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Cherry+Blossom",
      badge: "Popular",
    },
    {
      name: "Teak Elegance",
      category: "Sliding Doors",
      image: "/placeholder.svg?height=400&width=300&text=Teak+Elegance",
      badge: "Modern",
    },
    {
      name: "Rustic Barn",
      category: "Sliding Doors",
      image: "/placeholder.svg?height=400&width=300&text=Rustic+Barn",
      badge: "Rustic",
    },
    {
      name: "Premium Mahogany",
      category: "Exterior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Premium+Mahogany",
      badge: "Luxury",
    },
    {
      name: "Glass & Wood",
      category: "Exterior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Glass+Wood",
      badge: "Designer",
    },
    {
      name: "Traditional Panel",
      category: "Interior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Traditional+Panel",
      badge: "Classic",
    },
    {
      name: "Artisan Custom",
      category: "Custom",
      image: "/placeholder.svg?height=400&width=300&text=Artisan+Custom",
      badge: "Handcrafted",
    },
    {
      name: "Space Saver",
      category: "Sliding Doors",
      image: "/placeholder.svg?height=400&width=300&text=Space+Saver",
      badge: "Compact",
    },
    {
      name: "French Elegance",
      category: "Exterior Doors",
      image: "/placeholder.svg?height=400&width=300&text=French+Elegance",
      badge: "Elegant",
    },
  ]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pure-white via-off-white to-light-gray">
      {/* Enhanced Header */}
      <section className="bg-gradient-to-br from-pure-white via-off-white to-light-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-8 scroll-animate-up scroll-delay-100">
              <span className="text-logo-black drop-shadow-lg">Our</span>
              <br />
              <span className="text-logo-red drop-shadow-lg">Collections</span>
            </h1>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed scroll-animate-text scroll-delay-200">
              Explore our complete range of handcrafted doors, from timeless classics to
              <span className="text-logo-red font-semibold"> contemporary elegance</span>
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Filter Menu */}
      <section className="bg-gradient-to-br from-light-gray to-pure-white border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`
                  ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-logo-red to-logo-red-dark hover:from-logo-red-dark hover:to-logo-red text-white rounded-xl px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      : "border-2 border-gray-300 text-gray-800 hover:bg-red-50 hover:text-red-600 rounded-xl px-6 py-3 font-semibold transition-all duration-300"
                  }
                  scroll-animate-card scroll-delay-${(index + 1) * 100}
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Product Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-xl transition-all-smooth bg-white rounded-3xl overflow-hidden border-0 shadow-lg hover-zoom-glow animate-zoom-in-rotate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-logo-red to-logo-red-dark text-white border-0 rounded-full px-3 py-1 animate-glow-pulse hover-rotate">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-logo-black mb-2 hover-text-glow">
                    {product.name}
                  </h3>
                  <p className="text-charcoal text-sm mb-4">{product.category}</p>
                  <Button
                    variant="outline"
                    className="w-full border-logo-red text-logo-red hover:bg-logo-red hover:text-white bg-white rounded-xl transition-all-smooth hover-zoom-glow"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-charcoal text-lg animate-float-up">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-logo-black to-logo-gray-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 animate-zoom-in-scale animate-text-glow">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-white/80 mb-8 animate-float-up animate-delay-200">
            We specialize in custom designs tailored to your exact specifications and style preferences
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-logo-red to-logo-red-dark hover:from-logo-red-dark hover:to-logo-red text-white rounded-2xl px-8 py-3 hover-zoom-glow animate-glow-pulse animate-bounce-in animate-delay-400"
          >
            Explore Custom Designs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
