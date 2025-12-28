"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { experiences, education, skills, socialLinks, bio, achievements } from "@/lib/constants";
import { FaTrophy, FaCertificate, FaCode } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ResumePage() {
  // Split skills into technical and personal
  const technicalSkills = [
    ...skills["Languages"],
    ...skills["Frameworks"],
    ...skills["Databases"],
    ...skills["Gen AI"],
  ];

  const architectureSkills = [
    ...skills["Architecture"],
    ...skills["Concepts"],
  ];

  const personalSkills = [
    "Problem Solving",
    "Team Collaboration", 
    "Continuous Learning",
    "Attention to Detail",
    "Time Management",
    "Critical Thinking",
  ];

  const tools = skills["Developer Tools"] || [];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center px-6 overflow-hidden mb-20">
        {/* Yellow Doodle Decoration */}
        <motion.svg
          className="absolute left-8 md:left-16 top-1/4 w-24 h-32 md:w-32 md:h-48"
          viewBox="0 0 100 150"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <path
            d="M 50 20 Q 70 60, 50 100 Q 30 140, 50 180"
            stroke="#F4D03F"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Shaping{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-background px-4">Experiences</span>
                <span className="absolute inset-0 bg-accent-pink rounded-2xl transform -skew-y-1"></span>
              </span>
              <br />& Building Connections
            </h1>
          </motion.div>

          {/* Right: Bio Text and Download Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {bio.intro}
            </p>
            
            {/* Download Button with Doodle */}
            <div className="relative inline-block">
              <a href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                  <FaDownload />
                  Download Resume
                </Button>
              </a>
              {/* Small doodle arrow */}
              <motion.svg
                className="absolute -right-12 -top-8 w-16 h-16"
                viewBox="0 0 50 50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <path
                  d="M 10 40 Q 20 20, 35 15 L 30 10 M 35 15 L 30 20"
                  stroke="#F4D03F"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <AnimatedSection>
          <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
            {/* Left: Badge */}
            <div className="sticky top-32">
              <span className="inline-block bg-[#BAE6E6]/15 border-2 border-[#BAE6E6] px-6 py-2 rounded-full text-[#BAE6E6] font-bold text-sm uppercase tracking-wider">
                Experiences
              </span>
            </div>

            {/* Right: Experience Card */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 md:p-12 border border-gray-700/50">
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className={`${index !== 0 ? 'pt-12 border-t border-gray-700/30' : ''}`}>
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <p className="text-base text-gray-400 mb-3">{exp.company}{exp.location && ` • ${exp.location}`}</p>
                      <span className="inline-block text-sm bg-[#BAE6E6]/10 text-[#BAE6E6] px-4 py-1.5 rounded-full border border-[#BAE6E6]/30">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="space-y-2 text-gray-300 leading-relaxed">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-[#BAE6E6] mt-1.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <AnimatedSection>
          <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
            {/* Left: Badge */}
            <div className="sticky top-32">
              <span className="inline-block bg-[#BAE6E6]/15 border-2 border-[#BAE6E6] px-6 py-2 rounded-full text-[#BAE6E6] font-bold text-sm uppercase tracking-wider">
                Education
              </span>
            </div>

            {/* Right: Education Card */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 md:p-12 border border-gray-700/50">
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className={`${index !== 0 ? 'pt-12 border-t border-gray-700/30' : ''}`}>
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.institution}{edu.location && `, ${edu.location}`}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="inline-block text-sm bg-[#F0B4CB]/10 text-[#F0B4CB] px-4 py-1.5 rounded-full border border-[#F0B4CB]/30">
                          {edu.year}
                        </span>
                        {edu.cgpa && (
                          <span className="inline-block text-sm bg-[#F4D03F]/10 text-[#F4D03F] px-4 py-1.5 rounded-full border border-[#F4D03F]/30">
                            CGPA: {edu.cgpa}
                          </span>
                        )}
                      </div>
                    </div>
                    {edu.subjects && (
                      <p className="text-sm text-gray-400 leading-relaxed mt-4">{edu.subjects}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Skills Section - Two Cards with Grid Layout */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <AnimatedSection>
          <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
            {/* Left: Badge */}
            <div className="sticky top-32">
              <span className="inline-block bg-[#BAE6E6]/15 border-2 border-[#BAE6E6] px-6 py-2 rounded-full text-[#BAE6E6] font-bold text-sm uppercase tracking-wider">
                Skills
              </span>
            </div>

            {/* Right: Three Skills Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Technical Skills Card */}
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 border border-gray-700/50 overflow-hidden min-h-[400px]">
                <div className="mb-6">
                  <span className="inline-block bg-[#BAE6E6]/15 border-2 border-[#BAE6E6] px-5 py-1.5 rounded-full text-[#BAE6E6] font-bold text-xs uppercase tracking-wider">
                    Technical Skills
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {technicalSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-4 py-2 bg-transparent rounded-full text-gray-300 border border-gray-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Pink Blob Decoration */}
                <svg
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 opacity-40"
                  viewBox="0 0 200 100"
                >
                  <path
                    d="M 20 80 Q 50 40, 100 60 Q 150 80, 180 50 L 200 100 L 0 100 Z"
                    fill="#E91E8C"
                  />
                </svg>
              </div>

              {/* Architecture & Concepts Card */}
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 border border-gray-700/50 overflow-hidden min-h-[400px]">
                <div className="mb-6">
                  <span className="inline-block bg-[#F4D03F]/15 border-2 border-[#F4D03F] px-5 py-1.5 rounded-full text-[#F4D03F] font-bold text-xs uppercase tracking-wider">
                    Architecture & Concepts
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {architectureSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-4 py-2 bg-transparent rounded-full text-gray-300 border border-gray-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Yellow Blob Decoration */}
                <svg
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 opacity-40"
                  viewBox="0 0 200 100"
                >
                  <path
                    d="M 20 80 Q 50 40, 100 60 Q 150 80, 180 50 L 200 100 L 0 100 Z"
                    fill="#F4D03F"
                  />
                </svg>
              </div>

              {/* Personal Skills Card */}
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 border border-gray-700/50 overflow-hidden min-h-[400px]">
                <div className="mb-6">
                  <span className="inline-block bg-[#BAE6E6]/15 border-2 border-[#BAE6E6] px-5 py-1.5 rounded-full text-[#BAE6E6] font-bold text-xs uppercase tracking-wider">
                    Personal Skills
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {personalSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-4 py-2 bg-transparent rounded-full text-gray-300 border border-gray-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Pink Blob Decoration */}
                <svg
                  className="absolute bottom-0 right-0 w-48 h-48 opacity-40"
                  viewBox="0 0 150 150"
                >
                  <circle cx="100" cy="100" r="30" fill="#E91E8C" />
                  <circle cx="80" cy="90" r="35" fill="#E91E8C" />
                  <circle cx="110" cy="80" r="25" fill="#E91E8C" />
                  <circle cx="90" cy="110" r="28" fill="#E91E8C" />
                </svg>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Tools Section */}
      <section className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
            {/* Left: Badge */}
            <div className="sticky top-32">
              <span className="inline-block bg-[#BAE6E6]/15 border-2 border-[#BAE6E6] px-6 py-2 rounded-full text-[#BAE6E6] font-bold text-sm uppercase tracking-wider">
                Tools
              </span>
            </div>

            {/* Right: Tools Card */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 md:p-12 border border-gray-700/50">
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-2 bg-transparent rounded-full text-gray-300 border border-gray-600/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Achievements & Certifications Section */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <AnimatedSection>
          <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
            {/* Left: Badge */}
            <div className="sticky top-32">
              <span className="inline-block bg-[#F4D03F]/15 border-2 border-[#F4D03F] px-6 py-2 rounded-full text-[#F4D03F] font-bold text-sm uppercase tracking-wider">
                Achievements
              </span>
            </div>

            {/* Right: Achievements Card */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 md:p-12 border border-gray-700/50">
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex gap-4 ${index !== 0 ? 'pt-8 border-t border-gray-700/30' : ''}`}>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#F4D03F]/10 flex items-center justify-center">
                        {achievement.title.includes('Certification') ? (
                          <FaCertificate className="w-5 h-5 text-[#F4D03F]" />
                        ) : achievement.title.includes('Contributor') ? (
                          <FaCode className="w-5 h-5 text-[#F4D03F]" />
                        ) : (
                          <FaTrophy className="w-5 h-5 text-[#F4D03F]" />
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{achievement.title}</h3>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                      {achievement.issuer && (
                        <span className="inline-block mt-2 text-xs text-[#BAE6E6]">{achievement.issuer}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
