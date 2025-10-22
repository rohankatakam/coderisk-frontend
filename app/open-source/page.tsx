export default function OpenSource() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-bold text-xl">CodeRisk</a>
          <div className="flex gap-6 items-center">
            <a href="/#docs" className="text-sm hover:text-gray-600 transition-colors">
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
            <a href="/#install">
              <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Install CLI
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Open Source</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            CodeRisk is <strong>open core</strong>: free CLI, optional cloud platform.
          </p>
        </div>

        {/* Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Philosophy</h2>
          <p className="text-gray-600 mb-4">
            We believe developer tools should be:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-1">✅ Open</h3>
              <p className="text-gray-600 text-sm">Audit the code, no black boxes</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">✅ Transparent</h3>
              <p className="text-gray-600 text-sm">Honest about costs and requirements</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold mb-1">✅ Sustainable</h3>
              <p className="text-gray-600 text-sm">Commercial cloud funds development</p>
            </div>
          </div>
        </section>

        {/* What's Open Source */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What's Open Source</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/>
                </svg>
                MIT Licensed
              </span>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Self-Hosted Mode Includes:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• CLI tool (<code className="bg-white px-2 py-1 rounded text-sm">crisk</code> binary + full source code)</li>
                <li>• Self-hosted mode (Docker + Neo4j stack)</li>
                <li>• Core agentic graph engine</li>
                <li>• Full metrics (coupling, co-change, temporal patterns)</li>
                <li>• Pre-commit hook system</li>
                <li>• Complete documentation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold mb-3">Requirements for self-hosted:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• OpenAI API key ($0.03-0.05/check, BYOK)</li>
                <li>• Docker Desktop (free)</li>
                <li>• 17-minute one-time setup per repo</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-green-100">
                <strong className="text-green-800">Cost: ~$3-5/month for 100 checks</strong> (just OpenAI API)
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/rohankatakam/coderisk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
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
        </section>

        {/* What's Proprietary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What's Proprietary</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Commercial Cloud Platform:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Multi-tenant infrastructure</li>
                <li>• ARC database (100+ patterns, 10K incidents)</li>
                <li>• Phase 2 LLM investigation</li>
                <li>• Trust infrastructure (certificates, insurance)</li>
                <li>• Enterprise features (SSO, audit logs)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold mb-2">Why?</h4>
              <p className="text-sm text-gray-600">
                Sustains development and supports open source maintenance. Revenue from cloud customers
                funds ongoing development of the open source CLI and core features.
              </p>
            </div>

            <a href="/pricing">
              <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                View Cloud Pricing
              </button>
            </a>
          </div>
        </section>

        {/* Contributing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Contributing</h2>
          <p className="text-gray-600 mb-6">
            We welcome contributions to the open source CLI!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">How to contribute:</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-xl">🐛</span>
                  <div>
                    <strong>Report bugs</strong>
                    <p className="text-gray-600">Found an issue? Open a GitHub issue</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">💡</span>
                  <div>
                    <strong>Suggest features</strong>
                    <p className="text-gray-600">Have an idea? Start a discussion</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">🔧</span>
                  <div>
                    <strong>Submit PRs</strong>
                    <p className="text-gray-600">Fix bugs or add features</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">⭐</span>
                  <div>
                    <strong>Star on GitHub</strong>
                    <p className="text-gray-600">Help us grow the community</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Areas accepting contributions:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ New metrics</li>
                <li>✅ Language parsers</li>
                <li>✅ Documentation</li>
                <li>✅ Bug fixes</li>
                <li>✅ Testing</li>
              </ul>

              <h3 className="font-semibold text-lg mb-2 mt-6">Areas closed:</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>❌ Cloud infrastructure</li>
                <li>❌ ARC database</li>
                <li>❌ Phase 2 LLM</li>
                <li>❌ Enterprise features</li>
              </ul>
            </div>
          </div>

          <a
            href="https://github.com/rohankatakam/coderisk/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Read Contribution Guide →
          </a>
        </section>

        {/* License */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">License</h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">CodeRisk CLI</h3>
                <p className="text-sm text-gray-600">Self-hosted mode and core features</p>
              </div>
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                MIT License
              </span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <h3 className="font-semibold mb-1">Cloud Platform</h3>
                <p className="text-sm text-gray-600">Hosted service and enterprise features</p>
              </div>
              <span className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                Proprietary
              </span>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="https://github.com/rohankatakam/coderisk/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read Full License →
            </a>
          </div>
        </section>

        {/* Community */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Community</h2>
          <p className="text-gray-600 mb-6">
            Join our growing community of developers using CodeRisk!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://github.com/rohankatakam/coderisk"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors"
            >
              <div className="text-3xl mb-3">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-gray-600">Report issues, view source code, contribute</p>
            </a>

            <a
              href="#"
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors"
            >
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold mb-2">Discord</h3>
              <p className="text-sm text-gray-600">Chat with developers, get help, share tips</p>
            </a>

            <a
              href="#"
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors"
            >
              <div className="text-3xl mb-3">🐦</div>
              <h3 className="font-semibold mb-2">Twitter</h3>
              <p className="text-sm text-gray-600">Follow updates, announcements, tips</p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-4">Ready to try CodeRisk?</h2>
          <p className="text-gray-600 mb-8">Install the open source CLI and start assessing code risk today.</p>
          <div className="flex gap-4 justify-center">
            <a href="/#install">
              <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Install CLI
              </button>
            </a>
            <a href="https://github.com/rohankatakam/coderisk" target="_blank" rel="noopener noreferrer">
              <button className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                View on GitHub
              </button>
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
                Open Source AI Code Risk Assessment
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Product</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="/#install" className="hover:text-black">Installation</a></div>
                <div><a href="/pricing" className="hover:text-black">Pricing</a></div>
                <div><a href="/#docs" className="hover:text-black">Docs</a></div>
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
