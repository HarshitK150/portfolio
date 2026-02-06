"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Spartificial: AI-Powered Chatbot Assistant (In Progress)",
      subtitle:
        "Spartificial is an AI-powered chatbot assistant designed to support university and dining hall–related queries through natural language interaction. Built with a FastAPI backend and React frontend, the system focuses on prompt orchestration and extensible tool integration to provide accurate, contextual assistance for campus services and student resources.",
      stack: [
        "Python",
        "FastAPI",
        "JavaScript",
        "React",
        "LLM APIs",
        "Tailwind CSS",
      ],
      gif: "/gifs/coming-soon.avif",
      link: "",
      github: "https://github.com/HarshitK150/Spartificial",
      comingSoon: true,
    },
    {
      title: "Quote Battle: Full-Stack Voting App",
      subtitle:
        "A full-stack voting web application that allows users to engage with competing quotes and view real-time leaderboard updates. The system utilizes a RESTful API architecture to handle voting logic and persistent data storage via PostgreSQL. The frontend is built with React to deliver sub-second UI updates, ensuring a seamless and engaging user experience.",
      stack: [
        "JavaScript",
        "Node.js",
        "Express",
        "React",
        "Tailwind CSS",
        "PostgreSQL (Supabase)",
        "CI/CD",
      ],
      gif: "/gifs/quote-battle.gif",
      link: "https://quote-battle.vercel.app/",
      github: "https://github.com/HarshitK150/quote-battle",
    },
    {
      title: "90s Chatroom: Real-Time Messaging Platform",
      subtitle:
        "A retro-styled real-time communication platform that leverages WebSockets for instantaneous, multi-user messaging. The application is containerized using Docker and deployed to GCP Cloud Run, utilizing a serverless architecture to handle scalable traffic. It features a persistent MySQL backend and AJAX-driven frontend updates to minimize server overhead.",
      stack: [
        "Python",
        "Flask",
        "Socket.io",
        "MySQL",
        "Docker",
        "GCP Cloud Run",
      ],
      gif: "/gifs/chat_screenshot.png",
      link: "https://harshitkandpal.xyz/chat",
      github: "https://github.com/HarshitK150/90s-chatroom",
    },
    {
      title: "Sparty's Boots: Logic-Driven Puzzle Game",
      subtitle:
        "A desktop puzzle game developed by an Agile team of five, featuring a custom C++ logic-processing system for real-time boolean operations and circuit simulations. The application utilizes the wxWidgets framework for cross-platform rendering and an XML-based layer for robust data persistence. By following a modular object-oriented architecture and Agile methodologies, the team ensured a consistent 60 FPS performance while managing complex event-driven state changes and collaborative version control.",
      stack: ["C++", "wxWidgets", "XML", "CMake", "Git"],
      gif: "/gifs/sparty-boots.gif",
      github: "https://github.com/HarshitK150/spartys-boots",
    },
    {
      title: "Android Puzzle App: Native Mobile Game",
      subtitle:
        "A native Android application developed to provide a smooth, engaging mobile gaming experience. The app emphasizes optimized UI rendering for 60 FPS animations and efficient activity lifecycle management. Built with Java and the Android SDK, it features custom XML layouts and local state persistence for a seamless user journey.",
      stack: ["Java", "Android SDK", "Android API", "XML", "Gradle"],
      gif: "/gifs/sparty.webp",
      github: "https://github.com/HarshitK150/puzzle-app",
    },
  ];

  return (
    <section id="projects" className="relative py-8 md:py-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
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
              Selected Projects
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
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl"
          >
            Real-world software projects solving practical problems from
            full-stack web applications to automation and AI-driven systems
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Coming soon card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 lg:mt-10"
        >
          <div className="relative rounded-2xl bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/30 border-dashed p-12 text-center overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            {/* Animated background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />

            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block text-6xl mb-4"
              >
                🚀
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-2">
                More Projects Coming Soon
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto">
                Currently building new full-stack applications and expanding my
                automation toolkit. Check back soon!
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Get in Touch
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
