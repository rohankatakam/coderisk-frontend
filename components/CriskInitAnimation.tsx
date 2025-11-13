'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

type Stage = 'layer1' | 'layer2' | 'layer3' | 'complete' | 'reset'

interface CriskInitAnimationProps {
  isPaused: boolean
}

export default function CriskInitAnimation({ isPaused }: CriskInitAnimationProps) {
  const [stage, setStage] = useState<Stage>('layer1')

  useEffect(() => {
    if (isPaused) return

    const timers: NodeJS.Timeout[] = []

    switch (stage) {
      case 'layer1':
        timers.push(setTimeout(() => setStage('layer2'), 3500))
        break
      case 'layer2':
        timers.push(setTimeout(() => setStage('layer3'), 3500))
        break
      case 'layer3':
        timers.push(setTimeout(() => setStage('complete'), 3500))
        break
      case 'complete':
        timers.push(setTimeout(() => setStage('reset'), 1500))
        break
      case 'reset':
        setStage('layer1')
        break
    }

    return () => timers.forEach(clearTimeout)
  }, [stage, isPaused])

  const showLayer1 = ['layer1', 'layer2', 'layer3', 'complete'].includes(stage)
  const showLayer2 = ['layer2', 'layer3', 'complete'].includes(stage)
  const showLayer3 = ['layer3', 'complete'].includes(stage)

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
          crisk init: Build Knowledge Graph
        </h3>
        <AnimatePresence mode="wait">
          {stage === 'layer1' && (
            <motion.p
              key="layer1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-semibold text-slate-700"
            >
              1. Code Structure
            </motion.p>
          )}
          {stage === 'layer2' && (
            <motion.p
              key="layer2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-semibold text-amber-700"
            >
              2. Commit & PR History
            </motion.p>
          )}
          {(stage === 'layer3' || stage === 'complete') && (
            <motion.p
              key="layer3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-semibold text-blue-700"
            >
              3. Incident Intelligence
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Graph Visualization Container */}
      <div className="flex-1 relative overflow-hidden">
        <svg
          viewBox="0 0 500 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Layer 1: Code Structure */}
          <AnimatePresence>
            {showLayer1 && (
              <>
                {/* File Nodes */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <circle cx="150" cy="160" r="28" className="fill-slate-50 stroke-slate-400" strokeWidth="2.5" />
                  <text x="150" y="165" textAnchor="middle" dominantBaseline="middle" className="text-[11px] fill-slate-600 font-semibold">File</text>
                </motion.g>

                {/* Function Node */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <circle cx="150" cy="260" r="28" className="fill-indigo-50 stroke-indigo-400" strokeWidth="2.5" />
                  <text x="150" y="265" textAnchor="middle" dominantBaseline="middle" className="text-[11px] fill-indigo-600 font-semibold">Function</text>
                </motion.g>

                {/* File → Function Arrow */}
                <motion.path
                  d="M 150 188 L 150 232"
                  className="stroke-slate-400"
                  strokeWidth="2.5"
                  markerEnd="url(#arrowhead)"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                />

                {/* Another File Node */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <circle cx="350" cy="160" r="28" className="fill-slate-50 stroke-slate-400" strokeWidth="2.5" />
                  <text x="350" y="165" textAnchor="middle" dominantBaseline="middle" className="text-[11px] fill-slate-600 font-semibold">File</text>
                </motion.g>

                {/* File → File Dependency */}
                <motion.path
                  d="M 178 160 L 322 160"
                  className="stroke-slate-400"
                  strokeWidth="2.5"
                  markerEnd="url(#arrowhead)"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Layer 2: Commit & PR History */}
          <AnimatePresence>
            {showLayer2 && (
              <>
                {/* Developer Node */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <circle cx="250" cy="160" r="30" className="fill-purple-50 stroke-purple-400" strokeWidth="2.5" />
                  <text x="250" y="165" textAnchor="middle" dominantBaseline="middle" className="text-[11px] fill-purple-700 font-semibold">Developer</text>
                </motion.g>

                {/* Commit Node */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <circle cx="250" cy="280" r="30" className="fill-blue-50 stroke-blue-400" strokeWidth="2.5" />
                  <text x="250" y="285" textAnchor="middle" dominantBaseline="middle" className="text-[11px] fill-blue-700 font-semibold">Commit</text>
                </motion.g>

                {/* Developer → Commit Edge */}
                <motion.path
                  d="M 250 190 L 250 250"
                  className="stroke-purple-400"
                  strokeWidth="2.5"
                  markerEnd="url(#arrowhead-purple)"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                />

                {/* Commit → File Edge */}
                <motion.path
                  d="M 228 265 Q 180 220 165 188"
                  className="stroke-blue-400"
                  strokeWidth="2.5"
                  markerEnd="url(#arrowhead-blue)"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Layer 3: Incident Intelligence */}
          <AnimatePresence>
            {showLayer3 && (
              <>
                {/* Issue Node */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <circle cx="380" cy="280" r="30" className="fill-red-50 stroke-red-400" strokeWidth="2.5" />
                  <text x="380" y="285" textAnchor="middle" dominantBaseline="middle" className="text-[11px] fill-red-700 font-semibold">Issue</text>
                </motion.g>

                {/* PR Node */}
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <circle cx="120" cy="380" r="30" className="fill-green-50 stroke-green-400" strokeWidth="2.5" />
                  <text x="120" y="385" textAnchor="middle" dominantBaseline="middle" className="text-[11px] fill-green-700 font-semibold">PR</text>
                </motion.g>

                {/* Commit → Issue Edge (dashed) */}
                <motion.path
                  d="M 272 295 Q 320 285 350 282"
                  className="stroke-red-400"
                  strokeWidth="3"
                  strokeDasharray="10 8"
                  markerEnd="url(#arrowhead-red)"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />

                {/* Commit → PR Edge (dashed) */}
                <motion.path
                  d="M 235 305 Q 170 340 150 370"
                  className="stroke-green-400"
                  strokeWidth="3"
                  strokeDasharray="10 8"
                  markerEnd="url(#arrowhead-green)"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />

                {/* PR → Issue Edge (dashed) */}
                <motion.path
                  d="M 148 368 Q 250 320 350 290"
                  className="stroke-orange-400"
                  strokeWidth="3"
                  strokeDasharray="10 8"
                  markerEnd="url(#arrowhead-orange)"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                />

                {/* Completion Glow Effect */}
                {stage === 'complete' && (
                  <motion.circle
                    cx="250"
                    cy="280"
                    r="280"
                    className="fill-blue-200"
                    initial={{ opacity: 0.2, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                )}
              </>
            )}
          </AnimatePresence>

          {/* Arrow Markers */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <polygon points="0 0, 10 3, 0 6" className="fill-slate-400" />
            </marker>
            <marker
              id="arrowhead-purple"
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
              id="arrowhead-blue"
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
              id="arrowhead-red"
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
              id="arrowhead-green"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <polygon points="0 0, 10 3, 0 6" className="fill-green-400" />
            </marker>
            <marker
              id="arrowhead-orange"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <polygon points="0 0, 10 3, 0 6" className="fill-orange-400" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  )
}
