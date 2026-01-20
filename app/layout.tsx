import "./globals.css";
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

          <footer className="relative py-8 border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-slate-500 text-sm text-center md:text-left">
                  © {new Date().getFullYear()} Harshit Kandpal. All rights
                  reserved.
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <span>Built with</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-slate-800/50 text-cyan-400 text-xs font-mono">
                      Next.js
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-800/50 text-blue-400 text-xs font-mono">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-800/50 text-purple-400 text-xs font-mono">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blur orbs */}
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          </footer>
        </div>
      </body>
    </html>
  );
}
