'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  const loadingCommands = [
    'Initializing portfolio...',
    'Loading components...',
    'Compiling skills data...',
    'Fetching projects...',
    'Rendering timeline...',
    'Establishing connections...',
    'Portfolio ready!',
  ];

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Command line animation
    const commandInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= loadingCommands.length - 1) {
          clearInterval(commandInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    // Complete loading
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(commandInterval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-2xl px-4">
        {/* Terminal Window */}
        <div className="bg-slate-900 rounded-lg shadow-2xl border border-slate-800 overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-slate-400 text-sm font-mono ml-2">portfolio-loader.sh</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm min-h-[300px]">
            {/* Loading Commands */}
            <div className="space-y-2 mb-6">
              {loadingCommands.slice(0, currentLine + 1).map((command, index) => (
                <div key={index} className="flex items-center gap-2 animate-fade-in">
                  <span className="text-green-400">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-300">{command}</span>
                  {index === currentLine && index < loadingCommands.length - 1 && (
                    <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
                  )}
                  {index === loadingCommands.length - 1 && index === currentLine && (
                    <span className="text-green-400 ml-2">✓</span>
                  )}
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-xs">Progress</span>
                <span className="text-cyan-400 text-xs font-bold">{progress}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-blue-500 via-cyan-500 to-green-500 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Loading Indicator */}
            <div className="mt-6 flex items-center gap-2 text-slate-500 text-xs">
              <div className="flex gap-1">
                <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
              </div>
              <span>Loading</span>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-6">
          <p className="text-slate-500 text-sm font-mono">
            Welcome to Ayan Pal&apos;s Portfolio
          </p>
        </div>
      </div>
    </div>
  );
}
