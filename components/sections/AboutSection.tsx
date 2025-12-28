"use client";

import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiDart,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiGithub,
  SiGit,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiExpress,
  SiOpenai,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

interface Skill {
  [category: string]: string[];
}

interface AboutSectionProps {
  bio: {
    name: string;
    intro: string;
  };
  skills: Skill;
}

// Skill item component with icon and text
const SkillItem = ({ icon: Icon, name }: { icon: React.ComponentType<{ className?: string }>; name: string }) => (
  <span className="inline-flex items-center gap-1.5">
    <Icon className="w-4 h-4 opacity-70" />
    <span>{name}</span>
  </span>
);

// Languages skills with icons
const languageSkills = [
  { icon: FaJava, name: "Java" },
  { icon: SiPython, name: "Python" },
  { icon: SiCplusplus, name: "C/C++" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiDart, name: "Dart" },
];

// Frameworks skills with icons
const frameworkSkills = [
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiExpress, name: "Express.js" },
];

// Databases skills with icons
const databaseSkills = [
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiSupabase, name: "Supabase" },
];

// Developer Tools with icons
const devToolsSkills = [
  { icon: SiGit, name: "Git" },
  { icon: VscCode, name: "VS Code" },
  { icon: SiGithub, name: "GitHub" },
];

export default function AboutSection({ bio, skills }: AboutSectionProps) {
  return (
    <section id="about" className="py-32 border-t border-[#303030]">
      <div className="max-w-7xl mx-auto">
        <p className="mono text-sm text-white mb-12">... /About me ...</p>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative overflow-hidden">
          {/* Decorative curved paths and circles */}
          <svg className="absolute top-0 left-1/2 w-full h-full pointer-events-none opacity-50" xmlns="http://www.w3.org/2000/svg">
            {/* Circles */}
            <circle cx="80%" cy="30%" r="200" fill="none" stroke="rgba(200, 200, 200, 0.22)" strokeWidth="1" />
            <circle cx="20%" cy="70%" r="150" fill="none" stroke="rgba(200, 200, 200, 0.18)" strokeWidth="1" />
            <circle cx="60%" cy="60%" r="100" fill="none" stroke="rgba(200, 200, 200, 0.25)" strokeWidth="1" />
            
            {/* Paths */}
            <path
              d="M 0 200 Q 400 100 800 300"
              fill="none"
              stroke="rgba(200, 200, 200, 0.2)"
              strokeWidth="1"
            />
            <path
              d="M 800 100 Q 400 250 0 150"
              fill="none"
              stroke="rgba(200, 200, 200, 0.15)"
              strokeWidth="1"
            />
          </svg>

          {/* Skills Pills */}
          <div className="space-y-6 relative z-10">
            <p className="text-xl leading-relaxed mb-8">
              Hello! I'm <span className="font-bold">{bio.name}</span>, I'm a{" "}
              <span className="italic">software engineer</span>. More than 2 years experience.
            </p>

            {/* Languages Pill */}
            <div className="skill-pill">
              <h3 className="text-lg font-bold mb-3">Languages</h3>
              <div className="text-sm text-text-secondary mono flex flex-wrap gap-x-3 gap-y-1">
                {languageSkills.map((skill, index) => (
                  <span key={skill.name} className="inline-flex items-center">
                    <SkillItem icon={skill.icon} name={skill.name} />
                    {index < languageSkills.length - 1 && <span className="ml-3">/</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks Pill */}
            <div className="skill-pill inline-block">
              <h3 className="text-lg font-bold mb-3">Frameworks</h3>
              <div className="text-sm text-text-secondary mono flex flex-wrap gap-x-3 gap-y-1">
                {frameworkSkills.map((skill, index) => (
                  <span key={skill.name} className="inline-flex items-center">
                    <SkillItem icon={skill.icon} name={skill.name} />
                    {index < frameworkSkills.length - 1 && <span className="ml-3">/</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases Pill */}
            <div className="skill-pill">
              <h3 className="text-lg font-bold mb-3">Databases</h3>
              <div className="text-sm text-text-secondary mono flex flex-wrap gap-x-3 gap-y-1">
                {databaseSkills.map((skill, index) => (
                  <span key={skill.name} className="inline-flex items-center">
                    <SkillItem icon={skill.icon} name={skill.name} />
                    {index < databaseSkills.length - 1 && <span className="ml-3">/</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Developer Tools Pill */}
            <div className="skill-pill">
              <h3 className="text-lg font-bold mb-3">Developer Tools</h3>
              <div className="text-sm text-text-secondary mono flex flex-wrap gap-x-3 gap-y-1">
                {devToolsSkills.map((skill, index) => (
                  <span key={skill.name} className="inline-flex items-center">
                    <SkillItem icon={skill.icon} name={skill.name} />
                    {index < devToolsSkills.length - 1 && <span className="ml-3">/</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Icons Display */}
          <div className="relative z-10">
            <div className="w-full aspect-square p-12 flex items-center justify-center">
              {/* Scattered Technology Icons - Random positions & varied sizes */}
              <div className="relative w-full h-full">
                {/* React - Large, top area */}
                <div className="absolute top-[3%] left-[8%] opacity-70 hover:opacity-100 hover:scale-110 transition-all">
                  <SiReact className="w-20 h-20 text-[#f5f5f5]" />
                </div>

                {/* TypeScript - Medium, right side */}
                <div className="absolute top-[22%] right-[15%] opacity-60 hover:opacity-100 hover:scale-110 transition-all">
                  <SiTypescript className="w-14 h-14 text-[#f5f5f5]" />
                </div>

                {/* JavaScript - Small, scattered */}
                <div className="absolute top-[12%] left-[45%] opacity-50 hover:opacity-100 hover:scale-110 transition-all">
                  <SiJavascript className="w-8 h-8 text-[#f5f5f5]" />
                </div>

                {/* Java - Very Large */}
                <div className="absolute top-[55%] left-[5%] opacity-40 hover:opacity-100 hover:scale-110 transition-all">
                  <FaJava className="w-24 h-24 text-[#f5f5f5]" />
                </div>

                {/* Node - Medium, offset from center */}
                <div className="absolute top-[35%] left-[38%] opacity-60 hover:opacity-100 hover:scale-110 transition-all">
                  <SiNodedotjs className="w-16 h-16 text-[#f5f5f5]" />
                </div>

                {/* TailwindCSS - Small */}
                <div className="absolute top-[5%] right-[25%] opacity-50 hover:opacity-100 hover:scale-110 transition-all">
                  <SiTailwindcss className="w-7 h-7 text-[#f5f5f5]" />
                </div>

                {/* Firebase - Large, lower right */}
                <div className="absolute bottom-[12%] right-[8%] opacity-50 hover:opacity-100 hover:scale-110 transition-all">
                  <SiFirebase className="w-18 h-18 text-[#f5f5f5]" />
                </div>

                {/* Python - Medium */}
                <div className="absolute bottom-[35%] left-[28%] opacity-70 hover:opacity-100 hover:scale-110 transition-all">
                  <SiPython className="w-12 h-12 text-[#f5f5f5]" />
                </div>

                {/* MongoDB - Small */}
                <div className="absolute top-[60%] right-[35%] opacity-60 hover:opacity-100 hover:scale-110 transition-all">
                  <SiMongodb className="w-9 h-9 text-[#f5f5f5]" />
                </div>

                {/* Git - Tiny */}
                <div className="absolute top-[28%] left-[18%] opacity-40 hover:opacity-100 hover:scale-110 transition-all">
                  <SiGit className="w-6 h-6 text-[#f5f5f5]" />
                </div>

                {/* GitHub - Large, bottom left */}
                <div className="absolute bottom-[5%] left-[35%] opacity-60 hover:opacity-100 hover:scale-110 transition-all">
                  <SiGithub className="w-16 h-16 text-[#f5f5f5]" />
                </div>

                {/* Flutter - Medium */}
                <div className="absolute top-[48%] right-[12%] opacity-50 hover:opacity-100 hover:scale-110 transition-all">
                  <SiFlutter className="w-11 h-11 text-[#f5f5f5]" />
                </div>

                {/* MySQL - Tiny */}
                <div className="absolute bottom-[55%] left-[55%] opacity-40 hover:opacity-100 hover:scale-110 transition-all">
                  <SiMysql className="w-8 h-8 text-[#f5f5f5]" />
                </div>

                {/* C++ - Very Large, right side */}
                <div className="absolute top-[8%] right-[3%] opacity-35 hover:opacity-100 hover:scale-110 transition-all">
                  <SiCplusplus className="w-20 h-20 text-[#f5f5f5]" />
                </div>

                {/* Next.js - Medium */}
                <div className="absolute bottom-[25%] right-[28%] opacity-45 hover:opacity-100 hover:scale-110 transition-all">
                  <SiNextdotjs className="w-10 h-10 text-[#f5f5f5]" />
                </div>

                {/* OpenAI - Medium, bottom */}
                <div className="absolute bottom-[8%] right-[45%] opacity-50 hover:opacity-100 hover:scale-110 transition-all">
                  <SiOpenai className="w-10 h-10 text-[#f5f5f5]" />
                </div>

                {/* Dart - Tiny, scattered */}
                <div className="absolute top-[42%] left-[12%] opacity-35 hover:opacity-100 hover:scale-110 transition-all">
                  <SiDart className="w-6 h-6 text-[#f5f5f5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
