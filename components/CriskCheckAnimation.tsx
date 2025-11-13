'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

type Stage = 'detect' | 'query' | 'agentic' | 'report' | 'reset'

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
        timers.push(setTimeout(() => setStage('query'), 3000))
        break
      case 'query':
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
        <p className="text-sm text-[#475569]">
          Four-step process for comprehensive risk assessment
        </p>
      </div>

      {/* Animation Container */}
      <div className="flex-1 relative bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-center">

        <AnimatePresence mode="wait">
          {/* Stage 1: Detect Changes */}
          {stage === 'detect' && (
            <motion.div
              key="detect"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-[#0F172A]">
                  1. Detect Changes
                </h4>
                <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded">
                  &lt;100ms
                </span>
              </div>

              {/* Mini Terminal */}
              <div className="bg-[#1e1e1e] rounded-md p-3 border border-slate-700">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-1"
                >
                  <div className="text-green-400 text-xs font-mono">
                    $ git diff --name-only
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 text-xs font-mono space-y-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>src/components/Auth.tsx</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>src/utils/validation.ts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>tests/auth.test.ts</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Patch Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-slate-50 rounded-md p-3 border border-slate-200"
              >
                <div className="text-xs font-mono">
                  <div className="text-cyan-600">@@ -12,3 +12,5 @@</div>
                  <div className="text-red-600">- const user = req.user</div>
                  <div className="text-green-600">+ const user = await validateUser(req)</div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Stage 2: Query Graph */}
          {stage === 'query' && (
            <motion.div
              key="query"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-[#0F172A]">
                  2. Query Graph
                </h4>
                <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded">
                  &lt;200ms
                </span>
              </div>

              {/* Neo4j Logo/Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-4"
              >
                <div className="bg-slate-100 rounded-lg px-4 py-2 border border-slate-300">
                  <span className="text-lg font-bold text-slate-700">Neo4j</span>
                </div>
              </motion.div>

              {/* Query Bubbles */}
              <div className="flex flex-wrap gap-2 justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="px-3 py-1.5 bg-blue-50 border border-blue-300 rounded-full text-xs font-semibold text-blue-700"
                >
                  ownership
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="px-3 py-1.5 bg-purple-50 border border-purple-300 rounded-full text-xs font-semibold text-purple-700"
                >
                  co-change
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="px-3 py-1.5 bg-red-50 border border-red-300 rounded-full text-xs font-semibold text-red-700"
                >
                  incidents
                </motion.div>
              </div>

              {/* Results Counter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="text-center mt-4"
              >
                <div className="inline-block bg-green-50 border border-green-300 rounded-lg px-4 py-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm font-bold text-green-700"
                  >
                    ✓ 12 related files found
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Stage 3: Agentic Search */}
          {stage === 'agentic' && (
            <motion.div
              key="agentic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-[#0F172A]">
                  3. Agentic Search
                </h4>
                <div className="px-3 py-1 bg-orange-100 border border-orange-300 text-orange-700 text-xs font-bold rounded">
                  LLM Agent
                </div>
              </div>

              {/* SVG for Agent with Radiating Arrows */}
              <div className="relative" style={{ height: '300px' }}>
                <svg viewBox="0 0 400 300" className="w-full h-full">
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

          {/* Stage 4: Risk Report */}
          {stage === 'report' && (
            <motion.div
              key="report"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-[#0F172A]">
                  4. Risk Report
                </h4>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded"
                >
                  ✓ Complete in &lt;10s
                </motion.span>
              </div>

              {/* Risk Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-300 p-6 shadow-lg"
              >
                {/* Risk Level Badge */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="text-sm font-semibold text-slate-700">Risk Level:</span>
                  <span className="px-4 py-2 bg-amber-400 text-white text-lg font-bold rounded-lg shadow">
                    MEDIUM
                  </span>
                </motion.div>

                {/* Confidence Bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mb-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Confidence:</span>
                    <span className="text-sm font-bold text-green-700">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                      className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Reasoning Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="bg-white/60 rounded-md p-3 border border-green-200"
                >
                  <div className="text-xs font-semibold text-slate-700 mb-1">Reasoning:</div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="text-xs text-slate-600 leading-relaxed"
                  >
                    • Modified by 3 developers in last 6 months<br />
                    • Linked to 2 production incidents<br />
                    • High co-change with authentication module<br />
                    • 12 related files require careful review
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
