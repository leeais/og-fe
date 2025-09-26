import type { ColumnType } from "antd/es/table";
import type { Batch } from "./utils";
import { formatDate } from "@/utils/date";

export const columns: ColumnType<Batch>[] = [
  {
    key: "name",
    title: "Tên khóa học",
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
    key: "startYear",
    title: "Năm bắt đầu",
    dataIndex: "startYear",
    width: 150,
  },
  {
    key: "endYear",
    title: "Năm kết thúc",
    dataIndex: "endYear",
    width: 150,
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
