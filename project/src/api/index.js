// Export all API functions from a single entry point
export * from './auth';
export * from './products';

// Re-export the API client for direct usage when needed
export { apiClient } from './client';