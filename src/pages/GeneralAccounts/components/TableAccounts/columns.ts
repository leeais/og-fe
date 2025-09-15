import type { ColumnType } from "antd/es/table";
import type { Account } from "./utils";

export const columns: ColumnType<Account>[] = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username', 
    width: 150,
  },
  {
    title: 'ID giáo viên',
    dataIndex: 'instructorId',
    key: 'instructorId',
    width: 150,
  },
  {
    title: 'ID sinh viên',
    dataIndex: 'studentId',
    key: 'studentId',
    width: 150,
  },
  {
    title: 'Loại tài khoản',
    dataIndex: 'role',
    key: 'role',
    width: 150,
  },
  {
    title: 'Trạng thái',
    dataIndex: 'isActive',
    key: 'isActive',
    width: 150,
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
