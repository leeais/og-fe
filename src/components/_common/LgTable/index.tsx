import { cn } from "@/utils/tailwinds";
import { Button, Table, type TableProps } from "antd";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEllipsis, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { ColumnType } from "antd/es/table";
import { useState, type Key } from "react";
import LgModal from "../LgModal";
import { useModal } from "@/hooks/useModal";
import { CONFIRM_DELETE_MODAL_NAME } from "./utils";

interface LgTableProps<T>
  extends Omit<
    TableProps<T>,
    "size" | "columns" | "dataSource" | "rowSelection" | "loading"
  > {
  wrapperClassnames?: string;
  size?: TableProps<T>["size"];
  columns: TableProps<T>["columns"];
  dataSource: TableProps<T>["dataSource"];
  rowSelection?: {
    selectedRowKeys?: Key[];
    onSelectedRowKeysChange?: (keys: Key[]) => void;
    onSelectedRowsChange?: (keys: Key[], rows: T[]) => void;
  };
  isLoading?: boolean;
  rowActions?: {
    onEdit?: (record: T) => void;
    onDelete?: (record: T) => void;
    onMore?: (record: T) => void;
  };
}

export default function LgTable<T>({
  wrapperClassnames,
  size = "middle",
  columns,
  dataSource,
  rowSelection,
  isLoading,
  rowActions,
  ...props
}: LgTableProps<T>) {
  const [internalKeys, setInternalKeys] = useState<Key[]>([]);
  const selectedRowKeys = rowSelection?.selectedRowKeys ?? internalKeys;
  const { openModal, getData, closeModal } = useModal();

  const handleChange = (keys: Key[], rows: T[]) => {
    if (rowSelection?.onSelectedRowKeysChange) {
      rowSelection.onSelectedRowKeysChange(keys);
    } else {
      setInternalKeys(keys);
    }

    if (rowSelection?.onSelectedRowsChange) {
      rowSelection.onSelectedRowsChange(keys, rows);
    }
  };

  const rowSelectionColumn: TableProps<T>["rowSelection"] = {
    selectedRowKeys,
    onChange: handleChange,
    renderCell: (
      _value: boolean,
      _record: T,
      index: number,
      originNode: React.ReactNode
    ) => {
      return (
        <div className="flex items-center gap-1">
          {originNode}
          <span>{index + 1}</span>
        </div>
      );
    },
    columnWidth: 60,
    fixed: true,
    align: "left",
  };

  const actionsColumn: ColumnType<T> = {
    key: "actions",
    title: "Thao tác",
    dataIndex: "actions",
    fixed: "right",
    align: "center",
    width: 100,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_: any, record: T) => (
      <div className="flex gap-1 items-center justify-center">
        {rowActions?.onEdit && (
          <Button
            size="small"
            type="text"
            icon={<FontAwesomeIcon icon={faEdit} />}
            onClick={() => rowActions.onEdit?.(record)}
          />
        )}
        {rowActions?.onDelete && (
          <Button
            danger
            size="small"
            type="text"
            icon={<FontAwesomeIcon icon={faTrash} />}
            onClick={() => openModal(CONFIRM_DELETE_MODAL_NAME, record)}
          />
        )}
        {rowActions?.onMore && (
          <Button
            size="small"
            type="text"
            icon={<FontAwesomeIcon icon={faEllipsis} />}
            onClick={() => rowActions.onMore?.(record)}
          />
        )}
      </div>
    ),
  };

  const mergedColumns = [...columns!, actionsColumn];

  return (
    <div className={cn("border rounded-sm overflow-hidden", wrapperClassnames)}>
      <Table
        className={cn(styles.table)}
        rowSelection={rowSelectionColumn}
        rowKey="id"
        columns={mergedColumns}
        dataSource={dataSource}
        size={size}
        loading={isLoading}
        scroll={{ x: "max-content" }}
        pagination={{
          pageSize: 10,
        }}
        {...props}
      />

      <LgModal
        className="top-1/5"
        name={CONFIRM_DELETE_MODAL_NAME}
        title="Xóa"
        footer={
          <div className="flex items-center justify-end gap-2">
            <Button onClick={() => closeModal(CONFIRM_DELETE_MODAL_NAME)}>
              Hủy
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                rowActions?.onDelete?.(getData(CONFIRM_DELETE_MODAL_NAME) as T);
                closeModal(CONFIRM_DELETE_MODAL_NAME);
              }}
            >
              Xóa
            </Button>
          </div>
        }
      >
        <p>Hành động này nguy hiểm và không thể khôi phục. Bạn vẫn muốn xóa!</p>
      </LgModal>
    </div>
  );
}
