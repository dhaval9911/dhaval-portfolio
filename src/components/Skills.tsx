import { motion } from "motion/react";
import { Cpu, Cloud, Shield, Terminal, Layers, Activity } from "lucide-react";

const skillCategories = [
  {
    title: "Infrastructure & Cloud",
    icon: <Cloud className="text-blue-400" />,
    skills: ["Kubernetes", "AWS", "GCP", "Linux", "Containerization"]
  },
  {
    title: "Observability & Monitoring",
    icon: <Activity className="text-emerald-400" />,
    skills: ["Splunk", "Observability", "Monitoring & Alerting", "Distributed Systems"]
  },
  {
    title: "Operations & DevOps",
    icon: <Terminal className="text-amber-400" />,
    skills: ["Incident Management", "DevOps Practices", "Troubleshooting", "System Reliability"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of tools and methodologies I use to build and maintain high-performance systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-brand/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/50 text-slate-300 text-sm border border-white/5 hover:border-brand/30 hover:text-brand transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee-like skill badges for visual flair */}
        <div className="mt-20 overflow-hidden relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center">
                {["K8s", "Docker", "Terraform", "Ansible", "Prometheus", "Grafana", "ELK", "Splunk", "AWS", "GCP", "Linux", "Python", "Go"].map((s) => (
                  <span key={s} className="text-4xl md:text-6xl font-black text-slate-800/50 select-none">
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
