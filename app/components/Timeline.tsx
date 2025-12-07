import React from "react";

const timeline = [
  {
    title: "Wireless Testing Intern — UL Solutions",
    date: "Summer 2024",
    bullets: [
      "Automated wireless compliance test scenarios",
      "Validated RF performance for 15+ embedded devices"
    ]
  },
  {
    title: "Level III SCR Supervisor — MSU",
    date: "2023 — Present",
    bullets: [
      "Led 10-person operations team",
      "Designed workflow automation reducing ticket times by 25%"
    ]
  },
  {
    title: "Member — Tau Beta Pi & MSU Honors",
    date: "2023",
    bullets: ["Academic honors and leadership"]
  }
];

export default function Timeline(){
  return (
    <section id="experience" className="space-y-4">
      <h2 className="text-2xl font-heading">Experience</h2>
      <div className="mt-4 space-y-4">
        {timeline.map((t) => (
          <div key={t.title} className="card p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-heading">{t.title}</h4>
                <p className="small-muted">{t.date}</p>
                <ul className="mt-2 small-muted list-disc ml-5">
                  {t.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
