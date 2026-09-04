import * as React from "react";
import { MonitorSmartphone, Server } from "lucide-react";
import { 
  SiTypescript, 
  SiJavascript, 
  SiCplusplus, 
  SiC,
  SiPython, 
  SiMysql, 
  SiHtml5, 
  SiCss, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap,
  SiNodedotjs, 
  SiExpress, 
  SiJsonwebtokens,
  SiSocketdotio,
  SiMongodb, 
  SiMongoose,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

const skills = [
  { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-yellow-400" }, 
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" }, 
  { name: "Python", icon: SiPython, color: "text-yellow-500" }, 
  { name: "C", icon: SiC, color: "text-blue-600" }, 
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" }, 
  
  { name: "React.js", icon: SiReact, color: "text-cyan-400" }, 
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" }, 
  { name: "HTML5", icon: SiHtml5, color: "text-orange-600" }, 
  { name: "CSS3", icon: SiCss, color: "text-blue-500" }, 
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" }, 
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" }, 
  { name: "Responsive Design", icon: MonitorSmartphone, color: "text-neutral-500" }, 
  
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" }, 
  { name: "Express.js", icon: SiExpress, color: "text-gray-500" }, 
  { name: "REST API", icon: Server, color: "text-blue-500" }, 
  { name: "JWT Auth", icon: SiJsonwebtokens, color: "text-pink-500" }, 
  { name: "Socket.IO", icon: SiSocketdotio, color: "text-zinc-800 dark:text-zinc-400" }, 
  
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" }, 
  { name: "MySQL", icon: SiMysql, color: "text-orange-500" }, 
  { name: "Mongoose ODM", icon: SiMongoose, color: "text-red-700" }, 
  
  { name: "AWS S3", icon: FaAws, color: "text-orange-500" }, 
  { name: "Git", icon: SiGit, color: "text-orange-500" }, 
  { name: "GitHub", icon: SiGithub, color: "text-black dark:text-white" }, 
  { name: "VS Code", icon: VscVscode, color: "text-blue-500" }, 
  { name: "Postman", icon: SiPostman, color: "text-orange-500" }, 
  { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" }, 
];

export default function Skills() {
  return (
    <section className="py-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50" id="skills">
      <h2 className="text-[17px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <span 
              key={skill.name}
              className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-700 dark:text-neutral-300 rounded-md border border-neutral-200 dark:border-neutral-800 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <Icon className={`w-3.5 h-3.5 ${skill.color}`} />
              {skill.name}
            </span>
          );
        })}
      </div>
    </section>
  );
}
