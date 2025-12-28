"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/constants";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlutter,
  SiMongodb,
  SiFirebase,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillIcons: Record<string, React.ElementType> = {
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Flutter: SiFlutter,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Git: SiGit,
};

const categoryColors: Record<string, string> = {
  Languages: "from-blue-500/20 to-purple-500/20 border-blue-500/30",
  Frameworks: "from-green-500/20 to-teal-500/20 border-green-500/30",
  "Developer Tools": "from-orange-500/20 to-red-500/20 border-orange-500/30",
  Databases: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
  "Gen AI": "from-pink-500/20 to-rose-500/20 border-pink-500/30",
  Architecture: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
  Concepts: "from-violet-500/20 to-indigo-500/20 border-violet-500/30",
};

export default function SkillsSection() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4">
            Skills & <span className="text-accent-yellow">Expertise</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-lg max-w-2xl mx-auto px-4">
            Technologies and concepts I work with to build scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative p-6 rounded-3xl border bg-gradient-to-br ${
                categoryColors[category] || "from-gray-500/20 to-gray-600/20 border-gray-500/30"
              } overflow-hidden group`}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category Title */}
              <h3 className="text-xl font-bold mb-4 relative z-10">{category}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {skillList.map((skill, i) => {
                  const Icon = skillIcons[skill];
                  return (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                    >
                      {Icon && <Icon className="w-3.5 h-3.5" />}
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
