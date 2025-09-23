import type { ColumnType } from "antd/es/table";
import type { Request } from "./utils";

export const columns: ColumnType<Request>[] = [
  {
    title: "Trạng thái yêu cầu",
    dataIndex: "requestStatusId",
    key: "requestStatusId",
    width: 160,
  },
  {
    title: "Loại yêu cầu",
    dataIndex: "requestTypeId",
    key: "requestTypeId",
    width: 120,
  },
  {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
    width: 200,
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
    ellipsis: true,
    width: 250,
  },
  {
    title: "Độ ưu tiên",
    dataIndex: "priorityId",
    key: "priorityId",
    width: 120,
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
    width: 150,
  },
  {
    title: "Trạng thái thanh toán",
    dataIndex: "paymentStatusId",
    key: "paymentStatusId",
    width: 200,
  },
  {
    title: "Phương thức thanh toán",
    dataIndex: "paymentMethodId",
    key: "paymentMethodId",
    width: 180,
  },
  {
    title: "Ngày tạo",
    dataIndex: "createdAt",
    key: "createdAt",
    width: 160,
  },
  {
    title: "Ngày cập nhật",
    dataIndex: "updatedAt",
    key: "updatedAt",
    width: 160,
  },
  {
    title: "Ngày hoàn thành",
    dataIndex: "completedAt",
    key: "completedAt",
    width: 160,
  },
];
