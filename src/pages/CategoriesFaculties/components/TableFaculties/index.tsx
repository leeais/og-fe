import LgTable from "@/components/_common/LgTable";
import type { Faculty } from "./utils";
import { columns } from "./columns";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { facultyService } from "@/services/faculty.service";
import { useModal } from "@/hooks/useModal";
import { FACULTY_MODAL_NAME } from "../../utils";
import { message } from "antd";

export default function TableFaculties() {
  const queryClient = useQueryClient();
  const { openModal } = useModal();

  const { data, isPending } = useQuery({
    queryKey: ["faculties"],
    queryFn: facultyService.getFaculties,
  });

  const { mutate } = useMutation({
    mutationFn: facultyService.deleteFaculty,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["faculties"],
      });
      message.success("Xóa thành công");
    },
  });

  return (
    <LgTable<Faculty>
      columns={columns}
      isLoading={isPending}
      dataSource={data?.data || []}
      rowActions={{
        onEdit: (record: Faculty) => openModal(FACULTY_MODAL_NAME, record),
        onDelete: (record: Faculty) => {
          mutate(record.id);
        },
      }}
    />
  );
}
