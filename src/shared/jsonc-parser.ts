/**
 * JSONC Parser Utilities
 * 
 * Helper functions for parsing JSON with comments (JSONC).
 * 
 * NOTE: Not currently used in Phase 1, but reserved for future config parsing.
 */

/**
 * Parse JSONC (JSON with comments) string
 * Basic implementation that strips comments before parsing
 */
export function parseJSONC(text: string): unknown {
  // Remove single-line comments
  const withoutSingleLine = text.replace(/\/\/.*$/gm, '');
  
  // Remove multi-line comments
  const withoutMultiLine = withoutSingleLine.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Remove trailing commas (JSONC allows them)
  const withoutTrailingCommas = withoutMultiLine.replace(/,(\s*[}\]])/g, '$1');
  
  return JSON.parse(withoutTrailingCommas);
}

/**
 * Load and parse a JSONC file
 */
export async function loadJSONC(filePath: string): Promise<unknown> {
  const fs = await import('fs/promises');
  const content = await fs.readFile(filePath, 'utf-8');
  return parseJSONC(content);
}

