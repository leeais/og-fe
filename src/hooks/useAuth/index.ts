import useAuthStore from "@/store/auth.store";

export const useAuth = () => {
  const {
    user: currentUser,
    isAuthenticated: isLoggedIn,
    token,
    activeRole,
    setCredentials,
    switchActiveRole,
    logout,
  } = useAuthStore();
  const roles = currentUser?.roles;
  return {
    currentUser,
    isLoggedIn,
    token,
    roles,
    activeRole,
    setCredentials,
    switchActiveRole,
    logout,
  };
};
