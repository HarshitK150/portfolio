import React from "react";

const skillGroups = [
  { name: "Languages", skills: ["Python", "C", "C++", "Java", "JavaScript", "SQL", "HTML/CSS"] },
  { name: "Frameworks & Tools", skills: ["Vue", "Flask", "Docker", "wxWidgets", "Android SDK", "Node.js"] },
  { name: "Platform & Tools", skills: ["Git", "Linux", "GCP", "SQLite", "MySQL"] }
];

export default function Skills(){
  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-2xl font-heading">Skills</h2>
      <p className="small-muted">Grouped by competency — readable at a glance.</p>
      <div className="mt-5 grid md:grid-cols-3 gap-4">
        {skillGroups.map(g => (
          <div key={g.name} className="card p-4">
            <h4 className="font-heading">{g.name}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.skills.map(s => (
                <span key={s} className="px-3 py-1 rounded-full border small-muted text-sm">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
