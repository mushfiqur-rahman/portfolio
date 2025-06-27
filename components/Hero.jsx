import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-800 text-white py-24 px-6 flex items-center justify-center min-h-[90vh]">
      <div className="max-w-3xl text-center space-y-6">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build Your Website & Email Setup with Confidence
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I help businesses create SEO-optimized websites and set up
          Google Workspace or Microsoft 365 for professional email and growth.
        </motion.p>

        <motion.a
          href="https://calendly.com/mushfiq.kdu/30min"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 text-lg font-semibold rounded-full shadow hover:bg-gray-100 transition"
        >
          Book a Free Consultation <FaArrowRight />
        </motion.a>
      </div>
    </section>
  );
}
