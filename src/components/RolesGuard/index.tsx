import { type RoleEnum } from "@/config/roles";
import { useAuth } from "@/hooks/useAuth";
import { ROUTES } from "@/routes/utils";
import { redirectByRole } from "@/utils/guards";
import { type PropsWithChildren } from "react";
import { Navigate } from "react-router";

type RolesGuardProps = PropsWithChildren & {
  hasRoles: RoleEnum[] | "*";
  showForbiddenPage?: boolean;
  redirectTo?: keyof typeof ROUTES;
};

export default function RolesGuard({
  children,
  hasRoles,
  showForbiddenPage = false,
  redirectTo,
}: RolesGuardProps) {
  const { isLoggedIn, activeRole } = useAuth();

  if (hasRoles === "*") return children;

  if (!isLoggedIn || !activeRole) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (!hasRoles.includes(activeRole)) {
    if (redirectTo) return <Navigate to={redirectTo} />;

    if (showForbiddenPage) return <Navigate to={ROUTES.FORBIDDEN} />;

    return <Navigate to={redirectByRole(activeRole)} />;
  }

  return children;
}
