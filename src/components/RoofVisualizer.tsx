"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Home, RotateCw } from "lucide-react";

const roofTypes = [
  { id: "box", name: "Box Profile", image: "/Box_profile.jpeg" },
  { id: "corrugated", name: "Corrugated", image: "/Corrugated.jpeg" },
  { id: "elegant", name: "Elegant Tile", image: "/Elegant_tile.jpeg" },
  { id: "star", name: "Star Tile", image: "/Star_tile.jpeg" },
  { id: "glazed", name: "Glazed Tile", image: "/Glazed__tile.jpeg" },
  { id: "mandarin", name: "Mandarin Tile", image: "/Mandarin_tile.jpeg" },
];

const colors = [
  { name: "Red", hex: "#DC2626" },
  { name: "Blue", hex: "#2563EB" },
  { name: "Green", hex: "#16A34A" },
  { name: "Brown", hex: "#92400E" },
  { name: "Grey", hex: "#6B7280" },
  { name: "Black", hex: "#1F2937" },
];

export default function RoofVisualizer() {
  const [selectedRoof, setSelectedRoof] = useState(roofTypes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <section className="py-20 bg-gradient-to-br from-steel-100 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-steel-900 mb-4">
            Roof Visualizer
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Visualize different roof types and colors to find the perfect match for your project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Roof Type Selection */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Home className="w-6 h-6 text-primary-600" />
                <h3 className="text-xl font-bold font-montserrat text-steel-900">
                  Select Roof Type
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {roofTypes.map((roof) => (
                  <motion.button
                    key={roof.id}
                    onClick={() => setSelectedRoof(roof)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl border-2 transition-all ${selectedRoof.id === roof.id
                      ? "border-primary-600 bg-primary-50"
                      : "border-steel-200 hover:border-primary-300"
                      }`}
                  >
                    <img
                      src={roof.image}
                      alt={roof.name}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <span className="text-sm font-medium text-steel-700">{roof.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Palette className="w-6 h-6 text-primary-600" />
                <h3 className="text-xl font-bold font-montserrat text-steel-900">
                  Select Color
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {colors.map((color) => (
                  <motion.button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-4 rounded-xl border-2 transition-all ${selectedColor.name === color.name
                      ? "border-primary-600 ring-2 ring-primary-200"
                      : "border-steel-200 hover:border-primary-300"
                      }`}
                  >
                    <div
                      className={`w-full h-16 rounded-lg mb-2`}
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-sm font-medium text-steel-700">{color.name}</span>
                    {selectedColor.name === color.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center"
                      >
                        <RotateCw className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Request Quote for This Configuration
            </motion.button>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-bold font-montserrat text-steel-900 mb-6">
              Preview
            </h3>
            <div className="relative">
              <img
                src={selectedRoof.image}
                alt={selectedRoof.name}
                className="w-full h-96 object-cover rounded-xl"
              />
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundColor: selectedColor.hex,
                  opacity: 0.3,
                  mixBlendMode: "multiply",
                }}
              />
            </div>

            {/* Selection Summary */}
            <div className="mt-6 p-4 bg-steel-50 rounded-xl">
              <h4 className="font-semibold text-steel-900 mb-3">Your Selection:</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-steel-600">Roof Type:</span>
                  <span className="font-medium text-steel-900">{selectedRoof.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-steel-600">Color:</span>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <span className="font-medium text-steel-900">{selectedColor.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
