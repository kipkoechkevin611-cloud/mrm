"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Award, Truck } from "lucide-react";

const stats = [
  { value: 25, label: "Years Experience", suffix: "+" },
  { value: 5000, label: "Projects Completed", suffix: "+" },
  { value: 47, label: "Counties Served", suffix: "" },
  { value: 100, label: "Satisfaction Rate", suffix: "%" },
];

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, duration / steps);
      });
    }
  }, [isInView]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-steel-900/90 via-primary-900/80 to-steel-900/90" />
        <div className="absolute inset-0 bg-[url('/Box_profile.jpeg')] bg-cover bg-center opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            >
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">ISO 9001:2015 Certified</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight"
            >
              Kenya's Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                Roofing & Steel
              </span>{" "}
              Solutions Partner
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-steel-200 leading-relaxed max-w-xl"
            >
              Premium mabati, roofing systems, steel products, and water solutions engineered for durability and performance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/30"
              >
                Get Free Quote
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent-400" />
                <span className="text-sm text-steel-300">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-accent-400" />
                <span className="text-sm text-steel-300">Nationwide Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-sm text-steel-300">Warranty Backed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-2">
                  {animatedStats[index]}{stat.suffix}
                </div>
                <div className="text-steel-200 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
