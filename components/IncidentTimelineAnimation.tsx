'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import TerminalAnimation from './TerminalAnimation';

type Stage = 'setup' | 'investigation' | 'action' | 'outcome' | 'reset';

export default function IncidentTimelineAnimation() {
  const [stage, setStage] = useState<Stage>('setup');
  const [isPaused, setIsPaused] = useState(false);

  // Terminal lines for the investigation phase
  const terminalLines = [
    { text: 'crisk check components/PaymentProcessor.tsx', delay: 0, type: 'command' as const },
    { text: '', delay: 300, type: 'output' as const },
    { text: 'Analyzing your changes...', delay: 400, type: 'output' as const },
    { text: '', delay: 200, type: 'output' as const },
    { text: 'WARNING: HIGH RISK DETECTED', delay: 600, type: 'warning' as const },
    { text: '', delay: 200, type: 'output' as const },
    { text: 'Found 3 past incidents in this file:', delay: 400, type: 'output' as const },
    { text: '  • Issue #847: "Payment processor crashes on null user"', delay: 500, type: 'highlight' as const },
    { text: '  • Issue #923: "Double charging customers"', delay: 400, type: 'output' as const },
    { text: '  • Issue #1049: "Refunds failing silently"', delay: 400, type: 'output' as const },
    { text: '', delay: 200, type: 'output' as const },
    { text: 'Code Ownership:', delay: 400, type: 'output' as const },
    { text: '  • Original author: @sarah (inactive, last commit 8 months ago)', delay: 500, type: 'warning' as const },
    { text: '  • Current maintainer: @james', delay: 400, type: 'success' as const },
    { text: '', delay: 200, type: 'output' as const },
    { text: 'This file is coupled with:', delay: 400, type: 'output' as const },
    { text: '  • components/OrderConfirmation.tsx (changes together 87% of time)', delay: 500, type: 'highlight' as const },
    { text: '', delay: 200, type: 'output' as const },
    { text: 'RISK LEVEL: HIGH (85% confidence)', delay: 500, type: 'warning' as const },
    { text: 'Analysis completed in 5.8 seconds', delay: 300, type: 'success' as const },
  ];

  // Stage progression logic
  useEffect(() => {
    if (isPaused) return;

    let timer: NodeJS.Timeout;

    if (stage === 'setup') {
      timer = setTimeout(() => setStage('investigation'), 5000); // 5 seconds
    } else if (stage === 'investigation') {
      timer = setTimeout(() => setStage('action'), 15000); // 15 seconds (faster typing + longer display time)
    } else if (stage === 'action') {
      timer = setTimeout(() => setStage('outcome'), 6000); // 6 seconds
    } else if (stage === 'outcome') {
      timer = setTimeout(() => setStage('reset'), 4000); // 4 seconds
    } else if (stage === 'reset') {
      timer = setTimeout(() => setStage('setup'), 1500); // 1.5 seconds
    }

    return () => clearTimeout(timer);
  }, [stage, isPaused]);

  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center px-2 md:px-4">
      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-2 right-2 z-10 bg-black/70 hover:bg-black text-white px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-[10px] md:text-xs font-medium transition-all flex items-center gap-1"
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

      <div className="w-full max-w-4xl scale-90 md:scale-100 origin-top">
        <AnimatePresence mode="wait">
        {/* Stage 1: The Setup - Developer about to commit */}
        {stage === 'setup' && (
          <motion.div
            key="setup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >

            {/* Code change visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-[#1e1e1e] rounded-lg p-4 md:p-6 font-mono text-xs md:text-sm shadow-xl"
            >
              <div className="flex items-center gap-2 mb-3 md:mb-4 text-gray-400 text-[10px] md:text-xs">
                <span>components/PaymentProcessor.tsx</span>
              </div>
              <div className="space-y-1">
                <div className="text-gray-500">  function processPayment(user, amount) {'{'}</div>
                <div className="text-red-400 bg-red-900/20 pl-4">-   return stripe.charge(user.id, amount);</div>
                <div className="text-green-400 bg-green-900/20 pl-4">+   const result = stripe.charge(user.id, amount);</div>
                <div className="text-green-400 bg-green-900/20 pl-4">+   return result;</div>
                <div className="text-gray-500">  {'}'}</div>
              </div>
            </motion.div>

            {/* Developer with thought bubble */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-start justify-center gap-4 md:gap-8"
            >
              {/* Developer Icon */}
              <div className="flex-shrink-0">
                <img
                  src="https://cdn-icons-png.freepik.com/512/10488/10488169.png"
                  alt="Developer"
                  width={120}
                  height={120}
                  className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain"
                />
              </div>

              {/* Thought Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 }}
                className="relative"
              >
                {/* Bubble tails */}
                <div className="absolute -left-4 md:-left-6 top-6 md:top-8">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white border-2 border-gray-200 rounded-full"></div>
                </div>
                <div className="absolute -left-7 md:-left-10 top-9 md:top-12">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white border-2 border-gray-200 rounded-full"></div>
                </div>

                {/* Main thought bubble */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-lg max-w-md">
                  <p className="text-gray-700 text-sm md:text-base italic leading-relaxed">
                    "I think my code is almost ready for review, let's do a final check"
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Stage 2: CodeRisk Investigation */}
        {stage === 'investigation' && (
          <motion.div
            key="investigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TerminalAnimation lines={terminalLines} />
          </motion.div>
        )}

        {/* Stage 3: Taking Action */}
        {stage === 'action' && (
          <motion.div
            key="action"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Action Cards with checkmarks appearing */}
            <div className="space-y-3 md:space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-start gap-3 md:gap-4 bg-white border-2 border-blue-200 rounded-lg p-4 md:p-5 shadow-md"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center"
                >
                  <span className="text-blue-600 font-bold text-sm">✓</span>
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Read Issue #847</h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    "Payment processor crashes on null user" - Ah, that's exactly my edge case! The fix needs null checking.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2 }}
                className="flex items-start gap-3 md:gap-4 bg-white border-2 border-purple-200 rounded-lg p-4 md:p-5 shadow-md"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.6 }}
                  className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-purple-100 rounded-full flex items-center justify-center"
                >
                  <span className="text-purple-600 font-bold text-sm">✓</span>
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Message @james for pre-review</h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    He's the maintainer and confirms: "Yes, also update OrderConfirmation.tsx or it'll break!"
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.6 }}
                className="flex items-start gap-3 md:gap-4 bg-white border-2 border-green-200 rounded-lg p-4 md:p-5 shadow-md"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 4.0 }}
                  className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <span className="text-green-600 font-bold text-sm">✓</span>
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Update both files + add tests</h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    Fix the null check, update the coupled file, and add regression tests for Issue #847.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Stage 4: The Outcome */}
        {stage === 'outcome' && (
          <motion.div
            key="outcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* The comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid md:grid-cols-2 gap-3 md:gap-4"
            >
              {/* Before CodeRisk */}
              <div className="bg-red-50 rounded-lg p-4 md:p-6 shadow-md">
                <h4 className="font-bold text-red-900 mb-3 md:mb-4 text-center flex items-center justify-center gap-2 text-sm md:text-base">
                  <span>Before</span>
                  <svg width="80" height="24" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
                    <text x="10" y="42" fontFamily="'Inter', -apple-system, sans-serif" fontSize="32" fontWeight="700" fill="#7F1D1D" letterSpacing="-0.03em">
                      coder<tspan>ı</tspan>sk
                    </text>
                    <circle cx="96.7" cy="18" r="3.5" fill="#F97316"/>
                  </svg>
                </h4>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-red-800">
                  <li>✗ Breaking changes slip through</li>
                  <li>✗ Production fires at 2 AM</li>
                  <li>✗ Hours debugging why it broke</li>
                  <li>✗ Team trust erodes</li>
                  <li>✗ Lost revenue and customers</li>
                </ul>
              </div>

              {/* After CodeRisk */}
              <div className="bg-green-50 rounded-lg p-4 md:p-6 shadow-md">
                <h4 className="font-bold text-green-900 mb-3 md:mb-4 text-center flex items-center justify-center gap-2 text-sm md:text-base">
                  <span>After</span>
                  <svg width="80" height="24" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
                    <text x="10" y="42" fontFamily="'Inter', -apple-system, sans-serif" fontSize="32" fontWeight="700" fill="#14532D" letterSpacing="-0.03em">
                      coder<tspan>ı</tspan>sk
                    </text>
                    <circle cx="96.7" cy="18" r="3.5" fill="#F97316"/>
                  </svg>
                </h4>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-green-800">
                  <li>✓ Catch risks in seconds</li>
                  <li>✓ Ship with full context</li>
                  <li>✓ Deploy confidently</li>
                  <li>✓ Team moves faster</li>
                  <li>✓ Sleep soundly tonight</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Stage 5: Reset (brief fade) */}
        {stage === 'reset' && (
          <motion.div
            key="reset"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center py-20"
          >
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}
