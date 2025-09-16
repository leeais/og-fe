import LgTable from "@/components/_common/LgTable";
import type { Procedure } from "./utils";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { procedureService } from "@/services/procedure.service";

export default function TableProcedures() {
  const { data, isPending } = useQuery({
    queryKey: ["procedures"],
    queryFn: procedureService.getProcedures,
  });

  if (isPending) return <div>Loading...</div>;

  return <LgTable<Procedure> columns={columns} dataSource={data?.data || []} />;
}
