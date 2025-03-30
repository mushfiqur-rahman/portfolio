// components/EidGreeting.js
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function EidGreeting() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
        >
          {/* Moon with crescent animation */}
          <motion.div
            initial={{ scale: 0.5, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="relative h-32 w-32 rounded-full bg-amber-200 shadow-[0_0_40px_15px_rgba(248,213,107,0.6)]"
          >
            <motion.div
              initial={{ x: -20, scale: 0.9 }}
              animate={{ x: 10, scale: 0.8 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute h-28 w-28 rounded-full bg-black/90"
            />
          </motion.div>

          {/* Eid Mubarak Text */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <motion.h1
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.3)",
                  "0 0 20px rgba(248,213,107,0.7)",
                  "0 0 10px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="text-5xl font-bold text-amber-300 md:text-6xl"
            >
              Eid Mubarak!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4 text-xl text-amber-100"
            >
              Wish you a Life Full of Smiles and Happiness
            </motion.p>
          </motion.div>

          {/* Stars */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.8],
              }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
              }}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
