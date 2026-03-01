/**
 * Application-wide constants
 */

export const APP_NAME = "Prismarine";
export const APP_VERSION = "0.1.0";

/**
 * Navigation routes
 */
export const ROUTES = {
  HOME: "/",
  COLLECTIONS: "/collections",
  RUNNER: "/runner",
  SETTINGS: "/settings",
} as const;

/**
 * API endpoints (placeholder for future backend integration)
 */
export const API_ENDPOINTS = {
  COLLECTIONS: "/api/collections",
  RUNNER: "/api/runner",
  ENVIRONMENTS: "/api/environments",
} as const;

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  ACTIVE_ENVIRONMENT: "prismarine:active_environment",
  USER_PREFERENCES: "prismarine:user_preferences",
  SIDEBAR_COLLAPSED: "prismarine:sidebar_collapsed",
} as const;

/**
 * Timeout constants (in milliseconds)
 */
export const TIMEOUTS = {
  SHORT: 3000,
  MEDIUM: 5000,
  LONG: 10000,
} as const;
