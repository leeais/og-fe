import LgTable from "@/components/_common/LgTable";
import { requestService } from "@/services/request.service";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./columns";
import type { Request } from "./utils";
import { useAuth } from "@/hooks/useAuth";

export default function TableRequestsHistory() {
  const { currentUser } = useAuth();
  const { data, isPending } = useQuery({
    queryKey: [currentUser?.id, "requests", "all"],
    queryFn: () => requestService.getRequestsByUser(currentUser?.id as string),
  });

  return (
    <LgTable<Request>
      columns={columns}
      isLoading={isPending}
      dataSource={data?.data || []}
    />
  );
}
