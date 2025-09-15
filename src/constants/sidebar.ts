import { ROLES, type RoleEnum } from "@/config/roles";
import { ROUTES } from "@/routes/utils";

import {
  type IconDefinition,
  faFolderTree,
} from "@fortawesome/free-solid-svg-icons";

export type NavItem = {
  label: string;
  path: string;
  icon: IconDefinition;
  activeIcon: IconDefinition;
  children?: NavItem[];
  roles?: RoleEnum[];
};

export const DASHBOARD_NAVBAR_LINKS: NavItem[] = [
  {
    label: "Danh mục",
    path: ROUTES.ADMIN_CATEGORIES,
    icon: faFolderTree,
    activeIcon: faFolderTree,
    roles: [ROLES.ADMIN],
  },
];
