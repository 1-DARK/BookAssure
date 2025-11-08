import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">BookAssure</h3>
            <p className="text-sm text-background/80">
              Helping Indian healthcare clinics reduce no-shows and maximize revenue.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="px-3 py-1 bg-accent text-white rounded-full text-xs font-medium">
                Made in India 🇮🇳
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>support@bookassure.in</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2024 BookAssure. All rights reserved. Built for Indian Healthcare.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-background/60 hover:text-background transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-background/60 hover:text-background transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-background/60 hover:text-background transition-colors text-sm"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
