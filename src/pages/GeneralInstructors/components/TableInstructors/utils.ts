export interface Instructor {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
