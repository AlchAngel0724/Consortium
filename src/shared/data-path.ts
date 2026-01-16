/**
 * XDG Data Path Utilities
 * 
 * Helper functions for managing data paths following XDG Base Directory specification.
 * 
 * NOTE: Not currently used in Phase 1, but reserved for future session state management.
 */

import * as path from 'path';
import * as os from 'os';

/**
 * Get XDG data directory for Consortium
 * Falls back to ~/.local/share/consortium if XDG_DATA_HOME is not set
 */
export function getDataDir(): string {
  const xdgDataHome = process.env.XDG_DATA_HOME;
  const baseDir = xdgDataHome || path.join(os.homedir(), '.local', 'share');
  return path.join(baseDir, 'consortium');
}

/**
 * Get path for a specific data file
 */
export function getDataPath(filename: string): string {
  return path.join(getDataDir(), filename);
}
