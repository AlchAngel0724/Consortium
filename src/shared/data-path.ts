/**
 * XDG Base Directory utilities
 * Based on oh-my-opencode's pattern
 */

import { xdgData, xdgConfig } from 'xdg-basedir';
import { join } from 'path';

export function getDataPath(...segments: string[]): string {
  return join(xdgData || '~/.local/share', 'consortium', ...segments);
}

export function getConfigPath(...segments: string[]): string {
  return join(xdgConfig || '~/.config', 'consortium', ...segments);
}
