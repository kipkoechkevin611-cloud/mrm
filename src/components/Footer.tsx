"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Story", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "News & Blog", href: "#blog" },
  ],
  products: [
    { name: "Roofing Sheets", href: "#products" },
    { name: "Steel Products", href: "#products" },
    { name: "Water Tanks", href: "#products" },
    { name: "Accessories", href: "#products" },
  ],
  services: [
    { name: "Installation", href: "#contact" },
    { name: "Delivery", href: "#contact" },
    { name: "Technical Support", href: "#contact" },
    { name: "Warranty", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-steel-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold font-montserrat mb-3">
              Stay Updated with Our Latest Products
            </h3>
            <p className="text-primary-100 mb-6">
              Subscribe to our newsletter for exclusive offers and roofing tips
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-steel-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-steel-900 text-white px-6 py-3 rounded-full font-medium hover:bg-steel-800 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-3xl font-bold font-montserrat text-primary-400 mb-4">
                MRM
              </h4>
              <p className="text-steel-300 leading-relaxed">
                Kenya's trusted roofing and steel solutions partner. Premium quality products engineered for durability and performance.
              </p>
            </motion.div>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="bg-steel-800 p-3 rounded-full hover:bg-primary-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold font-montserrat mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-steel-300 hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-lg font-semibold font-montserrat mb-6">Products</h5>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-steel-300 hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold font-montserrat mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-steel-300">
                  Industrial Area, Nairobi<br />
                  Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:0750918945" className="text-steel-300 hover:text-primary-400 transition-colors">
                  0750918945
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@mrm.co.ke" className="text-steel-300 hover:text-primary-400 transition-colors">
                  info@mrm.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-steel-400 text-sm">
              © {new Date().getFullYear()} MRM Roofing & Steel. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-steel-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-steel-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
