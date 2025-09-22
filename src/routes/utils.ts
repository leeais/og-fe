export const ROUTES = {
  ROOT: "/",
  REQUESTS: "/requests",
  REQUESTS_ADD: "/add-request",
  DOCUMENTS: "/documents",

  NOT_FOUND: "/not-found",
  LOGIN: "/login",

  PROFILE: "/profile",
  SETTINGS: "/settings",

  INSTRUCTORS: "/instructors",

  ADMIN: "/admin",
  ADMIN_PROCEDURES: "/admin/procedures",

  ADMIN_CATEGORIES: "/admin/categories",
  ADMIN_CATEGORIES_PROCEDURES: "/admin/categories/procedures",
  ADMIN_CATEGORIES_FACULTIES: "/admin/categories/faculties",
  ADMIN_CATEGORIES_DEPARTMENTS: "/admin/categories/departments",

  ADMIN_GENERAL: "/admin/general",
  ADMIN_GENERAL_INSTRUCTORS: "/admin/general/instructors",
  ADMIN_GENERAL_STUDENTS: "/admin/general/students",
  ADMIN_GENERAL_ACCOUNTS: "/admin/general/accounts",
  ADMIN_GENERAL_ROLES: "/admin/general/roles",
};

export const breadcrumbNameMap = {
  [ROUTES.REQUESTS]: "Quản lý yêu cầu",
  [ROUTES.REQUESTS_ADD]: "Tạo yêu cầu",
  [ROUTES.DOCUMENTS]: "Quản lý tài liệu",

  [ROUTES.ADMIN]: "Dashboard",
  [ROUTES.ADMIN_PROCEDURES]: "Thủ tục hành chính",
  [ROUTES.ADMIN_CATEGORIES]: "Danh mục",
  [ROUTES.ADMIN_CATEGORIES_PROCEDURES]: "Danh mục thủ tục",
  [ROUTES.ADMIN_CATEGORIES_DEPARTMENTS]: "Danh mục phòng ban",
  [ROUTES.ADMIN_CATEGORIES_FACULTIES]: "Danh mục khoa",
  [ROUTES.ADMIN_GENERAL]: "Quản lý chung",
  [ROUTES.ADMIN_GENERAL_ACCOUNTS]: "Quản lý tài khoản",
  [ROUTES.ADMIN_GENERAL_STUDENTS]: "Quản lý sinh viên",
  [ROUTES.ADMIN_GENERAL_INSTRUCTORS]: "Quản lý giáo viên",

  [ROUTES.PROFILE]: "Thông tin tài khoản",
};
