'use client'

import { useEffect, useState, useRef } from 'react'

export default function TerminalDemo() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const workflow = [
    {
      type: 'user-message',
      content: 'Please run crisk check on our code changes to assess risk before we push for review.'
    },
    {
      type: 'tool-use',
      tool: 'crisk check',
      output: [
        'Analyzing changes...',
        '',
        'Risk Analysis Complete',
        '',
        'High Risk: src/auth/session.go',
        '  • Modified by 3 developers in last 30 days',
        '  • Linked to 2 incidents (last 6 months)',
        '  • Affects 12 dependent files',
        '',
        'Recommendation:',
        '  • Coordinate with @sarah (file owner)',
        '  • Review auth/session_test.go',
      ]
    },
    {
      type: 'assistant-response',
      content: 'I found a high-risk change in auth/session.go. This file has a history of incidents and is actively maintained by multiple developers. I recommend coordinating with Sarah before pushing.'
    },
    {
      type: 'user-message',
      content: 'I checked with Sarah - she confirmed the session timeout changes are safe. She suggested adding a migration script and updating the cache invalidation logic. Can you make those changes?'
    },
    {
      type: 'assistant-response',
      content: 'Perfect. I\'ll add the migration script and update the cache invalidation logic as Sarah recommended. Let me make those changes now.'
    }
  ]

  useEffect(() => {
    if (visibleMessages >= workflow.length) {
      return // Stop when all messages are shown
    }

    const timer = setTimeout(() => {
      setVisibleMessages((prev) => prev + 1)
    }, 2000) // 2 second delay between messages

    return () => clearTimeout(timer)
  }, [visibleMessages, workflow.length])

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [visibleMessages])

  return (
    <div className="relative w-full h-full">
      {/* Claude Code Style Window */}
      <div className="bg-[#1a2332] rounded-lg shadow-2xl overflow-hidden border border-[#2d3748]">
        {/* Header */}
        <div className="bg-[#0f1419] px-4 py-3 flex items-center gap-2 border-b border-[#2d3748]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex-1 text-center text-[#8b949e] text-xs font-mono">
            Claude Code
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          className="p-6 font-sans text-sm h-[450px] overflow-y-auto space-y-4 scroll-smooth"
        >
          {workflow.slice(0, visibleMessages).map((item, index) => (
            <div key={index} className="fade-in">
              {/* User Message */}
              {item.type === 'user-message' && (
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3b82f6] flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                    U
                  </div>
                  <div className="flex-1">
                    <div className="text-[#e6edf3] leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              )}

              {/* Tool Use */}
              {item.type === 'tool-use' && 'output' in item && (
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#8b949e] flex items-center justify-center text-white text-xs flex-shrink-0">
                    C
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-[#8b949e] mb-3">
                        <span className="text-[#58a6ff]">$ {item.tool}</span>
                      </div>
                      <div className="space-y-1 font-mono text-xs">
                        {item.output.map((line, i) => {
                          if (line === '') return <div key={i} className="h-1"></div>
                          if (line === 'Analyzing changes...') {
                            return <div key={i} className="text-[#8b949e] italic">{line}</div>
                          }
                          if (line === 'Risk Analysis Complete') {
                            return <div key={i} className="text-[#3fb950] font-semibold">{line}</div>
                          }
                          if (line.includes('High Risk:')) {
                            return <div key={i} className="text-[#f85149] font-semibold">{line}</div>
                          }
                          if (line.includes('Recommendation:')) {
                            return <div key={i} className="text-[#58a6ff] font-semibold">{line}</div>
                          }
                          if (line.startsWith('  •')) {
                            return <div key={i} className="text-[#8b949e]">{line}</div>
                          }
                          return <div key={i} className="text-[#c9d1d9]">{line}</div>
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Assistant Response */}
              {item.type === 'assistant-response' && (
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#8b949e] flex items-center justify-center text-white text-xs flex-shrink-0">
                    C
                  </div>
                  <div className="flex-1">
                    <div className="text-[#e6edf3] leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.6s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
