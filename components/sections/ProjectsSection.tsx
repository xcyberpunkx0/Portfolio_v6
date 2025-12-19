"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  company?: string;
  link: string;
  date?: string;
  images?: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-32 border-t border-[#303030] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <p className="mono text-sm text-white mb-8">... /Projects ...</p>

        {/* Project Title - Large Display */}
        <div className="mb-16">
          <h2 className="text-7xl font-bold tracking-tight">{currentProject.title}</h2>
          {currentProject.date && (
            <p className="mono text-text-secondary mt-4 text-lg">{currentProject.date}</p>
          )}
        </div>

        {/* Creative Image Layout */}
        <div className="relative min-h-[700px]">
          {/* Decorative background elements */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20%" cy="40%" r="300" fill="none" stroke="rgba(200, 200, 200, 0.08)" strokeWidth="1" />
            <circle cx="80%" cy="60%" r="250" fill="none" stroke="rgba(200, 200, 200, 0.06)" strokeWidth="1" />
            <path d="M 100 400 Q 500 200 900 450" fill="none" stroke="rgba(200, 200, 200, 0.1)" strokeWidth="1" />
          </svg>

          {currentProject.images && currentProject.images.length > 0 ? (
            <>
              {/* Main Hero Image - Large, front and center */}
              <div 
                className={`absolute left-0 top-0 w-[55%] transition-all duration-500 ease-out ${
                  hoveredImage === 0 ? "z-30 scale-[1.02]" : hoveredImage !== null ? "z-10 opacity-70" : "z-20"
                }`}
                onMouseEnter={() => setHoveredImage(0)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#303030] shadow-2xl bg-[#1a1a1a]">
                  <Image
                    src={currentProject.images[0]}
                    alt={`${currentProject.title} main view`}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Second Image - Overlapping right */}
              {currentProject.images[1] && (
                <div 
                  className={`absolute right-0 top-24 w-[50%] transition-all duration-500 ease-out ${
                    hoveredImage === 1 ? "z-30 scale-[1.02]" : hoveredImage !== null ? "z-10 opacity-70" : "z-10"
                  }`}
                  onMouseEnter={() => setHoveredImage(1)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#303030] shadow-2xl bg-[#1a1a1a]">
                    <Image
                      src={currentProject.images[1]}
                      alt={`${currentProject.title} form view`}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
              )}

              {/* Third Image - Bottom left, offset */}
              {currentProject.images[2] && (
                <div 
                  className={`absolute left-[15%] bottom-0 w-[45%] transition-all duration-500 ease-out ${
                    hoveredImage === 2 ? "z-30 scale-[1.02]" : hoveredImage !== null ? "z-10 opacity-70" : "z-15"
                  }`}
                  onMouseEnter={() => setHoveredImage(2)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#303030] shadow-2xl bg-[#1a1a1a]">
                    <Image
                      src={currentProject.images[2]}
                      alt={`${currentProject.title} preview`}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="w-full aspect-[16/9] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl border border-[#303030] flex items-center justify-center">
              <div className="text-6xl opacity-30">💻</div>
            </div>
          )}
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-20 flex items-end justify-between">
          {/* Left: Description & Tags */}
          <div className="max-w-xl space-y-6">
            <p className="text-text-secondary leading-relaxed">
              {currentProject.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {currentProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-[#303030] rounded-full text-sm mono hover:bg-white hover:text-black transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {currentProject.link && currentProject.link !== "#" && (
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
              >
                View Live →
              </a>
            )}
            
            {projects.length > 1 && (
              <div className="flex gap-2">
                <button onClick={prevProject} className="circle-btn" aria-label="Previous">←</button>
                <button onClick={nextProject} className="circle-btn" aria-label="Next">→</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
