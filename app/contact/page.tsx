"use client";

import * as React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage("Please fill out your name, email, and message before sending.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // 1. Try local server API route first
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
          return;
        }
      }
    } catch (apiErr) {
      console.warn("Local API route unreachable, trying direct provider fallback...", apiErr);
    }

    // 2. Direct client-side FormSubmit fallback (guarantees delivery if local API route fails)
    try {
      const directRes = await fetch("https://formsubmit.co/ajax/work.ayanpal@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          _subject: `New Portfolio Message from ${trimmedName}`,
        }),
      });

      if (directRes.ok) {
        const directData = await directRes.json();
        if (directData.success === "true" || directData.success === true) {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
          return;
        }
      }
    } catch (directErr) {
      console.error("Direct provider fallback failed:", directErr);
    }

    // 3. If both network attempts fail, show clear error with direct mailto fallback
    setStatus("error");
    setErrorMessage("Could not deliver message automatically. Please tap the direct email button below.");
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
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 flex flex-col items-start gap-4 w-full">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] font-medium text-neutral-900 dark:text-neutral-100">
                  Message sent successfully!
                </h3>
                <p className="text-[13px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                  Thanks for reaching out! I&apos;ve received your message at <span className="font-semibold text-neutral-800 dark:text-neutral-200">work.ayanpal@gmail.com</span> and will reply soon.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setErrorMessage("");
              }}
              className="mt-1 px-4 py-1.5 text-[12px] font-medium rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors touch-manipulation cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSend} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[12px] font-medium text-neutral-700 dark:text-neutral-300">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-[16px] sm:text-[13px] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-shadow"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-[16px] sm:text-[13px] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-shadow"
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-[16px] sm:text-[13px] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-shadow resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <button 
              type="button" 
              onClick={() => handleSend()}
              disabled={status === "loading"}
              className="w-full sm:w-fit mt-2 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black text-[13px] font-medium rounded-full hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 touch-manipulation cursor-pointer flex items-center justify-center select-none"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>

            {status === "error" && (
              <div className="flex flex-col gap-2 mt-2 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-[12px] font-medium">
                  {errorMessage || "Something went wrong. Please try again later."}
                </p>
                <a
                  href={`mailto:work.ayanpal@gmail.com?subject=${encodeURIComponent(
                    `Portfolio Message from ${name || "Visitor"}`
                  )}&body=${encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\n${message}`
                  )}`}
                  className="text-[12px] text-neutral-800 dark:text-neutral-200 underline font-medium hover:text-black dark:hover:text-white"
                >
                  Click here to send directly via email client &rarr;
                </a>
              </div>
            )}
          </form>
        )}
      </section>
    </div>
  );
}
