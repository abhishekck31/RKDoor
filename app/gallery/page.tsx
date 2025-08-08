"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, ArrowRight } from 'lucide-react' // Added ArrowRight
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function GalleryPage() {
const [selectedImage, setSelectedImage] = useState<string | null>(null)
useScrollAnimation()

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800&text=Elegant+Front+Door",
    alt: "Elegant front door installation",
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Rustic+Kitchen+Door",
    alt: "Rustic barn door in kitchen",
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=French+Garden+Doors",
    alt: "French doors to garden",
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Contemporary+Sliding",
    alt: "Contemporary sliding door",
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Traditional+Office",
    alt: "Traditional office door",
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Custom+Carved+Foyer",
    alt: "Custom carved door in foyer",
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Glass+Panel+Hallway",
    alt: "Glass panel door in hallway",
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Mahogany+Brass+Hardware",
    alt: "Mahogany door with brass hardware",
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Pocket+Door+System",
    alt: "Pocket door system",
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Industrial+Loft",
    alt: "Industrial style door in loft",
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Classic+Panel",
    alt: "Classic panel door",
  },
  {
    src: "/placeholder.svg?height=600&width=800&text=Modern+Oak+Steel",
    alt: "Modern oak door with steel",
  },
]

return (
  <div className="min-h-screen bg-gradient-to-br from-pure-white via-off-white to-light-gray">
    {/* Enhanced Header */}
    <section className="bg-gradient-to-br from-pure-white via-off-white to-light-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-heading text-6xl md:text-7xl font-bold mb-8 scroll-animate-up scroll-delay-100">
            <span className="text-logo-black drop-shadow-lg">Design</span>
            <br />
            <span className="text-logo-red drop-shadow-lg">Gallery</span>
          </h1>
          <p className="text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed scroll-animate-text scroll-delay-200">
            See how our handcrafted doors transform spaces and create stunning focal points in
            <span className="text-logo-red font-semibold"> elegant homes</span>
          </p>
        </div>
      </div>
    </section>

    {/* Enhanced Gallery Grid */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all-smooth bg-white hover-zoom-glow scroll-animate-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-logo-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Enhanced Lightbox */}
    {selectedImage && (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-zoom-in-scale">
        <div className="relative max-w-4xl max-h-full">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 text-white hover:text-logo-red transition-colors hover-rotate"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain rounded-2xl animate-glow-pulse"
          />
        </div>
      </div>
    )}

    {/* Enhanced CTA Section */}
    <section className="py-20 bg-gradient-to-br from-charcoal via-logo-black to-logo-gray-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl font-bold mb-6 scroll-animate-up">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl text-white/80 mb-8 scroll-animate-text scroll-delay-200">
          Let us create a custom door that perfectly complements your style and architecture
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center scroll-animate-card scroll-delay-400">
          <Button className="btn-modern">
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Work
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white hover:text-charcoal px-8 py-3 rounded-xl font-medium transition-all-smooth bg-transparent hover-zoom-glow"
          >
            View Products
          </Button>
        </div>
      </div>
    </section>
  </div>
)
}
