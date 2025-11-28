'use client';

import { useEffect, useState } from 'react';

const commands = [
  { command: 'flutter pub get', delay: 0 },
  { command: 'Building Flutter app...', delay: 1500 },
  { command: 'npm run dev', delay: 3000 },
  { command: 'Server running on localhost:3000', delay: 4500 },
  { command: 'git commit -m "feat: new feature"', delay: 6000 },
  { command: 'Pushing to production...', delay: 7500 },
];

export default function Terminal() {
  const [visibleCommands, setVisibleCommands] = useState<number[]>([]);
  const [typingCommand, setTypingCommand] = useState<number | null>(null);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    commands.forEach((cmd, index) => {
      const timeout = setTimeout(() => {
        setTypingCommand(index);
        setTypedText('');

        // Type out the command character by character
        let charIndex = 0;
        const typingInterval = setInterval(() => {
          if (charIndex < cmd.command.length) {
            setTypedText(cmd.command.slice(0, charIndex + 1));
            charIndex++;
          } else {
            clearInterval(typingInterval);
            setVisibleCommands((prev) => [...prev, index]);
            setTypingCommand(null);
          }
        }, 30);

        timeouts.push(typingInterval as unknown as NodeJS.Timeout);
      }, cmd.delay);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-2xl overflow-hidden border border-slate-700">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-slate-400 text-sm ml-2 font-mono">terminal</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 font-mono text-sm min-h-[280px] max-h-[320px] overflow-hidden">
          {commands.map((cmd, index) => {
            const isVisible = visibleCommands.includes(index);
            const isTyping = typingCommand === index;

            if (!isVisible && !isTyping) return null;

            const isOutput = cmd.command.includes('...') || cmd.command.includes('Server');
            
            return (
              <div
                key={index}
                className={`mb-2 transition-opacity duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {!isOutput && (
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-300">
                      {isTyping ? typedText : cmd.command}
                      {isTyping && (
                        <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
                      )}
                    </span>
                  </div>
                )}
                {isOutput && (
                  <div className="text-slate-400 pl-8">
                    {isTyping ? typedText : cmd.command}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
