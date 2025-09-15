import type { ColumnType } from "antd/es/table";
import type { Student } from "./utils";

export const columns: ColumnType<Student>[] = [
  {
    title: 'Họ và tên',
    key: 'fullname',
    render: (_, record) => `${record.lastName} ${record.firstName}`,
    width: 200,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 200,
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone', 
    width: 150,
  },
  {
    title: 'Ảnh đại diện',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 200,
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 200,
  },
  {
    title: 'Ngày cập nhật',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    width: 200,
  },
];
