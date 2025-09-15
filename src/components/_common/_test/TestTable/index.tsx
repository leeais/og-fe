import LgTable from "@/components/_common/LgTable";
import { columns, type Instructor } from "./columns";
import { data } from "./utils";

export default function TestTable() {
  return (
    <LgTable<Instructor>
      columns={columns}
      dataSource={data}
      rowKey="id"
      scroll={{ x: "max-content" }}
      pagination={{ pageSize: 10 }}
    />
  );
}
