"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Pre-generate random positions to avoid hydration mismatch
const particlePositions = Array.from({ length: 20 }, (_, i) => ({
  left: (i * 37.5 + 12.3) % 100,
  top: (i * 53.7 + 8.9) % 100,
  duration: 3 + (i % 4),
  delay: (i * 0.3) % 5,
}));

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-8 lg:px-16 xl:px-24 py-20 md:py-15">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Animated ripple circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full border border-blue-500/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full border border-cyan-500/20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.05, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full border border-blue-400/15"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.25, 0.08, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Dynamic spotlight that follows mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(80,120,255,0.15), transparent 50%)`,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-linear-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-linear-to-tr from-purple-500/15 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating tech tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="absolute top-1/4 right-10 hidden lg:flex flex-col gap-4"
      >
        {[
          { name: "JavaScript", delay: 0 },
          { name: "Python", delay: 0.15 },
          { name: "Node.js", delay: 0.3 },
          { name: "React", delay: 0.45 },
          { name: "PostgreSQL", delay: 0.6 },
          { name: "AWS", delay: 0.75 },
          { name: "Docker", delay: 0.9 },
        ].map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: tech.delay, duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ x: [0, 30, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5 + idx * 0.5,
                ease: "easeInOut",
              }}
              className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-300/80 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400/40 transition-all"
            >
              {tech.name}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full"
      >
        <div className="max-w-4xl">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-2 sm:px-4 rounded-full bg-linear-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-blue-300 text-xs sm:text-sm font-medium">
              Available for Full-Time SWE Roles Starting May 2026
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <motion.span
              className="inline-block bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Harshit Kandpal
            </motion.span>
          </h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl"
          >
            <span className="text-blue-200/90 font-light">
              Software Engineer
            </span>
            <span className="text-blue-400/50">•</span>
            <span className="text-slate-300/80 font-light">
              Full-Stack Developer
            </span>
            <span className="text-blue-400/50">•</span>
            <span className="text-slate-300/70 font-light">
              CS @ Michigan State University
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl max-w-3xl text-slate-300/90 leading-relaxed"
          >
            I’m a{" "}
            <span className="font-bold text-white">Software Engineer</span> and{" "}
            <span className="font-bold text-sky-400">3.99 GPA</span> student
            focused on shipping production-ready code. Currently serving as the{" "}
            <span className="font-semibold text-white">
              Software Engineering Lead
            </span>{" "}
            for a{" "}
            <span className="italic text-slate-400">
              Magna International Capstone
            </span>{" "}
            while building data pipelines as an intern at{" "}
            <span className="font-semibold text-white">PromoterMotor</span>.
            Expert in <span className="font-mono text-sky-400">TypeScript</span>
            , <span className="font-mono text-sky-400">Python</span>, and{" "}
            <span className="font-mono text-sky-400">Cloud Infrastructure</span>
            .
          </motion.p>

          {/* Key highlights */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3"
          >
            {[
              { icon: "⚡", text: "30% faster workflows" },
              { icon: "🔧", text: "Full-stack in production" },
              { icon: "☁️", text: "AWS Certified" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700/30 backdrop-blur-sm"
              >
                <span className="text-base sm:text-lg">{item.icon}</span>
                <span className="text-xs sm:text-sm text-slate-300/80">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-8 sm:mt-10 flex flex-wrap gap-6 sm:gap-8"
          >
            {[
              { value: "SWE Intern", label: "PromoterMotor" },
              { value: "3.99 GPA", label: "Honors Program" },
              { value: "May 2026", label: "Graduation" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-400 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-10 sm:mt-12 flex flex-wrap gap-3 sm:gap-4 md:gap-5"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/30 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-blue-500/50 text-blue-200 font-medium hover:bg-blue-500/10 hover:border-blue-400/70 backdrop-blur-sm transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/hkandpal-cs/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-slate-700/50 text-slate-300 font-medium hover:bg-slate-800/30 hover:border-slate-600/70 backdrop-blur-sm transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-slate-300 font-medium hover:text-white transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              Get in Touch
              <span className="text-lg sm:text-xl">→</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
