"use client";

import { motion } from "framer-motion";
import { FaSpotify, FaGithub } from "react-icons/fa";
import { useMemo } from "react";

export default function ActivitySection() {
  // Generate mock contribution data (random shades of green for the last ~100 days to fit mobile, or a full grid)
  const contributions = useMemo(() => {
    const days = 140; // 20 weeks * 7 days
    return Array.from({ length: days }).map((_, i) => {
      const level = Math.random() > 0.5 ? 0 : Math.floor(Math.random() * 4) + 1; // 0 to 4
      return level;
    });
  }, []);

  const getColor = (level: number) => {
    switch (level) {
      case 1: return "bg-green-900/40";
      case 2: return "bg-green-700/60";
      case 3: return "bg-green-500/80";
      case 4: return "bg-green-400";
      default: return "bg-zinc-800/50";
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4"
      >
        {/* Spotify Component */}
        <div className="flex-1 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 p-4 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors">
          <div className="w-16 h-16 rounded-md bg-zinc-800 flex-shrink-0 relative overflow-hidden group">
            {/* Mock Album Art - showing a simple gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-800 opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <FaSpotify className="text-zinc-50 text-xl" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-medium text-zinc-200 truncate pr-4">Starboy</h3>
              <FaSpotify className="text-green-500 text-lg flex-shrink-0" />
            </div>
            <p className="text-xs text-zinc-400 truncate">The Weeknd, Daft Punk</p>
            {/* Progress bar mock */}
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[10px] text-zinc-500 font-mono">1:42</span>
              <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-zinc-400 w-1/2 rounded-full" />
              </div>
              <span className="text-[10px] text-zinc-500 font-mono">3:50</span>
            </div>
          </div>
        </div>

        {/* Github Component */}
        <div className="flex-1 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 p-4 hover:bg-zinc-800/50 transition-colors flex flex-col justify-center">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-zinc-400">
              <FaGithub className="text-lg" />
              <span className="text-sm font-medium text-zinc-300">Contributions</span>
            </div>
            <span className="text-xs text-zinc-500 font-mono">Last 20 weeks</span>
          </div>
          
          <div className="flex gap-1 overflow-hidden" dir="rtl">
            {/* We render columns of 7 squares */}
            {Array.from({ length: 20 }).map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, rowIndex) => {
                  const dayIndex = colIndex * 7 + rowIndex;
                  return (
                    <div 
                      key={rowIndex} 
                      className={`w-3 h-3 rounded-[2px] ${getColor(contributions[dayIndex])}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
