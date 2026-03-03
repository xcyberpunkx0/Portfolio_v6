"use client";

import { FaDownload } from "react-icons/fa";
import { experiences, education, skills, socialLinks, bio } from "@/lib/constants";

export default function AboutPage() {
  // Group skills logically for the "Technical Arsenal" section
  const allSkills = [
    ...skills["Languages"] || [],
    ...skills["Frameworks"] || [],
    ...skills["Databases"] || [],
    ...skills["Architecture"] || [],
    ...skills["Developer Tools"] || [],
    ...skills["Gen AI"] || []
  ];

  return (
    <main className="min-h-screen pt-32 sm:pt-40 pb-32 px-6 sm:px-8 max-w-[800px] mx-auto selection:bg-zinc-800 selection:text-white">
      
      {/* Header & The Story Section (Combined Narrative) */}
      <section
        className="mb-24 flex flex-col gap-10"
      >
        <div className="flex justify-between items-start gap-6">
          <h1 className="text-[36px] font-medium tracking-[-0.9px] leading-[40px]">
            <span className="text-white block">From writing scripts to</span>
            <span className="text-zinc-500 block">building for the web.</span>
          </h1>
          <a 
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 hidden sm:flex items-center justify-center w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all shrink-0"
            title="Download Resume"
          >
            <FaDownload />
          </a>
        </div>

        <div className="flex flex-col gap-6 text-[15px] leading-[27.75px] text-zinc-400">
          <p>
            I'm Aditya, a developer who builds interactive web experiences and robust scalable systems. I obsess over the small details, like the complex data flow, the subtle hover states, and how the underlying architecture scales etc. The things most people don't notice, but everyone subconsciously feels.
          </p>
          <p className="text-zinc-500">
            I believe great engineering isn't about adding more. It's about refining until nothing else can be.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-2.5 py-1 rounded-[4px] text-[13px] border-[0.67px] border-dashed bg-[#2dd4bf]/10 text-[#2dd4bf] border-[#2dd4bf]/30">Curious</span>
            <span className="px-2.5 py-1 rounded-[4px] text-[13px] border-[0.67px] border-dashed bg-[#60a5fa]/10 text-[#60a5fa] border-[#60a5fa]/30">Focused</span>
            <span className="px-2.5 py-1 rounded-[4px] text-[13px] border-[0.67px] border-dashed bg-[#c084fc]/10 text-[#c084fc] border-[#c084fc]/30">Obsessed</span>
            <span className="px-2.5 py-1 rounded-[4px] text-[13px] border-[0.67px] border-dashed bg-[#4ade80]/10 text-[#4ade80] border-[#4ade80]/30">Builder</span>
          </div>

          <a 
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex sm:hidden items-center gap-2 mt-4 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-medium text-zinc-300 hover:text-white transition-colors w-fit"
          >
            <FaDownload className="text-zinc-500 group-hover:text-white transition-colors" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Status Grid */}
        <div className="mt-12 mb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="flex flex-col gap-1.5">
              <span className="text-[12px] text-zinc-600 uppercase tracking-[0.6px]">Location</span>
              <span className="text-[14px] text-zinc-300">Bhubaneswar, India</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[12px] text-zinc-600 uppercase tracking-[0.6px]">Experience</span>
              <span className="text-[14px] text-zinc-300">1.5+ Years</span>
            </div>
            <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
              <span className="text-[12px] text-zinc-600 uppercase tracking-[0.6px]">Status</span>
              <span className="text-[14px] text-zinc-300">
                Available for work
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section
        className="mb-20"
      >
        <h2 className="text-xl font-medium text-white mb-8">Experience</h2>
        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-6 group">
              {/* Duration Sidebar */}
              <div className="sm:w-32 shrink-0 pt-1">
                <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {exp.duration.split('-')[0].trim()} — {exp.duration.split('-')[1]?.trim() || "Present"}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-base font-medium text-white mb-1 group-hover:text-[#1e88e5] transition-colors">{exp.role}</h3>
                <span className="text-sm text-zinc-500 mb-4">{exp.company}{exp.location && ` • ${exp.location}`}</span>
                <ul className="flex flex-col gap-3">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-sm text-zinc-400 leading-relaxed flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1.5 shrink-0 select-none">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Arsenal (Skills) */}
      <section
        className="mb-20"
      >
        <h2 className="text-xl font-medium text-white mb-6">Technical Arsenal</h2>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill, i) => (
            <span 
              key={i} 
              className="px-3 py-1.5 bg-[#111111] hover:bg-[#1A1A1A] border border-zinc-800 hover:border-zinc-700 rounded-md text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors select-none"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-medium text-white mb-8">Education</h2>
        <div className="flex flex-col gap-8">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-6 group">
              <div className="sm:w-32 shrink-0 pt-0.5">
                <span className="text-xs font-mono text-zinc-500">{edu.year.split('-')[0].trim()}</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-medium text-white mb-1">{edu.degree}</h3>
                <span className="text-sm text-zinc-500 mb-2">{edu.institution}{edu.location && `, ${edu.location}`}</span>
                {edu.subjects && (
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    <span className="text-zinc-500">Coursework:</span> {edu.subjects}
                  </p>
                )}
                {edu.cgpa && (
                  <p className="text-sm text-zinc-400 mt-1">
                    <span className="text-zinc-500">CGPA:</span> {edu.cgpa}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
