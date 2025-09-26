import LgTable from "@/components/_common/LgTable";
import type { Batch } from "./utils";
import { columns } from "./columns";
import { batchService } from "@/services/batch.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/hooks/useModal";
import { BATCH_MODAL_NAME } from "../../utils";
import { message } from "antd";

export default function TableBatches() {
  const queryClient = useQueryClient();
  const { openModal } = useModal();

  const { data, isPending } = useQuery({
    queryKey: ["batches"],
    queryFn: batchService.getBatches,
  });

  const { mutate } = useMutation({
    mutationFn: batchService.deleteBatch,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["batches"],
      });
      message.success("Xóa thành công");
    },
  });

  return (
    <LgTable<Batch>
      columns={columns}
      isLoading={isPending}
      dataSource={data?.data || []}
      rowActions={{
        onEdit: (record: Batch) => openModal(BATCH_MODAL_NAME, record),
        onDelete: (record: Batch) => {
          mutate(record.id);
        },
      }}
    />
  );
}
