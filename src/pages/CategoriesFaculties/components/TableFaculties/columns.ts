import type { ColumnType } from "antd/es/table";
import type { Faculty } from "./utils";
import { formatDate } from "@/utils/date";

export const columns: ColumnType<Faculty>[] = [
  {
    key: "name",
    title: "Tên khoa",
    dataIndex: "name",
    width: 200,
    fixed: "left",
  },
  {
    key: "shortName",
    title: "Tên viết tắt",
    dataIndex: "shortName",
    width: 150,
  },
  {
    key: "avatar",
    title: "Logo",
    dataIndex: "avatar",
    width: 100,
  },
  {
    key: "bio",
    title: "Mô tả",
    dataIndex: "bio",
    width: 300,
  },
  {
    key: "createdAt",
    title: "Ngày tạo",
    dataIndex: "createdAt",
    width: 200,
    render: (value: Date) => formatDate(value),
  },
  {
    key: "updatedAt",
    title: "Ngày cập nhật",
    dataIndex: "updatedAt",
    width: 200,
    render: (value: Date) => formatDate(value),
  },
];
