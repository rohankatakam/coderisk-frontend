import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import TerminalDemo from '@/components/TerminalDemo'
import FeatureCarousel from '@/components/FeatureCarousel'

export default function Home() {
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
              Prevent Incidents
              <br />
              Before Commit
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600">
              Learn from your incident history.
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
            <FeatureCarousel />
          </div>

          {/* Right Side - Terminal Demo */}
          <div className="lg:block hidden">
            <TerminalDemo />
          </div>
        </div>

        {/* AI Development Workflow */}
        <div className="pt-24 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Works with your AI development workflow
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use CodeRisk with Claude Code, Cursor, Copilot, CodeRabbit, and Greptile. We fit into the modern AI development stack—catching incident risks before code review.
            </p>
          </div>

          {/* Workflow Diagram */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-sm font-semibold text-gray-900 mb-2">Generate</div>
                <div className="text-xs text-gray-600">Claude Code, Cursor, Copilot</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-500">
                <div className="text-sm font-semibold text-gray-900 mb-2">Risk Check</div>
                <div className="text-xs text-gray-600">CodeRisk (pre-commit)</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-sm font-semibold text-gray-900 mb-2">Review</div>
                <div className="text-xs text-gray-600">CodeRabbit, Greptile</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-sm font-semibold text-gray-900 mb-2">Deploy</div>
                <div className="text-xs text-gray-600">CI/CD Pipeline</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="pt-24 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Simple Pricing
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-lg font-semibold mb-2">Self-Hosted</div>
              <div className="text-2xl font-bold mb-4">$3-5<span className="text-base font-normal text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• BYOK (OpenAI API)</li>
                <li>• Full source code (MIT)</li>
                <li>• Local Docker deployment</li>
                <li>• ~100 checks/month</li>
              </ul>
            </div>
            <div className="border-2 border-black rounded-lg p-6">
              <div className="text-lg font-semibold mb-2">Cloud</div>
              <div className="text-2xl font-bold mb-4">$10-50<span className="text-base font-normal text-gray-600">/user/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Zero DevOps overhead</li>
                <li>• Team collaboration</li>
                <li>• Instant setup (30s)</li>
                <li>• Unlimited checks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-24 pb-16 text-center space-y-6 border-t border-gray-200 mt-24">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to prevent regressions from the start?
          </h2>
          <p className="text-gray-600">
            Reach out to <a href="mailto:rohankatakam@gmail.com" className="text-black font-medium hover:underline">rohankatakam@gmail.com</a> for inquiries
          </p>
          <div className="text-sm text-gray-500 mt-8">
            Built by CodeRisk Team
          </div>
        </div>
      </main>
    </div>
  );
}
