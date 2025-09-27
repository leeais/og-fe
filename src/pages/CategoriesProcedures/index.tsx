import { faEllipsis, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import TableProcedures from "./components/TableProcedures";
import { useModal } from "@/hooks/useModal";
import { PROCEDURES_MODAL_NAME } from "./utils";
import ModalProcedures from "./components/ModalProcedures";
import PageWrapper from "@/components/_layout/PageWrapper";
import PageContent from "@/components/_layout/PageContent";
import PageHeader from "@/components/_layout/PageHeader";

export default function CategoriesProcedures() {
  const { openModal } = useModal();
  return (
    <PageWrapper>
      <PageHeader>
        <Button type="primary" onClick={() => openModal(PROCEDURES_MODAL_NAME)}>
          Thêm mới
        </Button>
        <Button icon={<FontAwesomeIcon icon={faFilter} />} />
        <Button icon={<FontAwesomeIcon icon={faEllipsis} />} />
      </PageHeader>
      <PageContent>
        <div className="p-4 bg-background space-y-2">
          <TableProcedures />

          <ModalProcedures name={PROCEDURES_MODAL_NAME} />
        </div>
      </PageContent>
    </PageWrapper>
  );
}
