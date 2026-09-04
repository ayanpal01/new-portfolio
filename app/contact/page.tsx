"use client";
import * as React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Explicitly inject the API key directly into the FormData to ensure it's never empty.
    // If it's empty, Web3Forms returns a 400 without CORS headers, which causes 'Failed to fetch'.
    const envKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    formData.append("access_key", envKey || "e8ab6a9e-2fd9-462c-a966-f458016a98e4");
    formData.append("subject", "New message from portfolio!");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        }
      });
      const data = await response.json();
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms API Error:", data);
        if (data.message && data.message.includes("Access Key")) {
          setStatus("key_missing");
        } else {
          setStatus("error");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <div className="pt-24 pb-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50">
        <h1 className="text-[22px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
          Let&apos;s talk about what you&apos;re building
        </h1>
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400 font-medium">
          Roles, freelance work, or a question about something I&apos;ve built - all welcome.
        </p>
      </div>

      {/* Fastest Routes */}
      <section className="py-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50">
        <h2 className="text-[15px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">Fastest routes</h2>
        <div className="flex flex-col gap-4">
          <a 
            href="mailto:work.ayanpal@gmail.com"
            className="flex justify-between items-center group"
          >
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">Email me directly</span>
              <span className="text-[12px] text-neutral-500 dark:text-neutral-400 mt-0.5">work.ayanpal@gmail.com</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
          </a>
          
          <a 
            href="https://x.com/ayanpal01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center group"
          >
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">DM me on X</span>
              <span className="text-[12px] text-neutral-500 dark:text-neutral-400 mt-0.5">@ayanpal01</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 px-6">
        <h2 className="text-[15px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">Send a message</h2>
        
        {status === "success" ? (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium bg-green-50 dark:bg-green-900/20 px-4 py-3 rounded-xl border border-green-200 dark:border-green-900/30 w-full">
            <CheckCircle2 className="w-4 h-4" />
            Message sent successfully! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[12px] font-medium text-neutral-700 dark:text-neutral-300">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-[13px] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-shadow"
                placeholder="Your name"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[12px] font-medium text-neutral-700 dark:text-neutral-300">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-[13px] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-shadow"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[12px] font-medium text-neutral-700 dark:text-neutral-300">Message</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-[13px] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-shadow resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <button 
              type="submit" 
              disabled={status === "loading"}
              className="w-fit mt-2 px-5 py-2 bg-black dark:bg-white text-white dark:text-black text-[13px] font-medium rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>

            {status === "error" && (
              <p className="text-red-500 text-[12px] mt-1">Something went wrong. Please try again later.</p>
            )}
            
            {status === "key_missing" && (
              <p className="text-red-500 text-[12px] mt-1">
                API Key is missing! Please restart your Next.js development server (Ctrl+C then npm run dev) so it can load the new .env.local file.
              </p>
            )}
          </form>
        )}
      </section>
    </div>
  );
}
