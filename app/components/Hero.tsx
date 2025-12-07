"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl leading-tight font-heading">Harshit Kandpal</h1>
          <p className="mt-3 text-lg small-muted">
            Software Engineer • Mobile + Web Dev • Cloud + Systems
          </p>
          <p className="mt-6 text-xl">
            I build fast, reliable, user-centered applications — from full-stack microservices to production-ready Android apps.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-primary text-white shadow-md hover:scale-[1.02] transition">View Projects</a>
            <a href="/resume.pdf" download className="px-4 py-3 rounded-lg border border-primary small-muted">Download Resume</a>
            <a href="#contact" className="px-4 py-3 rounded-lg small-muted">Contact</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
