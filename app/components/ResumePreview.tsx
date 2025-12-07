"use client";
import { motion } from "framer-motion";

export default function ResumePreview(){
  return (
    <section id="resume" className="space-y-4">
      <h2 className="text-2xl font-heading">Resume</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} className="card p-6">
          <h3 className="font-heading text-lg">Harshit Kandpal</h3>
          <p className="small-muted">Software Engineer • Mobile + Web • Cloud + Systems</p>
          <ul className="mt-4 small-muted space-y-2">
            <li>MSU Honors • Tau Beta Pi</li>
            <li>Wireless Testing Intern — UL Solutions</li>
            <li>Level III SCR Supervisor — MSU</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="/resume.pdf" download className="px-4 py-2 rounded-md bg-primary text-white">Download PDF</a>
            <a href="/resume.pdf" target="_blank" className="px-4 py-2 rounded-md border small-muted">Open</a>
          </div>
        </motion.div>
        <div className="card p-4">
          <h4 className="small-muted">Quick snapshot</h4>
          <div className="mt-3 grid grid-cols-2 gap-4 small-muted">
            <div><strong>Location</strong><div>East Lansing, MI</div></div>
            <div><strong>LinkedIn</strong><div>linkedin.com/in/harshit</div></div>
            <div><strong>Email</strong><div>harshit@example.com</div></div>
            <div><strong>Skills</strong><div>Mobile, Backend, Cloud</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
