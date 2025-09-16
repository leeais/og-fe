import { ROLES, type RoleEnum } from "@/config/roles";
import { ROUTES } from "@/routes/utils";

import {
  type IconDefinition,
  faChartPie,
  faFolderOpen,
  faFolderTree,
  faToolbox,
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
    label: "Dashboard",
    path: ROUTES.ADMIN,
    icon: faChartPie,
    activeIcon: faChartPie,
    roles: [ROLES.ADMIN],
  },
  {
    label: "Thủ tục hành chính",
    path: ROUTES.ADMIN_PROCEDURES,
    icon: faFolderOpen,
    activeIcon: faFolderOpen,
    roles: [ROLES.ADMIN],
  },
  {
    label: "Danh mục",
    path: ROUTES.ADMIN_CATEGORIES,
    icon: faFolderTree,
    activeIcon: faFolderTree,
    roles: [ROLES.ADMIN],
  },
  {
    label: "Quản lý chung",
    path: ROUTES.ADMIN_GENERAL,
    icon: faToolbox,
    activeIcon: faToolbox,
    roles: [ROLES.ADMIN],
  },
];
