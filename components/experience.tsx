import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const experiences = [
  {
    company: "Intelli Edtech",
    role: "Full Stack Developer Intern",
    date: "Jan 2026 - Apr 2026",
    link: "https://www.intelliedtech.com/",
    logo: "/intelliedtech.png",
    color: "bg-orange-500",
    mode: "Remort",
    duration: "3 Months"
  },
  {
    company: "Azmth",
    link: "https://azmth.in/",
    role: "Frontend Web Developer Intern",
    date: "Jun 2024 - May 2025",
    logo: "/azmth.png",
    color: "bg-blue-500",
    mode: "Hybrid",
    duration: "1 Year"
  },
];

export default function Experience() {
  return (
    <section className="py-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50" id="experience">
      <h2 className="text-[17px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">Experience</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex justify-between items-start group">
            <div className="flex gap-4">
              {/* Logo Box - With image */}
              <Image src={exp.logo} alt={exp.company} width={40} height={40} className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0  dark:border-neutral-800  shadow-sm relative overflow-hidden"/>
              
              <div className="flex flex-col">
                <Link href={exp.link} className="text-[14px] font-medium text-neutral-900 dark:text-neutral-100 font-bold hover:underline" target="_blank" rel="noopener noreferrer ">{exp.company}</Link>
                <p className="text-[12px] text-neutral-500 dark:text-neutral-400 mt-0.5">{exp.role} • {exp.mode} - {exp.duration}</p>
              </div>
            </div>
            
            <div className="text-[12px] text-neutral-400 dark:text-neutral-500 font-medium whitespace-nowrap mt-1">
              {exp.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
