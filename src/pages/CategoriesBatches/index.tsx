import { faEllipsis, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import TableBatches from "./components/TableBatches";
import { useModal } from "@/hooks/useModal";
import { BATCH_MODAL_NAME } from "./utils";
import ModalBatch from "./components/ModalBatch";

export default function CategoriesBatches() {
  const { openModal } = useModal();
  return (
    <div className="p-4 bg-background space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-base">Bảng dữ liệu</h2>
        <div className="space-x-2">
          <Button type="primary" onClick={() => openModal(BATCH_MODAL_NAME)}>
            Thêm mới
          </Button>
          <Button icon={<FontAwesomeIcon icon={faFilter} />} />
          <Button icon={<FontAwesomeIcon icon={faEllipsis} />} />
        </div>
      </div>

      <TableBatches />

      <ModalBatch name={BATCH_MODAL_NAME} />
    </div>
  );
}
