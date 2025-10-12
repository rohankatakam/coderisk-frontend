export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl">CodeRisk</div>
          <div className="flex gap-6 items-center">
            <a href="#" className="text-sm hover:text-gray-600 transition-colors">
              Docs
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-gray-600 transition-colors"
            >
              GitHub
            </a>
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Trust infrastructure for
            <br />
            AI-generated code
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            The pre-flight check for developers. Know if your code is safe before you commit.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center items-center pt-4">
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              View Demo
            </button>
          </div>

          {/* Quick Start Command */}
          <div className="pt-8">
            <div className="inline-block bg-gray-100 px-6 py-3 rounded-lg">
              <code className="text-sm font-mono text-gray-800">
                npm install -g coderisk
              </code>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 pt-24">
          <div className="space-y-3">
            <div className="text-2xl font-semibold">2-5 seconds</div>
            <div className="text-gray-600">
              Intelligent pre-commit checks that don't slow you down
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-semibold">&lt;3% false positives</div>
            <div className="text-gray-600">
              Agentic graph search delivers accurate risk assessment
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-semibold">Zero setup</div>
            <div className="text-gray-600">
              Works immediately after git clone, no configuration needed
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
              <div className="font-semibold mb-2">Get instant feedback</div>
              <div className="text-gray-600 text-sm">
                Receive clear, actionable insights about architectural risks and hidden dependencies
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof / Stats */}
        <div className="pt-24 text-center space-y-8">
          <div className="text-sm text-gray-500 uppercase tracking-wider">
            Trusted by developers at
          </div>
          <div className="flex justify-center gap-12 items-center flex-wrap opacity-40">
            <div className="text-xl font-semibold">YC</div>
            <div className="text-xl font-semibold">Startup Co</div>
            <div className="text-xl font-semibold">Tech Inc</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold mb-4">CodeRisk</div>
              <div className="text-sm text-gray-600">
                Trust infrastructure for AI-generated code
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Product</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="#" className="hover:text-black">Features</a></div>
                <div><a href="#" className="hover:text-black">Pricing</a></div>
                <div><a href="#" className="hover:text-black">Docs</a></div>
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
                <div><a href="#" className="hover:text-black">GitHub</a></div>
                <div><a href="#" className="hover:text-black">Discord</a></div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
            © 2025 CodeRisk. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
