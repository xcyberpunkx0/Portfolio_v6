"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { socialLinks } from "@/lib/constants";
import { FiMapPin, FiMail, FiClock, FiGlobe, FiUsers } from "react-icons/fi";

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Software Tinkerer"
];

export default function HeroSection({ onTerminalOpen }: { onTerminalOpen?: () => void }) {
  const [timeStr, setTimeStr] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

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
    <section className="md:pt-36 pt-28 mb-0 pb-10">
      <div className="w-full max-w-3xl mx-auto px-6 lg:px-8">
        <div>
          {/* Avatar + Name Row */}
          <div className="md:mb-6 mb-5 flex flex-row items-start gap-3.5 md:gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden shrink-0 relative">
              <Image 
                src="/images/profile_pic.jpg" 
                alt="Aditya Gupta" 
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-col sm:flex-row">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal text-[#f0f0f0]">Aditya Gupta</h1>
                <div className="hidden md:flex items-center gap-1.5 px-2 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50">
                  <span className="w-2 h-2 rounded-full bg-green-700"></span>
                  <span className="text-xs font-inter text-zinc-400">Available for work</span>
                </div>
              </div>
              <div className="h-5 sm:h-7 overflow-hidden mt-1 relative w-full">
                <AnimatePresence mode="popLayout">
                  <motion.p
                    key={ROLES[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-zinc-500 text-sm sm:text-lg font-mono absolute"
                  >
                    {ROLES[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Status Grid */}
          <div className="md:mb-10 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column */}
              <div className="space-y-2 md:space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-[26px] h-[26px] md:w-7 md:h-7 border border-[#292929] rounded-lg bg-zinc-800/50 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] text-zinc-400">
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </span>
                  <div className="flex items-center">
                    <span className="text-[13px] md:text-[14px] tracking-[-0.01em] font-mono text-zinc-300">Full-Stack Developer</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-[26px] h-[26px] md:w-7 md:h-7 border border-[#292929] rounded-lg bg-zinc-800/50 shrink-0">
                    <FiMapPin size={13} className="text-zinc-400" />
                  </span>
                  <div className="flex items-center">
                    <span className="text-[13px] md:text-[14px] tracking-[-0.01em] font-mono text-zinc-300">Working Remotely</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <span className="flex items-center justify-center w-[26px] h-[26px] md:w-7 md:h-7 border border-[#292929] rounded-lg bg-zinc-800/50 shrink-0 group-hover:border-zinc-700 transition-colors">
                    <FiMail size={13} className="text-zinc-400 group-hover:text-zinc-300 transition-colors" />
                  </span>
                  <div className="flex items-center">
                    <a href={`mailto:${socialLinks.email}`} className="text-[13px] md:text-[14px] tracking-[-0.01em] font-mono text-zinc-300 hover:underline transition-all ease-in-out">
                      {socialLinks.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-2 md:space-y-2.5 hidden md:block">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-[26px] h-[26px] md:w-7 md:h-7 border border-[#292929] rounded-lg bg-zinc-800/50 shrink-0">
                    <FiClock size={13} className="text-zinc-400" />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] md:text-[14px] tracking-[-0.01em] font-mono text-zinc-300">{timeStr || "00:00 AM"}</span>
                    <span className="text-[11px] md:text-[12px] tracking-[-0.01em] font-mono text-zinc-600">// same time</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <span className="flex items-center justify-center w-[26px] h-[26px] md:w-7 md:h-7 border border-[#292929] rounded-lg bg-zinc-800/50 shrink-0 group-hover:border-zinc-700 transition-colors">
                    <FiGlobe size={13} className="text-zinc-400 group-hover:text-zinc-300 transition-colors" />
                  </span>
                  <div className="flex items-center">
                    <a href={(socialLinks as any).website || "https://adityagupta.xyz"} target="_blank" rel="noopener noreferrer" className="text-[13px] md:text-[14px] tracking-[-0.01em] font-mono text-zinc-300 hover:text-zinc-200 transition-colors">
                      adityagupta.xyz
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-[26px] h-[26px] md:w-7 md:h-7 border border-[#292929] rounded-lg bg-zinc-800/50 shrink-0">
                    <FiUsers size={13} className="text-zinc-400" />
                  </span>
                  <div className="flex items-center">
                    <span className="text-[13px] md:text-[14px] tracking-[-0.01em] font-mono text-zinc-300">he/him</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bio */}
          <div className="md:mb-8 mb-5 mt-8 md:mt-0">
            <p className="text-zinc-400 font-mono leading-[2.3] sm:leading-[2.3] text-[0.76rem] sm:text-[14px]">
              I build interactive web apps using{' '}
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 rounded cursor-pointer hover:opacity-80 transition-all ease-in-out bg-blue-500/10 text-blue-400 border border-dashed border-white/10 h-[23px] sm:h-[31px] overflow-visible">
                <i className="devicon-typescript-plain text-[#3178c6] text-[12px] sm:text-[15px]"></i>
                <span className="text-blue-400 text-[11px] sm:text-[13px]">TypeScript</span>
              </a>
              ,{' '}
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 rounded cursor-pointer hover:opacity-80 transition-all ease-in-out bg-cyan-500/10 text-cyan-400 border border-dashed border-white/10 h-[23px] sm:h-[31px] overflow-visible">
                <i className="devicon-react-original text-[#61dafb] text-[12px] sm:text-[15px]"></i>
                <span className="text-cyan-400 text-[11px] sm:text-[13px]">React</span>
              </a>
              ,{' '}
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 rounded cursor-pointer hover:opacity-80 transition-all ease-in-out bg-white/10 text-white border border-dashed border-white/10 h-[23px] sm:h-[31px] overflow-visible">
                <i className="devicon-nextjs-plain bg-white text-black rounded-full text-[10px] sm:text-[12px] leading-none p-[1px] flex items-center justify-center"></i>
                <span className="text-white text-[11px] sm:text-[13px]">Next.js</span>
              </a>
              ,{' '}
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 rounded cursor-pointer hover:opacity-80 transition-all ease-in-out bg-[#00abc0]/10 text-[#00bed7] border border-dashed border-white/10 h-[23px] sm:h-[31px] overflow-visible">
                <i className="devicon-tailwindcss-plain text-[#38bdf8] text-[12px] sm:text-[15px]"></i>
                <span className="text-[#00bed7] text-[11px] sm:text-[13px]">Tailwind CSS</span>
              </a>
              , and{' '}
              <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 rounded cursor-pointer hover:opacity-80 transition-all ease-in-out bg-[#0468d7]/10 text-[#54c5f8] border border-dashed border-white/10 h-[23px] sm:h-[31px] overflow-visible">
                <i className="devicon-flutter-plain text-[#54c5f8] text-[12px] sm:text-[15px]"></i>
                <span className="text-[#54c5f8] text-[11px] sm:text-[13px]">Flutter</span>
              </a>
              . With a focus on UI design. Enthusiastic about creating seamless user experiences, driven by a keen eye for design.
            </p>
          </div>

          {/* Actions & Socials */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
            <a href={socialLinks.resume} target="_blank" className="bg-[#111111] text-zinc-300 px-4 py-2 rounded-lg font-mono text-[13px] hover:bg-[#1A1A1A] hover:text-white transition-colors border border-zinc-800/80 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Resume
            </a>
            <a href={`mailto:${socialLinks.email}`} className="bg-[#111111] text-zinc-300 px-4 py-2 rounded-lg font-mono text-[13px] hover:bg-[#1A1A1A] hover:text-white transition-colors border border-zinc-800/80 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact
            </a>

            <div className="w-px h-6 bg-zinc-800/80 mx-1 hidden sm:block"></div>

            <div className="flex items-center gap-3">
              <a href={(socialLinks as any).twitter || "#"} target="_blank" className="w-9 h-9 flex items-center justify-center bg-[#111111] border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-[#1A1A1A] rounded-[8px] transition-all" aria-label="X/Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href={socialLinks.github} target="_blank" className="w-9 h-9 flex items-center justify-center bg-[#111111] border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-[#1A1A1A] rounded-[8px] transition-all" aria-label="GitHub">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href={`mailto:${socialLinks.email}`} className="w-9 h-9 flex items-center justify-center bg-[#111111] border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-[#1A1A1A] rounded-[8px] transition-all" aria-label="Mail">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>

              <div className="w-px h-6 bg-zinc-800/80 mx-1 hidden sm:block"></div>

              <button onClick={onTerminalOpen} className="w-9 h-9 flex items-center justify-center bg-[#111111] border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-[#1A1A1A] rounded-[8px] transition-all" aria-label="Open Terminal">
                <span className="font-mono text-[13px] leading-none">{'>_'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
