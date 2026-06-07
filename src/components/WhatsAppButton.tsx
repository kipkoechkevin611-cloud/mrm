"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WhatsAppButton() {
  const router = useRouter();

  const handleOrderNow = () => {
    router.push('/cart');
  };

  return (
    <>
      <motion.button
        onClick={handleOrderNow}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-20 z-50 bg-primary-600 text-white p-4 rounded-full shadow-2xl hover:bg-primary-700 transition-colors flex items-center justify-center"
        title="Add to Cart"
      >
        <ShoppingCart className="w-6 h-6" />
      </motion.button>
      <motion.button
        onClick={handleOrderNow}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center"
        style={{
          animation: "pulse 2s infinite",
        }}
        title="Order Now"
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
      </motion.button>
    </>
  );
}
