import * as React from "react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Adamas University, Kolkata",
    year: "Aug 2025 - Present",
    cgpa: "8.66 / 10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Adamas University, Kolkata",
    year: "Aug 2022 - June 2025",
    cgpa: "8.91 / 10",
  },
];

export default function Education() {
  return (
    <section className="py-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50" id="education">
      <h2 className="text-[17px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">Education</h2>
      <div className="flex flex-col gap-5">
        {education.map((edu, index) => (
          <div key={index} className="flex justify-between items-start group">
            <div className="flex flex-col">
              <h3 className="text-[14px] font-medium text-neutral-900 dark:text-neutral-100">{edu.degree}</h3>
              <p className="text-[12px] text-neutral-500 dark:text-neutral-400 mt-0.5">{edu.institution}</p>
            </div>
            <div className="flex flex-col items-end text-[12px] font-medium">
              <span className="text-neutral-400 dark:text-neutral-500">{edu.year}</span>
              <span className="text-neutral-500 dark:text-neutral-400 mt-0.5 bg-neutral-100 dark:bg-neutral-800 px-1.5 rounded text-[10px]">CGPA {edu.cgpa}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
