'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TerminalLine {
  text: string;
  delay: number;
  type?: 'command' | 'output' | 'success' | 'warning' | 'highlight';
}

interface TerminalAnimationProps {
  lines: TerminalLine[];
  onComplete?: () => void;
}

export default function TerminalAnimation({ lines, onComplete }: TerminalAnimationProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      onComplete?.();
      return;
    }

    const currentLine = lines[visibleLines];
    const delay = visibleLines === 0 ? currentLine.delay : currentLine.delay;

    const timer = setTimeout(() => {
      setIsTyping(true);
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= currentLine.text.length) {
          setCurrentText(currentLine.text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setVisibleLines(prev => prev + 1);
          setCurrentText('');
        }
      }, 5); // 5ms per character for faster typing

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleLines, lines, onComplete]);

  const getLineColor = (type?: string) => {
    switch (type) {
      case 'command':
        return 'text-green-400';
      case 'success':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'highlight':
        return 'text-cyan-400 font-bold';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div className="bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden font-mono text-sm">
      {/* Terminal Header */}
      <div className="bg-[#323233] px-4 py-2 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <span className="text-gray-400 text-xs ml-2">crisk check</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 min-h-[450px] max-h-[500px] overflow-auto space-y-1">
        <AnimatePresence>
          {lines.slice(0, visibleLines).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className={`${getLineColor(line.type)} ${line.text ? '' : 'h-0'}`}
            >
              {line.type === 'command' && <span className="text-gray-500">$ </span>}
              {line.text}
            </motion.div>
          ))}

          {isTyping && currentText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`${getLineColor(lines[visibleLines]?.type)}`}
            >
              {lines[visibleLines]?.type === 'command' && <span className="text-gray-500">$ </span>}
              {currentText}
              <span className="animate-pulse">▋</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
