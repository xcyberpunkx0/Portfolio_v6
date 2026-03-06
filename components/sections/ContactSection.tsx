"use client";

import { useState, useEffect } from "react";
import { socialLinks } from "@/lib/constants";
import { FiCalendar, FiMail, FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaQuoteLeft } from "react-icons/fa";

export default function ContactSection() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/adityagupta/portfolio/up")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.count) {
          setVisitorCount(data.count);
        }
      })
      .catch((err) => console.error("Failed to fetch visitor count:", err));
  }, []);

  return (
    <section className="max-w-3xl mx-auto px-6 pb-24 pt-10">
      <div className="flex flex-col border-t border-zinc-800/50 pt-10">
        <h2 className="text-[11px] text-zinc-600 uppercase tracking-[0.2em] font-light mb-8">Let's work together</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          
          {/* Left Column: Get in Touch */}
          <div className="bg-[#0C0C0C] rounded-2xl border border-zinc-800/80 p-5 sm:p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-zinc-50 mb-2">Get in Touch</h3>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Choose your preferred method to connect and let's discuss your project.
            </p>
            
            <div className="flex flex-col gap-3 mb-6 flex-1">
              <a href="mailto:adityagup1a@gmail.com" className="group flex items-center justify-between p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <FiMail className="text-zinc-400 text-lg group-hover:text-zinc-200 transition-colors" />
                  <div>
                    <div className="text-sm font-medium text-zinc-200">adityagup1a@gmail.com</div>
                    <div className="text-xs text-zinc-500">Quick inquiries & questions</div>
                  </div>
                </div>
                <FiArrowUpRight className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </a>

              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-zinc-400 text-lg group-hover:text-zinc-200 transition-colors" />
                  <div>
                    <div className="text-sm font-medium text-zinc-200">Connect on LinkedIn</div>
                    <div className="text-xs text-zinc-500">Professional networking</div>
                  </div>
                </div>
                <FiArrowUpRight className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </a>

              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <FaGithub className="text-zinc-400 text-lg group-hover:text-zinc-200 transition-colors" />
                  <div>
                    <div className="text-sm font-medium text-zinc-200">Follow on GitHub</div>
                    <div className="text-xs text-zinc-500">Code & contributions</div>
                  </div>
                </div>
                <FiArrowUpRight className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </a>
            </div>

            <div className="text-[11px] text-zinc-500 pt-4 border-t border-zinc-800/50 mt-auto">
              Response within 24 hours <span className="mx-1.5">•</span> Available for hire
            </div>
          </div>

          {/* Right Column: Send a Message */}
          <div className="bg-[#0C0C0C] rounded-2xl border border-zinc-800/80 p-5 sm:p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-zinc-50 mb-2">Send a Message</h3>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Prefer to write? Fill out the form and I'll get back to you within 24 hours.
            </p>
            
            <form className="flex flex-col gap-3 flex-1">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none flex-1"
              ></textarea>
              
              <button 
                type="button" 
                className="mt-2 w-full bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700/50 text-zinc-200 font-medium text-sm py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <FiArrowRight className="text-zinc-400" />
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#0C0C0C] rounded-2xl border border-zinc-800/80 p-5 sm:p-6 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div className="flex items-start gap-4">
            <FaQuoteLeft className="text-zinc-600 text-xl flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[15px] font-medium text-zinc-300 leading-relaxed max-w-lg mb-2">
                All creation is in the art of seeing.
              </p>
              <div className="text-sm text-zinc-500 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                John Berger
              </div>
            </div>
          </div>
          
          <div className="md:border-l border-zinc-800/80 md:pl-6 text-sm text-zinc-400 whitespace-nowrap">
            You are the <span className="text-zinc-200 font-medium">
              {visitorCount ? (
                <>
                  {visitorCount.toLocaleString()}
                  <sup className="font-normal text-[10px] ml-0.5">
                    {(() => {
                      const j = visitorCount % 10, k = visitorCount % 100;
                      if (j == 1 && k != 11) return "st";
                      if (j == 2 && k != 12) return "nd";
                      if (j == 3 && k != 13) return "rd";
                      return "th";
                    })()}
                  </sup>
                </>
              ) : "..."}
            </span> visitor
          </div>
        </div>

      </div>
    </section>
  );
}
