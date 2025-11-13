'use client'

import { useState } from 'react'
import CriskInitAnimation from './CriskInitAnimation'
import CriskCheckAnimation from './CriskCheckAnimation'

export default function AnimatedHowItWorks() {
  const [isPausedInit, setIsPausedInit] = useState(false)
  const [isPausedCheck, setIsPausedCheck] = useState(false)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 flex items-center justify-center gap-3">
            <span>How</span>
            <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-12 md:h-14">
              <text x="10" y="42" fontFamily="'Inter', -apple-system, sans-serif" fontSize="32" fontWeight="700" fill="currentColor" letterSpacing="-0.03em">
                coder<tspan>ı</tspan>sk
              </text>
              <circle cx="96.7" cy="18" r="3.5" fill="#F97316"/>
            </svg>
            <span>Works</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Two powerful commands that transform your development workflow
          </p>
        </div>

        {/* Animations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* crisk init Animation */}
          <div className="flex items-start">
            <div className="w-full h-full">
              <CriskInitAnimation isPaused={isPausedInit} onTogglePause={() => setIsPausedInit(!isPausedInit)} />
            </div>
          </div>

          {/* crisk check Animation */}
          <div className="flex items-start">
            <div className="w-full h-full">
              <CriskCheckAnimation isPaused={isPausedCheck} onTogglePause={() => setIsPausedCheck(!isPausedCheck)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
