import * as React from "react";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="py-12 px-6" id="contact">
      <div className="flex flex-col items-start">
        <h2 className="text-[20px] font-medium mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">
          Let&apos;s build something useful.
        </h2>
        <p className="text-[14px] text-neutral-500 dark:text-neutral-400 mb-6 max-w-lg leading-relaxed">
          I&apos;m always interested in interesting products, development opportunities, collaborations and challenging technical problems.
        </p>
        <a 
          href="https://x.com/ayanpal01" 
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-[13px] font-medium hover:opacity-90 transition-opacity"
        >
          <FaXTwitter className="w-3.5 h-3.5" />
          DM me on X
        </a>
      </div>
    </section>
  );
}
