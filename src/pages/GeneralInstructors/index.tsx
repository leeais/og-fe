import { faEllipsis, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import TableInstructors from "./components/TableInstructors";
import { useModal } from "@/hooks/useModal";
import { INSTRUCTOR_MODAL_NAME } from "./utils";
import ModalInstructor from "./components/ModalInstructor";

export default function GeneralInstructors() {
  const { openModal } = useModal();
  return (
    <div className="p-4 bg-background space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-base">Bảng dữ liệu</h2>
        <div className="space-x-2">
          <Button type="primary" onClick={() => openModal(INSTRUCTOR_MODAL_NAME)}>Thêm mới</Button>
          <Button icon={<FontAwesomeIcon icon={faFilter} />} />
          <Button icon={<FontAwesomeIcon icon={faEllipsis} />} />
        </div>
      </div>

      <TableInstructors />

      <ModalInstructor name={INSTRUCTOR_MODAL_NAME} />
    </div>
  );
}
