import LgTable from "@/components/_common/LgTable";
import type { Instructor } from "./utils";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { instructorService } from "@/services/instructor.service";

export default function TableInstructors() {
  const { data, isPending } = useQuery({
    queryKey: ["departments"],
    queryFn: instructorService.getInstructors,
  });

  return (
    <LgTable<Instructor>
      columns={columns}
      isLoading={isPending}
      dataSource={data?.data || []}
    />
  );
}
