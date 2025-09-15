import { faEllipsis, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import TableAccounts from "./components/TableAccounts";
import { useModal } from "@/hooks/useModal";
import { ACCOUNT_MODAL_NAME } from "./utils";
import ModalAccount from "./components/ModalAccount";

export default function GeneralAccounts() {
  const { openModal } = useModal();
  return (
    <div className="p-4 bg-background space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-base">Bảng dữ liệu</h2>
        <div className="space-x-2">
          <Button type="primary" onClick={() => openModal(ACCOUNT_MODAL_NAME)}>Thêm mới</Button>
          <Button icon={<FontAwesomeIcon icon={faFilter} />} />
          <Button icon={<FontAwesomeIcon icon={faEllipsis} />} />
        </div>
      </div>

      <TableAccounts />

      <ModalAccount name={ACCOUNT_MODAL_NAME} />
    </div>
  );
}
