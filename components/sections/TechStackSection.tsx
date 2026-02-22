"use client";

import { motion } from "framer-motion";

export default function TechStackSection() {
  const techs = [
    { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "Python", iconClass: "devicon-python-plain colored" },
    { name: "Java", iconClass: "devicon-java-plain colored" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
    { name: "React", iconClass: "devicon-react-original colored" },
    { name: "Next.js", iconClass: "devicon-nextjs-original-wordmark bg-white rounded-full p-1" }, // Matches circular N
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
    { name: "Express", iconClass: "devicon-express-original text-white" },
    { name: "Firebase", iconClass: "devicon-firebase-plain colored" },
    { name: "Git", iconClass: "devicon-git-plain colored" },
    { name: "GitHub", iconClass: "devicon-github-original bg-white text-black rounded-full" }, // GitHub circular white
    { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
    { name: "MySQL", iconClass: "devicon-mysql-plain-wordmark colored" }, // Or just plain, dolphin
    { name: "Figma", iconClass: "devicon-figma-plain colored" },
    { name: "Postman", iconClass: "devicon-postman-plain colored" }, // Circular orange
    { name: "Nginx", iconClass: "devicon-nginx-original colored" },
    { name: "Bun", iconClass: "devicon-bun-plain colored" },
    { name: "Prisma", iconClass: "devicon-prisma-original text-white" },
    { name: "React Router", iconClass: "devicon-reactrouter-plain colored" }, // For the red dots icon
    { name: "GraphQL", iconClass: "devicon-graphql-plain colored" }, // Purple circle icon
    { name: "Supabase", iconClass: "devicon-supabase-plain colored" }, // Green circle icon
  ];

  // Map exactly to what's in the image:
  // Row 1: TS, JS, Python, Java, Node (hex), React, Next(circle), Tailwind, Express(ex), Firebase, Git, Github(circle white), Mongo(leaf), MySQL(dolphin), Figma
  // Row 2: Postman(circle), Node(N green hexagon)?, Bun (bao?), Prisma, React Router(red dots), GraphQL(purple), Supabase(circle lightning)

  const accurateTechs = [
    { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "Python", iconClass: "devicon-python-plain colored" },
    { name: "Java", iconClass: "devicon-java-plain colored" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored" }, // green hex
    { name: "React", iconClass: "devicon-react-original colored" },
    { name: "Next.js", iconClass: "devicon-nextjs-plain bg-white text-black rounded-full overflow-hidden leading-none flex items-center justify-center p-[2px]" },
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
    { name: "Express", iconClass: "devicon-express-original text-zinc-300" },
    { name: "Firebase", iconClass: "devicon-firebase-plain colored" },
    { name: "Git", iconClass: "devicon-git-plain colored" },
    { name: "GitHub", iconClass: "devicon-github-original bg-white text-black rounded-full leading-none flex items-center justify-center text-[1.1em]" }, 
    { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
    { name: "MySQL", iconClass: "devicon-mysql-plain colored" }, // dolphin
    { name: "Figma", iconClass: "devicon-figma-plain colored" },
    
    // Row 2
    { name: "Postman", iconClass: "devicon-postman-plain colored" },
    { name: "Nginx", iconClass: "devicon-nginx-original colored" },
    { name: "Bun", iconClass: "devicon-bun-plain colored" },
    { name: "Prisma", iconClass: "devicon-prisma-original text-zinc-300" },
    { name: "React Router", iconClass: "devicon-reactrouter-plain colored" },
    { name: "GraphQL", iconClass: "devicon-graphql-plain colored" },
    { name: "Supabase", iconClass: "devicon-supabase-plain colored" },
  ];

  return (
    <section className="max-w-3xl mx-auto px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xs text-zinc-600 uppercase tracking-widest mb-4">Tech Stack</h2>
        
        <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 items-center">
          {accurateTechs.map((tech) => (
            <div
              key={tech.name}
              className="w-5.5 h-5.5 sm:w-9 sm:h-9 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer flex items-center justify-center p-1"
              title={tech.name}
            >
              <i className={`${tech.iconClass} text-[24px] sm:text-[36px] opacity-90 hover:opacity-100 drop-shadow-sm`}></i>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
