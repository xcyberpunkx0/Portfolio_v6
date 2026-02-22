"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { socialLinks } from "@/lib/constants";
import { FiCode, FiMapPin, FiMail, FiClock, FiGlobe, FiUser } from "react-icons/fi";

export default function HeroSection({ onTerminalOpen }: { onTerminalOpen?: () => void }) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen md:pt-36 pt-28 mb-0 pb-12">
      <div className="w-full max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Avatar + Name Row */}
          <div className="md:mb-6 mb-5 flex flex-row items-start gap-3.5 md:gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden shrink-0">
              <span className="text-xl sm:text-2xl font-semibold text-zinc-400">AG</span>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-col sm:flex-row">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal text-[#f0f0f0]">Aditya Gupta</h1>
                <div className="hidden md:flex items-center gap-1.5 px-2 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50">
                  <span className="w-2 h-2 rounded-full bg-green-700"></span>
                  <span className="text-xs font-medium text-zinc-400">Available for work</span>
                </div>
              </div>
              <p className="text-zinc-500 text-sm sm:text-lg font-mono mt-1">Software Engineer</p>
            </div>
          </div>

          {/* Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-6 md:mb-10 mb-5">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                <FiCode size={14} />
              </div>
              <span className="text-xs md:text-sm text-zinc-300 font-mono">Full-Stack Developer</span>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                <FiClock size={14} />
              </div>
              <span className="text-xs md:text-sm text-zinc-300 font-mono">{timeStr || "00:00 AM"} <span className="text-zinc-600">// same time</span></span>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                <FiMapPin size={14} />
              </div>
              <span className="text-xs md:text-sm text-zinc-300 font-mono">Working Remotely</span>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                <FiGlobe size={14} />
              </div>
              <span className="text-xs md:text-sm text-zinc-300 font-mono">adityagupta.xyz</span>
            </div>

            <a href={`mailto:${socialLinks.email}`} className="flex items-center gap-2 md:gap-3 group w-fit">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                <FiMail size={14} />
              </div>
              <span className="text-xs md:text-sm text-zinc-300 font-mono group-hover:text-zinc-100 transition-colors">adityagup1a@gmail.com</span>
            </a>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                <FiUser size={14} />
              </div>
              <span className="text-xs md:text-sm text-zinc-300 font-mono">he/him</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-[#a1a1aa] leading-relaxed font-mono text-[15px] mb-8">
            I build interactive web apps using{' '}
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#001E3C] border border-[#003B73] text-[#66B2FF] text-sm font-sans mx-0.5">
              <i className="devicon-typescript-plain"></i> TypeScript
            </span>
            ,{' '}
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#002B36] border border-[#004D61] text-[#29B6F6] text-sm font-sans mx-0.5">
              <i className="devicon-react-original"></i> React
            </span>
            ,{' '}
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#1E1E1E] border border-[#333333] text-zinc-200 text-sm font-sans mx-0.5">
              <i className="devicon-nextjs-plain bg-white text-black rounded-full text-[10px] leading-none p-[1px]"></i> Next.js
            </span>
            , and{' '}
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#002633] border border-[#004455] text-[#38BDF8] text-sm font-sans mx-0.5">
              <i className="devicon-tailwindcss-original"></i> Tailwind CSS
            </span>
            . With a focus on UI design. Enthusiastic about creating seamless user experiences, driven by a keen eye for design.
          </p>

          {/* Actions & Socials */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
            <a href={socialLinks.resume} target="_blank" className="bg-[#111111] text-zinc-300 px-4 py-2 rounded-lg font-mono text-sm hover:bg-[#1A1A1A] hover:text-white transition-colors border border-zinc-800/80 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Resume
            </a>
            <a href={`mailto:${socialLinks.email}`} className="bg-[#111111] text-zinc-300 px-4 py-2 rounded-lg font-mono text-sm hover:bg-[#1A1A1A] hover:text-white transition-colors border border-zinc-800/80 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact
            </a>

            <div className="w-px h-6 bg-zinc-800/80 mx-1 hidden sm:block"></div>

            <div className="flex items-center gap-3">
              <a href={(socialLinks as any).twitter || "#"} target="_blank" className="w-9 h-9 flex items-center justify-center bg-[#111111] border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-[#1A1A1A] rounded-lg transition-all" aria-label="X/Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href={socialLinks.github} target="_blank" className="w-9 h-9 flex items-center justify-center bg-[#111111] border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-[#1A1A1A] rounded-lg transition-all" aria-label="GitHub">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href={`mailto:${socialLinks.email}`} className="w-9 h-9 flex items-center justify-center bg-[#111111] border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-[#1A1A1A] rounded-lg transition-all" aria-label="Mail">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
              <button onClick={onTerminalOpen} className="w-9 h-9 flex items-center justify-center bg-[#111111] border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-[#1A1A1A] rounded-lg transition-all" aria-label="Open Terminal">
                <span className="font-mono text-sm leading-none">{'>_'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
