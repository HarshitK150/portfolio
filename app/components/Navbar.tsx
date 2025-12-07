import Link from "next/link";
import React from "react";

export default function Navbar(){
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-semibold">
        <Link href="/">HK</Link>
      </div>
      <div className="hidden md:flex gap-6 items-center small-muted">
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#experience">Experience</Link>
        <a href="" download className="px-3 py-2 rounded-md bg-primary/10 text-primary">Resume</a>
      </div>
    </nav>
  )
}
