import LgTable from "@/components/_common/LgTable";
import type { Procedure } from "./utils";
import { columns } from "./columns";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { procedureService } from "@/services/procedure.service";
import { useModal } from "@/hooks/useModal";
import { message } from "antd";
import { PROCEDURES_MODAL_NAME } from "../../utils";
import { usePagination } from "@/hooks/usePagination";
import { useState } from "react";

export default function TableProcedures() {
  const queryClient = useQueryClient();
  const { openModal } = useModal();
  const { pagination, onChange, onShowSizeChange } = usePagination();
  const [rowSelectedIds, setRowSelectedIds] = useState<Id[]>([]);

  const { data, isPending } = useQuery({
    queryKey: ["procedures"],
    queryFn: procedureService.getProcedures,
  });

  const { mutate } = useMutation({
    mutationFn: procedureService.deleteProcedure,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["procedures"],
      });
      message.success("Xóa thành công");
    },
  });

  console.log(rowSelectedIds);

  return (
    <LgTable<Procedure>
      columns={columns}
      isLoading={isPending}
      dataSource={data?.data || []}
      rowSelection={{
        selectedRowKeys: rowSelectedIds,
        onSelectedRowKeysChange: setRowSelectedIds,
      }}
      rowActions={{
        onEdit: (record: Procedure) => openModal(PROCEDURES_MODAL_NAME, record),
        onDelete: (record: Procedure) => {
          mutate(record.id);
        },
      }}
      pagination={{
        current: pagination.current,
        pageSize: pagination.pageSize,
        total: (data?.data || []).length || 0,
        showSizeChanger: true,
        showQuickJumper: true,
        onChange,
        onShowSizeChange,
      }}
    />
  );
}
