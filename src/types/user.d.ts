declare interface User {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  isActive: boolean;
  roles?: RoleEnum[];
  createdAt: Date;
  updatedAt?: Date;
}
