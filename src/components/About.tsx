"use client";

import { motion } from "framer-motion";
import { Award, Users, Globe, Leaf, Factory, Target } from "lucide-react";

const milestones = [
  { year: "1999", title: "Company Founded", description: "Started as a small roofing supplier in Nairobi" },
  { year: "2005", title: "First Factory", description: "Opened our first manufacturing facility" },
  { year: "2010", title: "National Expansion", description: "Expanded to major counties across Kenya" },
  { year: "2015", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification" },
  { year: "2020", title: "Digital Transformation", description: "Launched online platform and e-commerce" },
  { year: "2024", title: "Market Leader", description: "Became Kenya's leading roofing solutions provider" },
];

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in manufacturing and service delivery",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our customers are at the heart of everything we do",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Committed to environmentally responsible manufacturing practices",
  },
  {
    icon: Leaf,
    title: "Innovation",
    description: "Continuously improving our products and processes",
  },
  {
    icon: Factory,
    title: "Local Manufacturing",
    description: "Proudly made in Kenya with world-class standards",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "Dependent partner for all your roofing and steel needs",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-steel-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-steel-900 mb-4">
            About MRM
          </h2>
          <p className="text-lg text-steel-600 max-w-3xl mx-auto">
            For over two decades, MRM has been Kenya's trusted partner in roofing and steel solutions, 
            delivering quality products and exceptional service to thousands of satisfied customers.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold font-montserrat text-steel-900">
              Our Story
            </h3>
            <p className="text-steel-600 leading-relaxed">
              Founded in 1999, MRM started as a small roofing supplier in Nairobi with a vision to provide 
              quality roofing materials to Kenyan homes and businesses. Over the years, we have grown into a 
              leading manufacturer and supplier of roofing sheets, steel products, and water solutions.
            </p>
            <p className="text-steel-600 leading-relaxed">
              Today, we operate state-of-the-art manufacturing facilities, employ hundreds of skilled workers, 
              and serve customers across all 47 counties in Kenya. Our commitment to quality, innovation, and 
              customer satisfaction has made us the preferred choice for roofing and steel solutions.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
                <div className="text-steel-600">Years of Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-steel-600">Team Members</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold font-montserrat mb-4">Our Mission</h4>
              <p className="text-primary-100 mb-6">
                To provide high-quality, affordable, and sustainable roofing and steel solutions that 
                transform buildings and improve lives across Kenya and East Africa.
              </p>
              <h4 className="text-2xl font-bold font-montserrat mb-4">Our Vision</h4>
              <p className="text-primary-100">
                To be the leading roofing and steel solutions provider in Africa, known for quality, 
                innovation, and exceptional customer service.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold font-montserrat text-steel-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1">
                    <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <div className="text-3xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-steel-900 mb-2">{milestone.title}</h4>
                      <p className="text-steel-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-primary-600 rounded-full items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold font-montserrat text-steel-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold font-montserrat text-steel-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-steel-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
