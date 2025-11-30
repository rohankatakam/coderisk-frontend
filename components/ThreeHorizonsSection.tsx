'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function ThreeHorizonsSection() {
  const [activeHorizon, setActiveHorizon] = useState(0)
  const horizonRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ]

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    horizonRefs.forEach((ref, index) => {
      if (!ref.current) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
              setActiveHorizon(index)
            }
          })
        },
        {
          root: null,
          rootMargin: '-30% 0px -30% 0px',
          threshold: [0, 0.4, 1]
        }
      )

      observer.observe(ref.current)
      observers.push(observer)
    })

    return () => observers.forEach(observer => observer.disconnect())
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      <div className="space-y-8">

        {/* Horizon 1: The Vibe Coder Safety Net (The Wedge) */}
        <motion.div
          ref={horizonRefs[0]}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-br from-blue-50 to-cyan-50 border-2 rounded-2xl p-8 md:p-10 transition-all ${
            activeHorizon === 0 ? 'border-blue-500 shadow-2xl' : 'border-blue-200 shadow-lg'
          }`}
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                1
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                Horizon 1: The "Vibe Coder" Safety Net
              </h3>
              <p className="text-lg text-blue-800 mb-4 leading-relaxed font-medium">
                The Wedge
              </p>
              <div className="space-y-4 text-blue-800">
                <p className="text-base leading-relaxed">
                  <strong className="text-blue-900">The Reality:</strong> AI writes code faster than you can review it. The "Hot Context" developer using Cursor or Claude has perfect knowledge of their change—but zero knowledge of the landmines buried in the codebase's history.
                </p>
                <p className="text-base leading-relaxed">
                  <strong className="text-blue-900">The Value:</strong> We pay the "Reviewer Tax" instantly. We break the "Default-to-Trust" equilibrium. We surface the R<sub>temporal</sub>, R<sub>ownership</sub>, and R<sub>coupling</sub> risks that would have destroyed production at 2 AM.
                </p>
                <p className="text-base leading-relaxed">
                  <strong className="text-blue-900">The Moat:</strong> The Diff-to-Graph Identity Resolution. No one else can link your uncommitted file change to a 3-year-old incident on a renamed file.
                </p>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm font-semibold text-blue-700 italic">
                    "We ensure you don't commit a career-ending mistake."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Horizon 2: The Agentic Leash (The Scale) */}
        <motion.div
          ref={horizonRefs[1]}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`bg-gradient-to-br from-purple-50 to-pink-50 border-2 rounded-2xl p-8 md:p-10 transition-all ${
            activeHorizon === 1 ? 'border-purple-500 shadow-2xl' : 'border-purple-200 shadow-lg'
          }`}
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                2
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-3">
                Horizon 2: The "Agentic Leash"
              </h3>
              <p className="text-lg text-purple-800 mb-4 leading-relaxed font-medium">
                The Scale
              </p>
              <div className="space-y-4 text-purple-800">
                <p className="text-base leading-relaxed">
                  <strong className="text-purple-900">The Problem:</strong> Autonomous agents (Devin, specialized internal agents) are moving to "Background Agents" that work while you sleep. How do you trust an agent to modify a legacy payment system? You don't.
                </p>
                <p className="text-base leading-relaxed">
                  <strong className="text-purple-900">The Shift:</strong> CodeRisk becomes the <strong>Constraint Layer</strong> for Agents. We move from "checking" human work to <strong>governing</strong> agent work.
                </p>
                <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded-r-lg my-4">
                  <p className="text-sm font-mono text-purple-900">
                    <span className="font-bold">Agent:</span> "I want to refactor processPayment()"
                    <br />
                    <span className="font-bold text-red-600">CodeRisk:</span> "Access Denied. Risk Score: 98/100. Linked to 4 SEV-1 incidents. Human approval required."
                  </p>
                </div>
                <p className="text-base leading-relaxed">
                  <strong className="text-purple-900">The Value:</strong> We are the guardrails that allow companies to deploy autonomous agents without bankruptcy risk. The enterprise can finally trust agents to work overnight.
                </p>
                <div className="mt-6 pt-6 border-t border-purple-200">
                  <p className="text-sm font-semibold text-purple-700 italic">
                    "The Operating System that makes Autonomous Software Engineering possible."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Horizon 3: The Semantic Memory (The Platform) */}
        <motion.div
          ref={horizonRefs[2]}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`bg-gradient-to-br from-orange-50 to-red-50 border-2 rounded-2xl p-8 md:p-10 transition-all ${
            activeHorizon === 2 ? 'border-orange-500 shadow-2xl' : 'border-orange-200 shadow-lg'
          }`}
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                3
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-900 mb-3">
                Horizon 3: The "Semantic Memory"
              </h3>
              <p className="text-lg text-orange-800 mb-4 leading-relaxed font-medium">
                The Platform
              </p>
              <div className="space-y-4 text-orange-800">
                <p className="text-base leading-relaxed">
                  <strong className="text-orange-900">The Reality:</strong> Git is a "file-based, stateless history." It knows <em>what</em> changed, but it has zero understanding of risk, intent, ownership, or sociological consequence.
                </p>
                <p className="text-base leading-relaxed">
                  <strong className="text-orange-900">The Vision:</strong> Your Semantic Ledger becomes the <strong>system of record for why software exists</strong>. It knows that <em>this</em> block of code exists because of <em>that</em> business requirement, was modified by <em>this</em> agent, and caused <em>that</em> incident.
                </p>
                <div className="grid md:grid-cols-2 gap-3 my-4">
                  <div className="bg-white border border-orange-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">📁</span>
                      <span className="font-bold text-orange-900 text-sm">Git is the Hard Drive</span>
                    </div>
                    <p className="text-xs text-orange-700">Dumb storage of text</p>
                  </div>
                  <div className="bg-orange-100 border border-orange-400 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">🧠</span>
                      <span className="font-bold text-orange-900 text-sm">CodeRisk is the Kernel</span>
                    </div>
                    <p className="text-xs text-orange-700">Permissions, safety, memory, logic</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  <strong className="text-orange-900">The Outcome:</strong> Self-Healing Software. The system not only detects risk but programmatically understands the <em>safest</em> path to fix it based on historical success patterns.
                </p>
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <p className="text-sm font-semibold text-orange-700 italic">
                    "The Universal Cortex that makes your codebase self-aware."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
