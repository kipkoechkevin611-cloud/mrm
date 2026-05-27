"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Kamau",
    role: "Contractor",
    company: "Kamau Construction Ltd",
    image: "/Box_profile.jpeg",
    rating: 5,
    text: "MRM has been our go-to supplier for roofing materials for over 10 years. Their quality is unmatched and their delivery is always on time. Highly recommended for any construction project.",
  },
  {
    id: 2,
    name: "Mary Wanjiku",
    role: "Homeowner",
    company: "Private Residence",
    image: "/Elegant_tile.jpeg",
    rating: 5,
    text: "We used MRM's elegant tile roofing for our new home and couldn't be happier. The quality is excellent, the installation was smooth, and the final look is stunning. Thank you MRM!",
  },
  {
    id: 3,
    name: "Peter Ochieng",
    role: "Project Manager",
    company: "Nairobi Industrial Park",
    image: "/Corrugated.jpeg",
    rating: 5,
    text: "For our industrial warehouse project, we needed durable and cost-effective roofing. MRM delivered beyond our expectations with their corrugated sheets. Great value for money.",
  },
  {
    id: 4,
    name: "Sarah Njoroge",
    role: "Architect",
    company: "Design Studio Kenya",
    image: "/Star_tile.jpeg",
    rating: 5,
    text: "As an architect, I appreciate MRM's commitment to quality and innovation. Their range of roofing profiles allows us to create beautiful and functional designs for our clients.",
  },
  {
    id: 5,
    name: "David Kipchoge",
    role: "Developer",
    company: "Eldoret Estates",
    image: "/Glazed__tile.jpeg",
    rating: 5,
    text: "We've completed multiple residential projects using MRM products. Their consistency in quality and reliable supply chain makes them our preferred partner.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-steel-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Hear from our satisfied customers who have trusted MRM with their roofing and steel needs
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Testimonial */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Client Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary-100">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-12 h-12 text-primary-200 mb-4 mx-auto md:mx-0" />

                  {/* Rating */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg text-steel-700 leading-relaxed mb-6">
                    {testimonials[currentIndex].text}
                  </p>

                  {/* Client Info */}
                  <div>
                    <h4 className="text-xl font-bold font-montserrat text-steel-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-steel-600">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-primary-600" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                      ? "bg-primary-600 w-8"
                      : "bg-steel-300 hover:bg-steel-400"
                      }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-primary-600" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { value: "5000+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "25+", label: "Years in Business" },
            { value: "47", label: "Counties Served" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-steel-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
