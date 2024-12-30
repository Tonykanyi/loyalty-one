import { apiClient } from './client';
import { API_ENDPOINTS } from '../config/constants';

export const fetchProducts = async (category) => {
  const params = category ? { category } : {};
  const response = await apiClient.get(API_ENDPOINTS.PRODUCTS.LIST, { params });
  return response.data;
};

export const fetchProduct = async (id) => {
  const response = await apiClient.get(API_ENDPOINTS.PRODUCTS.DETAIL(id));
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await apiClient.post(API_ENDPOINTS.PRODUCTS.LIST, productData);
  return response.data;
};

export const updateProduct = async ({ id, ...productData }) => {
  const response = await apiClient.put(API_ENDPOINTS.PRODUCTS.DETAIL(id), productData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await apiClient.delete(API_ENDPOINTS.PRODUCTS.DETAIL(id));
  return response.data;
};