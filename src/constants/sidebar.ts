import { ROLES, type RoleEnum } from "@/config/roles";
import { ROUTES } from "@/routes/utils";

import {
  type IconDefinition,
  faChartPie,
  faCodePullRequest,
  faFileCirclePlus,
  faFolder,
  faFolderOpen,
  faFolderTree,
  faGear,
  faHouse,
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

// const allRoles: RoleEnum[] = [ROLES.ADMIN, ROLES.INSTRUCTOR, ROLES.STUDENT];
const userRoles: RoleEnum[] = [ROLES.INSTRUCTOR, ROLES.STUDENT];

export const DASHBOARD_NAVBAR_LINKS: NavItem[] = [
  {
    label: "Trang chủ",
    path: ROUTES.ROOT,
    icon: faHouse,
    activeIcon: faHouse,
    roles: [ROLES.STUDENT],
  },
  {
    label: "Tạo yêu cầu",
    path: ROUTES.REQUESTS_ADD,
    icon: faFileCirclePlus,
    activeIcon: faFileCirclePlus,
    roles: userRoles,
  },
  {
    label: "Quản lý yêu cầu",
    path: ROUTES.REQUESTS,
    icon: faCodePullRequest,
    activeIcon: faCodePullRequest,
    roles: userRoles,
  },
  {
    label: "Quản lý tài liệu",
    path: ROUTES.DOCUMENTS,
    icon: faFolder,
    activeIcon: faFolder,
    roles: userRoles,
  },
  // admin
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
  {
    label: "Cài đặt",
    path: ROUTES.SETTINGS,
    icon: faGear,
    activeIcon: faGear,
    roles: [ROLES.ADMIN],
  },
];
