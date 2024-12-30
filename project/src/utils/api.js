import axios from 'axios';
import { API_BASE_URL } from '../config/constants';

export const createApiClient = (options = {}) => {
  const client = axios.create({
    baseURL: API_BASE_URL,
    ...options,
  });

  return client;
};

export const handleApiError = (error) => {
  if (error.response) {
    return error.response.data.message || 'An error occurred';
  }
  return 'Network error occurred';
};