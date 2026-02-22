"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ActivitySection from "@/components/sections/ActivitySection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import TerminalModal from "@/components/ui/TerminalModal";

export default function HomePage() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <main className="bg-black text-zinc-50 min-h-screen">
      <HeroSection onTerminalOpen={() => setIsTerminalOpen(true)} />
      <ActivitySection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </main>
  );
}
