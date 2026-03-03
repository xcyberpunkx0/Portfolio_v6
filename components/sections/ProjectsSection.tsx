"use client";

import { workProjects, openSourceProjects } from "@/lib/constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function ProjectsSection() {
  const allProjects = [...workProjects, ...openSourceProjects];

  return (
    <section className="max-w-3xl mx-auto px-6 pb-20">
      <div>
        <h2 className="text-xl font-semibold text-zinc-50 mb-6">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allProjects.map((project, idx) => (
            <div key={idx} className="bg-zinc-900/50 rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-zinc-700 transition-colors group flex flex-col">
              {/* Top Banner mock/Image */}
              <div className="h-40 bg-zinc-800 relative overflow-hidden flex-shrink-0">
                {'images' in project && (project as any).images.length > 0 ? (
                  <Image 
                    src={(project as any).images[0]} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <span className="text-zinc-600 font-mono text-sm">{project.title}</span>
                  </div>
                )}
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-zinc-100">{project.title}</h3>
                  <div className="flex gap-3 text-zinc-400">
                    {'github' in project && (project as any).github && (
                      <a href={(project as any).github} target="_blank" className="hover:text-zinc-50 transition-colors">
                        <FaGithub />
                      </a>
                    )}
                    {project.link && project.link !== "#" && (
                      <a href={project.link} target="_blank" className="hover:text-zinc-50 transition-colors">
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-zinc-400 line-clamp-3 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
