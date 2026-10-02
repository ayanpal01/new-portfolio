"use client";

import * as React from "react";
import { ArrowUpRight, CheckCircle2, Loader2, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [needsActivation, setNeedsActivation] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async (e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
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
    setNeedsActivation(false);

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
          if (data.needsActivation) {
            setNeedsActivation(true);
          }
          setName("");
          setEmail("");
          setMessage("");
          return;
        }
      }
    } catch (apiErr) {
      console.warn("Local API route unreachable, trying client fallback...", apiErr);
    }

    // 2. Direct client-side Web3Forms fallback (if NEXT_PUBLIC_WEB3FORMS_KEY is set in .env)
    const clientWeb3Key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (clientWeb3Key) {
      try {
        const web3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: clientWeb3Key,
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
            from_name: trimmedName,
            replyto: trimmedEmail,
            subject: `Portfolio Message from ${trimmedName}`,
          }),
        });

        if (web3Res.ok) {
          const web3Data = await web3Res.json();
          if (web3Data.success) {
            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
            return;
          }
        }
      } catch (web3Err) {
        console.warn("Direct Web3Forms fallback failed, trying FormSubmit fallback...", web3Err);
      }
    }

    // 3. Direct client-side FormSubmit fallback
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
        const isSuccess = directData.success === "true" || directData.success === true;
        const isActivation = directData.message && directData.message.toLowerCase().includes("activation");

        if (isSuccess || isActivation) {
          setStatus("success");
          if (isActivation) {
            setNeedsActivation(true);
          }
          setName("");
          setEmail("");
          setMessage("");
          return;
        }
      }
    } catch (directErr) {
      console.error("Direct provider fallback failed:", directErr);
    }

    // 4. If all fail, display error with direct mailto fallback
    setStatus("error");
    setErrorMessage("Could not deliver message automatically. Please tap the direct email button below.");
  };

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <div className="pt-10 pb-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50">
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

          <a 
            href="https://www.instagram.com/ayanpal.exe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center group"
          >
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">DM me on Instragran</span>
              <span className="text-[12px] text-neutral-500 dark:text-neutral-400 mt-0.5">@ayanpal.exe</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 px-6">
        <h2 className="text-[15px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">Send a message</h2>
        
        {status === "success" ? (
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40 flex flex-col items-start gap-4 w-full animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] font-medium text-neutral-900 dark:text-neutral-100">
                  Message sent successfully!
                </h3>
                <p className="text-[13px] text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                  Thanks for reaching out! I&apos;ve received your message and will get back to you at <span className="font-semibold text-neutral-700 dark:text-neutral-300">work.ayanpal@gmail.com</span> soon.
                </p>
                {needsActivation && (
                  <div className="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-[12px] text-amber-800 dark:text-amber-300 leading-relaxed">
                    <strong>Note:</strong> An activation link was sent to <span className="underline font-semibold">work.ayanpal@gmail.com</span>. Please check your inbox and tap it once to enable automated forwarding.
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setErrorMessage("");
                setNeedsActivation(false);
              }}
              className="mt-2 px-4 py-1.5 text-[12px] font-medium rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors touch-manipulation cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form 
            action="javascript:void(0);" 
            method="POST" 
            onSubmit={handleSend} 
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[12px] font-medium text-neutral-700 dark:text-neutral-300">Name</label>
              <input 
                type="text" 
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-[16px] sm:text-[13px] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-shadow"
                placeholder="Your name"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[12px] font-medium text-neutral-700 dark:text-neutral-300">Email</label>
              <input 
                type="email" 
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-[16px] sm:text-[13px] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-shadow"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[12px] font-medium text-neutral-700 dark:text-neutral-300">Message</label>
              <textarea 
                id="message"
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
              className="w-full sm:w-fit mt-2 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black text-[13px] font-medium rounded-full hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 touch-manipulation cursor-pointer flex items-center justify-center gap-2 select-none"
            >
              {status === "loading" && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              {status === "loading" ? "Sending message..." : "Send message"}
            </button>

            {status === "error" && (
              <div className="flex flex-col gap-2.5 mt-2 p-3.5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-xl">
                <p className="text-red-600 dark:text-red-400 text-[12px] font-medium">
                  {errorMessage || "Something went wrong. Please try again or send directly via email."}
                </p>
                <a
                  href={`mailto:work.ayanpal@gmail.com?subject=${encodeURIComponent(
                    `Portfolio Message from ${name || "Visitor"}`
                  )}&body=${encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\n${message}`
                  )}`}
                  className="inline-flex items-center gap-1.5 text-[12px] text-neutral-900 dark:text-neutral-100 font-semibold underline underline-offset-2 hover:opacity-80"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Send directly using your email app &rarr;
                </a>
              </div>
            )}
          </form>
        )}
      </section>
    </div>
  );
}
