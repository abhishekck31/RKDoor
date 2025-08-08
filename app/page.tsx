"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Leaf, Palette, ArrowRight, Shield, Sparkles, Zap, Target, Users } from 'lucide-react'
import { useState, useEffect } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  useScrollAnimation()

  const testimonials = [
    {
      text: "RK Doors transformed our home with their stunning craftsmanship. The attention to detail and quality is absolutely unmatched.",
      name: "Sarah Johnson",
      location: "Beverly Hills, CA",
      avatar: "/placeholder.svg?height=60&width=60&text=SJ",
    },
    {
      text: "Working with RK Doors was seamless. They delivered exactly what we envisioned - a perfect blend of elegance and functionality.",
      name: "Michael Chen",
      location: "San Francisco, CA",
      avatar: "/placeholder.svg?height=60&width=60&text=MC",
    },
    {
      text: "As an architect, I appreciate their refined approach and precision. RK Doors consistently exceeds expectations with timeless designs.",
      name: "David Rodriguez",
      location: "Los Angeles, CA",
      avatar: "/placeholder.svg?height=60&width=60&text=DR",
    },
  ]

  const featuredProducts = [
    {
      name: "Classic Oak Elite",
      description: "Timeless elegance with natural wood grain beauty and premium hardware",
      image: "/placeholder.svg?height=500&width=400&text=Classic+Oak+Door",
      badge: "Bestseller",
      price: "From $2,499",
      features: ["Solid Oak", "Premium Hardware", "Custom Sizing"],
    },
    {
      name: "Walnut Signature",
      description: "Rich walnut tones with sophisticated craftsmanship and modern aesthetics",
      image: "/placeholder.svg?height=500&width=400&text=Walnut+Elite+Door",
      badge: "Premium",
      price: "From $3,299",
      features: ["Rich Walnut", "Modern Design", "Lifetime Warranty"],
    },
    {
      name: "Mahogany Royal",
      description: "Luxurious mahogany with traditional elegance and artisanal details",
      image: "/placeholder.svg?height=500&width=400&text=Mahogany+Royal+Door",
      badge: "Luxury",
      price: "From $4,199",
      features: ["Premium Mahogany", "Hand Carved", "Bespoke Options"],
    },
    {
      name: "Cherry Blossom",
      description: "Warm cherry wood with delicate grain patterns and contemporary styling",
      image: "/placeholder.svg?height=500&width=400&text=Cherry+Blossom+Door",
      badge: "Popular",
      price: "From $2,899",
      features: ["Cherry Wood", "Contemporary", "Eco-Friendly"],
    },
  ]

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Every door is crafted with precision using the finest materials and time-honored techniques.",
      color: "from-white to-gray-100",
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "Responsibly sourced wood and eco-friendly finishes for environmental consciousness.",
      color: "from-white to-gray-100",
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Comprehensive warranties and dedicated service for all installations and craftsmanship.",
      color: "from-white to-gray-100",
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Bespoke designs tailored to your vision with artisanal attention to detail.",
      color: "from-white to-gray-100",
    },
  ]

  const stats = [
    { number: "500+", label: "Homes Transformed", icon: Target },
    { number: "25+", label: "Years Experience", icon: Award },
    { number: "100%", label: "Satisfaction Rate", icon: Star },
    { number: "50+", label: "Master Craftsmen", icon: Users },
  ]

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pure-white via-off-white to-light-gray">
      {/* Modern Hero Section with Logo Colors */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 gradient-mesh opacity-5"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-logo-red/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-logo-red-light/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Modern Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-sm font-medium text-charcoal animate-zoom-in">
              <Sparkles className="w-4 h-4 text-logo-red" />
              Handcrafted Excellence Since 1999
            </div>
          </div>

          {/* Hero Title with Modern Typography */}
          <h1 className="font-heading text-7xl md:text-9xl font-bold mb-8 leading-tight animate-fade-in-up">
            <span className="text-logo-black drop-shadow-lg">Exquisite</span>
            <br />
            <span className="text-logo-black">Doors</span>
          </h1>

          {/* Subtitle with Modern Styling */}
          <p className="text-xl md:text-2xl mb-12 text-charcoal/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Discover handcrafted door designs that blend traditional elegance with
            <span className="text-logo-red font-semibold"> contemporary sophistication</span>
          </p>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-400">
            <button className="btn-modern group">
              <span className="relative z-10 flex items-center gap-2">
                Explore Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              <Zap className="w-5 h-5 mr-2" />
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Modern Stats Section with Logo Colors */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`card-modern text-center floating-card scroll-animate-text scroll-delay-${index * 100}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 gradient-red rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-charcoal/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Bento Grid Products Section */}
      <section className="py-24 bg-gradient-to-br from-light-gray to-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-8 py-4 bg-white/90 backdrop-blur-sm border border-logo-red/20 rounded-full text-sm font-medium text-charcoal mb-8 scroll-fade-zoom modern-shadow-lg">
              <div className="w-6 h-6 bg-gradient-red rounded-full flex items-center justify-center">
                <Award className="w-3 h-3 text-white" />
              </div>
              Featured Collection
            </div>
            <div className="relative">
              <h2 className="font-heading text-6xl md:text-7xl font-bold mb-8 scroll-animate-up scroll-delay-100">
                <span className="text-logo-black">Handcrafted</span>
                <br />
                <span className="text-logo-red drop-shadow-lg">Masterpieces</span>
              </h2>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-logo-red/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-logo-red/5 rounded-full blur-xl"></div>
            </div>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed scroll-animate-text scroll-delay-200 font-medium">
              Each door is meticulously crafted with premium materials and traditional techniques,
              <span className="text-logo-red font-semibold"> reimagined for contemporary living</span>
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="bento-grid">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className={`card-elevated floating-card shimmer scroll-animate-card scroll-delay-${(index + 1) * 100} ${
                  index === 0
                    ? "bento-item-large"
                    : index === 1
                      ? "bento-item-wide"
                      : index === 2
                        ? "bento-item-tall"
                        : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-red text-white border-0 rounded-xl px-4 py-2 font-semibold">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="glass-card-dark text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {product.price}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-logo-black mb-3">{product.name}</h3>
                  <p className="text-charcoal/70 leading-relaxed mb-6">{product.description}</p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-logo-red/10 text-logo-red rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="text-logo-red hover:text-logo-red-dark hover:bg-logo-red/10 p-0 h-auto font-semibold group w-full justify-start"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Features Section with Fixed Icons */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-logo-red via-logo-red-light to-logo-red">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-white mb-8 scroll-fade-zoom">
              <Shield className="w-4 h-4 text-white" />
              Why Choose RK Doors
            </div>
            <h2 className="font-heading text-6xl md:text-7xl font-bold mb-8 scroll-animate-up scroll-delay-100">
              <span className="text-logo-black">Excellence in</span>
              <br />
              <span className="text-white drop-shadow-lg">Every Detail</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed scroll-animate-text scroll-delay-200">
              We combine traditional craftsmanship with contemporary design innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center floating-card scroll-animate-card scroll-delay-${(index + 1) * 100} hover:bg-white/20 transition-all duration-300`}
              >
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon className="h-10 w-10 text-logo-red" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Testimonials with Avatar Cards */}
      <section className="py-24 bg-gradient-to-br from-pure-white to-light-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-sm font-medium text-charcoal mb-8 scroll-fade-zoom">
              <Star className="w-4 h-4 text-logo-red" />
              Client Stories
            </div>
            <h2 className="font-heading text-6xl md:text-7xl font-bold text-logo-black mb-8 scroll-animate-up scroll-delay-100">
              What Our
              <br />
              <span className="text-logo-red drop-shadow-lg">Clients Say</span>
            </h2>
          </div>

          <div className="relative">
            <div className="card-modern p-12 text-center scroll-animate-card scroll-delay-200">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 text-logo-red fill-current mx-1" />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl text-logo-black mb-8 leading-relaxed font-light">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-logo-red/20"
                />
                <div className="text-left">
                  <div className="font-bold text-logo-black text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-charcoal/70">{testimonials[currentTestimonial].location}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-logo-red scale-125" : "bg-light-gray hover:bg-charcoal"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA Section with Logo Colors */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-logo-black to-logo-gray-dark"></div>
        <div className="absolute inset-0 gradient-mesh opacity-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-6xl md:text-7xl font-bold mb-8 text-white scroll-animate-up">
            Ready to Create
            <br />
            <span className="text-logo-red drop-shadow-lg">Something Beautiful?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed scroll-animate-text scroll-delay-200">
            Let's craft a door that perfectly reflects your style and enhances your home's elegance with unmatched
            craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center scroll-animate-card scroll-delay-400">
            <button className="btn-modern">
              <span className="relative z-10 flex items-center gap-2">
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-charcoal text-lg px-10 py-4 rounded-xl transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
