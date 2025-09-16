export const ROUTES = {
  ROOT: "/",

  LOGIN: "/login",
  PROFILE: '/profile',

  INSTRUCTORS: "/instructors",
  ADMIN: "/admin",
  ADMIN_PROCEDURES: '/admin/procedures',

  ADMIN_CATEGORIES: "/admin/categories",
  ADMIN_CATEGORIES_PROCEDURES: "/admin/categories/procedures",
  ADMIN_CATEGORIES_FACULTIES: "/admin/categories/faculties",
  ADMIN_CATEGORIES_DEPARTMENTS: "/admin/categories/departments",

  ADMIN_GENERAL: "/admin/general",
  ADMIN_GENERAL_INSTRUCTORS: "/admin/general/instructors",
  ADMIN_GENERAL_STUDENTS: "/admin/general/students",
  ADMIN_GENERAL_ACCOUNTS: "/admin/general/accounts",
  ADMIN_GENERAL_ROLES: "/admin/general/roles",

  NOT_FOUND: "/not-found",
};

export const breadcrumbNameMap = {
  [ROUTES.ADMIN]: "Dashboard",
  [ROUTES.ADMIN_CATEGORIES]: "Danh mục",
  [ROUTES.ADMIN_CATEGORIES_PROCEDURES]: "Danh mục thủ tục",
  [ROUTES.ADMIN_CATEGORIES_DEPARTMENTS]: "Danh mục phòng ban",
  [ROUTES.ADMIN_CATEGORIES_FACULTIES]: "Danh mục khoa",
  [ROUTES.ADMIN_GENERAL]: "Quản lý chung",
  [ROUTES.ADMIN_GENERAL_ACCOUNTS]: "Quản lý tài khoản",
  [ROUTES.ADMIN_GENERAL_STUDENTS]: "Quản lý sinh viên",
  [ROUTES.ADMIN_GENERAL_INSTRUCTORS]: "Quản lý giáo viên",
  [ROUTES.PROFILE]: "Cài đặt tài khoản",
  [ROUTES.ADMIN_PROCEDURES]: "Thủ tục hành chính"
};