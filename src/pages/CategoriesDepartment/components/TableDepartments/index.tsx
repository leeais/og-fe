import LgTable from "@/components/_common/LgTable";
import { useEffect, useState } from "react";
import type { Department } from "./utils";
import { columns } from "./columns";

export default function TableDepartments() {
  const [dataSource, setDataSource] = useState<Department[]>([]);
  
  useEffect(() => {
    setDataSource([])
  }, []);

  return <LgTable<Department> columns={columns} dataSource={dataSource} />;
}
