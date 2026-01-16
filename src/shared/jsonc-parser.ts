/**
 * JSONC parser utility
 * Based on oh-my-opencode's pattern
 */

import { parse } from 'jsonc-parser';

export function parseJsonc<T>(content: string): T {
  return parse(content, undefined, {
    allowTrailingComma: true,
    disallowComments: false,
  }) as T;
}
