'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

type Stage = 'setup' | 'terminal1' | 'terminal2' | 'terminal3' | 'action' | 'outcome' | 'reset';

export default function MobileHeroSlides() {
  const [stage, setStage] = useState<Stage>('setup');
  const [isPaused, setIsPaused] = useState(false);

  // Stage progression logic
  useEffect(() => {
    if (isPaused) return;

    let timer: NodeJS.Timeout;

    if (stage === 'setup') {
      timer = setTimeout(() => setStage('terminal1'), 4000);
    } else if (stage === 'terminal1') {
      timer = setTimeout(() => setStage('terminal2'), 4000);
    } else if (stage === 'terminal2') {
      timer = setTimeout(() => setStage('terminal3'), 4000);
    } else if (stage === 'terminal3') {
      timer = setTimeout(() => setStage('action'), 4000);
    } else if (stage === 'action') {
      timer = setTimeout(() => setStage('outcome'), 5000);
    } else if (stage === 'outcome') {
      timer = setTimeout(() => setStage('reset'), 4000);
    } else if (stage === 'reset') {
      timer = setTimeout(() => setStage('setup'), 1500);
    }

    return () => clearTimeout(timer);
  }, [stage, isPaused]);

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

      {/* Fixed height container */}
      <div className="min-h-[420px] flex items-start">
        <AnimatePresence mode="wait">
        {/* Stage 1: The Setup */}
        {stage === 'setup' && (
          <motion.div
            key="setup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 w-full"
          >
            {/* Code change visualization */}
            <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs shadow-xl">
              <div className="flex items-center gap-2 mb-3 text-gray-400 text-[10px]">
                <span>components/PaymentProcessor.tsx</span>
              </div>
              <div className="space-y-1">
                <div className="text-gray-500">  function processPayment(user, amount) {'{'}</div>
                <div className="text-red-400 bg-red-900/20 pl-4">-   return stripe.charge(user.id, amount);</div>
                <div className="text-green-400 bg-green-900/20 pl-4">+   const result = stripe.charge(user.id, amount);</div>
                <div className="text-green-400 bg-green-900/20 pl-4">+   return result;</div>
                <div className="text-gray-500">  {'}'}</div>
              </div>
            </div>

            {/* Developer with thought bubble */}
            <div className="flex items-start justify-center gap-4">
              {/* Developer Icon */}
              <div className="flex-shrink-0">
                <img
                  src="https://cdn-icons-png.freepik.com/512/10488/10488169.png"
                  alt="Developer"
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px] object-contain"
                />
              </div>

              {/* Thought Bubble */}
              <div className="relative">
                {/* Bubble tails */}
                <div className="absolute -left-4 top-6">
                  <div className="w-3 h-3 bg-white border-2 border-gray-200 rounded-full"></div>
                </div>
                <div className="absolute -left-7 top-9">
                  <div className="w-2 h-2 bg-white border-2 border-gray-200 rounded-full"></div>
                </div>

                {/* Main thought bubble */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl px-4 py-3 shadow-lg max-w-md">
                  <p className="text-gray-700 text-sm italic leading-relaxed">
                    "I think my code is almost ready for review, let's do a final check"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stage 2: Terminal Slide 1 - Incidents Detected */}
        {stage === 'terminal1' && (
          <motion.div
            key="terminal1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
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

              {/* Terminal Content */}
              <div className="p-4 min-h-[200px] space-y-1">
                <div className="text-green-400"><span className="text-gray-500">$ </span>crisk check</div>
                <div className="text-gray-300">Analyzing your changes...</div>
                <div className="h-3"></div>
                <div className="text-yellow-400">WARNING: HIGH RISK DETECTED</div>
                <div className="h-3"></div>
                <div className="text-gray-300">Found 3 past incidents in</div>
                <div className="text-gray-300">components/PaymentProcessor.tsx:</div>
                <div className="text-cyan-400 font-bold">  • Issue #847: "Payment processor</div>
                <div className="text-cyan-400 font-bold">    crashes on null user"</div>
                <div className="text-gray-300">  • Issue #923: "Double charging customers"</div>
                <div className="h-3"></div>
                <div className="text-gray-500">...</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stage 3: Terminal Slide 2 - Code Ownership */}
        {stage === 'terminal2' && (
          <motion.div
            key="terminal2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
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

              {/* Terminal Content */}
              <div className="p-4 min-h-[200px] space-y-1">
                <div className="text-gray-500">...</div>
                <div className="h-3"></div>
                <div className="text-gray-300">Code Ownership:</div>
                <div className="h-3"></div>
                <div className="text-yellow-400">  • Original author: @sarah</div>
                <div className="text-yellow-400">    (inactive, last commit 8 months ago)</div>
                <div className="h-3"></div>
                <div className="text-green-400">  • Current maintainer: @james</div>
                <div className="h-3"></div>
                <div className="text-gray-500">...</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stage 4: Terminal Slide 3 - Coupled Files & Risk */}
        {stage === 'terminal3' && (
          <motion.div
            key="terminal3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
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

              {/* Terminal Content */}
              <div className="p-4 min-h-[200px] space-y-1">
                <div className="text-gray-500">...</div>
                <div className="h-3"></div>
                <div className="text-gray-300">components/PaymentProcessor.tsx</div>
                <div className="text-gray-300">is coupled with:</div>
                <div className="h-3"></div>
                <div className="text-cyan-400 font-bold">  • components/OrderConfirmation.tsx</div>
                <div className="text-cyan-400 font-bold">    (changes together 87% of time)</div>
                <div className="h-3"></div>
                <div className="text-yellow-400">RISK LEVEL: HIGH (85% confidence)</div>
                <div className="text-green-400">Analysis completed in 5.8 seconds</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stage 5: Taking Action */}
        {stage === 'action' && (
          <motion.div
            key="action"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 w-full"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-3 bg-white border-2 border-blue-200 rounded-lg p-4 shadow-md"
            >
              <div className="flex-shrink-0 w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Read Issue #847</h4>
                <p className="text-xs text-gray-600">
                  "Payment processor crashes on null user" - Ah, that's exactly my edge case!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-start gap-3 bg-white border-2 border-purple-200 rounded-lg p-4 shadow-md"
            >
              <div className="flex-shrink-0 w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Message @james</h4>
                <p className="text-xs text-gray-600">
                  He confirms: "Yes, also update OrderConfirmation.tsx or it'll break!"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-start gap-3 bg-white border-2 border-green-200 rounded-lg p-4 shadow-md"
            >
              <div className="flex-shrink-0 w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Update both files + add tests</h4>
                <p className="text-xs text-gray-600">
                  Fix the null check, update coupled file, add regression tests.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Stage 6: The Outcome */}
        {stage === 'outcome' && (
          <motion.div
            key="outcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="grid grid-cols-2 gap-3">
              {/* Before CodeRisk */}
              <div className="bg-red-50 rounded-lg p-4 shadow-md">
                <h4 className="font-bold text-red-900 mb-3 text-center flex items-center justify-center gap-2 text-sm">
                  <span>Before</span>
                  <svg width="60" height="18" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto">
                    <text x="10" y="42" fontFamily="'Inter', -apple-system, sans-serif" fontSize="32" fontWeight="700" fill="#7F1D1D" letterSpacing="-0.03em">
                      coder<tspan>ı</tspan>sk
                    </text>
                    <circle cx="96.7" cy="18" r="3.5" fill="#F97316"/>
                  </svg>
                </h4>
                <ul className="space-y-1.5 text-xs text-red-800">
                  <li>✗ Changes slip through</li>
                  <li>✗ Production fires</li>
                  <li>✗ Hours debugging</li>
                  <li>✗ Team trust erodes</li>
                </ul>
              </div>

              {/* After CodeRisk */}
              <div className="bg-green-50 rounded-lg p-4 shadow-md">
                <h4 className="font-bold text-green-900 mb-3 text-center flex items-center justify-center gap-2 text-sm">
                  <span>After</span>
                  <svg width="60" height="18" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto">
                    <text x="10" y="42" fontFamily="'Inter', -apple-system, sans-serif" fontSize="32" fontWeight="700" fill="#14532D" letterSpacing="-0.03em">
                      coder<tspan>ı</tspan>sk
                    </text>
                    <circle cx="96.7" cy="18" r="3.5" fill="#F97316"/>
                  </svg>
                </h4>
                <ul className="space-y-1.5 text-xs text-green-800">
                  <li>✓ Catch risks fast</li>
                  <li>✓ Ship with context</li>
                  <li>✓ Deploy confidently</li>
                  <li>✓ Team moves faster</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stage 7: Reset */}
        {stage === 'reset' && (
          <motion.div
            key="reset"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center py-20 w-full"
          >
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}
