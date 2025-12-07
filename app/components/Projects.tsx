import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sparty’s Boots",
    subtitle: "Level editor + animation system used by 100+ students",
    stack: ["C++","wxWidgets","XML","CMake"],
    gif: "/gifs/test.gif",
    link: "#"
  },
  {
    title: "Puzzle App",
    subtitle: "Mobile puzzle game with zoom persistence and accessible UI",
    stack: ["Android","Java","XML"],
    gif: "/gifs/test.gif",
    link: "#"
  },
  {
    title: "Portfolio Website",
    subtitle: "Containerized, CI-deployed, mobile-first portfolio",
    stack: ["Next.js","TypeScript","Tailwind","Docker","GCP"],
    gif: "/gifs/test.gif",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-2xl font-heading">Signature Projects</h2>
      <p className="small-muted">Three highly polished projects — each with a short impact statement and a demo.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {projects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
}
