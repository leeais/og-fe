export const ROLES = {
  ADMIN: "ADMIN",
  INSTRUCTOR: "INSTRUCTOR",
  STUDENT: "STUDENT",
} as const;

export type RoleEnum = (typeof ROLES)[keyof typeof ROLES];

export const rolesMappingName = {
  [ROLES.ADMIN]: "Quản trị viên",
  [ROLES.INSTRUCTOR]: "Giảng viên",
  [ROLES.STUDENT]: "Sinh viên",
};
