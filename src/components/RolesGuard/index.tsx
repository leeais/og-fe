import { type RoleEnum } from "@/config/roles";
import { useAuth } from "@/hooks/useAuth";
import { ROUTES } from "@/routes/utils";
import { redirectByRole } from "@/utils/guards";
import { type PropsWithChildren } from "react";
import { Navigate } from "react-router";

type RolesGuardProps = PropsWithChildren & {
  hasRoles: RoleEnum[] | "*";
  showNotFoundPage?: boolean;
  redirectTo?: keyof typeof ROUTES;
};

export default function RolesGuard({
  children,
  hasRoles,
  showNotFoundPage = true,
  redirectTo,
}: RolesGuardProps) {
  const { activeRole } = useAuth();

  if (!activeRole) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (hasRoles === "*") {
    console.log("debugger", redirectByRole(activeRole));
    return <Navigate to={redirectByRole(activeRole)} />;
  }

  console.log("debugger");

  if (!hasRoles.includes(activeRole)) {
    if (redirectTo) return <Navigate to={redirectTo} />;
    if (showNotFoundPage) return <Navigate to={ROUTES.NOT_FOUND} />;
    return <Navigate to={redirectByRole(activeRole)} />;
  }

  return children;
}
