'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  gradient,
  imageUrl,
}: ProjectCardProps) {
  const [inputValue, setInputValue] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = inputValue.toLowerCase().trim();
      
      if (command === 'live' && liveUrl) {
        setResponseMessage('✓ Opening live demo...');
        setShowResponse(true);
        setTimeout(() => {
          window.open(liveUrl, '_blank');
          setInputValue('');
          setShowResponse(false);
        }, 500);
      } else if (command === 'code' && githubUrl) {
        setResponseMessage('✓ Opening GitHub repository...');
        setShowResponse(true);
        setTimeout(() => {
          window.open(githubUrl, '_blank');
          setInputValue('');
          setShowResponse(false);
        }, 500);
      } else {
        setResponseMessage('Command not found. Try: live or code');
        setShowResponse(true);
        setTimeout(() => {
          setShowResponse(false);
        }, 2000);
      }
    }
  };

  return (
    <div className="group relative">
      <div
        className={`
          relative overflow-hidden
          bg-slate-800/40 backdrop-blur-md
          border border-slate-700/50
          rounded-2xl
          transition-all duration-500
          hover:border-slate-500
          shadow-lg
        `}
      >
        {/* Project Image/Preview */}
        <div className="relative h-48 bg-linear-to-br from-slate-900 to-slate-800 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          ) : (
            <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-20`}></div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          
          {/* Title overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-4">
          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {tech?.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs text-slate-300 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Terminal Input Section at Bottom */}
        <div className="border-t border-slate-700/50 bg-slate-900/50 p-4">
          <div className="font-mono text-sm">
            {/* Input Line */}
            <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-3 py-2 border border-slate-700">
              <span className="text-green-400 text-xs">$</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'live' or 'code' and press Enter"
                className="flex-1 bg-transparent border-none outline-none text-slate-300 placeholder-slate-600 text-sm"
              />
              <span className="inline-block w-1.5 h-3.5 bg-green-400 animate-pulse"></span>
            </div>
            
            {/* Response Message */}
            {showResponse && (
              <div className="mt-2 text-xs text-slate-400 px-3 animate-fade-in">
                {responseMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
