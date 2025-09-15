import LgTable from "@/components/_common/LgTable";
import { useEffect, useState } from "react";
import type { Faculty } from "./utils";
import { columns } from "./columns";

export default function TableFaculties() {
  const [dataSource, setDataSource] = useState<Faculty[]>([]);
  
  useEffect(() => {
    setDataSource([])
  }, []);

  return <LgTable<Faculty> columns={columns} dataSource={dataSource} />;
}
