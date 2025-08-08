import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock, ExternalLink, Download } from 'lucide-react'

export function Footer() {
const address =
  "S,No,17/3 Angalpura Village, Kadaagrahara Main Road, Hobli, Bidarahalli, Bengaluru, Karnataka 560077"
const mapsHref = `https://www.google.com/maps?q=${encodeURIComponent(address)}`
const appUrl = "https://example.com/app" // TODO: replace with your actual app link
const year = new Date().getFullYear()

return (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/rk-logo.jpg"
              alt="RK Doors logo"
              width={44}
              height={44}
              className="rounded-lg shadow-md"
              priority
            />
            <div>
              <p className="font-heading text-2xl font-semibold">RK Doors</p>
              <p className="text-xs text-gray-300">Premium Craftsmanship</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Elegant door solutions with exceptional craftsmanship and timeless design. Bespoke builds for residences,
            architects, and designers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <a href={appUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                Install our app
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-0.5">
                <MapPin className="h-5 w-5 text-red-400" />
              </span>
              <div>
                <p className="text-gray-300">
                  {"S,No,17/3 Angalpura Village"}
                  <br />
                  {"Kadaagrahara Main Road, Hobli, Bidarahalli"}
                  <br />
                  {"Bengaluru, Karnataka 560077"}
                </p>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-300 hover:text-white mt-2"
                >
                  Get directions
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span className="sr-only">Opens in Google Maps</span>
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-red-400" />
              <a href="tel:+15551234567" className="text-gray-300 hover:text-white">
                (555) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-red-400" />
              <a href="mailto:info@rkdoors.com" className="text-gray-300 hover:text-white">
                info@rkdoors.com
              </a>
            </li>
          </ul>
        </div>

        {/* Hours and Social */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Hours & Social</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-red-400 mt-0.5" />
              <div className="text-gray-300">
                <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                <p>Sat: 9:00 AM – 4:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-sm font-medium text-white mb-3">Follow us</p>
              <div className="flex items-center gap-4">
                <Link href="#" aria-label="RK Doors on Facebook" className="text-gray-300 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="RK Doors on Instagram" className="text-gray-300 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="RK Doors on LinkedIn" className="text-gray-300 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <p className="text-gray-400 text-xs text-center md:text-left">
          © {year} RK Doors. All rights reserved.
        </p>

        <div className="flex justify-center">
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-logo-red to-logo-red-dark hover:from-logo-red-dark hover:to-logo-red text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Install our app"
          >
            <Download className="h-4 w-4" />
            INSTALL OUR APP
          </a>
        </div>

        <div className="text-xs text-gray-400 flex justify-center md:justify-end">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </div>
  </footer>
)
}
