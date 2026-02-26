import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="font-bold text-2xl tracking-tighter mb-2">
              <span className="text-brand">D</span>HAVAL CHAVDA<span className="text-brand">.</span>
            </div>
            <p className="text-slate-500 text-sm">
              Site Reliability & Observability Engineer
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="#about" className="text-slate-400 hover:text-brand text-sm transition-colors">About</a>
            <a href="#experience" className="text-slate-400 hover:text-brand text-sm transition-colors">Experience</a>
            <a href="#skills" className="text-slate-400 hover:text-brand text-sm transition-colors">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-brand text-sm transition-colors">Projects</a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm flex items-center justify-center md:justify-end gap-1">
              Built by Dhaval Chavda Using 
              <a 
                href="https://aistudio.google.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 transition-colors font-medium"
              >
                AiStudio
              </a>
            </p>
            <p className="text-slate-600 text-xs mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
</div>
        </div>
      </div>
    </footer>
  );
}
