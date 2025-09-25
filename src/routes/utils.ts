export const ROUTES = {
  ROOT: "/",
  REQUEST_CREATION: "/request-creation",
  REQUESTS: "/requests",
  DOCUMENTS: "/documents",
  SETTINGS: "/settings",
  SETTINGS_PROFILE: "/settings/profile",

  // instructors
  INSTRUCTORS: "/instructors",
  INSTRUCTORS_REQUEST_PROCESSING: "/instructors/request-processing",

  // admin
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

  LOGIN: "/login",
  FORBIDDEN: "/403",
  CATCH_ALL: "*",
};

export const breadcrumbNameMap = {
  [ROUTES.REQUEST_CREATION]: "Tạo yêu cầu",
  [ROUTES.REQUESTS]: "Quản lý yêu cầu",
  [ROUTES.DOCUMENTS]: "Quản lý tài liệu",
  [ROUTES.SETTINGS]: "Cài đặt",
  [ROUTES.SETTINGS_PROFILE]: "Thông tin tài khoản",

  // instructors
  [ROUTES.INSTRUCTORS]: "Dashboard",
  [ROUTES.INSTRUCTORS_REQUEST_PROCESSING]: "Xử lý yêu cầu",

  // admin
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
  [ROUTES.ADMIN_GENERAL_ROLES]: "Phân quyền",
};
