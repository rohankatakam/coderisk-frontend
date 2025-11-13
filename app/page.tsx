'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import TerminalDemo from '@/components/TerminalDemo'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="120" height="36" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
              <text x="10" y="42" fontFamily="'Inter', -apple-system, sans-serif" fontSize="32" fontWeight="700" fill="#0F172A" letterSpacing="-0.03em">
                coderisk
              </text>
              <circle cx="95" cy="17" r="4" fill="#F97316"/>
            </svg>
          </div>
          <div className="flex gap-6 items-center">
            <a href="https://rohankatakam.substack.com/p/the-ai-accelerated-bottleneck" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-black transition-colors">
              Thesis
            </a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors flex items-center gap-1">
              Whitepaper
              <span className="text-[10px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded font-medium">Coming Soon</span>
            </a>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm text-gray-700 hover:text-black transition-colors">
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
      <main className="max-w-7xl mx-auto px-6 pt-28 pb-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-10">
            {/* Main Headline */}
            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Stop Breaking Production
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Catch breaking changes before you commit
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Know if your code will cause a production incident—before code review. CodeRisk analyzes your repository's history to warn you about risky changes.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 items-center pt-2">
              <a href="#" className="inline-flex items-center justify-center bg-[#F97316] text-white px-7 py-3.5 rounded-lg text-base font-bold hover:bg-[#EA580C] transition-all shadow-lg hover:shadow-xl lowercase">
                book a demo
              </a>
              <a href="https://rohankatakam.substack.com/p/the-ai-accelerated-bottleneck" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-[#0F172A] text-[#0F172A] px-7 py-3.5 rounded-lg text-base font-bold hover:bg-[#0F172A] hover:text-white transition-all lowercase">
                read our thesis
              </a>
            </div>
          </div>

          {/* Right Side - Terminal Demo */}
          <div className="lg:block hidden">
            <TerminalDemo />
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="pt-24 pb-20">
          <div className="text-center space-y-10">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
              Problem Validated With Engineers At
            </p>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-50">
              <a
                href="https://www.microsoft.com/en-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                <img
                  src="https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png"
                  alt="Microsoft"
                  className="h-7 w-auto object-contain grayscale"
                />
              </a>
              <a
                href="https://www.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                <img
                  src="https://logoeps.com/wp-content/uploads/2025/02/amazon_icon_logo-logo_brandlogos.net_fgndw.png"
                  alt="Amazon"
                  className="h-7 w-auto object-contain grayscale"
                />
              </a>
              <a
                href="https://www.oracle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Oracle_Corporation_logo.svg/2560px-Oracle_Corporation_logo.svg.png"
                  alt="Oracle"
                  className="h-7 w-auto object-contain grayscale"
                />
              </a>
              <a
                href="https://www.commure.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                <img
                  src="https://cdn.prod.website-files.com/66cdf84d5ef945a2f765fc6b/66faf09676a60c90a759820c_64948c6d7e083bfdbd5cde4c_commure-logo.png"
                  alt="Commure"
                  className="h-7 w-auto object-contain grayscale"
                />
              </a>
              <a
                href="https://www.workday.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                <img
                  src="https://workday.wfu.edu/files/2020/02/workday_logo_herobutton.png"
                  alt="Workday"
                  className="h-7 w-auto object-contain grayscale"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Problem Section */}
        <div className="pt-24 space-y-14">
          <div className="text-center space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold">
              The Problem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your team ships fast. But production incidents keep happening. The same files break. The same patterns repeat.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="text-red-900 font-bold text-lg">The Incident Call</div>
              </div>
              <p className="text-base text-red-800 leading-relaxed">
                "Production is down. Your PR from yesterday broke payments. Can you hop on?"
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-orange-900 font-bold text-lg">The Incomplete Change</div>
              </div>
              <p className="text-base text-orange-800 leading-relaxed">
                You updated auth.ts but forgot session.ts always changes with it. Now 500 errors everywhere.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-purple-900 font-bold text-lg">Code Ownership</div>
              </div>
              <p className="text-base text-purple-800 leading-relaxed">
                "Who wrote the sendEmail function in core.go? Johnny left 2 years ago. Now you're modifying code with zero context."
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="text-blue-900 font-bold text-lg">The Same File, Again</div>
              </div>
              <p className="text-base text-blue-800 leading-relaxed">
                "Didn't we just fix this file last week? Why does it keep breaking?"
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="text-center space-y-6 pt-12">
            <h3 className="text-3xl md:text-4xl font-bold">
              CodeRisk catches these before you commit
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get instant risk analysis in your terminal. Know if your change will break production—in under 10 seconds.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple, fast, and built for developers
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              <div className="flex gap-8 items-start bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Learns From Your Past Incidents</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    CodeRisk builds connections between your past production incidents and the code that caused them—so you never repeat the same mistake twice.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Check Your Changes</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Before committing, run a quick check. Get instant warnings about past incidents, related files, and ownership issues—in seconds.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-600 to-red-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Ship With Confidence</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Fix issues before anyone else sees them. No embarrassing code review comments. No production fires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Simple Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Start free. Scale as you grow.
              </p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all bg-white">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Individual</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">Free</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>BYOK (bring your own key)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Local-first architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Open source core</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>You control LLM costs</span>
                    </li>
                  </ul>
                  <a href="#" className="block w-full text-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-black hover:text-black transition-all">
                    Get Started
                  </a>
                </div>
              </div>

              <div className="border-2 border-black rounded-2xl p-8 relative shadow-xl bg-white">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Teams</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">$500</span>
                      <span className="text-xl text-gray-600">/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>5-50 developers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Team analytics dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Shared key management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <a href="#" className="block w-full text-center bg-[#F97316] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#EA580C] transition-all shadow-lg lowercase">
                    book a demo
                  </a>
                </div>
              </div>

              <div className="border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all bg-white">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">$2,000</span>
                      <span className="text-xl text-gray-600">/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>50+ developers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>On-premises deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>SSO & custom integrations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                  <a href="#" className="block w-full text-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-black hover:text-black transition-all">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-32 pb-24 border-t border-gray-200 mt-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Stop the Next Production Incident Before It Happens
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join teams preventing regressions before code review
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="#" className="inline-flex items-center justify-center bg-[#F97316] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#EA580C] transition-all shadow-lg hover:shadow-xl lowercase">
                book a demo
              </a>
              <a href="mailto:rohan@coderisk.dev" className="inline-flex items-center justify-center border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#0F172A] hover:text-white transition-all lowercase">
                contact us
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center items-center">
              <div className="text-sm text-gray-500">
                © 2025 CodeRisk. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
