/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColumnType } from "antd/es/table";
import type { Class } from "./utils";
import { formatDate } from "@/utils/date";
import type { Batch } from "@/pages/CategoriesBatches/components/TableBatches/utils";
import type { Faculty } from "@/pages/CategoriesFaculties/components/TableFaculties/utils";

export const columns: ColumnType<Class>[] = [
  {
    key: "name",
    title: "Tên lớp học",
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
    key: "faculty",
    title: "Khoa",
    dataIndex: "faculty",
    width: 150,
    render: (value: Faculty) => value?.name,
  },
  {
    key: "batch",
    title: "Khóa học",
    dataIndex: "batch",
    width: 150,
    render: (value: Batch) => value?.name,
  },
  {
    key: "homeroomTeacher",
    title: "Giáo viên chủ nhiệm",
    dataIndex: "classInstructors",
    width: 150,
    render: (value: Record<string, any>) =>
      `${value?.lastName || "Phạm Thị"} ${value?.firstName || "Hường"}`,
  },
  {
    key: "studentsCount",
    title: "Số lượng sinh viên",
    dataIndex: "classStudents",
    width: 150,
    align: "center",
    render: (value: any[]) => (value || []).length,
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
