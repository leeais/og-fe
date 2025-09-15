import { faEllipsis, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import TableProcedures from "./components/TableProcedures";

export default function CategoriesProcedures() {
  return (
    <div className="p-4 bg-background space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-base">Bảng dữ liệu</h2>
        <div className="space-x-2">
          <Button type="primary">Thêm mới</Button>
          <Button icon={<FontAwesomeIcon icon={faFilter} />} />
          <Button icon={<FontAwesomeIcon icon={faEllipsis} />} />
        </div>
      </div>

      <TableProcedures />
    </div>
  );
}
