"use client";

import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import { workProjects, bio, skills } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Curved viewport frame */}
      <div className="viewport-frame"></div>

      <div className="min-h-screen bg-[#121212] text-white px-20">
        {/* Hero Section */}
        <HeroSection bio={bio} />

        {/* Work Experience Section */}
        <WorkSection />

        {/* About Section */}
        <AboutSection bio={bio} skills={skills} />

        {/* Projects Section - Full page artistic showcase */}
        <ProjectsSection projects={workProjects} />

        {/* Contact Section */}
        <section className="py-32 border-t border-[#303030]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">
              Let's Work Together
            </h2>
            <p className="text-xl text-text-secondary mb-12">
              Have a project in mind? Let's create something amazing!
            </p>
            <a href="mailto:adityagup1a@gmail.com">
              <button className="btn-white">
                Get In Touch
              </button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
