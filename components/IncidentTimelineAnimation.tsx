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
    { text: '', delay: 500, type: 'output' as const },
    { text: '🔍 Analyzing your changes...', delay: 800, type: 'output' as const },
    { text: '', delay: 300, type: 'output' as const },
    { text: '⚠️  WARNING: HIGH RISK DETECTED', delay: 1200, type: 'warning' as const },
    { text: '', delay: 300, type: 'output' as const },
    { text: '📊 Found 3 past incidents in this file:', delay: 800, type: 'output' as const },
    { text: '  • Issue #847: "Payment processor crashes on null user"', delay: 900, type: 'highlight' as const },
    { text: '  • Issue #923: "Double charging customers"', delay: 700, type: 'output' as const },
    { text: '  • Issue #1049: "Refunds failing silently"', delay: 700, type: 'output' as const },
    { text: '', delay: 300, type: 'output' as const },
    { text: '👥 Code Ownership:', delay: 800, type: 'output' as const },
    { text: '  • Original author: @sarah (inactive, last commit 8 months ago)', delay: 900, type: 'warning' as const },
    { text: '  • Current maintainer: @james', delay: 700, type: 'success' as const },
    { text: '', delay: 300, type: 'output' as const },
    { text: '🔗 This file is coupled with:', delay: 800, type: 'output' as const },
    { text: '  • components/OrderConfirmation.tsx (changes together 87% of time)', delay: 900, type: 'highlight' as const },
    { text: '', delay: 300, type: 'output' as const },
    { text: '⚠️  RISK LEVEL: HIGH (85% confidence)', delay: 1000, type: 'warning' as const },
    { text: '⏱️  Analysis completed in 5.8 seconds', delay: 500, type: 'success' as const },
  ];

  // Stage progression logic
  useEffect(() => {
    if (isPaused) return;

    let timer: NodeJS.Timeout;

    if (stage === 'setup') {
      timer = setTimeout(() => setStage('investigation'), 8000); // 8 seconds
    } else if (stage === 'investigation') {
      timer = setTimeout(() => setStage('action'), 16000); // 16 seconds
    } else if (stage === 'action') {
      timer = setTimeout(() => setStage('outcome'), 9000); // 9 seconds
    } else if (stage === 'outcome') {
      timer = setTimeout(() => setStage('reset'), 6000); // 6 seconds
    } else if (stage === 'reset') {
      timer = setTimeout(() => setStage('setup'), 1500); // 1.5 seconds
    }

    return () => clearTimeout(timer);
  }, [stage, isPaused]);

  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center px-4">
      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-2 right-2 z-10 bg-black/70 hover:bg-black text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5"
      >
        {isPaused ? (
          <>
            <span>▶</span>
            <span>Play</span>
          </>
        ) : (
          <>
            <span>⏸</span>
            <span>Pause</span>
          </>
        )}
      </button>

      <div className="w-full max-w-4xl">
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
              className="bg-[#1e1e1e] rounded-lg p-6 font-mono text-sm shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4 text-gray-400 text-xs">
                <span>📝</span>
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
              className="flex items-start justify-center gap-8"
            >
              {/* Simple Developer SVG */}
              <div className="flex-shrink-0">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Head */}
                  <circle cx="60" cy="35" r="18" fill="#E5E7EB" stroke="#6B7280" strokeWidth="2"/>

                  {/* Body */}
                  <path d="M 45 53 Q 45 70 45 75 L 45 85 M 75 53 Q 75 70 75 75 L 75 85" stroke="#6B7280" strokeWidth="2" fill="none"/>
                  <line x1="45" y1="53" x2="75" y2="53" stroke="#6B7280" strokeWidth="2"/>
                  <path d="M 45 65 L 35 75 M 75 65 L 85 75" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>

                  {/* Legs */}
                  <path d="M 45 85 L 40 100 M 75 85 L 80 100" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>

                  {/* Laptop */}
                  <rect x="35" y="75" width="50" height="3" fill="#4B5563" rx="1"/>
                  <path d="M 40 75 L 43 65 L 77 65 L 80 75 Z" fill="#9CA3AF" stroke="#4B5563" strokeWidth="1.5"/>
                  <rect x="46" y="67" width="28" height="6" fill="#1F2937"/>
                </svg>
              </div>

              {/* Thought Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 }}
                className="relative"
              >
                {/* Bubble tails */}
                <div className="absolute -left-6 top-8">
                  <div className="w-4 h-4 bg-white border-2 border-gray-200 rounded-full"></div>
                </div>
                <div className="absolute -left-10 top-12">
                  <div className="w-3 h-3 bg-white border-2 border-gray-200 rounded-full"></div>
                </div>

                {/* Main thought bubble */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 shadow-lg max-w-md">
                  <p className="text-gray-700 text-base italic leading-relaxed">
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
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-start gap-4 bg-white border-2 border-blue-200 rounded-lg p-5 shadow-md"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                >
                  <span className="text-blue-600 font-bold">✓</span>
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Read Issue #847</h4>
                  <p className="text-sm text-gray-600">
                    "Payment processor crashes on null user" - Ah, that's exactly my edge case! The fix needs null checking.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2 }}
                className="flex items-start gap-4 bg-white border-2 border-purple-200 rounded-lg p-5 shadow-md"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.6 }}
                  className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                >
                  <span className="text-purple-600 font-bold">✓</span>
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Message @james for pre-review</h4>
                  <p className="text-sm text-gray-600">
                    He's the maintainer and confirms: "Yes, also update OrderConfirmation.tsx or it'll break!"
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.6 }}
                className="flex items-start gap-4 bg-white border-2 border-green-200 rounded-lg p-5 shadow-md"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 4.0 }}
                  className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <span className="text-green-600 font-bold">✓</span>
                </motion.div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Update both files + add tests</h4>
                  <p className="text-sm text-gray-600">
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
              className="grid md:grid-cols-2 gap-4"
            >
              {/* Without CodeRisk */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <div className="text-center mb-3">
                  <span className="text-3xl">❌</span>
                </div>
                <h4 className="font-bold text-red-900 mb-3 text-center">Without CodeRisk</h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>✗ PR merged without full context</li>
                  <li>✗ Payment processor crashes in prod</li>
                  <li>✗ Customers can't check out</li>
                  <li>✗ Emergency hotfix at 2 AM</li>
                  <li>✗ Lost revenue & trust</li>
                </ul>
              </div>

              {/* With CodeRisk */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <div className="text-center mb-3">
                  <span className="text-3xl">✅</span>
                </div>
                <h4 className="font-bold text-green-900 mb-3 text-center">With CodeRisk</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>✓ Risk caught before commit</li>
                  <li>✓ Fixed with proper context</li>
                  <li>✓ Tests added for regression</li>
                  <li>✓ Smooth deployment</li>
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
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="text-4xl"
            >
              🔄
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}
