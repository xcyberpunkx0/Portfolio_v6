"use client";

import { experiences } from "@/lib/constants";

export default function ExperienceSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 pb-10">
      <div>
        <h2 className="text-xl font-semibold text-zinc-50 mb-8">Experience</h2>
        
        <div className="flex flex-col gap-5">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-[#0C0C0C] rounded-2xl border border-zinc-800/80 p-5 sm:p-6">
              {/* Header: Logo + Role + Date */}
              <div className="flex items-start gap-4 mb-4">
                {/* Company Logo */}
                <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-800 border border-zinc-700/50">
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Role & Company */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-[15px] font-semibold text-zinc-100">{exp.role}</h3>
                    <span className="text-xs font-mono text-zinc-500 whitespace-nowrap">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm text-zinc-400 font-medium">{exp.company}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs text-zinc-500">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Description bullets */}
              <ul className="space-y-1.5 ml-0.5">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-[13px] text-zinc-400 leading-relaxed flex gap-2">
                    <span className="text-zinc-600 mt-1.5 flex-shrink-0">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
