import useAuthStore from '@/store/auth.store';

export const useAuth = () => {
  const { user: currentUser, isAuthenticated: isLoggedIn, setCredentials, logout, token } = useAuthStore();
  return { currentUser, isLoggedIn, setCredentials, logout, token };
};
