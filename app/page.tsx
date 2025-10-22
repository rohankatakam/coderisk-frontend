import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

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
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Automated Due Diligence
            <br />
            Before You Commit
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Know who owns the code, what depends on it, and if similar changes failed before—all in 5 seconds.
            <br />
            <span className="text-lg">Free CLI, optional cloud platform.</span>
          </p>

          {/* Badges */}
          <div className="flex gap-3 justify-center items-center pt-2">
            <a
              href="https://github.com/rohankatakam/coderisk/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/>
              </svg>
              MIT Licensed
            </a>
            <a
              href="https://github.com/rohankatakam/coderisk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              GitHub
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center items-center pt-4">
            <SignedOut>
              <a href="#install">
                <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                  Install CLI
                </button>
              </a>
            </SignedOut>
            <SignedIn>
              <a href="/dashboard" className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Go to Dashboard
              </a>
            </SignedIn>
            <a href="https://github.com/rohankatakam/coderisk#readme" target="_blank" rel="noopener noreferrer">
              <button className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                View Docs
              </button>
            </a>
          </div>

          {/* Quick Start Command */}
          <div className="pt-8">
            <div className="inline-block bg-gray-100 px-6 py-4 rounded-lg">
              <code className="text-sm font-mono text-gray-800">
                brew tap rohankatakam/coderisk && brew install crisk
              </code>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-24">
          <div className="space-y-3">
            <div className="text-2xl font-semibold">👤 Ownership</div>
            <div className="text-sm font-semibold text-gray-800">Who to coordinate with</div>
            <div className="text-gray-600 text-sm">
              Shows who owns the code and who recently worked on it
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-semibold">🔗 Blast Radius</div>
            <div className="text-sm font-semibold text-gray-800">What might break</div>
            <div className="text-gray-600 text-sm">
              Identifies files that depend on your changes
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-semibold">🔄 Forgotten Updates</div>
            <div className="text-sm font-semibold text-gray-800">What changes together</div>
            <div className="text-gray-600 text-sm">
              Warns when you miss related files that usually change together
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-semibold">⚠️ Incident History</div>
            <div className="text-sm font-semibold text-gray-800">What failed before</div>
            <div className="text-gray-600 text-sm">
              Prevents repeating past incidents with similar changes
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="pt-24 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            How it works
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="font-mono text-sm text-gray-600 mb-2">Step 1</div>
              <div className="font-semibold mb-2">Make your changes</div>
              <div className="text-gray-600 text-sm">
                Code normally with your favorite tools - Claude Code, Cursor, or manual coding
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="font-mono text-sm text-gray-600 mb-2">Step 2</div>
              <div className="font-semibold mb-2">Run the check</div>
              <div className="text-gray-600 text-sm mb-3">
                Before committing, run a quick safety check
              </div>
              <code className="text-xs font-mono bg-gray-100 px-3 py-2 rounded block">
                git commit -am "wip" && crisk check
              </code>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="font-mono text-sm text-gray-600 mb-2">Step 3</div>
              <div className="font-semibold mb-2">Get due diligence report</div>
              <div className="text-gray-600 text-sm">
                See who to coordinate with, what files might break, and if this caused incidents before
              </div>
            </div>
          </div>
        </div>

        {/* Installation Instructions */}
        <div id="install" className="pt-24 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Installation (17 minutes one-time per repo)
          </h2>
          <div className="bg-gray-50 rounded-lg p-8 space-y-4 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Step 1: Install CLI (30 seconds)</div>
              <code className="block bg-white px-4 py-3 rounded font-mono text-sm">
                brew tap rohankatakam/coderisk<br/>brew install crisk
              </code>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Step 2: Configure API key (30 seconds)</div>
              <code className="block bg-white px-4 py-3 rounded font-mono text-sm">
                crisk configure
              </code>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Step 3: Start infrastructure (2 minutes) - REQUIRED</div>
              <code className="block bg-white px-4 py-3 rounded font-mono text-sm">
                docker compose up -d
              </code>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Step 4: Initialize repository (10-15 minutes) - REQUIRED</div>
              <code className="block bg-white px-4 py-3 rounded font-mono text-sm">
                cd your-repo<br/>crisk init-local
              </code>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Step 5: Check for risks (2-5 seconds)</div>
              <code className="block bg-white px-4 py-3 rounded font-mono text-sm">
                crisk check
              </code>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm max-w-xl mx-auto">
            <strong>Requirements:</strong> OpenAI API key ($0.03-0.05/check) + Docker Desktop (free)
            <br/>
            <strong>Monthly cost:</strong> ~$3-5 for 100 checks (just OpenAI API)
          </p>
        </div>

        {/* Open Source Section */}
        <div className="pt-24 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Open Source
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            CodeRisk CLI is <strong>open source</strong> (MIT License). Self-host for full privacy.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">What's Included</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ CLI tool (full source code)</li>
                <li>✅ Ownership tracking (who to coordinate with)</li>
                <li>✅ Blast radius analysis (what might break)</li>
                <li>✅ Co-change detection (forgotten updates)</li>
                <li>✅ Incident history (what failed before)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• OpenAI API key ($0.03-0.05/check)</li>
                <li>• Docker Desktop (free)</li>
                <li>• 17-minute one-time setup per repo</li>
                <li>• <strong>Monthly cost: ~$3-5 for 100 checks</strong></li>
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
              Read License
            </a>
          </div>
        </div>

        {/* Cloud Platform Teaser */}
        <div className="pt-24 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Need More? Try Cloud
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            For teams wanting zero DevOps and advanced features
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl">⚡</div>
              <div className="font-semibold">Zero Setup</div>
              <div className="text-sm text-gray-600">30 seconds, no Docker or init-local</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl">👥</div>
              <div className="font-semibold">Team Collaboration</div>
              <div className="text-sm text-gray-600">Shared graphs across your team</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl">🎯</div>
              <div className="font-semibold">Pre-built Cache</div>
              <div className="text-sm text-gray-600">React, Next.js instant access</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl">🔄</div>
              <div className="font-semibold">Webhooks</div>
              <div className="text-sm text-gray-600">Auto-update on push</div>
            </div>
          </div>
          <div className="text-center space-y-4 pt-4">
            <div className="text-lg">
              <strong>Pricing:</strong> Self-hosted: $3-5/month (100 checks) • Cloud: $10-50/user/month
            </div>
            <div className="flex gap-4 justify-center">
              <a href="/pricing">
                <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                  Compare Plans
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
            Currently in Beta
          </div>
          <div className="text-gray-600 max-w-md mx-auto">
            Testing with developers at startups and tech companies.
            <a href="https://github.com/rohankatakam/coderisk" className="text-black font-medium hover:underline ml-1">
              Join the beta →
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
                Automated due diligence before code review
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
