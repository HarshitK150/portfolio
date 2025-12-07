import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ResumePreview from "./components/ResumePreview";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="container-max space-y-20 py-14">
      <Hero />
      <Projects />
      <ResumePreview />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  );
}