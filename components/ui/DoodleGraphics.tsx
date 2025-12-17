"use client";

import { motion } from "framer-motion";

export default function DoodleGraphics() {
  return (
    <>
      {/* Yellow curved line - left side */}
      <motion.svg
        className="absolute left-0 top-1/3 w-32 h-32 md:w-48 md:h-48"
        viewBox="0 0 200 200"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <path
          d="M 20 100 Q 60 50, 100 80 T 180 100"
          stroke="#F4D03F"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Yellow curved line - right side */}
      <motion.svg
        className="absolute right-0 bottom-1/4 w-32 h-32 md:w-48 md:h-48"
        viewBox="0 0 200 200"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
      >
        <path
          d="M 20 50 Q 80 100, 120 60 T 180 120"
          stroke="#F4D03F"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Abstract circle decoration */}
      <motion.div
        className="absolute top-20 right-1/4 w-2 h-2 bg-accent-pink rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 left-1/3 w-2 h-2 bg-accent-blue rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
    </>
  );
}
