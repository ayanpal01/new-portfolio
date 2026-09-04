import * as React from "react";
import { Mail, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const links = [
  { name: "GitHub", href: "https://github.com/ayanpal01", icon: <FaGithub className="w-3.5 h-3.5" />, hoverClass: "hover:bg-[#24292e] hover:text-white dark:hover:bg-[#24292e] dark:hover:text-white hover:border-[#24292e]" },
  { name: "X (Twitter)", href: "https://x.com/ayanpal01", icon: <FaXTwitter className="w-3.5 h-3.5" />, hoverClass: "hover:bg-black hover:text-white dark:hover:bg-neutral-200 dark:hover:text-black hover:border-black dark:hover:border-neutral-200" },
  { name: "LinkedIn", href: "https://linkedin.com/in/ayanpal01", icon: <FaLinkedin className="w-3.5 h-3.5" />, hoverClass: "hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] dark:hover:text-white hover:border-[#0A66C2]" },
  { name: "Instagram", href: "https://www.instagram.com/ayanpal.exe/", icon: <FaInstagram className="w-3.5 h-3.5" />, hoverClass: "hover:bg-[#E1306C] hover:text-white dark:hover:bg-[#E1306C] dark:hover:text-white hover:border-[#E1306C]" },
  { name: "Email", href: "mailto:work.ayanpal@gmail.com", icon: <Mail className="w-3.5 h-3.5" />, hoverClass: "hover:bg-[#EA4335] hover:text-white dark:hover:bg-[#EA4335] dark:hover:text-white hover:border-[#EA4335]" },
  { name: "LeetCode", href: "https://leetcode.com/ayanpal01", icon: <Code2 className="w-3.5 h-3.5" />, hoverClass: "hover:bg-[#FFA116] hover:text-white dark:hover:bg-[#FFA116] dark:hover:text-white hover:border-[#FFA116]" },
];

export default function Connect() {
  return (
    <section className="py-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50" id="connect">
      <h2 className="text-[17px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">Connect</h2>
      <ul className="flex flex-wrap gap-2.5">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-black dark:bg-white transition-colors text-[12px] font-medium text-white dark:text-black ${link.hoverClass}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
