import LgTable from "@/components/_common/LgTable";
import type { Department } from "./utils";
import { columns } from "./columns";
import { departmentService } from "@/services/department.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/hooks/useModal";
import { DEPARTMENT_MODAL_NAME } from "../../utils";
import { message } from "antd";

export default function TableDepartments() {
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery({
    queryKey: ["departments"],
    queryFn: departmentService.getDepartments,
  });
  const { mutate } = useMutation({
    mutationFn: departmentService.deleteDepartment,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["departments"],
      });
      message.success("Xóa thành công");
    },
  });
  const { openModal } = useModal();

  return (
    <LgTable<Department>
      columns={columns}
      isLoading={isPending}
      dataSource={data?.data || []}
      rowActions={{
        onEdit: (record: Department) =>
          openModal(DEPARTMENT_MODAL_NAME, record),
        onDelete: (record: Department) => {
          mutate(record.id);
        },
      }}
    />
  );
}
