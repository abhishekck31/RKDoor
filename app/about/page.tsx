import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Hammer, Heart, ArrowRight, Sparkles } from 'lucide-react'
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function AboutPage() {
  useScrollAnimation()

  const teamMembers = [
    {
      name: "Rachel Kim",
      title: "Co-Founder & Design Director",
      image: "/placeholder.svg?height=300&width=300&text=Rachel+Kim",
      bio: "With over 20 years in architectural design, Rachel brings artistic vision and contemporary aesthetics to every project.",
    },
    {
      name: "Kevin Roberts",
      title: "Co-Founder & Master Craftsman",
      image: "/placeholder.svg?height=300&width=300&text=Kevin+Roberts",
      bio: "Kevin's expertise in traditional woodworking techniques ensures every door meets the highest standards of quality and craftsmanship.",
    },
    {
      name: "Marcus Rodriguez",
      title: "Production Manager",
      image: "/placeholder.svg?height=300&width=300&text=Marcus+Rodriguez",
      bio: "Marcus oversees our production process, ensuring every door meets our exacting standards for quality and precision.",
    },
    {
      name: "Emily Thompson",
      title: "Customer Relations",
      image: "/placeholder.svg?height=300&width=300&text=Emily+Thompson",
      bio: "Emily works closely with clients to understand their vision and guide them through the custom door creation process.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pure-white via-off-white to-light-gray">
      {/* Header */}
      <section className="bg-gradient-to-br from-pure-white via-off-white to-light-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-8 scroll-animate-up scroll-delay-100">
              <span className="text-logo-black drop-shadow-lg">About</span>
              <br />
              <span className="text-logo-red drop-shadow-lg">RK Doors</span>
            </h1>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed scroll-animate-text scroll-delay-200">
              Crafting elegant door solutions with traditional craftsmanship, premium materials, and
              <span className="text-logo-red font-semibold"> timeless design since 2010</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate-card scroll-delay-100">
              <img
                src="/placeholder.svg?height=600&width=800&text=Our+Workshop"
                alt="Our workshop"
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h2 className="font-heading text-5xl font-bold text-logo-black mb-8 scroll-animate-up scroll-delay-200">
                Our Story
              </h2>
              <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
                <p className="scroll-animate-text scroll-delay-300">
                  Founded in 2010 by Rachel Kim and Kevin Roberts, RK Doors emerged from a shared passion for combining
                  traditional craftsmanship with contemporary design. We saw an opportunity to create doors that are not
                  just functional, but true works of art.
                </p>
                <p className="scroll-animate-text scroll-delay-400">
                  What began as a small workshop has evolved into a premier manufacturer of handcrafted doors. We
                  believe that every door tells a story and should reflect the unique character of the space it graces.
                </p>
                <p className="scroll-animate-text scroll-delay-500">
                  Today, we continue to honor time-tested techniques while embracing innovative design, creating doors
                  that embody both timeless elegance and modern sophistication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-light-gray to-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl font-bold text-logo-black mb-6 scroll-animate-up">Our Values</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed scroll-animate-text scroll-delay-100">
              These core principles guide everything we do, from design conception to final installation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excellence" },
              { icon: Hammer, title: "Craftsmanship" },
              { icon: Heart, title: "Sustainability" },
              { icon: Users, title: "Partnership" },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all-smooth border-0 hover-lift scroll-animate-card`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-logo-red rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-logo-black mb-4">{item.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed text-sm">
                    We never compromise on quality, ensuring every door meets the highest standards of craftsmanship and
                    beauty.
                  </p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl font-bold text-logo-black mb-6 scroll-animate-up">Meet the Team</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed scroll-animate-text scroll-delay-100">
              The passionate artisans and designers who bring expertise and creativity to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all-smooth border-0 hover-lift scroll-animate-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg transform hover:scale-105 transition-all-smooth"
                  />
                  <h3 className="font-heading text-xl font-bold text-logo-black mb-2">{member.name}</h3>
                  <p className="text-logo-red font-semibold mb-4">{member.title}</p>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-charcoal via-logo-black to-logo-gray-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-5xl font-bold mb-8 scroll-animate-up">Ready to Work with Us?</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed scroll-animate-text scroll-delay-200">
            Let's discuss your project and create something extraordinary together
          </p>
          <Button className="btn-modern">
            <span className="relative z-10 flex items-center gap-2">
              Discover Our Process
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </section>
    </div>
  )
}
