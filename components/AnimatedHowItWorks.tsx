'use client'

import { useState } from 'react'
import CriskCheckAnimation from './CriskCheckAnimation'

export default function AnimatedHowItWorks() {
  const [isPausedCheck, setIsPausedCheck] = useState(false)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
            How It Works
          </h2>
          <p className="text-base text-[#475569] max-w-xl mx-auto">
            One command turns indexed repository history into review context.
          </p>
        </div>

        {/* Single Animation - Centered */}
        <div className="max-w-2xl mx-auto">
          <CriskCheckAnimation isPaused={isPausedCheck} onTogglePause={() => setIsPausedCheck(!isPausedCheck)} />
        </div>
      </div>
    </section>
  )
}
