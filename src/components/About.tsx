import { motion } from "motion/react";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <User className="text-brand" /> About Me
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a <span className="text-white font-medium">Site Reliability and Observability Engineer</span> with progressive experience across SRE, Technical Support Engineering, and Observability Engineering.
              </p>
              <p>
                My expertise lies in building reliability into distributed systems, troubleshooting complex cloud-native environments, and enhancing monitoring and performance visibility. I thrive at the intersection of development and operations, ensuring that systems are not just functional, but resilient and scalable.
              </p>
              <p>
                Based in <span className="text-white font-medium">Ahmedabad, Gujarat, India</span>, I've worked with diverse teams to drive improvements in system visibility and incident response across AWS, GCP, and Kubernetes ecosystems.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-brand/10 text-brand">
                  <MapPin size={20} />
                </div>
                <span>Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-brand/10 text-brand">
                  <Briefcase size={20} />
                </div>
                <span>SRE & Observability</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
                <div className="group aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="/Cloud-Native_Reliability_Observability.png" 
                alt="Dhaval Chavda" 
                /* Use transition-all to ensure filter properties are captured */
                className="w-full h-full object-cover  transition-all duration-200 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass p-4 rounded-xl border-white/5">
                  <p className="text-sm font-mono text-brand mb-1">Current Focus</p>
                  <p className="text-white font-medium">Cloud-Native Reliability & Observability</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand/30 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand/30 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
