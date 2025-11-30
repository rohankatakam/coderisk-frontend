'use client'

import { motion } from 'framer-motion'

export default function SemanticLedgerDiagram() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl">
        {/* Three-Layer Architecture */}
        <div className="space-y-6">

          {/* Layer 3: AI Agents (Top) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300 rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-purple-900 text-lg mb-1">AI Agents</h3>
                  <p className="text-sm text-purple-700">Autonomous velocity, infinite speed</p>
                </div>
                <div className="text-4xl">⚡</div>
              </div>
            </div>
            {/* Arrow down */}
            <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                className="text-2xl text-orange-500"
              >
                ↓
              </motion.div>
            </div>
          </motion.div>

          {/* Layer 2: CodeRisk Semantic Ledger (Middle) - THE HERO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 border-4 border-orange-600 rounded-lg p-8 shadow-2xl relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 animate-pulse"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <svg width="100" height="30" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
                    <text x="10" y="42" fontFamily="'Inter', -apple-system, sans-serif" fontSize="32" fontWeight="700" fill="white" letterSpacing="-0.03em">
                      coder<tspan>ı</tspan>sk
                    </text>
                    <circle cx="96.7" cy="18" r="3.5" fill="white"/>
                  </svg>
                  <span className="text-white font-bold text-xl">Semantic Ledger</span>
                </div>
                <p className="text-white/90 text-sm font-medium mb-4">
                  The Intelligent Governance Layer
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🧠</span>
                    <span>Risk Memory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👥</span>
                    <span>Ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔗</span>
                    <span>Dependencies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⚖️</span>
                    <span>Safety Rules</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Arrow down */}
            <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                className="text-2xl text-orange-500"
              >
                ↓
              </motion.div>
            </div>
          </motion.div>

          {/* Layer 1: Git (Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-700 text-lg mb-1">Git Repository</h3>
                  <p className="text-sm text-gray-600">Stateless history, dumb storage</p>
                </div>
                <div className="text-4xl opacity-50">📁</div>
              </div>
            </div>
          </motion.div>

          {/* Side label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 md:-right-24 top-1/2 -translate-y-1/2 hidden lg:block"
          >
            <div className="bg-white border-2 border-orange-500 rounded-lg p-4 shadow-lg max-w-xs">
              <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                <span className="text-orange-600">Git</span> is the hard drive.
                <br />
                <span className="text-orange-600">CodeRisk</span> is the kernel.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
