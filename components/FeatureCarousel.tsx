'use client'

import { useEffect, useState } from 'react'

interface FeatureCarouselProps {
  onSlideChange?: (slideIndex: number) => void
}

export default function FeatureCarousel({ onSlideChange }: FeatureCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0)

  const features = [
    {
      title: 'Knows Your Incident History',
      subtitle: 'Stops you from repeating past mistakes',
      example: '⚠️ This file caused 3 production incidents. Review the linked issues before changing.'
    },
    {
      title: 'Catches Incomplete Changes',
      subtitle: 'Files that change together',
      example: '⚠️ You modified auth.ts, but session.ts changes with it 80% of the time. Did you forget it?'
    },
    {
      title: 'Flags Stale Code',
      subtitle: 'Warns about risky territory',
      example: '⚠️ Last modified 2 years ago by Sarah (now gone). High-risk change—get backup.'
    },
    {
      title: 'Learns Your Codebase',
      subtitle: 'Not generic, yours',
      example: '✅ Analyzed 10K commits from your repo. Knows YOUR patterns, YOUR risks.'
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
            onClick={() => {
              setActiveSlide(index)
              onSlideChange?.(index)
            }}
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
