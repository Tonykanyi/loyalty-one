import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { login as loginApi } from '../api/auth';

export const useAuth = () => {
  const navigate = useNavigate();
  const { setAuth, logout: logoutStore } = useAuthStore();

  const login = useCallback(async (credentials) => {
    try {
      const response = await loginApi(credentials);
      setAuth(response.user, response.token);
      navigate('/admin');
      return response;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  }, [navigate, setAuth]);

  const logout = useCallback(() => {
    logoutStore();
    navigate('/login');
  }, [navigate, logoutStore]);

  return { login, logout };
};