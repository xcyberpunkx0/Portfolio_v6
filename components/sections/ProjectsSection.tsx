"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  company?: string;
  link: string;
  mockups?: string[]; // Array of mockup image paths
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-32 border-t border-[#303030] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <p className="mono text-sm text-white mb-16 text-center">
          ... /Projects ...
        </p>

        <div className="grid grid-cols-12 gap-12 items-center min-h-[600px]">
          {/* Left Side: Project Details */}
          <div className="col-span-5 space-y-8">
            {/* Project Name */}
            <h2 className="text-5xl font-bold">{currentProject.title}</h2>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3">
              {currentProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-[#303030] rounded-full text-sm mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-text-secondary leading-relaxed">
                <span className="font-bold text-foreground">{currentProject.title}</span> - {currentProject.description}
              </p>
              
              {currentProject.company && (
                <p className="text-sm text-text-secondary italic">
                  This project comprises several key microservices, each contributing to its overall functionality and prowess.
                </p>
              )}
            </div>

            {/* Navigation Arrow (Left) */}
            <button
              onClick={prevProject}
              className="circle-btn"
              aria-label="Previous project"
            >
              ←
            </button>
          </div>

          {/* Right Side: Scattered Mockup Images */}
          <div className="col-span-7 relative h-[600px]">
            {/* Decorative circles */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50" xmlns="http://www.w3.org/2000/svg">
              <circle cx="70%" cy="30%" r="220" fill="none" stroke="rgba(200, 200, 200, 0.22)" strokeWidth="1" />
              <circle cx="30%" cy="70%" r="180" fill="none" stroke="rgba(200, 200, 200, 0.18)" strokeWidth="1" />
              <circle cx="85%" cy="15%" r="120" fill="none" stroke="rgba(200, 200, 200, 0.25)" strokeWidth="1" />
              <circle cx="15%" cy="30%" r="100" fill="none" stroke="rgba(200, 200, 200, 0.15)" strokeWidth="1" />
              
              {/* Curved paths */}
              <path
                d="M 200 100 Q 400 300 600 200"
                fill="none"
                stroke="rgba(200, 200, 200, 0.18)"
                strokeWidth="1"
              />
              <path
                d="M 600 400 Q 300 250 100 500"
                fill="none"
                stroke="rgba(200, 200, 200, 0.2)"
                strokeWidth="1"
              />
            </svg>

            {/* Mockup Images - Artistic scattered layout */}
            <div className="relative w-full h-full">
              {/* Large mockup 1 - Top left */}
              <div className="absolute top-0 left-0 w-48 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl border border-[#303030] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl opacity-30">
                  📱
                </div>
              </div>

              {/* Large mockup 2 - Center */}
              <div className="absolute top-12 left-32 w-80 h-56 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl border border-[#303030] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl opacity-30">
                  💻
                </div>
              </div>

              {/* Medium mockup 3 - Top right */}
              <div className="absolute top-0 right-0 w-56 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-3xl border border-[#303030] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl opacity-30">
                  🎨
                </div>
              </div>

              {/* Small mockup 4 - Bottom center */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl border border-[#303030] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-5xl opacity-30">
                  🦊
                </div>
              </div>

              {/* Circular navigation button - Center overlay */}
              <button
                onClick={nextProject}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 circle-btn z-10"
                aria-label="Next project"
              >
                →
              </button>

              {/* Small floating thumbnail - Top */}
              <div className="absolute -top-8 left-1/4 w-32 h-32 bg-gradient-to-br from-gray-600/40 to-gray-800/40 rounded-2xl border border-[#303030] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-4xl opacity-40">
                  🌙
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Arrow (Optional) */}
        <div className="flex justify-end mt-12">
          <button
            onClick={nextProject}
            className="circle-btn"
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
