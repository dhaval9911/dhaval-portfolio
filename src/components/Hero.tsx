import { motion } from "motion/react";
import { ChevronRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const titles = [
  "Site Reliability Engineer",
  "Observability Engineer",
  "DevOps Specialist",
  "Cloud Infrastructure Expert"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand text-xs font-semibold tracking-wider uppercase mb-4 border border-brand/20">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-gradient">Dhaval Chavda</span>
          </h1>
          <div className="h-12 md:h-16 mb-8">
            <p className="text-xl md:text-3xl font-mono text-slate-400">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10 leading-relaxed">
            Building resilient, scalable, and observable distributed systems. 
            Passionate about reliability, automation, and cloud-native performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-dark text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand/20"
            >
              Contact Me <Mail size={18} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-white/10 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Download Resume <Download size={18} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-slate-500 hover:text-brand transition-colors animate-bounce">
            <ChevronRight size={32} className="rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
