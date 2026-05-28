"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { cart, CartItem } from "@/lib/cart";

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [showCredentials, setShowCredentials] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    setItems(cart.getItems());
    const handleStorageChange = () => {
      setItems(cart.getItems());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    cart.updateQuantity(id, quantity);
    setItems(cart.getItems());
  };

  const removeItem = (id: number) => {
    cart.removeItem(id);
    setItems(cart.getItems());
  };

  const handleOrderNow = () => {
    setShowCredentials(true);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Format order message
    let orderDetails = "";
    if (items.length > 0) {
      orderDetails = items.map(item =>
        `${item.name} - Qty: ${item.quantity}${item.color ? `, Color: ${item.color}` : ''}${item.gauge ? `, Gauge: ${item.gauge}` : ''}`
      ).join('\n');
    } else {
      orderDetails = "Direct order inquiry - No specific items selected";
    }

    const message = encodeURIComponent(
      `NEW ORDER\n\nCustomer Details:\nName: ${credentials.name}\nPhone: ${credentials.phone}\nEmail: ${credentials.email}\nAddress: ${credentials.address}\n\nOrder Items:\n${orderDetails}\n\nTotal: KES ${cart.getTotalPrice().toLocaleString()}`
    );

    const phoneNumber = "254111333107";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

    // Clear cart after order
    cart.clearCart();
    setItems([]);
    setShowCredentials(false);
    setCredentials({ name: "", phone: "", email: "", address: "" });
  };

  if (showCredentials) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-steel-100 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-10 border-4 border-primary-200"
          >
            <div className="text-center mb-8">
              <div className="inline-block bg-primary-100 p-4 rounded-full mb-4">
                <ArrowRight className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-4xl font-bold font-montserrat text-steel-900 mb-2">
                Complete Your Order
              </h2>
              <p className="text-steel-600 text-lg mb-4">
                Please provide your contact details to proceed
              </p>
              {items.length > 0 && (
                <div className="bg-steel-50 p-4 rounded-xl border-2 border-primary-200">
                  <p className="text-sm font-semibold text-steel-700">
                    Order Summary: {items.length} item(s) - Total: KES {cart.getTotalPrice().toLocaleString()}
                  </p>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              <div>
                <label className="block text-base font-bold text-steel-900 mb-2 flex items-center">
                  <span className="bg-primary-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm mr-2">1</span>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={credentials.name}
                  onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-lg font-medium bg-steel-50"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-base font-bold text-steel-900 mb-2 flex items-center">
                  <span className="bg-primary-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={credentials.phone}
                  onChange={(e) => setCredentials({ ...credentials, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-lg font-medium bg-steel-50"
                  placeholder="0712345678"
                />
              </div>

              <div>
                <label className="block text-base font-bold text-steel-900 mb-2 flex items-center">
                  <span className="bg-primary-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm mr-2">3</span>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-lg font-medium bg-steel-50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-base font-bold text-steel-900 mb-2 flex items-center">
                  <span className="bg-primary-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm mr-2">4</span>
                  Delivery Address *
                </label>
                <textarea
                  required
                  value={credentials.address}
                  onChange={(e) => setCredentials({ ...credentials, address: e.target.value })}
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border-2 border-steel-300 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none resize-none text-lg font-medium bg-steel-50"
                  placeholder="Enter your complete delivery address"
                />
              </div>

              {/* Order Summary */}
              <div className="bg-steel-50 p-6 rounded-xl">
                <h3 className="font-semibold text-steel-900 mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x {item.quantity}</span>
                      <span>KES {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-steel-200 pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-primary-600">KES {cart.getTotalPrice().toLocaleString()}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowCredentials(false)}
                  className="flex-1 bg-steel-200 text-steel-900 py-4 rounded-xl font-semibold hover:bg-steel-300 transition-colors"
                >
                  Back
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Order via WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-steel-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold font-montserrat text-steel-900">
              Shopping Cart
            </h1>
            <div className="flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full">
              <ShoppingBag className="w-5 h-5 text-primary-600" />
              <span className="font-semibold text-primary-700">{cart.getTotalItems()} items</span>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-24 h-24 text-steel-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-steel-700 mb-2">
                Your cart is empty
              </h3>
              <p className="text-steel-500 mb-6">
                Add products or place a direct order inquiry
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/#products"
                  className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
                >
                  Browse Products
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOrderNow}
                  className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                >
                  Order Now
                </motion.button>
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 p-4 bg-steel-50 rounded-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-steel-900">{item.name}</h3>
                      {item.color && (
                        <p className="text-sm text-steel-600">Color: {item.color}</p>
                      )}
                      {item.gauge && (
                        <p className="text-sm text-steel-600">Gauge: {item.gauge}</p>
                      )}
                      <p className="text-lg font-bold text-primary-600 mt-1">
                        KES {item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center bg-steel-100 rounded-full hover:bg-steel-200 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </motion.button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-steel-100 rounded-full hover:bg-steel-200 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </motion.button>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeItem(item.id)}
                        className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-steel-200 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-semibold text-steel-900">Total</span>
                  <span className="text-3xl font-bold text-primary-600">
                    KES {cart.getTotalPrice().toLocaleString()}
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="/#products"
                    className="flex-1 bg-steel-200 text-steel-900 py-4 rounded-xl font-semibold hover:bg-steel-300 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Continue Shopping</span>
                  </a>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOrderNow}
                    className="flex-1 bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
