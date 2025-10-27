export default function Pricing() {
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
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing. Self-hosted or managed cloud infrastructure.
          </p>
        </div>

        {/* Self-Hosted Section */}
        <div className="mb-16">
          <div className="border-2 border-gray-200 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Self-Hosted (Local Mode)</h2>
                <p className="text-gray-600">Perfect for individual developers, small teams, and privacy-sensitive use cases.</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">From $0.04/check</div>
                <div className="text-sm text-gray-600">BYOK (Bring Your Own Key)</div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">What's included:</h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div>• CLI tool (MIT licensed, unlimited use)</div>
                <div>• Self-hosted mode (Docker + Neo4j)</div>
                <div>• Full agentic graph navigation</div>
                <div>• Complete source code access</div>
                <div>• Incident history intelligence</div>
                <div>• Community support</div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">Requirements:</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>• OpenAI API key ($0.03-0.05/check)</div>
                <div>• Docker Desktop (free)</div>
                <div>• 17-minute one-time setup per repo</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold mb-3">Monthly cost examples:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>100 checks/month:</span>
                  <span className="font-semibold">$3-5/month (just OpenAI API)</span>
                </div>
                <div className="flex justify-between">
                  <span>500 checks/month:</span>
                  <span className="font-semibold">$15-25/month</span>
                </div>
                <div className="flex justify-between">
                  <span>1,000 checks/month:</span>
                  <span className="font-semibold">$30-50/month</span>
                </div>
              </div>
            </div>

            <a href="/#install">
              <button className="w-full bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Installation Guide
              </button>
            </a>
          </div>
        </div>

        {/* Cloud Platform Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Cloud Platform</h2>
            <p className="text-gray-600">For teams wanting zero DevOps and advanced features.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="border border-gray-200 rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="text-3xl font-bold mb-1">$10</div>
                <div className="text-sm text-gray-600">per user/month</div>
              </div>

              <ul className="space-y-3 text-sm">
                <li>• Everything in Self-Hosted</li>
                <li>• Zero setup (30 seconds)</li>
                <li>• No Docker or database management</li>
                <li>• Private repositories</li>
                <li>• 1,000 checks/month included</li>
                <li>• Email support</li>
              </ul>

              <button className="w-full border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Start Free Trial
              </button>
            </div>

            {/* Pro Tier */}
            <div className="border-2 border-black rounded-lg p-6 space-y-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                POPULAR
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-1">$25</div>
                <div className="text-sm text-gray-600">per user/month</div>
              </div>

              <ul className="space-y-3 text-sm">
                <li>• Everything in Starter</li>
                <li>• Team collaboration (shared graphs)</li>
                <li>• 5,000 checks/month included</li>
                <li>• Pre-built public cache (instant React/Next.js)</li>
                <li>• Webhooks (auto-update on push)</li>
                <li>• Priority support</li>
              </ul>

              <button className="w-full bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="border border-gray-200 rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-1">$50</div>
                <div className="text-sm text-gray-600">per user/month</div>
              </div>

              <ul className="space-y-3 text-sm">
                <li>• Everything in Pro</li>
                <li>• Unlimited checks</li>
                <li>• On-premise deployment option</li>
                <li>• SSO/SAML</li>
                <li>• Dedicated support</li>
                <li>• SLA guarantees</li>
                <li>• Custom integrations</li>
              </ul>

              <button className="w-full border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Self-Hosted vs Cloud Comparison */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Self-Hosted vs Cloud</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Self-Hosted</th>
                  <th className="text-center py-4 px-4">Cloud</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Setup time</td>
                  <td className="text-center py-4 px-4">17 minutes</td>
                  <td className="text-center py-4 px-4">30 seconds</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Infrastructure management</td>
                  <td className="text-center py-4 px-4">You (Docker + Neo4j)</td>
                  <td className="text-center py-4 px-4">We handle it</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Monthly cost (100 checks)</td>
                  <td className="text-center py-4 px-4">$3-5</td>
                  <td className="text-center py-4 px-4">$10-50</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Data privacy</td>
                  <td className="text-center py-4 px-4">100% local</td>
                  <td className="text-center py-4 px-4">Cloud-hosted</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Team collaboration</td>
                  <td className="text-center py-4 px-4">No</td>
                  <td className="text-center py-4 px-4">Yes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Pre-built public cache</td>
                  <td className="text-center py-4 px-4">No</td>
                  <td className="text-center py-4 px-4">Yes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Support</td>
                  <td className="text-center py-4 px-4">Community</td>
                  <td className="text-center py-4 px-4">Email/Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">Is the CLI really free?</h3>
              <p className="text-gray-600 text-sm">
                The CLI is open source (MIT License), but requires an OpenAI API key ($0.03-0.05/check).
                Total cost: ~$3-5/month for 100 checks.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">What's the difference between self-hosted and cloud?</h3>
              <p className="text-gray-600 text-sm">
                Self-hosted runs on your machine (17-min setup, $3-5/month LLM costs). Cloud is hosted
                (30-sec setup, $10-50/user/month all-in).
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">Can I upgrade/downgrade anytime?</h3>
              <p className="text-gray-600 text-sm">
                Yes, no long-term contracts. Move between self-hosted and cloud freely.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">Do you offer discounts?</h3>
              <p className="text-gray-600 text-sm">
                Startups (YC, &lt;2 years): 25% off cloud plans. Self-hosted always pay-per-use.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">Why is an LLM required?</h3>
              <p className="text-gray-600 text-sm">
                The LLM enables intelligent graph navigation and contextual risk analysis,
                learning from your specific codebase history to identify genuine incident risks.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-semibold mb-2">What are the setup requirements?</h3>
              <p className="text-gray-600 text-sm">
                Self-hosted requires: OpenAI API key ($0.03-0.05/check) + Docker Desktop (free) +
                17-minute one-time setup per repo. Both API key AND Docker are REQUIRED (not optional).
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-8">Install the CLI and start assessing code risk in 17 minutes.</p>
          <div className="flex gap-4 justify-center">
            <a href="/#install">
              <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Install CLI
              </button>
            </a>
            <a href="/#docs">
              <button className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                View Docs
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
                Pre-commit risk scanner with incident history intelligence
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
