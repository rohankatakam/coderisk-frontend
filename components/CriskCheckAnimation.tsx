'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

type Stage = 'detect' | 'agentic' | 'report' | 'reset'

interface CriskCheckAnimationProps {
  isPaused: boolean
}

export default function CriskCheckAnimation({ isPaused }: CriskCheckAnimationProps) {
  const [stage, setStage] = useState<Stage>('detect')

  useEffect(() => {
    if (isPaused) return

    const timers: NodeJS.Timeout[] = []

    switch (stage) {
      case 'detect':
        timers.push(setTimeout(() => setStage('agentic'), 3000))
        break
      case 'agentic':
        timers.push(setTimeout(() => setStage('report'), 4000))
        break
      case 'report':
        timers.push(setTimeout(() => setStage('reset'), 3500))
        break
      case 'reset':
        setStage('detect')
        break
    }

    return () => timers.forEach(clearTimeout)
  }, [stage, isPaused])

  const tools = [
    { name: 'query_incident_history', icon: '🐛', angle: -45, color: 'red' },
    { name: 'query_ownership', icon: '👤', angle: -135, color: 'purple' },
    { name: 'query_cochange_partners', icon: '🔗', angle: 45, color: 'blue' },
    { name: 'query_blast_radius', icon: '💥', angle: 135, color: 'orange' },
    { name: 'and more...', icon: '⋯', angle: 90, color: 'slate' }
  ]

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
          crisk check: Real-Time Analysis
        </h3>
        <AnimatePresence mode="wait">
          {stage === 'detect' && (
            <motion.p
              key="detect"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-semibold text-slate-700"
            >
              1. Find Files in Graph
            </motion.p>
          )}
          {stage === 'agentic' && (
            <motion.p
              key="agentic"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-semibold text-orange-700"
            >
              2. Agentic Search
            </motion.p>
          )}
          {stage === 'report' && (
            <motion.p
              key="report"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-semibold text-green-700"
            >
              3. Risk Report
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Animation Container */}
      <div className="flex-1 relative bg-white rounded-lg p-4 overflow-hidden min-h-[600px]">

        <AnimatePresence mode="wait">
          {/* Stage 1: Detect Changes & Find in Graph */}
          {stage === 'detect' && (
            <motion.div
              key="detect"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Terminal Command */}
              <div className="bg-[#1e1e1e] rounded-md p-3 border border-slate-700">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <div className="text-green-400 text-xs font-mono">
                    $ crisk check src/components/Auth.tsx src/utils/validation.ts
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 text-xs font-mono space-y-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">→</span>
                      <span>Finding files in knowledge graph...</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Graph Visualization showing file lookup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-white rounded-md p-4 border border-slate-200"
              >
                <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  {/* File nodes */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0 }}
                  >
                    <circle cx="120" cy="100" r="35" className="fill-slate-50 stroke-slate-400" strokeWidth="2.5" />
                    <text x="120" y="95" textAnchor="middle" dominantBaseline="middle" className="text-[9px] fill-slate-600 font-semibold">Auth.tsx</text>
                  </motion.g>

                  <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <circle cx="280" cy="100" r="35" className="fill-slate-50 stroke-slate-400" strokeWidth="2.5" />
                    <text x="280" y="95" textAnchor="middle" dominantBaseline="middle" className="text-[9px] fill-slate-600 font-semibold">validation.ts</text>
                  </motion.g>

                  {/* Arrow indicators from terminal */}
                  <motion.path
                    d="M 80 50 L 105 75"
                    className="stroke-green-400"
                    strokeWidth="2"
                    markerEnd="url(#arrow-find)"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  />

                  <motion.path
                    d="M 320 50 L 295 75"
                    className="stroke-green-400"
                    strokeWidth="2"
                    markerEnd="url(#arrow-find)"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  />

                  <motion.text
                    x="80"
                    y="40"
                    className="text-[10px] fill-green-500 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                  >
                    Found!
                  </motion.text>

                  <motion.text
                    x="280"
                    y="40"
                    className="text-[10px] fill-green-500 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    Found!
                  </motion.text>

                  <defs>
                    <marker
                      id="arrow-find"
                      markerWidth="8"
                      markerHeight="8"
                      refX="7"
                      refY="2.5"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <polygon points="0 0, 8 2.5, 0 5" className="fill-green-400" />
                    </marker>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          )}

          {/* Stage 2: Agentic Search */}
          {stage === 'agentic' && (
            <motion.div
              key="agentic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* SVG for Agent with Radiating Arrows */}
              <div className="relative flex items-center justify-center" style={{ minHeight: '500px' }}>
                <svg viewBox="0 0 400 350" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  {/* Central Agent */}
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <circle
                      cx="200"
                      cy="150"
                      r="30"
                      className="fill-orange-100 stroke-orange-400"
                      strokeWidth="3"
                    />
                    <text
                      x="200"
                      y="158"
                      textAnchor="middle"
                      className="text-2xl"
                    >
                      🤖
                    </text>
                  </motion.g>

                  {/* Tool Arrows */}
                  {tools.map((tool, index) => {
                    const delay = 0.4 + index * 0.3
                    const radians = (tool.angle * Math.PI) / 180
                    const startX = 200 + 35 * Math.cos(radians)
                    const startY = 150 + 35 * Math.sin(radians)
                    const endX = 200 + 120 * Math.cos(radians)
                    const endY = 150 + 120 * Math.sin(radians)

                    // Color mapping for each tool
                    const getColors = (color: string) => {
                      const colorMap: Record<string, { stroke: string; fill: string; bg: string; border: string; text: string }> = {
                        red: { stroke: 'stroke-red-400', fill: 'fill-red-400', bg: 'fill-red-50', border: 'stroke-red-300', text: 'fill-red-700' },
                        purple: { stroke: 'stroke-purple-400', fill: 'fill-purple-400', bg: 'fill-purple-50', border: 'stroke-purple-300', text: 'fill-purple-700' },
                        blue: { stroke: 'stroke-blue-400', fill: 'fill-blue-400', bg: 'fill-blue-50', border: 'stroke-blue-300', text: 'fill-blue-700' },
                        orange: { stroke: 'stroke-orange-400', fill: 'fill-orange-400', bg: 'fill-orange-50', border: 'stroke-orange-300', text: 'fill-orange-700' },
                        slate: { stroke: 'stroke-slate-400', fill: 'fill-slate-400', bg: 'fill-slate-50', border: 'stroke-slate-300', text: 'fill-slate-700' }
                      }
                      return colorMap[color]
                    }

                    const colors = getColors(tool.color)

                    return (
                      <g key={tool.name}>
                        {/* Arrow Line */}
                        <motion.line
                          x1={startX}
                          y1={startY}
                          x2={endX}
                          y2={endY}
                          className={colors.stroke}
                          strokeWidth="2"
                          markerEnd={`url(#arrow-${tool.color})`}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ delay, duration: 0.5 }}
                        />

                        {/* Tool Icon at End */}
                        <motion.g
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: delay + 0.3 }}
                        >
                          <circle
                            cx={endX}
                            cy={endY}
                            r="20"
                            className={`${colors.bg} ${colors.border}`}
                            strokeWidth="2"
                          />
                          <text
                            x={endX}
                            y={endY + 6}
                            textAnchor="middle"
                            className="text-sm"
                          >
                            {tool.icon}
                          </text>
                        </motion.g>

                        {/* Tool Name Badge */}
                        <motion.g
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: delay + 0.5 }}
                        >
                          <rect
                            x={endX - 45}
                            y={endY + 25}
                            width="90"
                            height="16"
                            rx="3"
                            className={`${colors.bg} ${colors.border}`}
                            strokeWidth="1"
                          />
                          <text
                            x={endX}
                            y={endY + 36}
                            textAnchor="middle"
                            className={`text-[7px] font-semibold ${colors.text}`}
                          >
                            {tool.name}
                          </text>
                        </motion.g>
                      </g>
                    )
                  })}

                  {/* Arrow Markers */}
                  <defs>
                    <marker
                      id="arrow-red"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <polygon points="0 0, 10 3, 0 6" className="fill-red-400" />
                    </marker>
                    <marker
                      id="arrow-purple"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <polygon points="0 0, 10 3, 0 6" className="fill-purple-400" />
                    </marker>
                    <marker
                      id="arrow-blue"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <polygon points="0 0, 10 3, 0 6" className="fill-blue-400" />
                    </marker>
                    <marker
                      id="arrow-orange"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <polygon points="0 0, 10 3, 0 6" className="fill-orange-400" />
                    </marker>
                    <marker
                      id="arrow-slate"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <polygon points="0 0, 10 3, 0 6" className="fill-slate-400" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </motion.div>
          )}

          {/* Stage 3: Risk Report */}
          {stage === 'report' && (
            <motion.div
              key="report"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Terminal-style Output */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-[#1e1e1e] rounded-lg border border-slate-700 p-4 font-mono text-sm space-y-4"
              >
                {/* First File Result */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <div className="text-gray-400 text-xs border-b border-gray-700 pb-1">
                    src/components/Auth.tsx
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="p-3 bg-amber-900/30 border border-amber-700/50 rounded"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-amber-400 text-base">⚠</span>
                      <span className="text-amber-400 font-bold text-xs">MEDIUM RISK</span>
                      <span className="ml-auto text-gray-400 text-xs">85% confidence</span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-gray-300 text-xs space-y-1"
                    >
                      <div>• Modified by 3 developers in last 6 months</div>
                      <div>• Linked to 2 production incidents</div>
                      <div>• High co-change with authentication module</div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Second File Result */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="space-y-2"
                >
                  <div className="text-gray-400 text-xs border-b border-gray-700 pb-1">
                    src/utils/validation.ts
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="p-3 bg-green-900/30 border border-green-700/50 rounded"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-400 text-base">✓</span>
                      <span className="text-green-400 font-bold text-xs">LOW RISK</span>
                      <span className="ml-auto text-gray-400 text-xs">92% confidence</span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      className="text-gray-300 text-xs space-y-1"
                    >
                      <div>• Well-tested utility function</div>
                      <div>• Single owner, clear responsibility</div>
                      <div>• No recent incidents</div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="text-gray-400 text-xs border-t border-gray-700 pt-2"
                >
                  <div>✓ Analysis complete (2 files)</div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
