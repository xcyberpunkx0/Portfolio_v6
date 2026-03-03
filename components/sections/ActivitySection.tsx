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
        <a 
          href={spotifyData?.songUrl || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-[#0C0C0C] rounded-2xl border border-zinc-800/80 p-4 flex items-center justify-between hover:bg-[#111111] transition-colors group cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-md bg-zinc-800 flex-shrink-0 relative overflow-hidden group/album">
               {spotifyData?.albumImageUrl ? (
                 <img src={spotifyData.albumImageUrl} alt="Album Art" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
               ) : (
                 <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                    <FaSpotify className="text-zinc-700 text-2xl" />
                 </div>
               )}
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 mb-1.5">
                <FaSpotify className="text-[#1DB954] text-xs" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#a1a1aa] uppercase">
                  {spotifyData?.isPlaying ? "Currently Playing" : "Last Played"}
                </span>
              </div>
              <h3 className="text-sm sm:text-[15px] font-semibold text-zinc-200 leading-none mb-1.5 group-hover:underline decoration-zinc-500 underline-offset-4">
                {spotifyData?.title || "Not Playing"}
              </h3>
              <p className="text-xs sm:text-[13px] text-zinc-400 leading-none">
                {spotifyData?.artist || "Spotify"}
              </p>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center justify-center mr-2">
             <button className="w-8 h-8 rounded-lg bg-[#111111] border border-zinc-800 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:border-zinc-700 transition-colors" aria-label="Play">
               {spotifyData?.isPlaying ? (
                 <div className="w-3 h-3 flex gap-[2px] items-end justify-center">
                   <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-[3px] bg-[#1DB954] rounded-full"></motion.div>
                   <motion.div animate={{ height: [8, 4, 8] }} transition={{ repeat: Infinity, duration: 1 }} className="w-[3px] bg-[#1DB954] rounded-full"></motion.div>
                   <motion.div animate={{ height: [6, 10, 6] }} transition={{ repeat: Infinity, duration: 1 }} className="w-[3px] bg-[#1DB954] rounded-full"></motion.div>
                 </div>
               ) : (
                 <svg className="w-3 h-3 text-zinc-300 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
               )}
             </button>
          </div>
        </a>

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
