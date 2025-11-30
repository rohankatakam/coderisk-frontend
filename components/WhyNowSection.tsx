'use client'

import { motion } from 'framer-motion'

export default function WhyNowSection() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Now?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Jevons Paradox of Code: When AI makes code infinitely cheap, we drown in it.
          </p>
        </motion.div>

        {/* The Crisis Timeline */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left: The Trend */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-8"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                ⚠️
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">The Trend</h3>
              <div className="space-y-3 text-red-800">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">→</span>
                  <p className="text-base leading-relaxed">
                    <strong>AI reduces the cost of code production to near-zero</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">→</span>
                  <p className="text-base leading-relaxed">
                    Cursor, Claude, and Copilot generate entire features in seconds
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">→</span>
                  <p className="text-base leading-relaxed">
                    Developers ship 10x faster than ever before
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: The Consequence */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-400 rounded-xl p-8"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                💥
              </div>
              <h3 className="text-2xl font-bold text-red-950 mb-4">The Consequence</h3>
              <div className="space-y-3 text-red-900">
                <div className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-1">→</span>
                  <p className="text-base leading-relaxed">
                    <strong>We will drown in code</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-1">→</span>
                  <p className="text-base leading-relaxed">
                    Human review capacity is <strong>mathematically incapable</strong> of keeping up
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-700 font-bold mt-1">→</span>
                  <p className="text-base leading-relaxed">
                    The "Service Rate Bottleneck" creates the <strong>"Default-to-Trust" crisis</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              The Critical Gap
            </h3>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              There is <strong>no "Middle Layer"</strong> between the LLM (infinite velocity) and Production (stability requirements).
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-left">
              <p className="text-base md:text-lg leading-relaxed">
                Existing tools only check <strong>syntax</strong> and <strong>content</strong>. They can't answer:
              </p>
              <ul className="mt-4 space-y-2 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-orange-200">•</span>
                  <span>Has this exact code caused production incidents before?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-200">•</span>
                  <span>Who actually understands this system (and are they still here)?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-200">•</span>
                  <span>What other files will break if I change this one?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-200">•</span>
                  <span>Should an autonomous agent be allowed to touch this?</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl px-8 py-6 shadow-lg">
            <svg width="80" height="24" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
              <text x="10" y="42" fontFamily="'Inter', -apple-system, sans-serif" fontSize="32" fontWeight="700" fill="#0F172A" letterSpacing="-0.03em">
                coder<tspan>ı</tspan>sk
              </text>
              <circle cx="96.7" cy="18" r="3.5" fill="#F97316"/>
            </svg>
            <span className="text-2xl font-bold text-gray-800">is that Middle Layer</span>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We sit between infinite AI velocity and human reality, providing the <strong>intelligent governance layer</strong> that makes autonomous software engineering possible.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
