"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

interface HeroSectionProps {
  bio: {
    name: string;
  };
}

export default function HeroSection({ bio }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-32">
      {/* Decorative background circles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" xmlns="http://www.w3.org/2000/svg">
        {/* Large circles */}
        <circle cx="85%" cy="15%" r="180" fill="none" stroke="rgba(200, 200, 200, 0.25)" strokeWidth="1" />
        <circle cx="85%" cy="15%" r="280" fill="none" stroke="rgba(200, 200, 200, 0.18)" strokeWidth="1" />
        <circle cx="15%" cy="80%" r="220" fill="none" stroke="rgba(200, 200, 200, 0.22)" strokeWidth="1" />
        <circle cx="50%" cy="50%" r="400" fill="none" stroke="rgba(200, 200, 200, 0.15)" strokeWidth="1" />
        
        {/* Medium circles */}
        <circle cx="30%" cy="20%" r="120" fill="none" stroke="rgba(200, 200, 200, 0.2)" strokeWidth="1" />
        <circle cx="70%" cy="70%" r="150" fill="none" stroke="rgba(200, 200, 200, 0.22)" strokeWidth="1" />
        
        {/* Small accent circles */}
        <circle cx="90%" cy="50%" r="80" fill="none" stroke="rgba(200, 200, 200, 0.25)" strokeWidth="1" />
        <circle cx="20%" cy="40%" r="60" fill="none" stroke="rgba(200, 200, 200, 0.18)" strokeWidth="1" />
        
        {/* Curved decorative paths */}
        <path
          d="M 100 100 Q 400 300 800 200"
          fill="none"
          stroke="rgba(200, 200, 200, 0.2)"
          strokeWidth="1"
        />
        <path
          d="M 800 600 Q 500 400 200 700"
          fill="none"
          stroke="rgba(200, 200, 200, 0.15)"
          strokeWidth="1"
        />
      </svg>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Large Typography */}
        <div className="mb-16">
          <h1 className="text-[8rem] font-bold leading-none mb-4">
            Software
          </h1>
          <div className="flex items-baseline justify-between">
            <p className="text-xl text-text-secondary max-w-md">
              I build dynamic web and mobile applications. Problem-solving drives my development approach, crafting intuitive user experiences.
            </p>
            <h1 className="text-[8rem] font-bold leading-none">
              Engineer
            </h1>
          </div>
        </div>

        {/* Projects Button */}
        <div className="flex justify-end mb-16">
          <a href="#projects">
            <button className="btn-white">
              Projects
              <span>→</span>
            </button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-16">
          <a href="https://github.com/xcyberpunkx0" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/aditya-gup1a/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.geeksforgeeks.org/profile/xcyberpunkx0?tab=activity" className="social-icon" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks className="w-4 h-4" />
            <span>GeeksforGeeks</span>
          </a>
          <a href="https://leetcode.com/u/xcyberpunkx0/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="w-4 h-4" />
            <span>LeetCode</span>
          </a>
          <a href="mailto:aditya.gup1a@gmail.com" className="social-icon">
            <FaEnvelope className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
