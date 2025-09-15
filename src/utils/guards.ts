import { ROLES } from "@/config/roles";
import { ROUTES } from "@/routes/utils";

export function redirectByRole(currentUser: User): string {
  if (!currentUser || !currentUser.roles) return ROUTES.LOGIN;

  if (currentUser?.roles?.includes(ROLES.ADMIN)) return ROUTES.ADMIN;
  else if (currentUser.roles.includes(ROLES.INSTRUCTOR)) return ROUTES.INSTRUCTORS;
  else return ROUTES.ROOT;
}
