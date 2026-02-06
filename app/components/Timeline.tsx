"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineering Capstone",
    org: "Magna International",
    location: "East Lansing, MI",
    period: "January 2026 - Present",
    points: [
      "Developing a web-based CAD AI assistant that enables engineers to generate and modify part designs using textual and visual input, integrating Python, FastAPI, FreeCAD, JavaScript, and LLMs",
      "Building interactive workflows that allow users to iteratively refine CAD models instead of relying on one-shot generation, improving usability and design accuracy",
      "Implementing AI-assisted editing and annotation features to reduce repetitive manual CAD operations, with the goal of cutting manual edits by ~35%",
      "Collaborating with a multidisciplinary team and industry mentors from Magna’s R&D organization to design a production-oriented tool aligned with real-world automotive engineering workflows",
    ],
    technologies: ["Python", "FastAPI", "JavaScript", "LLMs", "FreeCAD"],
  },
  {
    role: "Software Engineering Intern",
    org: "PromoterMotor",
    location: "Remote",
    period: "September 2025 - Present",
    points: [
      "Designing and implementing an AI-driven content generation pipeline using Node.js and Hugging Face Transformers to programmatically create YouTube-ready video content, saving 10+ hours of manual work per week",
      "Architected automated data ingestion and transformation workflows that collect, clean, and convert structured data into publish-ready media assets, enabling scalable and repeatable content production",
      "Built internal automation, web-scraping, and data processing pipelines using Google Apps Script and Python (Pandas, GeoPandas) to streamline workflows, reduce manual effort by 30%+, and double usable data for analysis and decision-making",
    ],
    technologies: [
      "Node.js",
      "Hugging Face Transformers",
      "Google Apps Script",
      "Python",
      "Pandas",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-blue-500/5 to-slate-950/40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20"
          >
            <span className="text-blue-300 text-sm font-medium">
              Industry Experience
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
              Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl"
          >
            Building real-world solutions and driving measurable impact through
            software engineering
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-linear-to-b from-blue-500/50 via-cyan-500/50 to-blue-500/50" />

          {/* Experience items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -left-2 md:left-6 top-2"
                >
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50" />
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="absolute inset-0 w-4 h-4 rounded-full bg-linear-to-r from-blue-500 to-cyan-500"
                    />
                  </div>
                </motion.div>

                {/* Content card */}
                <div className="group relative rounded-2xl bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                  <div className="relative p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-blue-300 font-medium mt-1">
                          {exp.org}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          {exp.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm shrink-0">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm font-medium text-blue-300">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Key achievements */}
                    <ul className="space-y-3 mb-6">
                      {exp.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + 0.3 + pointIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-slate-300 leading-relaxed"
                        >
                          <svg
                            className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm md:text-base">{point}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.2 + 0.5 + techIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/50 text-slate-400 border border-slate-700/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
