import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
};

type AuthActions = {
  setCredentials: (user: User, token: string) => void;
  logout: () => void;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      ...initialState,

      setCredentials: (user, token) => set({ user, token, isAuthenticated: true }),
      logout: () => set(initialState),
    }),
    { name: 'auth' }
  )
);

export default useAuthStore;
