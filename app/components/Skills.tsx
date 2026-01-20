"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: "💻",
    title: "Languages",
    skills: [
      { name: "JavaScript/TypeScript", level: "advanced" },
      { name: "Python", level: "advanced" },
      { name: "SQL (Postgres/Supabase)", level: "advanced" },
      { name: "HTML & CSS", level: "advanced" },
      { name: "C++", level: "advanced" },
      { name: "Java", level: "intermediate" },
    ],
  },
  {
    icon: "🛠️",
    title: "Frameworks & Tools",
    skills: [
      { name: "Node.js & Express", level: "advanced" },
      { name: "React & Vite", level: "advanced" },
      { name: "FastAPI", level: "intermediate" },
      { name: "Docker", level: "intermediate" },
      { name: "Flask", level: "intermediate" },
      { name: "wxWidgets", level: "basic" },
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & Data",
    skills: [
      { name: "Google Cloud Platform (GCP)", level: "intermediate" },
      { name: "AWS (Certified Cloud Practitioner)", level: "intermediate" },
      { name: "Git & GitHub", level: "advanced" },
      { name: "Linux/UNIX", level: "intermediate" },
      { name: "Google Apps Script", level: "advanced" },
      { name: "Pandas & GeoPandas", level: "intermediate" },
    ],
  },
];

function getProficiencyColor(level: string) {
  if (level === "advanced") return "from-cyan-500 to-blue-500";
  if (level === "intermediate") return "from-blue-500 to-purple-500";
  if (level === "basic") return "from-purple-500 to-pink-500";
  return "from-slate-500 to-slate-600";
}

function getProficiencyDots(level: string) {
  if (level === "advanced") return 3;
  if (level === "intermediate") return 2;
  if (level === "basic") return 1;
  return 1;
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20"
          >
            <span className="text-cyan-300 text-sm font-medium">
              ⚡ Technical Skills
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="bg-linear-to-r from-cyan-400 via-blue-300 to-cyan-500 text-transparent bg-clip-text">
              Skills & Technologies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl"
          >
            A curated set of technical skills across full-stack development,
            cloud platforms, and data engineering
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full rounded-2xl bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300" />

                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="text-4xl">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const dots = getProficiencyDots(skill.level);
                      const colorClass = getProficiencyColor(skill.level);

                      return (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center justify-between group/item"
                        >
                          <span className="text-sm font-medium text-slate-300 group-hover/item:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>

                          <div className="flex items-center gap-1.5">
                            {[1, 2, 3].map((dot) => {
                              const isActive = dot <= dots;
                              return (
                                <motion.div
                                  key={dot}
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  transition={{
                                    duration: 0.3,
                                    delay:
                                      categoryIndex * 0.1 +
                                      skillIndex * 0.05 +
                                      dot * 0.05,
                                  }}
                                  viewport={{ once: true }}
                                  className="relative"
                                >
                                  <div
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      isActive
                                        ? `bg-linear-to-r ${colorClass} shadow-lg shadow-cyan-500/30`
                                        : "bg-slate-700/50"
                                    }`}
                                  />
                                  {isActive && (
                                    <motion.div
                                      animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 0, 0.5],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: dot * 0.3,
                                      }}
                                      className={`absolute inset-0 w-2 h-2 rounded-full bg-linear-to-r ${colorClass}`}
                                    />
                                  )}
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">Proficiency Levels</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500" />
                <div className="w-2 h-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500" />
                <div className="w-2 h-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500" />
              </div>
              <span className="text-slate-400">Advanced</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500" />
                <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500" />
                <div className="w-2 h-2 rounded-full bg-slate-700/50" />
              </div>
              <span className="text-slate-400">Intermediate</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
                <div className="w-2 h-2 rounded-full bg-slate-700/50" />
                <div className="w-2 h-2 rounded-full bg-slate-700/50" />
              </div>
              <span className="text-slate-400">Basic</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: "🎯", value: "18+", label: "Technologies" },
            { icon: "🚀", value: "Production-Ready", label: "Applications" },
            { icon: "📚", value: "Ongoing", label: "Learning" },
            { icon: "☁️", value: "AWS", label: "Certified" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-linear-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
