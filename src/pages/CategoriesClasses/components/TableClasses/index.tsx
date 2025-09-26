import LgTable from "@/components/_common/LgTable";
import type { Class } from "./utils";
import { columns } from "./columns";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/hooks/useModal";
import { message } from "antd";
import { CLASS_MODAL_NAME } from "../../utils";
import { classService } from "@/services/class.service";

export default function TableClasses() {
  const queryClient = useQueryClient();
  const { openModal } = useModal();

  const { data, isPending } = useQuery({
    queryKey: ["classes"],
    queryFn: classService.getClasses,
  });

  const { mutate } = useMutation({
    mutationFn: classService.deleteClass,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["classes"],
      });
      message.success("Xóa thành công");
    },
  });

  return (
    <LgTable<Class>
      columns={columns}
      isLoading={isPending}
      dataSource={data?.data || []}
      rowActions={{
        onEdit: (record: Class) => openModal(CLASS_MODAL_NAME, record),
        onDelete: (record: Class) => {
          mutate(record.id);
        },
      }}
    />
  );
}
