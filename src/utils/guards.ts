import { ROLES, type RoleEnum } from "@/config/roles";
import { ROUTES } from "@/routes/utils";

export function redirectByRole(role: RoleEnum): string {
  if (!role) return ROUTES.LOGIN;

  if (role === ROLES.ADMIN) return ROUTES.ADMIN;
  else if (role === ROLES.INSTRUCTOR) return ROUTES.INSTRUCTORS;
  else return ROUTES.ROOT;
}
