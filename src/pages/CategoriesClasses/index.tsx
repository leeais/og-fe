import { faEllipsis, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import TableClasses from "./components/TableClasses";
import { useModal } from "@/hooks/useModal";
import ModalClass from "./components/ModalClass";
import { CLASS_MODAL_NAME } from "./utils";

export default function CategoriesClasses() {
  const { openModal } = useModal();
  return (
    <div className="p-4 bg-background space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-base">Bảng dữ liệu</h2>
        <div className="space-x-2">
          <Button type="primary" onClick={() => openModal(CLASS_MODAL_NAME)}>
            Thêm mới
          </Button>
          <Button icon={<FontAwesomeIcon icon={faFilter} />} />
          <Button icon={<FontAwesomeIcon icon={faEllipsis} />} />
        </div>
      </div>

      <TableClasses />

      <ModalClass name={CLASS_MODAL_NAME} />
    </div>
  );
}
