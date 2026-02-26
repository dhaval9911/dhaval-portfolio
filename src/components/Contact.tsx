import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Interested in discussing reliability, observability, or cloud infrastructure? 
              I'm always open to new opportunities and professional networking.
            </p>

            <div className="space-y-6">
              <a href="mailto:dhaval.chavda@example.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-white font-medium">dhaval.chavda@example.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/dhavalchavda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">LinkedIn</p>
                  <p className="text-white font-medium">linkedin.com/in/dhavalchavda</p>
                </div>
              </a>

              <a href="https://github.com/dhavalchavda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">GitHub</p>
                  <p className="text-white font-medium">github.com/dhavalchavda</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about SRE services"
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-brand hover:bg-brand-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand/20"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
