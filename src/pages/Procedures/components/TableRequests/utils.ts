export interface Request {
  id: number;
  requestTypeId: number;
  accountId: number;
  title: string;
  description: string;
  priorityId: number;
  note?: string;
  paymentStatusId: number;
  paymentMethodId: number;
  requestStatusId: number;
  createdAt: string;
  updatedAt?: string;
  completedAt?: string;
}
