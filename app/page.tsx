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
            <a href="https://github.com/rohankatakam/coderisk#readme" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-600 transition-colors">
              Docs
            </a>
            <a href="/pricing" className="text-sm hover:text-gray-600 transition-colors">
              Pricing
            </a>
            <a href="/open-source" className="text-sm hover:text-gray-600 transition-colors">
              Open Source
            </a>
            <a
              href="https://github.com/rohankatakam/coderisk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              GitHub
            </a>
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
          <div className="space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Prevent Incidents
              <br />
              Before Commit
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600">
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

        {/* Positioning Statement */}
        <div className="pt-24 space-y-6 text-center">
          <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">
            Complementary to CodeRabbit
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            CodeRabbit checks quality. CodeRisk prevents regressions.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We run before commit, catching incident risks early. CodeRabbit runs at PR review, ensuring code quality. Use both for complete protection.
          </p>
        </div>

        {/* How It Works */}
        <div className="pt-24 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            How it works
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="font-mono text-sm text-gray-600 mb-2">Step 1</div>
              <div className="font-semibold mb-2">Write code with AI tools</div>
              <div className="text-gray-600 text-sm">
                Use Cursor, GitHub Copilot, or Claude Code to write code quickly
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="font-mono text-sm text-gray-600 mb-2">Step 2</div>
              <div className="font-semibold mb-2">Check risk before commit</div>
              <div className="text-gray-600 text-sm mb-3">
                Run CodeRisk to identify potential incidents before committing
              </div>
              <code className="text-xs font-mono bg-gray-100 px-3 py-2 rounded block">
                crisk check
              </code>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="font-mono text-sm text-gray-600 mb-2">Step 3</div>
              <div className="font-semibold mb-2">Review findings and commit</div>
              <div className="text-gray-600 text-sm">
                See incident history, ownership context, and blast radius analysis
              </div>
            </div>
          </div>
        </div>

        {/* Installation Instructions */}
        <div id="install" className="pt-24 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Installation
          </h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto">
            One-time setup: 17 minutes per repository. Subsequent checks run in under 5 seconds.
          </p>
          <div className="bg-gray-50 rounded-lg p-8 space-y-4 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Step 1: Install CLI</div>
              <code className="block bg-white px-4 py-3 rounded font-mono text-sm">
                brew tap rohankatakam/coderisk<br/>brew install crisk
              </code>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Step 2: Configure API key</div>
              <code className="block bg-white px-4 py-3 rounded font-mono text-sm">
                crisk configure
              </code>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Step 3: Start infrastructure</div>
              <code className="block bg-white px-4 py-3 rounded font-mono text-sm">
                docker compose up -d
              </code>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Step 4: Initialize repository</div>
              <code className="block bg-white px-4 py-3 rounded font-mono text-sm">
                cd your-repo<br/>crisk init-local
              </code>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Step 5: Check for risks</div>
              <code className="block bg-white px-4 py-3 rounded font-mono text-sm">
                crisk check
              </code>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm max-w-xl mx-auto">
            <strong>Requirements:</strong> OpenAI API key + Docker Desktop
            <br/>
            <strong>Cost:</strong> $0.03-0.05 per check (approximately $3-5 monthly for 100 checks)
          </p>
        </div>

        {/* Open Source Section */}
        <div className="pt-24 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Open Source
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            MIT licensed CLI with full source code access. Self-host for complete privacy and control.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Core Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• CLI tool with full source code</li>
                <li>• Incident history linking</li>
                <li>• Ownership context tracking</li>
                <li>• Blast radius prediction</li>
                <li>• Co-change pattern detection</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• OpenAI API key</li>
                <li>• Docker Desktop</li>
                <li>• 17-minute setup per repository</li>
                <li>• <strong>Cost: $3-5 monthly for 100 checks</strong></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-4">
            <a
              href="https://github.com/rohankatakam/coderisk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors mr-4"
            >
              View on GitHub
            </a>
            <a
              href="https://github.com/rohankatakam/coderisk/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              MIT License
            </a>
          </div>
        </div>

        {/* Cloud Platform Teaser */}
        <div className="pt-24 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Cloud Platform
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Managed infrastructure with zero DevOps overhead for teams
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="font-semibold">Zero Setup</div>
              <div className="text-sm text-gray-600">30 seconds, no Docker or initialization</div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-semibold">Team Collaboration</div>
              <div className="text-sm text-gray-600">Shared graphs across your team</div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-semibold">Pre-built Cache</div>
              <div className="text-sm text-gray-600">Instant access for popular frameworks</div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-semibold">Auto-Updates</div>
              <div className="text-sm text-gray-600">Webhooks sync on every push</div>
            </div>
          </div>
          <div className="text-center space-y-4 pt-4">
            <div className="text-lg text-gray-600">
              Self-hosted: $3-5/month for 100 checks • Cloud: $10-50 per user/month
            </div>
            <div className="flex gap-4 justify-center">
              <a href="/pricing">
                <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                  View Pricing
                </button>
              </a>
              <a href="/pricing">
                <button className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                  Contact Sales
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Beta Testing */}
        <div className="pt-24 text-center space-y-6">
          <div className="text-sm text-gray-500 uppercase tracking-wider">
            Beta
          </div>
          <div className="text-gray-600 max-w-md mx-auto">
            Currently testing with Series A and B engineering teams.
            <a href="https://github.com/rohankatakam/coderisk" className="text-black font-medium hover:underline ml-1">
              Join the beta
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <div className="font-bold mb-4">CodeRisk</div>
              <div className="text-sm text-gray-600">
                Pre-commit risk scanner with incident history intelligence
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Product</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="#install" className="hover:text-black">Installation</a></div>
                <div><a href="/pricing" className="hover:text-black">Pricing</a></div>
                <div><a href="https://github.com/rohankatakam/coderisk#readme" target="_blank" rel="noopener noreferrer" className="hover:text-black">Docs</a></div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Open Source</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="https://github.com/rohankatakam/coderisk" target="_blank" rel="noopener noreferrer" className="hover:text-black">GitHub</a></div>
                <div><a href="https://github.com/rohankatakam/coderisk/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="hover:text-black">Contributing</a></div>
                <div><a href="https://github.com/rohankatakam/coderisk/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-black">License</a></div>
                <div><a href="/open-source" className="hover:text-black">Open Core Model</a></div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Company</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="#" className="hover:text-black">About</a></div>
                <div><a href="#" className="hover:text-black">Blog</a></div>
                <div><a href="#" className="hover:text-black">Careers</a></div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Connect</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="#" className="hover:text-black">Twitter</a></div>
                <div><a href="https://github.com/rohankatakam/coderisk" target="_blank" rel="noopener noreferrer" className="hover:text-black">GitHub</a></div>
                <div><a href="#" className="hover:text-black">Discord</a></div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
            © 2025 CodeRisk. Open Source (MIT License).
          </div>
        </div>
      </footer>
    </div>
  );
}
