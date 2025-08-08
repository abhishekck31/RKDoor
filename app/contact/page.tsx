"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, ArrowRight, Sparkles } from 'lucide-react'
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    clientType: "",
    message: "",
  })
  useScrollAnimation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pure-white via-off-white to-light-gray">
      {/* Header */}
      <section className="bg-gradient-to-br from-pure-white via-off-white to-light-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-8 scroll-animate-up scroll-delay-100">
              <span className="text-logo-black drop-shadow-lg">Get In</span>
              <br />
              <span className="text-logo-red drop-shadow-lg">Touch</span>
            </h1>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed scroll-animate-text scroll-delay-200">
              Ready to start your custom door project? Let's discuss how we can bring your
              <span className="text-logo-red font-semibold"> elegant vision to life</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-4xl font-bold text-logo-black mb-6 scroll-animate-up">
                  Contact Information
                </h2>
                <p className="text-charcoal/80 mb-8 text-lg leading-relaxed scroll-animate-text scroll-delay-100">
                  Reach out to us through any of these channels. We're here to help with your door project from concept
                  to completion.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address" },
                  { icon: Phone, title: "Phone" },
                  { icon: Mail, title: "Email" },
                  { icon: Clock, title: "Business Hours" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all-smooth border-0 hover-lift scroll-animate-card`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 flex items-start space-x-6">
                      <div className="w-16 h-16 bg-logo-red rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-logo-black mb-3">{item.title}</h3>
                        {item.title === "Address" && (
                          <p className="text-charcoal/70 leading-relaxed text-sm">
                            123 Craftsman Lane
                            <br />
                            Woodville, CA 90210
                          </p>
                        )}
                        {item.title === "Phone" && <p className="text-charcoal/70 text-lg">(555) 123-4567</p>}
                        {item.title === "Email" && <p className="text-charcoal/70 text-lg">info@rkdoors.com</p>}
                        {item.title === "Business Hours" && (
                          <div className="text-charcoal/70 space-y-1 leading-relaxed text-sm">
                            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white rounded-3xl shadow-2xl border-0 scroll-animate-card scroll-delay-200 hover-lift transition-all-smooth">
                <CardContent className="p-10">
                  <h2 className="font-heading text-4xl font-bold text-logo-black mb-8 scroll-animate-up scroll-delay-300">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-logo-black mb-3">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="w-full rounded-xl border-gray-300 focus:border-logo-red focus:ring-logo-red text-charcoal"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-logo-black mb-3">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full rounded-xl border-gray-300 focus:border-logo-red focus:ring-logo-red text-charcoal"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-logo-black mb-3">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full rounded-xl border-gray-300 focus:border-logo-red focus:ring-logo-red text-charcoal"
                      />
                    </div>

                    <div>
                      <label htmlFor="clientType" className="block text-sm font-semibold text-logo-black mb-3">
                        I am a... *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("clientType", value)}>
                        <SelectTrigger className="w-full rounded-xl border-gray-300 focus:border-logo-red focus:ring-logo-red text-charcoal">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="homeowner">Homeowner</SelectItem>
                          <SelectItem value="contractor">Contractor</SelectItem>
                          <SelectItem value="architect">Architect</SelectItem>
                          <SelectItem value="designer">Interior Designer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-logo-black mb-3">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project, including any specific requirements, timeline, or questions you may have..."
                        className="w-full rounded-xl border-gray-300 focus:border-logo-red focus:ring-logo-red text-charcoal"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-modern"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-light-gray to-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-logo-black mb-6 scroll-animate-up">
              Visit Our Showroom
            </h2>
            <p className="text-xl text-charcoal/80 leading-relaxed scroll-animate-text scroll-delay-100">
              Come see our doors in person and meet with our design team
            </p>
          </div>

          <div className="bg-white rounded-3xl h-96 flex items-center justify-center shadow-lg scroll-animate-card scroll-delay-200">
            <div className="text-center text-charcoal">
              <MapPin className="h-16 w-16 mx-auto mb-6 text-logo-red" />
              <p className="text-xl font-semibold text-logo-black mb-2">Interactive Map</p>
              <p className="text-lg text-charcoal/80">123 Craftsman Lane, Woodville, CA 90210</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-logo-black to-logo-gray-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 scroll-animate-up">Ready to Get Started?</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed scroll-animate-text scroll-delay-200">
            Schedule a consultation to discuss your project in detail
          </p>
          <Button
            size="lg"
            className="btn-modern"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </section>
    </div>
  )
}
