import { faEllipsis, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import TableProcedures from "./components/TableProcedures";
import { useModal } from "@/hooks/useModal";
import { PROCEDURES_MODAL_NAME } from "./utils";
import ModalProcedures from "./components/ModalProcedues";

export default function CategoriesProcedures() {
  const { openModal } = useModal();
  return (
    <div className="p-4 bg-background space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-base">Bảng dữ liệu</h2>
        <div className="space-x-2">
          <Button
            type="primary"
            onClick={() => openModal(PROCEDURES_MODAL_NAME)}
          >
            Thêm mới
          </Button>
          <Button icon={<FontAwesomeIcon icon={faFilter} />} />
          <Button icon={<FontAwesomeIcon icon={faEllipsis} />} />
        </div>
      </div>

      <TableProcedures />

      <ModalProcedures name={PROCEDURES_MODAL_NAME} />
    </div>
  );
}
