"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/constants";

export default function ExperienceSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-zinc-50 mb-8">Experience</h2>
        
        <div className="flex flex-col gap-8 border-l border-zinc-800/50 pl-6 ml-2">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-zinc-500 bg-black"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <h3 className="text-lg font-medium text-zinc-100">{exp.role}</h3>
                <span className="text-sm font-mono text-zinc-500">{exp.duration}</span>
              </div>
              <div className="text-sm font-medium text-zinc-400 mb-3 block">
                {exp.company} <span className="text-zinc-600 ml-2 font-normal text-xs">{exp.location}</span>
              </div>
              <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2 leading-relaxed">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
