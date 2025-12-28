"use client";

import { motion } from "framer-motion";
import { education, achievements } from "@/lib/constants";
import { FaGraduationCap, FaTrophy, FaCertificate, FaCode } from "react-icons/fa";

export default function EducationSection() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-8 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
            Education
          </h2>

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-accent-yellow"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-0 w-7 h-7 rounded-full bg-accent-yellow flex items-center justify-center">
                  <FaGraduationCap className="w-3.5 h-3.5 text-black" />
                </div>

                <div className="pb-12">
                  <p className="text-accent-yellow font-mono text-sm mb-2">
                    {edu.year}
                  </p>
                  <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-text-secondary mb-2">
                    {edu.institution}
                    {edu.location && `, ${edu.location}`}
                  </p>
                  {edu.cgpa && (
                    <span className="inline-block px-3 py-1 rounded-full bg-accent-yellow/10 text-accent-yellow text-sm font-mono border border-accent-yellow/30">
                      CGPA: {edu.cgpa}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
            <span className="text-accent-pink">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.title.includes("Certification")
                ? FaCertificate
                : achievement.title.includes("Contributor")
                ? FaCode
                : FaTrophy;

              const CardContent = (
                <>
                  <div className="w-12 h-12 rounded-2xl bg-accent-pink/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-accent-pink" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                  <p className="text-text-secondary text-sm">
                    {achievement.description}
                  </p>
                  {achievement.issuer && (
                    <p className="text-accent-pink text-xs mt-3 font-mono">
                      {achievement.issuer}
                    </p>
                  )}
                  {achievement.link && achievement.link !== "#" && (
                    <span className="inline-block mt-4 text-xs text-accent-pink/70 group-hover:text-accent-pink transition-colors">
                      View Certificate →
                    </span>
                  )}
                </>
              );

              return achievement.link && achievement.link !== "#" ? (
                <motion.a
                  key={index}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="p-6 rounded-3xl border border-accent-pink/30 bg-gradient-to-br from-accent-pink/10 to-transparent hover:border-accent-pink/50 transition-all group cursor-pointer"
                >
                  {CardContent}
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="p-6 rounded-3xl border border-accent-pink/30 bg-gradient-to-br from-accent-pink/10 to-transparent hover:border-accent-pink/50 transition-all group"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
