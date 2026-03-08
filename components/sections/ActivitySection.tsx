"use client";

import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import React, { useMemo, useState, useEffect } from "react";

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

  const [isMounted, setIsMounted] = useState(false);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; count: number; date: Date } | null>(null);
  const graphContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate mock contribution data with dates
  const contributions = useMemo(() => {
    if (!isMounted) return { weeks: [] as { date: Date; level: number; count: number; isFuture: boolean }[][], total: 0 };
    
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - 365);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const weeksData: { date: Date; level: number; count: number; isFuture: boolean }[][] = [];
    let currentDate = new Date(startDate);
    let totalMockContributions = 0;

    while (currentDate <= endDate || currentDate.getDay() !== 0) {
      if (currentDate.getDay() === 0) weeksData.push([]);
      
      const isFuture = currentDate > endDate;
      const level = isFuture ? 0 : (Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0);
      const count = level === 0 ? 0 : Math.floor(Math.random() * 5) + level;
      if (!isFuture) totalMockContributions += count;
      
      weeksData[weeksData.length - 1].push({
        date: new Date(currentDate), level, count, isFuture
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return { weeks: weeksData, total: totalMockContributions };
  }, [isMounted]);

  // Ensure exactly 53 weeks for a fixed 739px SVG (53 * 14 - 3 = 739)
  const TOTAL_WEEKS = 53;
  const displayWeeks = contributions.weeks.length >= TOTAL_WEEKS 
    ? contributions.weeks.slice(contributions.weeks.length - TOTAL_WEEKS) 
    : contributions.weeks;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getFillClass = (level: number) => {
    switch (level) {
      case 1: return "fill-zinc-700/50";
      case 2: return "fill-zinc-600/60";
      case 3: return "fill-zinc-500/70";
      case 4: return "fill-zinc-400/80";
      default: return "fill-zinc-900/40";
    }
  };

  const svgWidth = 739;
  const svgHeight = 115;

  const handleMouseEnter = (e: React.MouseEvent<SVGRectElement>, day: { count: number; date: Date }) => {
    if (!graphContainerRef.current) return;
    const containerRect = graphContainerRef.current.getBoundingClientRect();
    const rectEl = e.currentTarget.getBoundingClientRect();
    const rawX = rectEl.left - containerRect.left + rectEl.width / 2;
    // Clamp so tooltip doesn't go off edges (tooltip is ~200px wide, centered)
    const clampedX = Math.max(100, Math.min(rawX, containerRect.width - 100));
    setTooltip({
      x: clampedX,
      y: rectEl.top - containerRect.top,
      count: day.count,
      date: day.date,
    });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 pb-10">
      <div className="flex flex-col gap-10">
        {/* Spotify Component */}
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
          
          <div className="flex items-center justify-center mr-2">
             <button className="w-8 h-8 rounded-full bg-[#111111] border border-zinc-800 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:border-zinc-700 transition-colors" aria-label="Play">
               {spotifyData?.isPlaying ? (
                 <FaSpotify className="text-zinc-300 text-[18px]" />
               ) : (
                 <FaSpotify className="text-zinc-500 text-[18px]" />
               )}
             </button>
          </div>
        </a>

        {/* GitHub Contribution Graph */}
        <div ref={graphContainerRef} className="relative w-full flex flex-col gap-3 font-mono text-[12px]">
          <style>{`.contribution-scroll::-webkit-scrollbar{display:none}.contribution-scroll{-ms-overflow-style:none;scrollbar-width:none}`}</style>
          
          <div className="w-full overflow-hidden">
            <svg className="block w-full h-auto" viewBox="0 0 765 115" preserveAspectRatio="xMidYMid meet">
              {/* Month labels */}
              <g className="fill-zinc-500 text-[12px]">
                {displayWeeks.map((week, wIndex) => {
                  if (week.length === 0) return null;
                  const currentMonth = week[0]?.date.getMonth();
                  const prevMonth = wIndex > 0 ? displayWeeks[wIndex - 1]?.[0]?.date.getMonth() : -1;
                  if (currentMonth === prevMonth) return null;
                  const monthLabel = week[0]?.date.toLocaleDateString('en-US', { month: 'short' });
                  return <text key={`m-${wIndex}`} x={wIndex * 14} dominantBaseline="hanging">{monthLabel}</text>;
                })}
              </g>
              
              {/* Contribution squares */}
              {displayWeeks.map((week, wIndex) => (
                <g key={wIndex}>
                  {week.map((day: any, dIndex: number) => (
                    <rect
                      key={dIndex}
                      className={`${day.isFuture ? 'fill-transparent' : getFillClass(day.level)} transition-all duration-200 hover:opacity-80 cursor-pointer`}
                      data-count={day.count}
                      data-date={day.date.toISOString().split('T')[0]}
                      data-level={day.level}
                      height="11"
                      rx="2"
                      ry="2"
                      width="11"
                      x={wIndex * 14}
                      y={dIndex * 14 + 20}
                      onMouseEnter={!day.isFuture ? (e) => handleMouseEnter(e, day) : undefined}
                      onMouseLeave={!day.isFuture ? handleMouseLeave : undefined}
                    />
                  ))}
                </g>
              ))}
            </svg>
          </div>

          {/* Tooltip — rendered outside SVG so it never clips */}
          {tooltip && (
            <div
              className="absolute z-50 pointer-events-none"
              style={{
                left: tooltip.x,
                top: tooltip.y,
                transform: 'translate(-50%, -100%)',
              }}
            >
              <div className="flex flex-col items-center mb-1">
                <div className="bg-[#292929] text-zinc-300 font-mono text-[11px] px-3 py-1.5 rounded-md shadow-2xl whitespace-nowrap">
                  <span className={tooltip.count > 0 ? "text-zinc-100 font-medium" : ""}>
                    {tooltip.count === 0 ? "No" : tooltip.count}
                  </span>{" "}
                  contributions on {formatDate(tooltip.date)}
                </div>
                <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#292929] -mt-[1px]" />
              </div>
            </div>
          )}
          
          {/* Footer */}
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div className="text-zinc-500 text-xs">
              <span className="font-medium text-zinc-300">{contributions.total}</span> contributions <span className="hidden md:inline-block">in 2025-26</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="mr-1 text-zinc-500 text-xs">Less</span>
              <svg height="11" width="11"><rect className="fill-zinc-900/40" height="11" rx="2" ry="2" width="11" /></svg>
              <svg height="11" width="11"><rect className="fill-zinc-700/50" height="11" rx="2" ry="2" width="11" /></svg>
              <svg height="11" width="11"><rect className="fill-zinc-600/60" height="11" rx="2" ry="2" width="11" /></svg>
              <svg height="11" width="11"><rect className="fill-zinc-500/70" height="11" rx="2" ry="2" width="11" /></svg>
              <svg height="11" width="11"><rect className="fill-zinc-400/80" height="11" rx="2" ry="2" width="11" /></svg>
              <span className="ml-1 text-zinc-500 text-xs">More</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
