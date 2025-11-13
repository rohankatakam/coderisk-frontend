'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import IncidentTimelineAnimation from '@/components/IncidentTimelineAnimation'
import FeaturesSection from '@/components/FeaturesSection'
import ArchitectureDiagram from '@/components/ArchitectureDiagram'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="120" height="36" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
              <text x="10" y="42" fontFamily="'Inter', -apple-system, sans-serif" fontSize="32" fontWeight="700" fill="#0F172A" letterSpacing="-0.03em">
                coder<tspan>ı</tspan>sk
              </text>
              <circle cx="96.7" cy="18" r="3.5" fill="#F97316"/>
            </svg>
          </div>
          <div className="flex gap-6 items-center">
            <a href="https://rohankatakam.substack.com/p/the-ai-accelerated-bottleneck" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-[#0F172A] transition-colors">
              Thesis
            </a>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm text-gray-700 hover:text-[#0F172A] transition-colors">
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
                Know if your code will cause an incident—in under 10 seconds
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 items-center pt-2">
              <a href="https://calendly.com/rohankatakam" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#F97316] text-white px-7 py-3.5 rounded-lg text-base font-bold hover:bg-[#EA580C] transition-all shadow-lg hover:shadow-xl">
                Book a Demo
              </a>
              <a href="https://rohankatakam.substack.com/p/the-ai-accelerated-bottleneck" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-[#0F172A] text-[#0F172A] px-7 py-3.5 rounded-lg text-base font-bold hover:bg-[#0F172A] hover:text-white transition-all">
                Read Our Thesis
              </a>
            </div>
          </div>

          {/* Right Side - Interactive Animation */}
          <div className="lg:block hidden">
            <IncidentTimelineAnimation />
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="pt-24 pb-20">
          <div className="text-center space-y-10">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
              Validated With Engineers At
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

        {/* Features Section */}
        <div className="pt-24 space-y-14">
          <div className="text-center space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold">
              Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Gives you the context and confidence to ship fearlessly—every single time.
            </p>
          </div>

          {/* Features with Scroll-Aware Terminal */}
          <FeaturesSection />
        </div>

        {/* How It Works */}
        <div className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                AI-powered risk detection in under 10 seconds
              </p>
            </div>

            {/* Architecture Diagram */}
            <div className="max-w-7xl mx-auto mb-16">
              <ArchitectureDiagram />
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
                  <a href="#" className="block w-full text-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-[#0F172A] hover:text-[#0F172A] transition-all">
                    Get Started
                  </a>
                </div>
              </div>

              <div className="border-2 border-[#0F172A] rounded-2xl p-8 relative shadow-xl bg-white">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0F172A] text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                  <a href="https://calendly.com/rohankatakam" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#F97316] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#EA580C] transition-all shadow-lg">
                    Book a Demo
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
                  <a href="#" className="block w-full text-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-[#0F172A] hover:text-[#0F172A] transition-all">
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
              <a href="https://calendly.com/rohankatakam" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#F97316] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#EA580C] transition-all shadow-lg hover:shadow-xl">
                Book a Demo
              </a>
              <a href="mailto:rohan@coderisk.dev" className="inline-flex items-center justify-center border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#0F172A] hover:text-white transition-all">
                Contact Us
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
