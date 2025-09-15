import LgTable from "@/components/_common/LgTable";
import { useEffect, useState } from "react";
import type { Account } from "./utils";
import { columns } from "./columns";

export default function TableAccounts() {
  const [dataSource, setDataSource] = useState<Account[]>([]);
  
  useEffect(() => {
    setDataSource([])
  }, []);

  return <LgTable<Account> columns={columns} dataSource={dataSource} />;
}
