"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ShoppingCart, MessageCircle, Plus } from "lucide-react";
import Image from "next/image";
import { cart, CartItem } from "@/lib/cart";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Box Profile Sheets",
    category: "Roofing",
    image: "/Box_profile.jpeg",
    description: "Modern box profile roofing sheets with excellent durability",
    colors: ["Red", "Blue", "Green", "Brown", "Grey"],
    gauges: ["0.4mm", "0.5mm", "0.7mm"],
    price: 1800,
  },
  {
    id: 2,
    name: "Corrugated Mabati",
    category: "Roofing",
    image: "/Corrugated.jpeg",
    description: "Classic corrugated design for traditional and modern buildings",
    colors: ["Red", "Blue", "Green", "Brown", "Grey", "Black"],
    gauges: ["0.3mm", "0.4mm", "0.5mm"],
    price: 1600,
  },
  {
    id: 3,
    name: "Elegant Tile",
    category: "Roofing",
    image: "/Elegant_tile.jpeg",
    description: "Premium tile profile for elegant residential roofing",
    colors: ["Red", "Brown", "Grey", "Black"],
    gauges: ["0.5mm", "0.7mm"],
    price: 2500,
  },
  {
    id: 4,
    name: "Star Tile",
    category: "Roofing",
    image: "/Star_tile.jpeg",
    description: "Star tile profile with enhanced aesthetic appeal",
    colors: ["Red", "Brown", "Grey"],
    gauges: ["0.5mm", "0.7mm"],
    price: 2700,
  },
  {
    id: 5,
    name: "Glazed Tile",
    category: "Roofing",
    image: "/Glazed__tile.jpeg",
    description: "Glazed finish with superior weather resistance",
    colors: ["Red", "Brown", "Grey", "Green"],
    gauges: ["0.5mm", "0.7mm"],
    price: 2800,
  },
  {
    id: 6,
    name: "Mandarin Tile",
    category: "Roofing",
    image: "/Mandarin_tile.jpeg",
    description: "Mandarin tile profile for premium roofing solutions",
    colors: ["Red", "Brown", "Grey"],
    gauges: ["0.5mm", "0.7mm"],
    price: 3000,
  },
  {
    id: 7,
    name: "Plain Sheet",
    category: "Steel",
    image: "/Plainsheet.jpeg",
    description: "Versatile plain sheets for various applications",
    colors: ["Galvanized", "Aluzinc"],
    gauges: ["0.3mm", "0.4mm", "0.5mm", "0.7mm"],
    price: 1500,
  },
  {
    id: 8,
    name: "Flat Ridges",
    category: "Accessories",
    image: "/Flat_ridges.jpeg",
    description: "Flat ridges for seamless roof finishing",
    colors: ["Red", "Blue", "Green", "Brown", "Grey"],
    gauges: ["0.4mm", "0.5mm"],
    price: 600,
  },
  {
    id: 9,
    name: "Glazed Ridges",
    category: "Accessories",
    image: "/Glazed_ridges.jpeg",
    description: "Glazed ridges matching tile profiles",
    colors: ["Red", "Brown", "Grey"],
    gauges: ["0.5mm", "0.7mm"],
    price: 900,
  },
  {
    id: 10,
    name: "Valley Trays",
    category: "Accessories",
    image: "/Valley_trays.jpeg",
    description: "Valley trays for effective water drainage",
    colors: ["Red", "Blue", "Green", "Brown", "Grey"],
    gauges: ["0.4mm", "0.5mm"],
    price: 700,
  },
];

const categories = ["All", "Roofing", "Steel", "Accessories"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<{ [key: number]: string }>({});
  const [selectedGauge, setSelectedGauge] = useState<{ [key: number]: string }>({});
  const [selectedQuantity, setSelectedQuantity] = useState<{ [key: number]: number }>({});
  const router = useRouter();

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: any, navigate: boolean = false) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: selectedQuantity[product.id] || 1,
      color: selectedColor[product.id],
      gauge: selectedGauge[product.id],
    };
    cart.addItem(cartItem);
    if (navigate) {
      router.push('/cart');
    }
  };

  return (
    <section id="products" className="py-20 bg-steel-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-steel-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            Explore our wide range of high-quality roofing sheets, steel products, and accessories designed for durability and performance.
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
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === category
                ? "bg-primary-600 text-white shadow-lg"
                : "bg-white text-steel-700 hover:bg-steel-100"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold font-montserrat text-steel-900">
                  {product.name}
                </h3>
                <p className="text-steel-600 text-sm">
                  {product.description}
                </p>

                {/* Colors */}
                <div>
                  <p className="text-sm font-medium text-steel-700 mb-2">Select Color:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor({ ...selectedColor, [product.id]: color })}
                        className={`text-xs px-3 py-2 rounded-full border-2 transition-all ${selectedColor[product.id] === color
                          ? "bg-primary-600 text-white border-primary-600"
                          : "bg-white text-steel-700 border-steel-300 hover:border-primary-500"
                          }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gauges */}
                <div>
                  <p className="text-sm font-medium text-steel-700 mb-2">Select Thickness:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.gauges.map((gauge) => (
                      <button
                        key={gauge}
                        onClick={() => setSelectedGauge({ ...selectedGauge, [product.id]: gauge })}
                        className={`text-xs px-3 py-2 rounded-full border-2 transition-all ${selectedGauge[product.id] === gauge
                          ? "bg-primary-600 text-white border-primary-600"
                          : "bg-white text-steel-700 border-steel-300 hover:border-primary-500"
                          }`}
                      >
                        {gauge}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <p className="text-sm font-medium text-steel-700 mb-2">Quantity:</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedQuantity({ ...selectedQuantity, [product.id]: Math.max(1, (selectedQuantity[product.id] || 1) - 1) })}
                      className="w-12 h-12 rounded-lg border-2 border-steel-300 flex items-center justify-center hover:border-primary-500 hover:bg-primary-50 transition-colors text-xl font-bold text-steel-900"
                    >
                      −
                    </button>
                    <span className="w-16 text-center font-bold text-steel-900 text-lg">
                      {selectedQuantity[product.id] || 1}
                    </span>
                    <button
                      onClick={() => setSelectedQuantity({ ...selectedQuantity, [product.id]: (selectedQuantity[product.id] || 1) + 1 })}
                      className="w-12 h-12 rounded-lg border-2 border-steel-300 flex items-center justify-center hover:border-primary-500 hover:bg-primary-50 transition-colors text-xl font-bold text-steel-900"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(product, false)}
                    className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(product, true)}
                    className="flex-1 bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>Order Now</span>
                  </motion.button>
                </div>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-steel-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-steel-800 transition-colors inline-flex items-center space-x-2"
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
