import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Observability Engineer",
    company: "Current Role",
    period: "Present",
    description: "Driving improvements in visibility and reliability across cloud-native and containerized environments.",
    highlights: [
      "Focused on system monitoring, performance optimization, and incident response",
      "Working with cloud-native and containerized environments",
      "Driving improvements in visibility and reliability"
    ]
  },
  {
    title: "Splunk Technical Support Engineer – Apps & Add-ons",
    company: "Splunk",
    period: "Previous",
    description: "Supported complex integrations and data ingestion pipelines for major cloud providers.",
    highlights: [
      "Supported AWS and GCP integrations",
      "Troubleshot Splunk add-ons and data ingestion pipelines",
      "Worked with Splunk Operator for Kubernetes",
      "Diagnosed issues across cloud infrastructure and containerized systems"
    ]
  },
  {
    title: "Site Reliability Engineer",
    company: "Initial Role",
    period: "Early Career",
    description: "Ensured system stability and operational excellence through proactive monitoring and incident management.",
    highlights: [
      "Focused on system stability, reliability, and operations",
      "Incident management and performance optimization",
      "Implemented automated monitoring solutions"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional growth and contributions in the SRE and Observability space.
          </p>
        </motion.div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Icon dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-brand absolute left-0 md:left-1/2 md:-ml-5 z-10 group-hover:border-brand group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                <Briefcase size={18} />
              </div>

              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] ml-16 md:ml-0 glass p-6 rounded-2xl border-white/5 hover:border-brand/20 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-brand bg-brand/10 px-2 py-1 rounded">
                    <Calendar size={12} /> {exp.period}
                  </div>
                </div>
                <p className="text-slate-300 font-medium mb-4">{exp.company}</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{exp.description}</p>
                
                <ul className="space-y-3">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
