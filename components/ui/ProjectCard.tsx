"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative w-full h-64 md:h-80 bg-gray-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-300 text-sm">{description}</p>
            {tags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full bg-accent-yellow/20 text-accent-yellow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
