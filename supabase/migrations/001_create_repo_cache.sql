-- Create table to cache Relace repo IDs for git repositories
-- This avoids re-indexing the same repo on every crisk check

CREATE TABLE IF NOT EXISTS repo_cache (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Git remote URL (normalized) - the unique identifier for a repo
  -- e.g., "github.com/user/repo" (without protocol/auth)
  git_remote_normalized TEXT NOT NULL UNIQUE,

  -- Full git remote URL as provided
  git_remote_url TEXT NOT NULL,

  -- Relace repo ID
  relace_repo_id UUID NOT NULL,

  -- Last commit hash we indexed
  last_indexed_hash TEXT,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- Optional: track which user created this cache entry
  created_by_clerk_id TEXT
);

-- Index for fast lookups
CREATE INDEX idx_repo_cache_git_remote ON repo_cache(git_remote_normalized);
CREATE INDEX idx_repo_cache_relace_id ON repo_cache(relace_repo_id);

-- Enable RLS
ALTER TABLE repo_cache ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone authenticated can read (repos are shared resources)
CREATE POLICY "Authenticated users can read repo cache"
  ON repo_cache FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Anyone authenticated can insert new entries
CREATE POLICY "Authenticated users can insert repo cache"
  ON repo_cache FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Service role can do everything (for backend operations)
CREATE POLICY "Service role full access"
  ON repo_cache FOR ALL
  TO service_role
  USING (true);
