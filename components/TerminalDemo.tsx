'use client'

import { useEffect, useState } from 'react'

interface TerminalDemoProps {
  activeSlide: number
}

export default function TerminalDemo({ activeSlide }: TerminalDemoProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Scenarios matching the carousel features
  const scenarios = [
    // Slide 0: Incident History
    {
      file: 'src/payments/stripe.ts',
      output: [
        '$ crisk check',
        '',
        '🔴 HIGH RISK',
        '',
        'payments/stripe.ts',
        '  ⚠️  Linked to 3 production incidents',
        '  • #847: Payment timeout (Dec 2)',
        '  • #712: Stripe API failure (Nov 18)',
        '  • #623: Transaction rollback (Oct 29)',
        '',
        '💡 Review incidents before modifying'
      ]
    },
    // Slide 1: Co-Change Detection
    {
      file: 'src/auth/login.ts',
      output: [
        '$ crisk check',
        '',
        '🟡 MEDIUM RISK',
        '',
        'auth/login.ts',
        '  ⚠️  Incomplete change detected',
        '  • session.ts changes with this 82% of the time',
        '  • You modified login.ts but not session.ts',
        '',
        '💡 Did you forget to update session.ts?'
      ]
    },
    // Slide 2: Ownership Staleness
    {
      file: 'src/database/migration.ts',
      output: [
        '$ crisk check',
        '',
        '🟡 MEDIUM RISK',
        '',
        'database/migration.ts',
        '  ⚠️  Stale code ownership',
        '  • Last modified: 2 years ago',
        '  • Original owner: Sarah (left team)',
        '  • High complexity, zero recent changes',
        '',
        '💡 Get backup review before pushing'
      ]
    },
    // Slide 3: Repository-Specific Learning
    {
      file: 'src/api/webhook.ts',
      output: [
        '$ crisk check',
        '',
        '✅ LOW RISK',
        '',
        'api/webhook.ts',
        '  ✓ No incident history',
        '  ✓ Active ownership (you: 89% commits)',
        '  ✓ No co-change patterns detected',
        '',
        '📊 Analysis: 10,247 commits, 156 incidents'
      ]
    }
  ]

  // Sync with parent carousel
  useEffect(() => {
    if (activeSlide !== currentSlide) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(activeSlide)
        setIsTransitioning(false)
      }, 200) // Quick fade transition
    }
  }, [activeSlide, currentSlide])

  const currentScenario = scenarios[currentSlide]

  return (
    <div className="relative w-full h-full">
      {/* Terminal Window */}
      <div className="bg-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden border border-gray-700">
        {/* Header */}
        <div className="bg-[#0a0a0a] px-4 py-3 flex items-center gap-2 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-gray-400 text-xs font-mono">
            terminal — {currentScenario.file}
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 font-mono text-sm h-[380px] transition-opacity duration-200 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="space-y-1">
            {currentScenario.output.map((line, index) => {
              // Command line
              if (line.startsWith('$')) {
                return (
                  <div key={index} className="text-green-400 mb-3">
                    {line}
                  </div>
                )
              }

              // Empty line
              if (line === '') {
                return <div key={index} className="h-2"></div>
              }

              // Status indicators
              if (line.includes('🔴 HIGH RISK')) {
                return (
                  <div key={index} className="text-red-400 font-bold text-base mb-2">
                    {line}
                  </div>
                )
              }
              if (line.includes('🟡 MEDIUM RISK')) {
                return (
                  <div key={index} className="text-yellow-400 font-bold text-base mb-2">
                    {line}
                  </div>
                )
              }
              if (line.includes('✅ LOW RISK')) {
                return (
                  <div key={index} className="text-green-400 font-bold text-base mb-2">
                    {line}
                  </div>
                )
              }

              // File name
              if (line.endsWith('.ts') || line.endsWith('.tsx') || line.endsWith('.js')) {
                return (
                  <div key={index} className="text-blue-300 font-semibold mb-2">
                    {line}
                  </div>
                )
              }

              // Warning/info lines
              if (line.includes('⚠️') || line.includes('•')) {
                return (
                  <div key={index} className="text-gray-300 text-xs pl-2">
                    {line}
                  </div>
                )
              }

              // Success checks
              if (line.includes('✓')) {
                return (
                  <div key={index} className="text-green-400 text-xs pl-2">
                    {line}
                  </div>
                )
              }

              // Recommendations
              if (line.includes('💡')) {
                return (
                  <div key={index} className="text-cyan-400 text-xs font-semibold mt-2">
                    {line}
                  </div>
                )
              }

              // Stats
              if (line.includes('📊')) {
                return (
                  <div key={index} className="text-gray-500 text-xs mt-2">
                    {line}
                  </div>
                )
              }

              // Default
              return (
                <div key={index} className="text-gray-400">
                  {line}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
