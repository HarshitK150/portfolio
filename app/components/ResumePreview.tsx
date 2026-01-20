"use client";
import { motion } from "framer-motion";

export default function ResumePreview() {
  return (
    <section id="resume" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20"
          >
            <span className="text-blue-300 text-sm font-medium">
              📄 Resume Overview
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text">
              Resume
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
          >
            A concise overview of my industry experience, technical skill set,
            and academic background
          </motion.p>
        </div>

        {/* Resume preview card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden shadow-2xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-cyan-500/5 pointer-events-none" />

            <div className="relative p-8 md:p-10">
              {/* Quick highlights */}
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: "💼",
                    label: "Experience",
                    value: "Software Engineering Experience",
                  },
                  {
                    icon: "🎓",
                    label: "Education",
                    value: "B.S. Computer Science",
                  },
                  {
                    icon: "⚡",
                    label: "Skills",
                    value: "Full-Stack & AI Systems",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/30"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-slate-300">
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download section */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
                  Resume PDF
                </h3>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Download the full resume with projects and technical
                  experience
                </p>

                {/* Download button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.a
                    href="/resume.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/30 overflow-hidden w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
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
                      Download Resume (PDF)
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl border-2 border-slate-600/50 text-slate-300 font-medium hover:bg-slate-800/50 hover:border-slate-500/70 backdrop-blur-sm transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    Contact Me
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.a>
                </div>

                {/* Additional info */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Last updated January 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/10 to-transparent rounded-bl-full" />
          </div>
        </motion.div>
      </div>

      {/* Decorative blur orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
