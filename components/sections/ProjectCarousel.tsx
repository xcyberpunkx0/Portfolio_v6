"use client";

import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  company?: string;
  link: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative mt-24">
      <div className="flex items-center gap-6">
        <button
          onClick={prevProject}
          className="circle-btn flex-shrink-0"
          aria-label="Previous projects"
        >
          ←
        </button>
        
        <div className="grid grid-cols-3 gap-6 flex-1">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#303030] hover:border-[#404040] transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl opacity-50">🖼️</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                {project.description}
              </p>
              <button className="text-sm flex items-center gap-2 text-foreground hover:text-text-secondary transition-colors">
                Read more <span>→</span>
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={nextProject}
          className="circle-btn flex-shrink-0"
          aria-label="Next projects"
        >
          →
        </button>
      </div>
    </div>
  );
}
