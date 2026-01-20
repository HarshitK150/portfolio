"use client";
import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  subtitle: string;
  stack: string[];
  gif: string;
  link: string;
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
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-linear-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
            >
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
              View Project
            </motion.a>

            <motion.a
              href={project.gif}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2.5 rounded-lg border-2 border-slate-600/50 text-slate-300 text-sm font-medium hover:bg-slate-800/50 hover:border-slate-500/70 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
            >
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
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Demo
            </motion.a>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.article>
  );
}
