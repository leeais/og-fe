// columns.ts
import type { ColumnsType } from "antd/es/table";

export type Instructor = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

export const columns: ColumnsType<Instructor> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 80,
    fixed: "left",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
    width: 150,
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
    width: 1500,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 2200,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    width: 150,
  },
];
