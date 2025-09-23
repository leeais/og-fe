import { ROUTES } from "@/routes/utils";
import {
  faChalkboardTeacher,
  faCookieBite,
  faCreditCard,
  faUsers,
  faUsersGear,
  faUserShield,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

type GeneralItemType = {
  name: string;
  description: string;
  icon: IconDefinition;
  path: string;
};

type GeneralsGroupType = {
  title: string;
  children: GeneralItemType[];
};

export const GENERALS_LIST: GeneralsGroupType[] = [
  {
    title: "Người dùng và phân quyền",
    children: [
      {
        name: "Giáo viên",
        description: "Thêm mới và quản lý giáo viên",
        icon: faChalkboardTeacher,
        path: ROUTES.ADMIN_GENERAL_INSTRUCTORS,
      },
      {
        name: "Sinh viên",
        description: "Thêm mới và quản lý sinh viên",
        icon: faUsers,
        path: ROUTES.ADMIN_GENERAL_STUDENTS,
      },
      {
        name: "Tài khoản",
        description: "Thêm mới và quản lý tài khoản",
        icon: faUsersGear,
        path: ROUTES.ADMIN_GENERAL_ACCOUNTS,
      },
      {
        name: "Phân quyền",
        description: "Thiết lập và quản lý phần quyền",
        icon: faUserShield,
        path: ROUTES.ADMIN_GENERAL_ROLES,
      },
      {
        name: "Phiên đăng nhập",
        description: "Thiết lập và quản lý phiên đăng nhập",
        icon: faCookieBite,
        path: ROUTES.ADMIN_GENERAL_ROLES,
      },
    ],
  },
  {
    title: "Thanh toán",
    children: [
      {
        name: "Phương thức thanh toán",
        description: "Thêm mới và quản lý phương thức thanh toán",
        icon: faCreditCard,
        path: ROUTES.ADMIN_GENERAL_INSTRUCTORS,
      },
    ],
  },
];
