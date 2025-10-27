'use client'

import { useEffect, useState } from 'react'

export default function FeatureCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)

  const features = [
    {
      title: 'Ownership Context',
      subtitle: 'Who to coordinate with',
      example: 'Modified by Sarah (80% commits), last changed 2 months ago'
    },
    {
      title: 'Blast Radius',
      subtitle: 'What might break',
      example: 'This change affects 12 dependent files across 3 services'
    },
    {
      title: 'Co-Change Detection',
      subtitle: 'What changes together',
      example: 'When auth.ts changes, session.ts is usually updated too'
    },
    {
      title: 'Incident History',
      subtitle: 'What failed before',
      example: 'This file caused 3 incidents in the last 6 months'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [features.length])

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 min-h-[140px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index === activeSlide
                ? 'opacity-100 block'
                : 'opacity-0 hidden'
            }`}
          >
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.subtitle}</p>
              </div>
              <div className="bg-white rounded px-3 py-2 border border-gray-200">
                <p className="text-sm text-gray-700 italic">
                  "{feature.example}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeSlide
                ? 'bg-gray-900 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
