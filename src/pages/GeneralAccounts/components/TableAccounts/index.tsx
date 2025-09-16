import LgTable from "@/components/_common/LgTable";
import type { Account } from "./utils";
import { columns } from "./columns";
import { accountService } from "@/services/account.service";
import { useQuery } from "@tanstack/react-query";

export default function TableAccounts() {
  const { data, isPending } = useQuery({
    queryKey: ["departments"],
    queryFn: accountService.getAccounts,
  });

  if (isPending) return <div>Loading...</div>;

  return <LgTable<Account> columns={columns} dataSource={data?.data || []} />;
}
