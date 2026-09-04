import * as React from "react";

export default function About() {
  return (
    <section className="py-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50" id="about">
      <h2 className="text-[17px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">About</h2>
      <ul className="flex flex-col gap-4 text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed list-disc list-outside ml-4 marker:text-neutral-300 dark:marker:text-neutral-700">
        <li className="pl-2">
          I&apos;m Ayan - an MCA student and Full Stack Developer with a passion for building scalable, real-world web applications and solving complex problems.
        </li>
        <li className="pl-2">
          I build products end to end with <span className="text-neutral-900 dark:text-neutral-200 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4">React, Next.js, and TypeScript</span> - focusing on responsive, accessible, and fast user interfaces.
        </li>
        <li className="pl-2">
          On the backend I work with <span className="text-neutral-900 dark:text-neutral-200 underline decoration-neutral-300 dark:decoration-neutral-700 underline-offset-4">Express, Node.js, and MongoDB</span>, with a strong emphasis on integrating AI-powered features (like GROQ) into robust architectures.
        </li>
      </ul>
    </section>
  );
}
