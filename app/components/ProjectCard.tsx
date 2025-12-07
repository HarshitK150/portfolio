"use client";
import React from "react";
import Image from "next/image";
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
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card p-4"
    >
      <div className="aspect-video rounded-md overflow-hidden bg-black/40">
        {/* Replace with <video> if you have mp4s. Using Image for GIF placeholder. */}
        <img src={project.gif} alt={`${project.title} demo`} className="w-full h-full object-cover"/>
      </div>
      <h3 className="mt-4 font-heading">{project.title}</h3>
      <p className="small-muted mt-1">{project.subtitle}</p>
      <div className="mt-3 text-sm">
        <strong>Tech:</strong> {project.stack.join(" • ")}
      </div>
      <div className="mt-4 flex gap-3">
        <a href={project.link} className="text-sm px-3 py-2 border rounded-md small-muted">View</a>
        <a href={project.gif} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-primary text-white rounded-md">Demo</a>
      </div>
    </motion.article>
  );
}
