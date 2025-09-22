import LgTable from "@/components/_common/LgTable";
import type { Department } from "./utils";
import { columns } from "./columns";
import { departmentService } from "@/services/department.service";
import { useQuery } from "@tanstack/react-query";

export default function TableDepartments() {
  const { data, isPending } = useQuery({
    queryKey: ["departments"],
    queryFn: departmentService.getDepartments,
  });

  return (
    <LgTable<Department>
      columns={columns}
      isLoading={isPending}
      dataSource={data?.data || []}
    />
  );
}
