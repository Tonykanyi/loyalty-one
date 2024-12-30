import { z } from 'zod';

export const productSchema = z.object({
  name: z.string()
    .min(2, 'Product name must be at least 2 characters')
    .max(100, 'Product name must be less than 100 characters'),
  category: z.string()
    .min(2, 'Category is required'),
  quantity: z.number()
    .min(0, 'Quantity must be 0 or greater')
    .int('Quantity must be a whole number'),
  rating: z.number()
    .min(0, 'Rating must be between 0 and 5')
    .max(5, 'Rating must be between 0 and 5')
    .step(0.1, 'Rating must have at most 1 decimal place'),
  image: z.string()
    .url('Image must be a valid URL'),
});

export const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Invalid email address'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters'),
});