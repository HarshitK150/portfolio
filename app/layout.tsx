import "./globals.css";
import React from "react";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Harshit Kandpal — Software Engineer",
  description: "Harshit Kandpal — Mobile + Web • Cloud + Systems • MSU Honors",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="py-8 text-center small-muted">
            © {new Date().getFullYear()} Harshit Kandpal — Built with Next.js,
            TypeScript, Tailwind.
          </footer>
        </div>
      </body>
    </html>
  );
}
