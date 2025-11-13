'use client'

export default function ArchitectureDiagram() {
  return (
    <div className="w-full grid md:grid-cols-2 gap-6">
      {/* Stage 1: crisk init */}
      <div className="rounded-2xl p-6 md:p-8 border-2 border-slate-200">
        <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6 text-center">
          crisk init: Build Knowledge Graph
        </h3>

        <div className="space-y-3 md:space-y-4">
          {/* Layer 1 */}
          <div className="bg-slate-50 rounded-xl p-4 md:p-5 border border-slate-200">
            <h4 className="font-bold text-[#0F172A] mb-2 text-sm md:text-base">Layer 1: Code Structure</h4>
            <p className="text-xs md:text-sm text-[#475569]">
              TreeSitter parses every file, extracts dependencies
            </p>
            <p className="text-xs md:text-sm text-[#475569]">
              Creates File nodes with metadata
            </p>
          </div>

          {/* Layer 2 */}
          <div className="bg-slate-50 rounded-xl p-4 md:p-5 border border-slate-200">
            <h4 className="font-bold text-[#0F172A] mb-2 text-sm md:text-base">Layer 2: Commit & PR History</h4>
            <p className="text-xs md:text-sm text-[#475569]">
              GitHub API → PostgreSQL → Neo4j
            </p>
            <p className="text-xs md:text-sm text-[#475569]">
              Creates Commit, Developer, PR nodes
            </p>
          </div>

          {/* Layer 3 - Incident Intelligence */}
          <div className="bg-blue-50 rounded-xl p-4 md:p-5 border-2 border-blue-300 relative">
            <h4 className="font-bold text-[#0F172A] mb-2 text-sm md:text-base">
              Layer 3: Incident Intelligence
            </h4>
            <div className="bg-white rounded-lg p-3 md:p-4 border border-blue-200">
              <p className="text-xs md:text-sm text-[#475569] mb-2">
                LLM analyzes commit messages, PRs, issues
              </p>
              <p className="text-xs md:text-sm text-[#475569] mb-2">
                Detects references: FIXES, CLOSES, RESOLVES, REGRESSES, REVERTS, RELATED TO, etc.
              </p>
              <p className="text-xs md:text-sm font-semibold text-blue-700">
                Connects incidents → commits → files automatically
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Stage 2: crisk check */}
      <div className="rounded-2xl p-6 md:p-8 border-2 border-slate-200">
        <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6 text-center">
          crisk check: Real-Time Analysis
        </h3>

        <div className="space-y-3 md:space-y-4">
          {/* Step 1 */}
          <div className="bg-slate-50 rounded-xl p-4 md:p-5 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-[#0F172A] text-sm md:text-base">1. Detect Changes</h4>
              <span className="text-[10px] md:text-xs font-semibold text-[#22C55E] bg-green-50 px-2 py-1 rounded border border-green-200">
                &lt;100ms
              </span>
            </div>
            <p className="text-xs md:text-sm text-[#475569]">
              git diff → extract changed files + patches
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 rounded-xl p-4 md:p-5 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-[#0F172A] text-sm md:text-base">2. Query Graph</h4>
              <span className="text-[10px] md:text-xs font-semibold text-[#22C55E] bg-green-50 px-2 py-1 rounded border border-green-200">
                &lt;200ms
              </span>
            </div>
            <p className="text-xs md:text-sm text-[#475569]">
              Neo4j queries: ownership, co-change, incidents
            </p>
          </div>

          {/* Step 3 - AGENTIC SEARCH */}
          <div className="bg-orange-50 rounded-xl p-4 md:p-5 border-2 border-[#F97316] relative">
            <h4 className="font-bold text-[#0F172A] mb-2 text-sm md:text-base">
              3. Agentic Search
            </h4>
            <div className="bg-white rounded-lg p-3 md:p-4 border border-orange-200">
              <p className="text-xs md:text-sm text-[#475569] mb-2 font-semibold">
                LLM agent explores graph with tools:
              </p>
              <ul className="text-[10px] md:text-xs text-[#475569] space-y-1">
                <li>• query_incident_history</li>
                <li>• query_ownership</li>
                <li>• query_cochange_partners</li>
                <li>• query_blast_radius</li>
                <li>• and more</li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-green-50 rounded-xl p-4 md:p-5 border border-green-300">
            <h4 className="font-bold text-[#0F172A] mb-2 text-sm md:text-base">4. Risk Report</h4>
            <p className="text-xs md:text-sm text-[#475569] mb-2">
              Risk level (LOW/MED/HIGH) + confidence + reasoning
            </p>
            <p className="text-xs md:text-sm font-semibold text-[#22C55E] text-center">
              Complete analysis in &lt;10 seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
