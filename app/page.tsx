'use client'

import TerminalDemo from '@/components/TerminalDemo'
import AnimatedHowItWorks from '@/components/AnimatedHowItWorks'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="120" height="36" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
              <text x="10" y="42" fontFamily="'Inter', -apple-system, sans-serif" fontSize="32" fontWeight="700" fill="#0F172A" letterSpacing="-0.03em">
                coder<tspan>ı</tspan>sk
              </text>
              <circle cx="96.7" cy="18" r="3.5" fill="#F97316"/>
            </svg>
          </div>
          <div className="flex gap-6 items-center">
            <a href="https://rohankatakam.substack.com/p/the-ai-accelerated-bottleneck" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#0F172A] transition-colors">
              Thesis
            </a>
            <a href="https://github.com/rohankatakam/coderisk" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#0F172A] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8 pt-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                Know what to review before you push.
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Git knows what changed. CodeRisk adds coupling, co-change history, tests, and ownership context.
              </p>
            </div>

            {/* Install Command */}
            <div className="space-y-3">
              <div className="bg-[#1a1a1a] rounded-lg p-4 font-mono text-sm inline-block">
                <span className="text-gray-500">$</span>
                <span className="text-white ml-2">git clone https://github.com/rohankatakam/coderisk.git</span>
                <button
                  onClick={() => navigator.clipboard.writeText('git clone https://github.com/rohankatakam/coderisk.git')}
                  className="ml-4 text-gray-500 hover:text-white transition-colors"
                  title="Copy to clipboard"
                >
                  <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Then: <code className="bg-gray-100 px-2 py-1 rounded text-xs">cd coderisk &amp;&amp; make build</code>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 items-center">
              <a href="https://github.com/rohankatakam/coderisk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#0F172A] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#1e293b] transition-all">
                View on GitHub
              </a>
              <a href="https://rohankatakam.substack.com/p/the-ai-accelerated-bottleneck" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-[#0F172A] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all">
                Read Thesis
              </a>
            </div>
          </div>

          {/* Right Side - Terminal Demo */}
          <div className="lg:block">
            <TerminalDemo />
          </div>
        </div>

        {/* Value Props */}
        <div className="mt-24 pt-12 border-t border-gray-100">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#0F172A]">Impact</div>
              <div className="text-sm text-gray-500 mt-1">Surfaces dependencies and historical co-change</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0F172A]">Ownership</div>
              <div className="text-sm text-gray-500 mt-1">Shows who has worked in the area before</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0F172A]">Evidence</div>
              <div className="text-sm text-gray-500 mt-1">Explains risk with tests, history, and incidents</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <AnimatedHowItWorks />

        {/* Simple CTA */}
        <div className="mt-24 pt-16 border-t border-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Review changes with repository evidence.
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            CodeRisk is a source-built prototype for inspecting code-change risk before review.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/rohankatakam/coderisk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#0F172A] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#1e293b] transition-all">
              Read the README
            </a>
            <a href="mailto:rohan@coderisk.dev" className="inline-flex items-center justify-center border border-gray-300 text-[#0F172A] px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-50 transition-all">
              Contact Us
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-100">
          <div className="flex justify-center items-center">
            <div className="text-sm text-gray-400">
              © 2026 CodeRisk. MIT licensed.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
