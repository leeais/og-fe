import LgTable from "@/components/_common/LgTable";
import { useEffect, useState } from "react";
import type { Instructor } from "./utils";
import { columns } from "./columns";

export default function TableInstructors() {
  const [dataSource, setDataSource] = useState<Instructor[]>([]);
  
  useEffect(() => {
    setDataSource([])
  }, []);

  return <LgTable<Instructor> columns={columns} dataSource={dataSource} />;
}
