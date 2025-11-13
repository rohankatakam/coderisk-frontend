'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function MobileHeroSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: 'Detect Past Incidents',
      lines: [
        { text: '$ crisk check', type: 'command' as const },
        { text: 'Analyzing your changes...', type: 'output' as const },
        { text: '', type: 'output' as const },
        { text: 'WARNING: HIGH RISK DETECTED', type: 'warning' as const },
        { text: '', type: 'output' as const },
        { text: 'Found 3 past incidents in', type: 'output' as const },
        { text: 'components/PaymentProcessor.tsx:', type: 'output' as const },
        { text: '  • Issue #847: "Payment processor', type: 'highlight' as const },
        { text: '    crashes on null user"', type: 'highlight' as const },
      ]
    },
    {
      title: 'Know Who Owns the Code',
      lines: [
        { text: 'Code Ownership:', type: 'output' as const },
        { text: '', type: 'output' as const },
        { text: '  • Original author: @sarah', type: 'warning' as const },
        { text: '    (inactive, last commit 8 months ago)', type: 'warning' as const },
        { text: '', type: 'output' as const },
        { text: '  • Current maintainer: @james', type: 'success' as const },
      ]
    },
    {
      title: 'Catch Coupled Files',
      lines: [
        { text: 'components/PaymentProcessor.tsx', type: 'output' as const },
        { text: 'is coupled with:', type: 'output' as const },
        { text: '', type: 'output' as const },
        { text: '  • components/OrderConfirmation.tsx', type: 'highlight' as const },
        { text: '    (changes together 87% of time)', type: 'highlight' as const },
        { text: '', type: 'output' as const },
        { text: 'RISK LEVEL: HIGH (85% confidence)', type: 'warning' as const },
        { text: 'Analysis completed in 5.8 seconds', type: 'success' as const },
      ]
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide

    return () => clearTimeout(timer);
  }, [currentSlide, isPaused, slides.length]);

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
    <div className="relative w-full">
      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-2 right-2 z-10 bg-black/70 hover:bg-black text-white px-2 py-1 rounded-lg text-[10px] font-medium transition-all flex items-center gap-1"
      >
        {isPaused ? (
          <>
            <span>▶</span>
            <span className="hidden sm:inline">Play</span>
          </>
        ) : (
          <>
            <span>⏸</span>
            <span className="hidden sm:inline">Pause</span>
          </>
        )}
      </button>

      {/* Slide Title */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-[#0F172A]">
          {slides[currentSlide].title}
        </h3>
      </div>

      {/* Terminal Container */}
      <div className="bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden font-mono text-xs">
        {/* Terminal Header */}
        <div className="bg-[#323233] px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="text-gray-400 text-xs ml-2">crisk check</span>
        </div>

        {/* Terminal Content with AnimatePresence */}
        <div className="p-4 min-h-[200px] space-y-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {slides[currentSlide].lines.map((line, index) => (
                <div
                  key={index}
                  className={`${getLineColor(line.type)} ${line.text ? '' : 'h-3'}`}
                >
                  {line.type === 'command' && <span className="text-gray-500">$ </span>}
                  {line.text}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-[#F97316]'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
