import type { ColumnType } from "antd/es/table";
import type { Procedure } from "./utils";
import { formatDate } from "@/utils/date";
import type { Department } from "@/pages/Documents/components/TableDocuments/utils";
import type { Faculty } from "@/pages/CategoriesFaculties/components/TableFaculties/utils";

export const columns: ColumnType<Procedure>[] = [
  {
    key: "name",
    title: "Tên thủ tục",
    dataIndex: "name",
    width: 200,
    fixed: "left",
  },
  {
    key: "description",
    title: "Mô tả",
    dataIndex: "description",
    width: 300,
  },
  {
    key: "faculty",
    title: "Khoa xử lý",
    dataIndex: "faculty",
    width: 150,
    render: (value: Faculty) => value?.name,
  },
  {
    key: "department",
    title: "Phòng ban xử lý",
    dataIndex: "department",
    width: 150,
    render: (value: Department) => value?.name,
  },
  {
    key: "fee",
    title: "Phí",
    dataIndex: "fee",
    width: 100,
    align: "right",
    render: (value: number) =>
      (value || 0).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
  },
  {
    key: "estimatedTime",
    title: "Thời gian dự kiến",
    dataIndex: "estimatedTime",
    width: 150,
    align: "right",
    render: (value: number) => `${value} ngày`,
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
