import LgTable from "@/components/_common/LgTable";
import type { Student } from "./utils";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { studentService } from "@/services/student.service";

export default function TableStudents() {
  const { data, isPending } = useQuery({
    queryKey: ["departments"],
    queryFn: studentService.getStudents,
  });

  if (isPending) return <div>Loading...</div>;

  return <LgTable<Student> columns={columns} dataSource={data?.data || []} />;
}
