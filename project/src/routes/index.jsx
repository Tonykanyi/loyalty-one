import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loading } from '../components/ui';
import ProtectedRoute from '../components/auth/ProtectedRoute';

// Lazy load pages for better performance
const HomePage = lazy(() => import('../pages/HomePage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const AdminDashboard = lazy(() => import('../pages/admin/Dashboard'));
const LoginPage = lazy(()=> import('../pages/auth/LoginPage'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin/*"
          element={
          
              <AdminDashboard />
            
          }
        />
      </Routes>
    </Suspense>
  );
}