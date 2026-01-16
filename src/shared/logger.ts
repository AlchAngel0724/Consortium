/**
 * Simple console logger utility
 * Based on oh-my-opencode's pattern
 */

export function log(message: string, ...args: unknown[]): void {
  console.log(`[${new Date().toISOString()}]`, message, ...args);
}

export function warn(message: string, ...args: unknown[]): void {
  console.warn(`[${new Date().toISOString()}] WARN:`, message, ...args);
}

export function error(message: string, ...args: unknown[]): void {
  console.error(`[${new Date().toISOString()}] ERROR:`, message, ...args);
}
