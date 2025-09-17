import { ROUTES } from "@/routes/utils";
import {
  faBuilding,
  faCalendarDays,
  faFileLines,
  faPeopleRoof,
  faUsersLine,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

type CategoryItemType = {
  name: string;
  description: string;
  icon: IconDefinition;
  path: string;
};

type CategoriesGroupType = {
  title: string;
  childrens: CategoryItemType[];
};

export const CATEGORIES_LIST: CategoriesGroupType[] = [
  {
    title: "Đơn từ",
    childrens: [
      {
        name: "Thủ tục hành chính",
        description: "Thêm mới và quản lý thủ tục hành chính",
        icon: faFileLines,
        path: ROUTES.ADMIN_CATEGORIES_PROCEDURES,
      },
    ],
  },
  {
    title: "Phòng ban và bộ phận",
    childrens: [
      {
        name: "Phòng ban",
        description: "Thêm mới và quản lý phòng ban",
        icon: faBuilding,
        path: ROUTES.ADMIN_CATEGORIES_DEPARTMENTS,
      },
      {
        name: "Khoa",
        description: "Thêm mới và quản lý khoa",
        icon: faPeopleRoof,
        path: ROUTES.ADMIN_CATEGORIES_FACULTIES,
      },
      {
        name: "Lớp học",
        description: "Thêm mới và quản lý lớp học",
        icon: faUsersLine,
        path: ROUTES.ADMIN_CATEGORIES_FACULTIES,
      },
      {
        name: "Khóa học",
        description: "Thêm mới và quản lý khóa học",
        icon: faCalendarDays,
        path: ROUTES.ADMIN_CATEGORIES_FACULTIES,
      },
    ],
  },
];
