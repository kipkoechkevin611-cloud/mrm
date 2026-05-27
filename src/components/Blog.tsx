"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Choosing the Right Roofing Material for Your Home",
    excerpt: "A comprehensive guide to selecting the best roofing material based on climate, budget, and aesthetic preferences.",
    image: "/latest from our blog.jpeg",
    category: "Roofing Tips",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Benefits of Modern Steel Roofing Systems",
    excerpt: "Discover why steel roofing is becoming the preferred choice for modern construction projects in Kenya.",
    image: "/blogs.jpeg",
    category: "Steel Products",
    date: "2024-01-10",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Rainwater Harvesting: A Complete Guide",
    excerpt: "Learn how to set up an efficient rainwater harvesting system using quality water tanks and gutters.",
    image: "/blogss.jpeg",
    category: "Water Solutions",
    date: "2024-01-05",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Maintaining Your Roof: Essential Tips for Longevity",
    excerpt: "Regular maintenance can extend the life of your roof significantly. Here are expert tips to keep your roof in top condition.",
    image: "/Box_profile.jpeg",
    category: "Maintenance",
    date: "2023-12-28",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Latest Trends in Residential Roofing Design",
    excerpt: "Explore the newest roofing trends that are transforming homes across Kenya and East Africa.",
    image: "/Corrugated.jpeg",
    category: "Design Trends",
    date: "2023-12-20",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Understanding Roof Gauge and Thickness Options",
    excerpt: "A detailed explanation of roofing sheet gauges and how to choose the right thickness for your project.",
    image: "/Elegant_tile.jpeg",
    category: "Technical Guide",
    date: "2023-12-15",
    readTime: "7 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-steel-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Stay updated with roofing tips, construction advice, and industry insights
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Blog Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6 space-y-4">
                {/* Meta */}
                <div className="flex items-center space-x-4 text-sm text-steel-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-montserrat text-steel-900 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-steel-600 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-primary-600 font-medium group-hover:text-primary-700 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-steel-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-steel-800 transition-colors inline-flex items-center space-x-2"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
