/**
 * Tauri command invocation wrapper
 * Currently a placeholder - will integrate with Tauri in future
 */

export async function invokeCommand(
  command: string,
  payload?: any
): Promise<any> {
  // Log for now - no Tauri connection yet
  console.warn("Tauri not connected yet:", command, payload);

  // Return placeholder for now
  return null;
}

/**
 * Helper to check if Tauri is available
 */
export function isTauriAvailable(): boolean {
  // Check if we're in a Tauri context (window.__TAURI__ would be available)
  if (typeof window === "undefined") return false;
  return "__TAURI__" in window;
}
