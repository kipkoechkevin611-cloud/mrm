"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "254780700584";
  const message = encodeURIComponent(
    "ORDER NOW - I want to place an order for roofing and steel products"
  );

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors"
      style={{
        animation: "pulse 2s infinite",
      }}
    >
      <MessageCircle className="w-6 h-6" />
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(34, 197, 94, 0);
          }
        }
      `}</style>
    </motion.a>
  );
}
