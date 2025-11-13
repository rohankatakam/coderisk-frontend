'use client'

import { useEffect, useState, useRef } from 'react'
import ScrollAwareTerminal from './ScrollAwareTerminal'

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const featureRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ]

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    featureRefs.forEach((ref, index) => {
      if (!ref.current) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
              setActiveFeature(index)
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
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
      {/* Left: Terminal Demo - Sticky (Desktop Only) */}
      <div className="hidden lg:block lg:sticky lg:top-32">
        <ScrollAwareTerminal activeScenario={activeFeature} />
      </div>

      {/* Right: Feature Cards */}
      <div className="space-y-6">
        {/* Feature 1: Learn From Past Incidents */}
        <div
          ref={featureRefs[0]}
          className={`bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 hover:shadow-lg transition-all ${
            activeFeature === 0 ? 'border-4 border-blue-500 shadow-xl' : 'border border-blue-200'
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-blue-900 font-bold text-lg">Learn From Past Incidents</div>
          </div>
          <p className="text-base text-blue-800 leading-relaxed mb-4">
            Automatically connects your changes to past production incidents in the same files. Know what went wrong before, so history doesn't repeat.
          </p>

          {/* Mobile Terminal Snippet */}
          <div className="lg:hidden bg-black rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <div className="text-cyan-400">Linked to 3 production incidents</div>
            <div className="text-gray-400 mt-1">• #847: Payment timeout crash</div>
          </div>
        </div>

        {/* Feature 2: Know Who to Contact */}
        <div
          ref={featureRefs[1]}
          className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-lg transition-all ${
            activeFeature === 1 ? 'border-4 border-purple-500 shadow-xl' : 'border border-purple-200'
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-purple-900 font-bold text-lg">Know Who to Contact</div>
          </div>
          <p className="text-base text-purple-800 leading-relaxed mb-4">
            Identifies current maintainers and original authors. Reach out for context before you commit, not after the damage is done.
          </p>

          {/* Mobile Terminal Snippet */}
          <div className="lg:hidden bg-black rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <div className="text-purple-400">Current owner: @sarah-dev</div>
            <div className="text-gray-400 mt-1">Original author: @mike-tech</div>
          </div>
        </div>

        {/* Feature 3: Catch Coupled Dependencies */}
        <div
          ref={featureRefs[2]}
          className={`bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-lg transition-all ${
            activeFeature === 2 ? 'border-4 border-green-500 shadow-xl' : 'border border-green-200'
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <div className="text-green-900 font-bold text-lg">Catch Coupled Dependencies</div>
          </div>
          <p className="text-base text-green-800 leading-relaxed mb-4">
            Detects files that frequently change together. Update all related files in one go—avoid the incomplete change that breaks production.
          </p>

          {/* Mobile Terminal Snippet */}
          <div className="lg:hidden bg-black rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <div className="text-yellow-400">⚠ Missing co-change file</div>
            <div className="text-gray-400 mt-1">Consider updating: config.ts</div>
          </div>
        </div>

        {/* Feature 4: Results in Under 10 Seconds */}
        <div
          ref={featureRefs[3]}
          className={`bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 hover:shadow-lg transition-all ${
            activeFeature === 3 ? 'border-4 border-orange-500 shadow-xl' : 'border border-orange-200'
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-orange-900 font-bold text-lg">Results in Under 10 Seconds</div>
          </div>
          <p className="text-base text-orange-800 leading-relaxed mb-4">
            Complete risk analysis faster than you can context-switch. Stay in flow, ship with confidence.
          </p>

          {/* Mobile Terminal Snippet */}
          <div className="lg:hidden bg-black rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <div className="text-green-400">✓ Analysis complete: 8.2s</div>
            <div className="text-gray-400 mt-1">Risk Level: MEDIUM</div>
          </div>
        </div>
      </div>
    </div>
  )
}
