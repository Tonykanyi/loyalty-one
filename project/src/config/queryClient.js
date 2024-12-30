import { QueryClient } from '@tanstack/react-query';

// Custom error handler that ensures serializable errors
const errorHandler = (error) => {
  const message = error?.message || 'An error occurred';
  console.error(message);
  return { message }; // Return serializable error object
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      onError: errorHandler
    },
    mutations: {
      onError: errorHandler
    }
  }
});