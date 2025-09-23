import type { RoleEnum } from "@/config/roles";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  activeRole: RoleEnum | null;
};

type AuthActions = {
  setCredentials: (user: User, token: string) => void;
  switchActiveRole: (role: RoleEnum) => void;
  logout: () => void;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  activeRole: null,
};

const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      ...initialState,

      setCredentials: (user, token) =>
        set({
          user,
          token,
          isAuthenticated: true,
          activeRole: user.roles?.[0],
        }),
      switchActiveRole: (role: RoleEnum) =>
        set((state) => ({ ...state, activeRole: role })),
      logout: () => set(initialState),
    }),
    { name: "auth" }
  )
);

export default useAuthStore;
