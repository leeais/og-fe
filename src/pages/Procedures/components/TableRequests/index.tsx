import LgTable from "@/components/_common/LgTable";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./columns";
import type { Request } from "./utils";
import { requestService } from "@/services/request.service";

export default function TableRequests() {
  const { data, isPending } = useQuery({
    queryKey: ["requests"],
    queryFn: requestService.getRequests,
  });

  return (
    <LgTable<Request>
      columns={columns}
      isLoading={isPending}
      dataSource={data?.data || []}
    />
  );
}
