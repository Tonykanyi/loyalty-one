export const API_BASE_URL = '/api';

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAILS: '/product/:id',
  CONTACT: '/contact',
  LOGIN: '/login',
  ADMIN: '/admin',
};

export const CATEGORIES = {
  MEN: 'men',
  WOMEN: 'women',
  KIDS: 'kids',
};

export const STORE_INFO = {
  name: 'Loyalty',
  address: '123 Fashion Street, Style City, SC 12345',
  phone: '(555) 123-4567',
  email: 'contact@eshop.com',
  hours: 'Monday - Friday: 9AM - 6PM',
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/token',
    LOGOUT: '/auth/logout',
  },
  PRODUCTS: {
    LIST: '/products',
    DETAIL: (id) => `/products/${id}`,
  },
};

export const QUERY_KEYS = {
  PRODUCTS: 'products',
  PRODUCT: 'product',
  AUTH: 'auth',
};