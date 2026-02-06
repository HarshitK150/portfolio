"use client";
import { motion } from "framer-motion";

type Project = {
  title: string;
  subtitle: string;
  stack: string[];
  gif: string;
  link?: string;
  github: string;
  comingSoon?: boolean;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />

        {/* Content wrapper */}
        <div className="relative p-6">
          {/* Video/GIF container */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900/80 border border-slate-700/30 mb-5 group-hover:border-blue-500/30 transition-all duration-300">
            <img
              src={project.gif}
              alt={`${project.title} demo`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay gradient on image */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            {project.subtitle}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            {(project.link || project.comingSoon) && (
              <motion.a
                href={
                  project.link && !project.comingSoon ? project.link : undefined
                }
                target="_blank"
                rel="noreferrer"
                whileHover={project.comingSoon ? {} : { scale: 1.05 }}
                whileTap={project.comingSoon ? {} : { scale: 0.95 }}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
              text-white text-sm font-medium shadow-lg transition-all duration-300
              ${
                project.comingSoon
                  ? "bg-gray-400 shadow-none cursor-not-allowed"
                  : "bg-linear-to-r from-blue-500 to-cyan-500 shadow-blue-500/20 hover:shadow-blue-500/40"
              }`}
              >
                {project.comingSoon ? (
                  // Coming Soon Icon
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M12 2a10 10 0 110 20 10 10 0 010-20z" // info/exclamation icon
                    />
                  </svg>
                ) : (
                  // Regular View Project Icon
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}

                {project.comingSoon ? "Coming Soon" : "View Project"}
              </motion.a>
            )}

            <motion.a
              href={
                project.github && !project.comingSoon
                  ? project.github
                  : undefined
              } // disable link if coming soon
              target="_blank"
              rel="noreferrer"
              whileHover={project.comingSoon ? {} : { scale: 1.05 }}
              whileTap={project.comingSoon ? {} : { scale: 0.95 }}
              className={`px-4 py-2.5 rounded-lg border-2 text-sm font-medium flex items-center gap-2 transition-all duration-300
              ${
                project.comingSoon
                  ? "border-gray-400 text-gray-300 cursor-not-allowed bg-gray-500/20"
                  : !project.link
                    ? "flex-1 justify-center border-slate-600/50 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500/70 backdrop-blur-sm"
                    : "border-slate-600/50 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500/70 backdrop-blur-sm"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill={project.comingSoon ? "currentColor" : "currentColor"} // still visible
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.304-5.467-1.332-5.467-5.932 0-1.31.467-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.479 5.922.43.372.814 1.103.814 2.222 0 1.606-.015 2.904-.015 3.296 0 .32.216.694.825.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
              {project.comingSoon ? "Coming Soon" : "GitHub"}
            </motion.a>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.article>
  );
}
