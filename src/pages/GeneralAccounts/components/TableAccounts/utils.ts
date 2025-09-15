export interface Account {
  id: number;
  username: string;
  password: string;
  isActive: boolean;
  instructorId?: number | null;
  studentId?: number | null;
  accountStatusId?: number | null;
  createdAt: Date;
  updatedAt: Date | null;
}