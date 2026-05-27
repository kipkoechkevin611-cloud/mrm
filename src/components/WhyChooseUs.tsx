"use client";

import { motion } from "framer-motion";
import { Shield, Truck, HeadphonesIcon, DollarSign, Zap, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Quality Steel",
    description: "Our products are made from high-grade steel ensuring durability and longevity for your projects",
    color: "bg-blue-500",
  },
  {
    icon: Award,
    title: "Long-Lasting Durability",
    description: "Engineered to withstand harsh weather conditions and last for decades",
    color: "bg-green-500",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Fast and reliable delivery to all 47 counties in Kenya",
    color: "bg-orange-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Our team of experts provides technical guidance and customer support",
    color: "bg-purple-500",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive pricing without compromising on quality",
    color: "bg-yellow-500",
  },
  {
    icon: Zap,
    title: "Modern Manufacturing",
    description: "State-of-the-art facilities with advanced production technology",
    color: "bg-red-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-steel-900 mb-4">
            Why Choose MRM?
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            We combine quality, reliability, and exceptional service to deliver the best roofing and steel solutions in Kenya
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-steel-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-steel-100"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-montserrat text-steel-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-steel-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center space-x-4">
              <Award className="w-12 h-12 text-accent-400" />
              <div className="text-left">
                <div className="text-2xl font-bold font-montserrat">ISO 9001:2015</div>
                <div className="text-primary-200">Certified Quality</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/30" />
            <div className="flex items-center space-x-4">
              <Shield className="w-12 h-12 text-accent-400" />
              <div className="text-left">
                <div className="text-2xl font-bold font-montserrat">25+ Years</div>
                <div className="text-primary-200">Industry Experience</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/30" />
            <div className="flex items-center space-x-4">
              <Truck className="w-12 h-12 text-accent-400" />
              <div className="text-left">
                <div className="text-2xl font-bold font-montserrat">47 Counties</div>
                <div className="text-primary-200">Nationwide Coverage</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
