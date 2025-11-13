'use client'

import { useEffect, useState, useRef } from 'react'

interface TerminalScenario {
  file: string
  output: string[]
}

interface ScrollAwareTerminalProps {
  activeScenario: number
}

export default function ScrollAwareTerminal({ activeScenario }: ScrollAwareTerminalProps) {
  // Define scenarios matching the 4 feature cards
  const scenarios: TerminalScenario[] = [
    // Scenario 0: Learn From Past Incidents
    {
      file: 'terminal',
      output: [
        '$ crisk check',
        '',
        'Analyzing changed files...',
        '',
        'HIGH RISK',
        '',
        'payments/stripe.ts',
        '  Linked to 3 production incidents',
        '  • #847: Payment timeout crash (Dec 2, 2024)',
        '  • #712: Stripe API failure (Nov 18, 2024)',
        '  • #623: Transaction rollback bug (Oct 29, 2024)',
        '',
        'Review linked issues before committing',
        '',
        'Analysis complete in 8.2s'
      ]
    },
    // Scenario 1: Know Who to Contact
    {
      file: 'terminal',
      output: [
        '$ crisk check',
        '',
        'Analyzing changed files...',
        '',
        'MEDIUM RISK',
        '',
        'core/email.go',
        '  Unknown code ownership',
        '  • sendEmail function: written by Johnny Chen',
        '  • Johnny left team 2 years ago',
        '  • High complexity, zero recent changes',
        '',
        'Get backup review from current email system owner',
        '',
        'Analysis complete in 7.1s'
      ]
    },
    // Scenario 2: Catch Coupled Dependencies
    {
      file: 'terminal',
      output: [
        '$ crisk check',
        '',
        'Analyzing changed files...',
        '',
        'MEDIUM RISK',
        '',
        'auth/login.ts',
        '  Incomplete change detected',
        '  • session.ts changes with this file 82% of the time',
        '  • You modified login.ts but not session.ts',
        '',
        'Consider updating session.ts to prevent issues',
        '',
        'Analysis complete in 6.7s'
      ]
    },
    // Scenario 3: Results in Under 10 Seconds
    {
      file: 'terminal',
      output: [
        '$ crisk check',
        '',
        'Analyzing changed files...',
        '',
        'LOW RISK',
        '',
        'api/webhook.ts',
        '  No incident history',
        '  Active ownership (you: 89% of commits)',
        '  No co-change patterns detected',
        '',
        'Safe to proceed with standard review',
        '',
        'Analyzed 10,247 commits, 156 incidents',
        'Analysis complete in 5.3s'
      ]
    }
  ]

  const currentScenario = scenarios[activeScenario] || scenarios[0]

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
            terminal
          </div>
        </div>

        {/* Content */}
        <div className="p-6 font-mono text-sm h-[420px] transition-opacity duration-300">
          <div className="space-y-1">
            {currentScenario.output.map((line, index) => {
              // Command line
              if (line.startsWith('$')) {
                return (
                  <div key={index} className="text-green-400 mb-4 font-semibold">
                    {line}
                  </div>
                )
              }

              // Empty line
              if (line === '') {
                return <div key={index} className="h-2"></div>
              }

              // Status indicators
              if (line === 'HIGH RISK') {
                return (
                  <div key={index} className="text-red-400 font-bold text-lg mb-3 tracking-wide">
                    {line}
                  </div>
                )
              }
              if (line === 'MEDIUM RISK') {
                return (
                  <div key={index} className="text-yellow-400 font-bold text-lg mb-3 tracking-wide">
                    {line}
                  </div>
                )
              }
              if (line === 'LOW RISK') {
                return (
                  <div key={index} className="text-green-400 font-bold text-lg mb-3 tracking-wide">
                    {line}
                  </div>
                )
              }

              // File name
              if (line.endsWith('.ts') || line.endsWith('.tsx') || line.endsWith('.js') || line.endsWith('.go')) {
                return (
                  <div key={index} className="text-blue-300 font-semibold text-base mb-2">
                    {line}
                  </div>
                )
              }

              // Bullet points
              if (line.includes('•')) {
                return (
                  <div key={index} className="text-gray-300 text-sm pl-2 leading-relaxed">
                    {line}
                  </div>
                )
              }

              // Analysis complete line
              if (line.includes('Analysis complete')) {
                return (
                  <div key={index} className="text-gray-500 text-xs italic mt-2">
                    {line}
                  </div>
                )
              }

              // Analyzed stats
              if (line.includes('Analyzed')) {
                return (
                  <div key={index} className="text-gray-500 text-xs">
                    {line}
                  </div>
                )
              }

              // Indented descriptive lines (start with spaces)
              if (line.startsWith('  ') && !line.includes('•')) {
                return (
                  <div key={index} className="text-gray-300 text-sm pl-2">
                    {line}
                  </div>
                )
              }

              // Main action lines (recommendations)
              if (!line.startsWith(' ') && line !== '' && !line.startsWith('$') &&
                  line !== 'HIGH RISK' && line !== 'MEDIUM RISK' && line !== 'LOW RISK' &&
                  !line.endsWith('.ts') && !line.endsWith('.tsx') && !line.endsWith('.js') && !line.endsWith('.go')) {
                return (
                  <div key={index} className="text-cyan-300 text-sm font-medium mt-2">
                    {line}
                  </div>
                )
              }

              // Default
              return (
                <div key={index} className="text-gray-400 text-sm">
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
