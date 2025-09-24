import { useAuth } from "@/hooks/useAuth";
import { redirectByRole } from "@/utils/guards";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";

type GuestOnlyRouteProps = PropsWithChildren & {};

export default function GuestOnlyRoute({ children }: GuestOnlyRouteProps) {
  const { isLoggedIn, activeRole } = useAuth();

  return isLoggedIn && activeRole ? (
    <Navigate to={redirectByRole(activeRole)} />
  ) : (
    children
  );
}
