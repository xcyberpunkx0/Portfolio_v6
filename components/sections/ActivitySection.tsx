"use client";

import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import { useMemo, useState, useEffect } from "react";

export default function ActivitySection() {
  const [spotifyData, setSpotifyData] = useState<any>(null);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify");
        const data = await res.json();
        setSpotifyData(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchSpotify();
    
    // Poll every 30 seconds
    const interval = setInterval(fetchSpotify, 30000);
    return () => clearInterval(interval);
  }, []);

  // Generate mock grayscale contribution data matching the width of a full year (52 weeks)
  const contributions = useMemo(() => {
    const weeks = 52;
    return Array.from({ length: weeks }).map(() => {
      return Array.from({ length: 7 }).map(() => {
        // Random activity level 0-4 skewed towards 0
        return Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0;
      });
    });
  }, []);

  const getGrayscaleColor = (level: number) => {
    switch (level) {
      case 1: return "bg-[#27272a]"; // zinc-800
      case 2: return "bg-[#3f3f46]"; // zinc-700
      case 3: return "bg-[#52525b]"; // zinc-600
      case 4: return "bg-[#a1a1aa]"; // zinc-400
      default: return "bg-[#111111]"; // almost black for empty
    }
  };

  const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];

  return (
    <section className="max-w-3xl mx-auto px-6 pb-20">
      <div className="flex flex-col gap-10">
        {/* Spotify Component - Full Width Stacked */}
        <div className="mt-8 font-inter sm:mt-10 mb-6 duration-300">
          <div className="group relative backdrop-blur-xl overflow-hidden rounded-xl bg-zinc-900/30 border border-zinc-800/40 p-3 sm:p-4 transition-all duration-300 hover:bg-zinc-900/35 hover:border-zinc-700/35">
            <audio preload="auto" />
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="shrink-0">
                {spotifyData?.albumImageUrl ? (
                  <img src={spotifyData.albumImageUrl} alt="Album Art" className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover ring-1 ring-white/5" />
                ) : (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-800 rounded-lg flex items-center justify-center ring-1 ring-white/5">
                    <FaSpotify className="text-zinc-600 text-2xl" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 md:mb-1.5 mb-0.5 h-3.5">
                  <svg className="h-3 w-3 shrink-0" viewBox="0 0 168 168">
                    <path fill="#1DB954" d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"></path>
                  </svg>
                  <span className="md:text-[10px] text-[9px] font-medium md:font-semibold text-[#a8a8a8] uppercase tracking-wider">
                    {spotifyData?.isPlaying ? "Currently playing" : "Last played"}
                  </span>
                </div>
                <a href={spotifyData?.songUrl || "#"} target="_blank" rel="noopener noreferrer" className="inline-block text-xs sm:text-sm text-zinc-200 font-semibold truncate leading-[1.1] hover:underline decoration-zinc-500 underline-offset-4">
                  {spotifyData?.title || "Not Playing"}
                </a>
                <p className="text-[10px] sm:text-xs text-zinc-400 truncate leading-tight">
                  {spotifyData?.artist || "Spotify"}
                </p>
              </div>
              <button className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 cursor-pointer rounded-lg bg-white/[0.015] backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg" title="Play">
                {spotifyData?.isPlaying ? (
                   <div className="w-3 h-3 flex gap-[2px] items-end justify-center">
                     <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-[3px] bg-[#1DB954] rounded-full"></motion.div>
                     <motion.div animate={{ height: [8, 4, 8] }} transition={{ repeat: Infinity, duration: 1 }} className="w-[3px] bg-[#1DB954] rounded-full"></motion.div>
                     <motion.div animate={{ height: [6, 10, 6] }} transition={{ repeat: Infinity, duration: 1 }} className="w-[3px] bg-[#1DB954] rounded-full"></motion.div>
                   </div>
                ) : (
                   <svg className="w-5 h-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v13.72L19 12L8 5.14z"></path></svg>
                )}
              </button>
            </div>
            
            {/* The hidden progress bar element from original HTML */}
            <div className="transition-all duration-300 ease-in-out max-h-0 opacity-0 overflow-hidden">
              <div className="py-2">
                <div className="relative h-2 bg-white/5 backdrop-blur-sm rounded-full cursor-pointer group/progress transition-all duration-0 overflow-visible">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-zinc-400/35 to-zinc-300/35 rounded-full transition-all duration-0 pointer-events-none" style={{ width: "0%" }}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#7c7c7c] rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity duration-100 z-10 pointer-events-none" style={{ left: "calc(0% - 7px)" }}></div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] font-medium text-zinc-400">0:00</span>
                <span className="text-[10px] font-medium text-zinc-400">0:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Component - Bare Grayscale Timeline */}
        <div className="w-full flex flex-col">
          {/* Months header */}
          <div className="flex w-full mb-2 text-[#a1a1aa] font-mono text-[11px] sm:text-xs pl-8">
            {months.map((m, i) => (
              <div key={i} className="flex-1 min-w-0" style={{ width: 'calc(100% / 12)' }}>{m}</div>
            ))}
          </div>

          {/* Grid itself */}
          <div className="flex flex-nowrap gap-[3px] overflow-x-auto overflow-y-hidden justify-between w-full scrollbar-hide py-1">
            {contributions.map((week, wIndex) => (
              <div key={wIndex} className="flex flex-col gap-[3px] shrink-0">
                {week.map((level, dIndex) => (
                  <div 
                    key={dIndex} 
                    className={`w-[11px] h-[11px] sm:w-3 sm:h-3 rounded-[2px] ${getGrayscaleColor(level)}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Bottom text */}
          <div className="flex items-center justify-between mt-3 text-zinc-500 font-mono text-[10px] sm:text-xs">
            <div>
              <span className="text-zinc-200 font-bold">254</span> contributions in the last year
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span>Less</span>
              <div className="flex gap-[3px]">
                <div className="w-[11px] h-[11px] sm:w-3 sm:h-3 rounded-[2px] bg-[#111111]" />
                <div className="w-[11px] h-[11px] sm:w-3 sm:h-3 rounded-[2px] bg-[#27272a]" />
                <div className="w-[11px] h-[11px] sm:w-3 sm:h-3 rounded-[2px] bg-[#3f3f46]" />
                <div className="w-[11px] h-[11px] sm:w-3 sm:h-3 rounded-[2px] bg-[#52525b]" />
                <div className="w-[11px] h-[11px] sm:w-3 sm:h-3 rounded-[2px] bg-[#a1a1aa]" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
