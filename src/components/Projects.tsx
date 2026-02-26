import { motion } from "motion/react";
import { ExternalLink, Github, Server, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Kubernetes Cluster Deployment & Management",
    description: "Architected and managed production-grade Kubernetes clusters with a focus on high availability, security, and automated scaling.",
    tags: ["Kubernetes", "Docker", "Helm", "Cloud-Native"],
    icon: <Server className="text-blue-400" />,
    image: "https://picsum.photos/seed/k8s/600/400"
  },
  {
    title: "Infrastructure Troubleshooting & Reliability",
    description: "Led initiatives to identify and resolve critical infrastructure bottlenecks, improving system uptime and reducing MTTR through advanced observability.",
    tags: ["Observability", "SRE", "Root Cause Analysis", "Monitoring"],
    icon: <ShieldCheck className="text-emerald-400" />,
    image: "https://picsum.photos/seed/reliability/600/400"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of key technical projects where I've applied SRE and DevOps principles to solve real-world challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col glass rounded-3xl overflow-hidden border-white/5 hover:border-brand/20 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-800">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                
                <p className="text-slate-400 mb-8 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a href="#" className="flex items-center gap-2 text-sm font-semibold text-brand hover:text-white transition-colors">
                    View Case Study <ExternalLink size={16} />
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                    Github <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
