"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6">
      {/* Greeting */}
      <motion.h1
        className="text-4xl sm:text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Harshit Kandpal
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg sm:text-2xl text-gray-300 mb-6 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I’m a Software Engineer building interactive web and mobile apps. Check out my projects below.
      </motion.p>

      {/* Call to Action */}
      <motion.a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        See My Work
      </motion.a>
    </section>
  );
}
