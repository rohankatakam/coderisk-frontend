'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function TerminalDemo() {
  const [stage, setStage] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when stage changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [stage])

  useEffect(() => {
    const runAnimation = () => {
      const timers = [
        setTimeout(() => setStage(1), 500),
        setTimeout(() => setStage(2), 1200),
        setTimeout(() => setStage(3), 2000),
        setTimeout(() => setStage(4), 2800),
        setTimeout(() => setStage(5), 3600),
        setTimeout(() => setStage(6), 4400),
        setTimeout(() => setStage(7), 5000),
        setTimeout(() => setStage(8), 5500),
        setTimeout(() => setStage(9), 6000),
        setTimeout(() => setStage(10), 6800),
      ]
      return timers
    }

    let timers = runAnimation()

    const resetTimer = setInterval(() => {
      setStage(0)
      timers.forEach(clearTimeout)
      timers = runAnimation()
    }, 12000)

    return () => {
      timers.forEach(clearTimeout)
      clearInterval(resetTimer)
    }
  }, [])

  return (
    <div className="w-full">
      {/* Terminal Window */}
      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl border border-gray-800">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-4 text-gray-400 text-sm font-mono">~/my-project</span>
        </div>

        {/* Terminal Content - Fixed height with scroll */}
        <div
          ref={contentRef}
          className="p-4 font-mono text-sm space-y-2 h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
        >
          {/* Command */}
          {stage >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <span className="text-green-400">$</span>
              <span className="text-white">crisk check --no-ai</span>
            </motion.div>
          )}

          {/* Getting staged changes */}
          {stage >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400 mt-4"
            >
              Detecting changed files...
            </motion.div>
          )}

          {/* Staged file */}
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-300 ml-4"
            >
              <span className="text-gray-500">Found 1 staged file:</span>
              <br />
              <span className="text-cyan-400 ml-2">* src/api/payments.py</span>
            </motion.div>
          )}

          {/* Loading codebase */}
          {stage >= 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400 mt-2"
            >
              Loading indexed repository evidence...
            </motion.div>
          )}

          {/* Analyzing */}
          {stage >= 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400 mt-2"
            >
              Measuring structural coupling, co-change, and tests...
            </motion.div>
          )}

          {/* Results header */}
          {stage >= 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 pt-4 border-t border-gray-700"
            >
              <div className="text-yellow-400 font-semibold">🔍 CodeRisk Analysis</div>
            </motion.div>
          )}

          {/* Result 1 */}
          {stage >= 7 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-2 mt-2"
            >
              <div className="text-white">
                Risk level: <span className="text-red-400">HIGH</span>
              </div>
              <div className="text-gray-400 ml-4">
                7 structurally coupled files
              </div>
            </motion.div>
          )}

          {/* Result 2 */}
          {stage >= 8 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-2 mt-2"
            >
              <div className="text-white">
                1. <span className="text-cyan-400">src/api/payments.py</span>
              </div>
              <div className="text-gray-400 ml-4">
                Co-change frequency: <span className="text-purple-400">48%</span>
              </div>
            </motion.div>
          )}

          {/* Result 3 */}
          {stage >= 9 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-2 mt-2"
            >
              <div className="text-white">
                Test-file ratio: <span className="text-cyan-400">35%</span>
              </div>
              <div className="text-gray-400 ml-4">
                Historical owner data available via <span className="text-purple-400">crisk blame</span>
              </div>
            </motion.div>
          )}

          {/* Recommendations */}
          {stage >= 10 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 pt-4 border-t border-gray-700"
            >
              <div className="text-green-400 font-semibold mb-2">RECOMMENDATIONS:</div>
              <div className="bg-[#2d2d2d] rounded p-3 text-gray-300 text-xs leading-relaxed">
                Review historically coupled files and add coverage before merging.
              </div>
              <div className="mt-3 text-gray-500 text-xs">
                Run crisk check --explain for the investigation trace
              </div>
            </motion.div>
          )}

          {/* Cursor */}
          {stage < 10 && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-green-400 ml-1"
            />
          )}
        </div>
      </div>
    </div>
  )
}
