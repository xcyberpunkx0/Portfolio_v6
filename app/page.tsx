"use client";

import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="bg-[#121212] text-white overflow-x-hidden">
      {/* Curved viewport frame */}
      <div className="viewport-frame" />

      {/* Hero Section - Full screen with parallax */}
      <HeroSection />

      {/* Work Experience - Sticky scroll reveal */}
      <WorkSection />

      {/* Skills Section - Animated grid */}
      <SkillsSection />

      {/* Projects - Scroll-triggered cards */}
      <ProjectsSection />

      {/* Education & Achievements */}
      <EducationSection />

      {/* Contact Section */}
      <section className="py-32 px-8 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Let's <span className="text-accent-yellow">Connect</span>
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
          <motion.a
            href={`mailto:${socialLinks.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent-yellow text-black font-bold text-lg hover:shadow-lg hover:shadow-accent-yellow/30 transition-shadow"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 px-8 border-t border-border bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2024 Aditya Gupta. Built with Next.js
          </p>
          <div className="flex gap-6 text-text-secondary text-sm">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${socialLinks.email}`} className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
