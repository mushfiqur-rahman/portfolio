import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function EidLanterns() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  const lanternVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: (i) => ({
      y: [0, -20, 0],
      opacity: 1,
      transition: {
        y: {
          repeat: Infinity,
          duration: 3 + i,
          ease: "easeInOut",
        },
        delay: i * 0.3,
      },
    }),
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          {/* Main text */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-1/4 text-center"
          >
            <h1 className="text-6xl font-bold text-amber-300">Eid Mubarak</h1>
            <p className="mt-4 text-xl text-amber-100">
              May your Eid be filled with joy
            </p>
          </motion.div>

          {/* Lanterns */}
          <div className="absolute bottom-0 flex w-full justify-around">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={lanternVariants}
                initial="hidden"
                animate="visible"
                className="relative h-24 w-16"
              >
                {/* Crescent Moon */}
                <div className="absolute inset-0 rounded-t-full bg-gradient-to-b from-white to-gray-300 shadow-[0_0_20px_5px_rgba(255,255,255,0.5)] overflow-hidden">
                  <div className="absolute top-1 left-1 h-22 w-8 rounded-t-full bg-gray-900 translate-x-6" />
                </div>

                {/* Moon Base */}
                <div className="absolute bottom-0 left-1/2 h-4 w-6 -translate-x-1/2 rounded-b-full bg-gray-200" />

                {/* Star-like particles */}
                {[...Array(5)].map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                      y: -50,
                      opacity: [0, 1, 0],
                      x: (Math.random() - 0.5) * 30,
                    }}
                    transition={{
                      delay: 1 + i * 0.2 + j * 0.1,
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="absolute bottom-0 h-1 w-1 rounded-full bg-white shadow-[0_0_5px_2px_rgba(255,255,255,0.8)]"
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: "-=100",
                opacity: [0, 0.7, 0],
                scale: [0.5, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute h-2 w-2 rounded-full bg-amber-300"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
