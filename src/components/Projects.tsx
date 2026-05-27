"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, Home, Factory, GraduationCap, ZoomIn } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nairobi Residential Complex",
    category: "Residential",
    image: "/our projects.jpeg",
    description: "Modern residential complex with premium box profile roofing",
    location: "Nairobi",
    year: "2024",
  },
  {
    id: 2,
    title: "Mombasa Industrial Warehouse",
    category: "Industrial",
    image: "/projects.jpeg",
    description: "Large-scale industrial warehouse with corrugated steel roofing",
    location: "Mombasa",
    year: "2024",
  },
  {
    id: 3,
    title: "Kisumu Commercial Center",
    category: "Commercial",
    image: "/project.jpeg",
    description: "Premium commercial building with elegant tile roofing",
    location: "Kisumu",
    year: "2023",
  },
  {
    id: 4,
    title: "Nakuru School Complex",
    category: "Institutional",
    image: "/Box_profile.jpeg",
    description: "Educational institution with durable star tile roofing",
    location: "Nakuru",
    year: "2023",
  },
  {
    id: 5,
    title: "Eldoret Manufacturing Plant",
    category: "Industrial",
    image: "/Corrugated.jpeg",
    description: "State-of-the-art manufacturing facility with glazed tile roofing",
    location: "Eldoret",
    year: "2023",
  },
  {
    id: 6,
    title: "Machakos Luxury Homes",
    category: "Residential",
    image: "/Elegant_tile.jpeg",
    description: "Premium residential development with mandarin tile roofing",
    location: "Machakos",
    year: "2022",
  },
];

const categories = [
  { name: "All", icon: Building2 },
  { name: "Residential", icon: Home },
  { name: "Commercial", icon: Building2 },
  { name: "Industrial", icon: Factory },
  { name: "Institutional", icon: GraduationCap },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-steel-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Explore our portfolio of successful roofing and steel projects across Kenya
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === category.name
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-steel-100 text-steel-700 hover:bg-steel-200"
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-primary-400 text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold font-montserrat mb-2">
                    {project.title}
                  </h3>
                  <p className="text-steel-200 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-steel-300 text-sm">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>View Details</span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Project Info (Visible by default) */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-steel-500 text-sm">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold font-montserrat text-steel-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-steel-600 text-sm">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-steel-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-steel-800 transition-colors">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
