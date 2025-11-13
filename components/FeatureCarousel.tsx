'use client'

import { useEffect, useState } from 'react'

interface FeatureCarouselProps {
  onSlideChange?: (slideIndex: number) => void
}

export default function FeatureCarousel({ onSlideChange }: FeatureCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0)

  const features = [
    {
      title: 'Links Past Incidents to Code',
      subtitle: 'Stops you from repeating production failures',
      example: 'This file caused 3 production incidents. Review linked issues before modifying.'
    },
    {
      title: 'Detects Co-Change Patterns',
      subtitle: 'Finds files that change together',
      example: 'You modified auth.ts, but session.ts changes with it 82% of the time. Incomplete change detected.'
    },
    {
      title: 'Tracks Code Ownership',
      subtitle: 'Identifies stale and risky territory',
      example: 'Last modified 2 years ago by Sarah (left team). High complexity, zero recent changes. Get backup review.'
    },
    {
      title: 'Repository-Specific Intelligence',
      subtitle: 'Not generic rules—YOUR codebase',
      example: 'Analyzed 10,247 commits and 156 incidents from your repository. Knows YOUR patterns and risks.'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % features.length
        onSlideChange?.(next)
        return next
      })
    }, 3000)
    return () => clearInterval(timer)
  }, [features.length, onSlideChange])

  // Notify parent of initial slide
  useEffect(() => {
    onSlideChange?.(0)
  }, [onSlideChange])

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-gray-200 min-h-[180px] shadow-sm">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index === activeSlide
                ? 'opacity-100 block'
                : 'opacity-0 hidden'
            }`}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600">{feature.subtitle}</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-3 border border-gray-300 shadow-sm">
                <p className="text-sm text-gray-800 leading-relaxed">
                  {feature.example}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSlide(index)
              onSlideChange?.(index)
            }}
            className={`h-2 rounded-full transition-all ${
              index === activeSlide
                ? 'bg-black w-8'
                : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
