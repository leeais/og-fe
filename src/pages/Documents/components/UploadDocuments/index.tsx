import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { DragEvent } from "react";
import { Upload } from "antd";
import type { UploadChangeParam, UploadFile } from "antd/es/upload";

const { Dragger } = Upload;

export default function UploadDocuments() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUploadFiles = (info: UploadChangeParam<UploadFile<any>>) => {
    console.log(info);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Dragger
        name="files"
        multiple
        onChange={handleUploadFiles}
        onDrop={(e: DragEvent<HTMLDivElement>) => {
          console.log("Dropped files", e.dataTransfer.files);
        }}
        listType="text"
      >
        <FontAwesomeIcon icon={faFileUpload} size="3x" color="green" />
        <p className="text-base my-1">
          Click hoặc kéo tệp vào khu vực này để tải lên
        </p>
        <p className="text-muted-foreground">
          Hỗ trợ tải lên một lần hoặc hàng loạt. Chỉ hỗ trợ các file có định
          dạng <span className="text-primary">.pdf</span>
          {", "}
          <span className="text-primary">.docx</span>
          {", "}
          <span className="text-primary">.png</span>
          {", "}
          <span className="text-primary">.jpg</span>
          {", "}
          <span className="text-primary">.webp</span> có kích thước dưới{" "}
          <span className="text-primary">10mb</span>.
        </p>
      </Dragger>
    </div>
  );
}
