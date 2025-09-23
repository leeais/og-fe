import { Button } from "antd";
import UploadDocuments from "./components/UploadDocuments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import TableDocuments from "./components/TableDocuments";

export default function Documents() {
  return (
    <div className="flex gap-4 bg-background p-4">
      <div className="flex-2 space-y-4 overflow-hidden">
        <UploadDocuments />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base">Bảng dữ liệu</h3>
            <div className="space-x-2">
              <Button icon={<FontAwesomeIcon icon={faSearch} />} />
              <Button icon={<FontAwesomeIcon icon={faFilter} />} />
              <Button icon={<FontAwesomeIcon icon={faEllipsis} />} />
            </div>
          </div>
          <TableDocuments />
        </div>
      </div>
      {/* <div className="flex-1 border rounded p-4 min-h-[calc(100vh-120px)] bg-background"></div> */}
    </div>
  );
}
