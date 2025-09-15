import LgTable from "@/components/_common/LgTable";
import { useEffect, useState } from "react";
import type { Student } from "./utils";
import { columns } from "./columns";

export default function TableStudents() {
  const [dataSource, setDataSource] = useState<Student[]>([]);
  
  useEffect(() => {
    setDataSource([])
  }, []);

  return <LgTable<Student> columns={columns} dataSource={dataSource} />;
}
