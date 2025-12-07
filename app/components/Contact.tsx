import React from "react";

export default function Contact(){
  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-2xl font-heading">Contact</h2>
      <p className="small-muted">Email is preferred — recruiters and hiring managers love one-click contact.</p>
      <div className="flex gap-4 items-center">
        <a href="mailto:harshit@example.com" className="px-4 py-3 rounded-lg bg-primary text-white">harshit@example.com</a>
        <a href="" target="_blank" rel="noreferrer" className="px-4 py-3 rounded-lg small-muted border">LinkedIn</a>
      </div>
    </section>
  )
}
