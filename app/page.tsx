'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import TerminalDemo from '@/components/TerminalDemo'
import FeatureCarousel from '@/components/FeatureCarousel'
import { useState } from 'react'

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl">CodeRisk</div>
          <div className="flex gap-6 items-center">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Stop Breaking
              <br />
              Production
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600">
              Know if your code will cause an incident—before code review.
            </p>

            {/* Quick Start Command */}
            <div>
              <div className="inline-block bg-gray-100 px-6 py-4 rounded-lg">
                <code className="text-sm font-mono text-gray-800">
                  brew install crisk
                </code>
              </div>
            </div>

            {/* Feature Carousel */}
            <FeatureCarousel onSlideChange={setActiveSlide} />
          </div>

          {/* Right Side - Terminal Demo */}
          <div className="lg:block hidden">
            <TerminalDemo activeSlide={activeSlide} />
          </div>
        </div>

        {/* Problem Section */}
        <div className="pt-24 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              You've seen this before
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your team ships fast. But production incidents keep happening. The same files break. The same patterns repeat.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-red-900 font-semibold mb-2">😰 The Incident Call</div>
              <p className="text-sm text-red-800">
                "Production is down. Your PR from yesterday broke payments. Can you hop on?"
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-red-900 font-semibold mb-2">🤦 The Incomplete Change</div>
              <p className="text-sm text-red-800">
                You updated auth.ts but forgot session.ts always changes with it. Now 500 errors everywhere.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-red-900 font-semibold mb-2">👻 The Stale Code</div>
              <p className="text-sm text-red-800">
                You modified a file no one's touched in 2 years. The original owner left. It broke.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-red-900 font-semibold mb-2">🔁 The Same File, Again</div>
              <p className="text-sm text-red-800">
                "Didn't we just fix this file last week? Why does it keep breaking?"
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="text-center space-y-4 pt-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              CodeRisk catches these before you push
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Run <code className="bg-gray-100 px-2 py-1 rounded text-sm">crisk check</code> and know if your change will break production—in 5 seconds.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="pt-24 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              How it works
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analyzes your repository's history</h3>
                <p className="text-gray-600">
                  CodeRisk scans your Git history, issues, and past incidents to learn what breaks in YOUR codebase.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">You make changes, run one command</h3>
                <p className="text-gray-600">
                  Before pushing, run <code className="bg-gray-100 px-2 py-1 rounded text-sm">crisk check</code>. Get results in 5 seconds.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Get warnings about risky changes</h3>
                <p className="text-gray-600">
                  See if your code matches past incident patterns, incomplete changes, or stale files—before anyone else sees it.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fix issues privately, push confidently</h3>
                <p className="text-gray-600">
                  No embarrassing PR comments. No production fires. Just clean code that ships safely.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="pt-24 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Simple Pricing
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-lg font-semibold mb-2">Individual</div>
              <div className="text-2xl font-bold mb-4">Free<span className="text-base font-normal text-gray-600"></span></div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• BYOK (bring your own key)</li>
                <li>• Local-first</li>
                <li>• Open source core</li>
                <li>• You control LLM costs</li>
              </ul>
            </div>
            <div className="border-2 border-black rounded-lg p-6">
              <div className="text-lg font-semibold mb-2">Teams</div>
              <div className="text-2xl font-bold mb-4">$500<span className="text-base font-normal text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• 5-50 developers</li>
                <li>• Team analytics</li>
                <li>• Shared key management</li>
                <li>• Priority support</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-lg font-semibold mb-2">Enterprise</div>
              <div className="text-2xl font-bold mb-4">$2,000<span className="text-base font-normal text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• 50+ developers</li>
                <li>• On-prem deployment</li>
                <li>• SSO & custom integrations</li>
                <li>• Dedicated support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-24 pb-16 text-center space-y-6 border-t border-gray-200 mt-24">
          <h2 className="text-2xl md:text-3xl font-bold">
            Stop the next production incident before it happens
          </h2>
          <p className="text-gray-600">
            Join teams who catch breaking changes before code review.
          </p>
          <p className="text-gray-600">
            <a href="mailto:rohan@coderisk.dev" className="text-black font-medium hover:underline">rohankatakam@gmail.com</a>
          </p>
          <div className="text-sm text-gray-500 mt-8">
            Built by CodeRisk Team
          </div>
        </div>
      </main>
    </div>
  );
}
