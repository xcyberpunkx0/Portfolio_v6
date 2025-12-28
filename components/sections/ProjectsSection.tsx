"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { workProjects } from "@/lib/constants";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-16 md:py-32 px-4 md:px-8 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Featured <span className="text-accent-yellow">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Some of my recent work that showcases my skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-12">
          {workProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof workProjects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className={`grid md:grid-cols-2 gap-8 items-center ${
        isEven ? "" : "md:direction-rtl"
      }`}
    >
      {/* Project Image/Preview */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 ${
          isEven ? "" : "md:order-2"
        }`}
      >
        {project.images && project.images.length > 0 ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent-yellow/20 to-accent-pink/20 flex items-center justify-center">
            <span className="text-6xl font-bold opacity-20">{project.title[0]}</span>
          </div>
        )}

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
        >
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white text-black hover:scale-110 transition-transform"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </a>
          )}
        </motion.div>
      </motion.div>

      {/* Project Info */}
      <div className={`${isEven ? "" : "md:order-1 md:text-right"}`}>
        <p className="text-accent-yellow font-mono text-sm mb-2">{project.date}</p>
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-text-secondary mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 ${isEven ? "" : "md:justify-end"}`}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.link && project.link !== "#" && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-accent-yellow text-black font-semibold hover:shadow-lg hover:shadow-accent-yellow/30 transition-shadow`}
          >
            View Project <FaExternalLinkAlt className="w-3.5 h-3.5" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
