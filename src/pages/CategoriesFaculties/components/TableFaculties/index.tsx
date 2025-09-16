import LgTable from "@/components/_common/LgTable";
import type { Faculty } from "./utils";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { facultyService } from "@/services/faculty.service";

export default function TableFaculties() {
  const { data, isPending } = useQuery({
    queryKey: ['faculties'],
    queryFn: facultyService.getFaculties,
  })

  if (isPending) return <div>Loading...</div>;

  return <LgTable<Faculty> columns={columns} dataSource={data?.data || []} />;
}
