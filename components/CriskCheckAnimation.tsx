'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

type Stage = 'detect' | 'analyze' | 'report' | 'reset'

interface CriskCheckAnimationProps {
  isPaused: boolean
  onTogglePause: () => void
}

export default function CriskCheckAnimation({ isPaused }: CriskCheckAnimationProps) {
  const [stage, setStage] = useState<Stage>('detect')

  useEffect(() => {
    if (isPaused) return

    const timers: NodeJS.Timeout[] = []

    switch (stage) {
      case 'detect':
        timers.push(setTimeout(() => setStage('analyze'), 3000))
        break
      case 'analyze':
        timers.push(setTimeout(() => setStage('report'), 3500))
        break
      case 'report':
        timers.push(setTimeout(() => setStage('reset'), 4000))
        break
      case 'reset':
        setStage('detect')
        break
    }

    return () => timers.forEach(clearTimeout)
  }, [stage, isPaused])

  const currentStep = stage === 'detect' ? 1 : stage === 'analyze' ? 2 : 3
  const stepLabels = ['Detect Changes', 'Find Related Files', 'Identify Owners']

  return (
    <div className="w-full">
      {/* Fixed height container for animation */}
      <div className="h-[380px] relative">
        <AnimatePresence mode="wait">
          {/* Stage 1: Detect staged changes */}
          {stage === 'detect' && (
            <motion.div
              key="detect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <div className="bg-[#1e1e1e] rounded-lg p-5 border border-gray-700 h-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="text-green-400 text-sm font-mono">
                    $ crisk check --draft
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 text-sm font-mono"
                  >
                    Detecting staged changes...
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-gray-300 text-sm font-mono pl-4"
                  >
                    Found: <span className="text-cyan-400">src/api/payments.py</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-gray-400 text-sm font-mono"
                  >
                    Loading codebase... <span className="text-gray-500">562 files</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4 }}
                    className="text-gray-400 text-sm font-mono"
                  >
                    Analyzing semantic relationships...
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Stage 2: Semantic Analysis */}
          {stage === 'analyze' && (
            <motion.div
              key="analyze"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 h-full">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 font-medium">Analyzing semantic relationships...</p>
                </div>

                {/* SVG-based graph for precise positioning */}
                <svg viewBox="0 0 500 280" className="w-full h-[300px]">
                  {/* Connection lines - drawn first so they're behind nodes */}
                  <motion.line
                    x1="250" y1="140" x2="80" y2="60"
                    stroke="#d1d5db" strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  />
                  <motion.line
                    x1="250" y1="140" x2="420" y2="60"
                    stroke="#d1d5db" strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  />
                  <motion.line
                    x1="250" y1="140" x2="80" y2="220"
                    stroke="#d1d5db" strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                  />
                  <motion.line
                    x1="250" y1="140" x2="420" y2="220"
                    stroke="#d1d5db" strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                  />

                  {/* Center node - payments.py */}
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <rect x="175" y="120" width="150" height="40" rx="8" fill="#0F172A" />
                    <text x="250" y="145" textAnchor="middle" fill="white" fontSize="14" fontFamily="monospace">
                      payments.py
                    </text>
                  </motion.g>

                  {/* Related file nodes */}
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <rect x="10" y="40" width="120" height="36" rx="6" fill="white" stroke="#d1d5db" strokeWidth="1.5" />
                    <text x="70" y="63" textAnchor="middle" fill="#374151" fontSize="12" fontFamily="monospace">billing.py</text>
                  </motion.g>

                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <rect x="360" y="40" width="130" height="36" rx="6" fill="white" stroke="#d1d5db" strokeWidth="1.5" />
                    <text x="425" y="63" textAnchor="middle" fill="#374151" fontSize="12" fontFamily="monospace">transaction.py</text>
                  </motion.g>

                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    <rect x="10" y="200" width="150" height="36" rx="6" fill="white" stroke="#d1d5db" strokeWidth="1.5" />
                    <text x="85" y="223" textAnchor="middle" fill="#374151" fontSize="12" fontFamily="monospace">test_payments.py</text>
                  </motion.g>

                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <rect x="370" y="200" width="110" height="36" rx="6" fill="white" stroke="#d1d5db" strokeWidth="1.5" />
                    <text x="425" y="223" textAnchor="middle" fill="#374151" fontSize="12" fontFamily="monospace">models.py</text>
                  </motion.g>
                </svg>
              </div>
            </motion.div>
          )}

          {/* Stage 3: Report with owners */}
          {stage === 'report' && (
            <motion.div
              key="report"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <div className="bg-[#1e1e1e] rounded-lg border border-gray-700 p-5 font-mono text-sm h-full overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-yellow-400 mb-4"
                >
                  Your changes may impact:
                </motion.div>

                <div className="space-y-3">
                  {[
                    { file: 'billing.py', owner: 'dave@company.com', score: '0.94' },
                    { file: 'transaction.py', owner: 'sarah@company.com', score: '0.87' },
                    { file: 'test_payments.py', owner: 'dave@company.com', score: '0.82' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.file}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.25 }}
                      className="text-gray-300 text-xs"
                    >
                      <span className="text-white">{i + 1}.</span>{' '}
                      <span className="text-cyan-400">{item.file}</span>
                      <span className="text-gray-500 ml-2">({item.score})</span>
                      <br />
                      <span className="text-gray-500 ml-4">Owner: </span>
                      <span className="text-purple-400">{item.owner}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="mt-5 pt-4 border-t border-gray-700"
                >
                  <div className="text-green-400 text-xs mb-2">DRAFT MESSAGE:</div>
                  <div className="bg-[#2a2a2a] rounded p-3 text-gray-300 text-xs leading-relaxed">
                    Hey @dave - I&apos;m updating payments.py. This might impact 2 file(s) you own. CC @sarah for transaction.py. Any concerns?
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Step indicator - fixed position below animation */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              step === currentStep ? 'bg-[#0F172A]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-center text-sm text-gray-500 mt-2">
        Step {currentStep}: {stepLabels[currentStep - 1]}
      </p>
    </div>
  )
}
