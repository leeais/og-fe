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
  faSwatchbook,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

export type NavItem = {
  label: string;
  path: string;
  icon: IconDefinition;
  activeIcon: IconDefinition;
  children?: NavItem[];
};

export const DASHBOARD_NAVBAR_LINKS: Record<
  RoleEnum,
  {
    role: RoleEnum;
    items: NavItem[];
  }
> = {
  [ROLES.ADMIN]: {
    role: ROLES.ADMIN,
    items: [
      {
        label: "Dashboard",
        path: ROUTES.ADMIN,
        icon: faChartPie,
        activeIcon: faChartPie,
      },
      {
        label: "Thủ tục hành chính",
        path: ROUTES.ADMIN_PROCEDURES,
        icon: faFolderOpen,
        activeIcon: faFolderOpen,
      },
      {
        label: "Danh mục",
        path: ROUTES.ADMIN_CATEGORIES,
        icon: faFolderTree,
        activeIcon: faFolderTree,
      },
      {
        label: "Quản lý chung",
        path: ROUTES.ADMIN_GENERAL,
        icon: faToolbox,
        activeIcon: faToolbox,
      },
      {
        label: "Cài đặt",
        path: ROUTES.SETTINGS,
        icon: faGear,
        activeIcon: faGear,
      },
    ],
  },
  [ROLES.INSTRUCTOR]: {
    role: ROLES.INSTRUCTOR,
    items: [
      {
        label: "Dashboard",
        path: ROUTES.INSTRUCTORS,
        icon: faChartPie,
        activeIcon: faChartPie,
      },
      {
        label: "Tạo yêu cầu",
        path: ROUTES.REQUEST_CREATION,
        icon: faFileCirclePlus,
        activeIcon: faFileCirclePlus,
      },
      {
        label: "Quản lý yêu cầu",
        path: ROUTES.REQUESTS,
        icon: faCodePullRequest,
        activeIcon: faCodePullRequest,
      },
      {
        label: "Xử lý yêu cầu",
        path: ROUTES.INSTRUCTORS_REQUEST_PROCESSING,
        icon: faSwatchbook,
        activeIcon: faSwatchbook,
      },
      {
        label: "Quản lý tài liệu",
        path: ROUTES.DOCUMENTS,
        icon: faFolder,
        activeIcon: faFolder,
      },
      {
        label: "Cài đặt",
        path: ROUTES.SETTINGS,
        icon: faGear,
        activeIcon: faGear,
      },
    ],
  },
  [ROLES.STUDENT]: {
    role: ROLES.STUDENT,
    items: [
      {
        label: "Trang chủ",
        path: ROUTES.ROOT,
        icon: faHouse,
        activeIcon: faHouse,
      },
      {
        label: "Tạo yêu cầu",
        path: ROUTES.REQUEST_CREATION,
        icon: faFileCirclePlus,
        activeIcon: faFileCirclePlus,
      },
      {
        label: "Quản lý yêu cầu",
        path: ROUTES.REQUESTS,
        icon: faCodePullRequest,
        activeIcon: faCodePullRequest,
      },
      {
        label: "Quản lý tài liệu",
        path: ROUTES.DOCUMENTS,
        icon: faFolder,
        activeIcon: faFolder,
      },
      {
        label: "Cài đặt",
        path: ROUTES.SETTINGS,
        icon: faGear,
        activeIcon: faGear,
      },
    ],
  },
};
