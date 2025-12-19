// Tech Icons using react-icons
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiDart,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiShadcnui,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiGithub,
  SiGooglecloud,
  SiVercel,
  SiOpenai,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbLetterC } from "react-icons/tb";

// Icon component type
type IconProps = {
  className?: string;
};

// Export individual icons with consistent styling
export const TechIcons = {
  // Programming Languages
  C: ({ className = "w-5 h-5" }: IconProps) => <TbLetterC className={className} />,
  CPlusPlus: ({ className = "w-5 h-5" }: IconProps) => <SiCplusplus className={className} />,
  Java: ({ className = "w-5 h-5" }: IconProps) => <FaJava className={className} />,
  JavaScript: ({ className = "w-5 h-5" }: IconProps) => <SiJavascript className={className} />,
  Python: ({ className = "w-5 h-5" }: IconProps) => <SiPython className={className} />,
  TypeScript: ({ className = "w-5 h-5" }: IconProps) => <SiTypescript className={className} />,
  Dart: ({ className = "w-5 h-5" }: IconProps) => <SiDart className={className} />,
  
  // Frontend Development
  HTML: ({ className = "w-5 h-5" }: IconProps) => <SiHtml5 className={className} />,
  CSS: ({ className = "w-5 h-5" }: IconProps) => <SiCss3 className={className} />,
  Bootstrap: ({ className = "w-5 h-5" }: IconProps) => <SiBootstrap className={className} />,
  TailwindCSS: ({ className = "w-5 h-5" }: IconProps) => <SiTailwindcss className={className} />,
  React: ({ className = "w-5 h-5" }: IconProps) => <SiReact className={className} />,
  NextJS: ({ className = "w-5 h-5" }: IconProps) => <SiNextdotjs className={className} />,
  Flutter: ({ className = "w-5 h-5" }: IconProps) => <SiFlutter className={className} />,
  ShadcnUI: ({ className = "w-5 h-5" }: IconProps) => <SiShadcnui className={className} />,
  
  // Backend Development
  NodeJS: ({ className = "w-5 h-5" }: IconProps) => <SiNodedotjs className={className} />,
  MongoDB: ({ className = "w-5 h-5" }: IconProps) => <SiMongodb className={className} />,
  MySQL: ({ className = "w-5 h-5" }: IconProps) => <SiMysql className={className} />,
  Firebase: ({ className = "w-5 h-5" }: IconProps) => <SiFirebase className={className} />,
  Postman: ({ className = "w-5 h-5" }: IconProps) => <SiPostman className={className} />,
  
  // Tools & Platforms
  GitHub: ({ className = "w-5 h-5" }: IconProps) => <SiGithub className={className} />,
  GoogleCloud: ({ className = "w-5 h-5" }: IconProps) => <SiGooglecloud className={className} />,
  Vercel: ({ className = "w-5 h-5" }: IconProps) => <SiVercel className={className} />,
  OpenAI: ({ className = "w-5 h-5" }: IconProps) => <SiOpenai className={className} />,
  Git: ({ className = "w-5 h-5" }: IconProps) => <SiGit className={className} />,
};

// Skill categories with icons for structured display
export const skillCategories = {
  "Programming Languages": [
    { name: "C/C++", icon: TechIcons.CPlusPlus },
    { name: "Java", icon: TechIcons.Java },
    { name: "JS", icon: TechIcons.JavaScript },
    { name: "Python", icon: TechIcons.Python },
    { name: "Typescript", icon: TechIcons.TypeScript },
    { name: "Dart", icon: TechIcons.Dart },
  ],
  "Frontend Development": [
    { name: "HTML", icon: TechIcons.HTML },
    { name: "CSS", icon: TechIcons.CSS },
    { name: "JS", icon: TechIcons.JavaScript },
    { name: "Bootstrap", icon: TechIcons.Bootstrap },
    { name: "Tailwind CSS", icon: TechIcons.TailwindCSS },
    { name: "React.js", icon: TechIcons.React },
    { name: "Next.js", icon: TechIcons.NextJS },
    { name: "Flutter", icon: TechIcons.Flutter },
    { name: "Shadcn UI", icon: TechIcons.ShadcnUI },
  ],
  "Backend Development": [
    { name: "Node.js", icon: TechIcons.NodeJS },
    { name: "MongoDB", icon: TechIcons.MongoDB },
    { name: "MySQL", icon: TechIcons.MySQL },
    { name: "Firebase", icon: TechIcons.Firebase },
    { name: "Postman", icon: TechIcons.Postman },
  ],
  "Tools & Platforms": [
    { name: "GitHub", icon: TechIcons.GitHub },
    { name: "Google Cloud", icon: TechIcons.GoogleCloud },
    { name: "Vercel", icon: TechIcons.Vercel },
    { name: "OpenAI", icon: TechIcons.OpenAI },
    { name: "Git", icon: TechIcons.Git },
  ],
};

export default TechIcons;
