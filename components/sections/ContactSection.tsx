"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 pb-32 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col border-t border-zinc-800/50 pt-10"
      >
        <h2 className="text-3xl font-semibold text-zinc-50 mb-4 tracking-tight">Let's work together.</h2>
        <p className="text-zinc-400 mb-8 max-w-md">
          I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <a href={`mailto:${socialLinks.email}`} className="bg-zinc-50 text-black px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors">
            Get In Touch
          </a>
          <a href={socialLinks.linkedin} target="_blank" className="text-zinc-400 hover:text-zinc-100 text-sm font-medium transition-colors">
            LinkedIn
          </a>
          <a href={socialLinks.github} target="_blank" className="text-zinc-400 hover:text-zinc-100 text-sm font-medium transition-colors">
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
