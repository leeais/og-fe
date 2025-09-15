import LgTable from "@/components/_common/LgTable";
import type { Procedure } from "./utils";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { proceduresService } from "@/services/procedures.service";

export default function TableProcedures() {
  const { data } = useQuery({ queryKey: ['procedures'], queryFn: proceduresService.getProcedures })
  console.log(data);

  return <LgTable<Procedure> columns={columns} dataSource={[]} />;
}
