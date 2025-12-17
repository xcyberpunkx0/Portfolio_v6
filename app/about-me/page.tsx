"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { bio } from "@/lib/constants";
import { motion } from "framer-motion";

export default function AboutMePage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">
            About <span className="text-accent-yellow">Me</span>
          </h1>
        </AnimatedSection>

        {/* Introduction */}
        <AnimatedSection delay={0.2}>
          <div className="bg-gradient-to-br from-accent-yellow/10 to-accent-pink/10 rounded-3xl p-8 md:p-12 border border-accent-yellow/20 mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Hi, I'm <span className="text-accent-yellow">{bio.name}</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {bio.intro}
            </p>
          </div>
        </AnimatedSection>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={0.3}>
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 h-full"
              whileHover={{ scale: 1.02, borderColor: "#F4D03F" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-accent-yellow/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent-yellow">
                Clean Architecture
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in building scalable systems with clean architecture principles, 
                ensuring maintainability and long-term sustainability.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 h-full"
              whileHover={{ scale: 1.02, borderColor: "#E91E8C" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-accent-pink/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent-pink">
                User-Centric Design
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every application I build focuses on delivering seamless digital experiences 
                that prioritize usability and performance.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 h-full"
              whileHover={{ scale: 1.02, borderColor: "#7DD3FC" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent-blue">
                Performance Optimization
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about optimizing applications for speed and efficiency, 
                ensuring reliable performance across all platforms.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 h-full"
              whileHover={{ scale: 1.02, borderColor: "#F4D03F" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-accent-yellow/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent-yellow">
                Continuous Learning
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always exploring new technologies and methodologies to stay ahead 
                in the ever-evolving world of software development.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Interests */}
        <AnimatedSection delay={0.7}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Beyond Code</h3>
            <p className="text-lg text-gray-400">
              When I'm not coding, you'll find me exploring new technologies, gaming, 
              or spending quality time with my family.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
