'use client'

export default function ArchitectureDiagram() {
  return (
    <div className="w-full grid md:grid-cols-2 gap-6">
      {/* Stage 1: crisk init */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          crisk init: Build Knowledge Graph
        </h3>

        <div className="space-y-4">
          {/* Layer 1 */}
          <div className="bg-white/80 backdrop-blur rounded-xl p-5 border-2 border-green-200">
            <h4 className="font-bold text-gray-800 mb-2">Layer 1: Code Structure</h4>
            <p className="text-sm text-gray-600">
              TreeSitter parses every file, extracts dependencies
            </p>
            <p className="text-sm text-gray-600">
              Creates File nodes with metadata
            </p>
          </div>

          {/* Layer 2 */}
          <div className="bg-white/80 backdrop-blur rounded-xl p-5 border-2 border-green-200">
            <h4 className="font-bold text-gray-800 mb-2">Layer 2: Commit & PR History</h4>
            <p className="text-sm text-gray-600">
              GitHub API → PostgreSQL → Neo4j
            </p>
            <p className="text-sm text-gray-600">
              Creates Commit, Developer, PR nodes
            </p>
          </div>

          {/* Layer 3 - Incident Intelligence */}
          <div className="bg-yellow-50 rounded-xl p-5 border-4 border-yellow-400 border-dashed relative">
            <h4 className="font-bold text-gray-800 mb-2">
              Layer 3: Incident Intelligence
            </h4>
            <div className="bg-white rounded-lg p-4 border-2 border-yellow-400">
              <p className="text-sm text-gray-600 mb-2">
                LLM analyzes commit messages, PRs, issues
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Detects references: FIXES, CLOSES, RESOLVES, REGRESSES, REVERTS, RELATED TO, etc.
              </p>
              <p className="text-sm font-bold text-yellow-700">
                Connects incidents → commits → files automatically
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Stage 2: crisk check */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          crisk check: Real-Time Analysis
        </h3>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="bg-white/80 backdrop-blur rounded-xl p-5 border-2 border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-800">1. Detect Changes</h4>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                &lt;100ms
              </span>
            </div>
            <p className="text-sm text-gray-600">
              git diff → extract changed files + patches
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/80 backdrop-blur rounded-xl p-5 border-2 border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-gray-800">2. Query Graph</h4>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                &lt;200ms
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Neo4j queries: ownership, co-change, incidents
            </p>
          </div>

          {/* Step 3 - AGENTIC SEARCH */}
          <div className="bg-orange-50 rounded-xl p-5 border-4 border-orange-400 border-dashed relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
              THE SPECIAL SAUCE
            </div>
            <h4 className="font-bold text-gray-800 mb-3 mt-2">
              3. Agentic Search
            </h4>
            <div className="bg-white rounded-lg p-4 border-2 border-orange-400">
              <p className="text-sm text-gray-600 mb-2 font-semibold">
                LLM agent explores graph with tools:
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• query_incident_history</li>
                <li>• query_ownership</li>
                <li>• query_cochange_partners</li>
                <li>• query_blast_radius</li>
                <li>• and more</li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-green-50 rounded-xl p-5 border-2 border-green-400">
            <h4 className="font-bold text-gray-800 mb-2">4. Risk Report</h4>
            <p className="text-sm text-gray-600 mb-2">
              Risk level (LOW/MED/HIGH) + confidence + reasoning
            </p>
            <p className="text-sm font-bold text-green-600 text-center">
              Complete analysis in &lt;10 seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
