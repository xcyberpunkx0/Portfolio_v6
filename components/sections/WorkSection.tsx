"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/constants";

export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative bg-[#0a0a0a]">
      {/* Section Header */}
      <div className="sticky top-0 z-10 bg-[#0a0a0a]/90 backdrop-blur-sm py-4 md:py-8 px-4 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">Experience</h2>
          <div className="text-right">
            <p className="text-text-secondary text-sm">Total Experience</p>
            <p className="text-2xl md:text-2xl font-bold text-accent-yellow">2+ Years</p>
          </div>
        </div>
      </div>

      {/* Experience Items */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className="py-16 border-b border-border last:border-0"
    >
      <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
        {/* Left: Company Info */}
        <motion.div style={{ x }} className="md:sticky md:top-32">
          <p className="text-accent-yellow font-mono text-sm mb-2">
            {experience.duration}
          </p>
          <h3 className="text-3xl font-bold mb-2">{experience.company}</h3>
          <p className="text-xl text-text-secondary">{experience.role}</p>
          {experience.location && (
            <p className="text-text-muted mt-2 text-sm">{experience.location}</p>
          )}
        </motion.div>

        {/* Right: Description */}
        <motion.div style={{ x: useTransform(x, (v) => -v) }}>
          <ul className="space-y-4">
            {experience.description.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-4 text-text-secondary"
              >
                <span className="text-accent-pink mt-1.5 flex-shrink-0">▸</span>
                <span className="leading-relaxed">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
