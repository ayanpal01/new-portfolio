import * as React from "react";

const achievements = [
  {
    title: "500+ Problems Solved",
    context: "LeetCode",
    date: "Present",
    description: "Consistently practicing Data Structures and Algorithms and competitive problem solving.",
  },
  {
    title: "Hackathon '26",
    context: "Odoo X Adamas University",
    date: "Aug 2026",
    description: "Particpate 24 hours long Odoo X Adamas University Hackathon '26",
  },
  {
    title: "TCS ION NQT exam",
    context: "TCS ION",
    date: "July 2026",
    description: "TCS ION NQT exam I got 61.52%",
  },
  {
    title: "8.91 CGPA — BCA",
    context: "Adamas University",
    date: "May 2025",
    description: "Completed Bachelor of Computer Applications with distinction.",
  }
];

export default function Achievements() {
  return (
    <section className="py-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50" id="achievements">
      <h2 className="text-[17px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">Achievements</h2>
      <div className="flex flex-col gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                <h3 className="text-[14px] font-medium text-neutral-900 dark:text-neutral-100">
                  {achievement.title} <span className="text-neutral-400 dark:text-neutral-500 font-normal ml-1">- {achievement.context}</span>
                </h3>
              </div>
              <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500 font-mono tracking-tighter">
                {achievement.date}
              </span>
            </div>
            <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed ml-3 mt-0.5">
              {achievement.description}
            </p>
            <hr className="mt-2 dark:border-neutral-800 border-neutral-200 mx-2"/>
          </div>
        ))}
      </div>
    </section>
  );
}
