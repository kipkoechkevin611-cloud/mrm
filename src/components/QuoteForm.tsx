"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, FileText, CheckCircle } from "lucide-react";

const counties = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Machakos",
  "Kiambu", "Kajiado", "Murang'a", "Nyeri", "Meru", "Tharaka Nithi",
  "Embu", "Kitui", "Makueni", "Nyandarua", "Laikipia", "Nandi",
  "Baringo", "Kericho", "Bomet", "Kakamega", "Vihiga", "Bungoma",
  "Busia", "Siaya", "Homa Bay", "Migori", "Kisii", "Nyamira",
  "Turkana", "West Pokot", "Samburu", "Trans Nzoia", "Uasin Gishu",
  "Elgeyo Marakwet", "Narok", "Kajiado", "Tana River", "Lamu",
  "Garissa", "Wajir", "Mandera", "Marsabit", "Isiolo", "Kilifi",
  "Kwale", "Taita Taveta", "Taita Taveta", "Other",
];

const projectTypes = [
  "Residential Roofing",
  "Commercial Building",
  "Industrial Warehouse",
  "School/Institutional",
  "Agricultural Structure",
  "Steel Fabrication",
  "House Renovation",
  "New Construction",
  "Other",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    county: "",
    projectType: "",
    productNeeded: "",
    quantity: "",
    additionalNotes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-steel-900 mb-4">
            Request a Quote
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you with a competitive quote within 24 hours
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-steel-50 to-white p-8 md:p-12 rounded-3xl shadow-xl border border-steel-100"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat text-steel-900 mb-3">
                  Quote Request Submitted!
                </h3>
                <p className="text-steel-600">
                  Thank you for your inquiry. Our team will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-base font-bold text-steel-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-base font-bold text-steel-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none text-base"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-base font-bold text-steel-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none text-base"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* County */}
                  <div>
                    <label className="block text-base font-bold text-steel-900 mb-2">
                      County *
                    </label>
                    <select
                      name="county"
                      required
                      value={formData.county}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none text-base"
                    >
                      <option value="">Select County</option>
                      {counties.map((county) => (
                        <option key={county} value={county}>
                          {county}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-base font-bold text-steel-900 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none text-base"
                    >
                      <option value="">Select Project Type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Product Needed */}
                  <div>
                    <label className="block text-base font-bold text-steel-900 mb-2">
                      Product Needed *
                    </label>
                    <input
                      type="text"
                      name="productNeeded"
                      required
                      value={formData.productNeeded}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none text-base"
                      placeholder="e.g., Box Profile Sheets"
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-base font-bold text-steel-900 mb-2">
                      Quantity (sq meters) *
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none text-base"
                      placeholder="100"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-base font-bold text-steel-900 mb-2">
                      Upload Drawings (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        className="hidden"
                        id="fileUpload"
                      />
                      <label
                        htmlFor="fileUpload"
                        className="flex items-center justify-center w-full px-4 py-3 rounded-xl border-2 border-dashed border-steel-300 hover:border-primary-500 transition-colors cursor-pointer"
                      >
                        <FileText className="w-5 h-5 text-steel-400 mr-2" />
                        <span className="text-steel-600 text-base">Click to upload files</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-base font-bold text-steel-900 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none text-base"
                    placeholder="Any additional requirements or specifications..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Quote Request</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
