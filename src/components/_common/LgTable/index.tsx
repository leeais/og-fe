import { cn } from "@/utils/tailwinds";
import { Button, Table, type TableProps } from "antd";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEllipsis, faTrash } from "@fortawesome/free-solid-svg-icons";
import type { ColumnType } from "antd/es/table";
import { useState, type Key } from "react";

interface LgTableProps<T>
  extends Omit<
    TableProps<T>,
    "size" | "columns" | "dataSource" | "rowSelection"
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
}

export default function LgTable<T>({
  wrapperClassnames,
  size = "middle",
  columns,
  dataSource,
  rowSelection,
  ...props
}: LgTableProps<T>) {
  const [internalKeys, setInternalKeys] = useState<Key[]>([]);
  const selectedRowKeys = rowSelection?.selectedRowKeys ?? internalKeys;

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
      value: boolean,
      record: T,
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
    dataIndex: "actions",
    fixed: "right",
    align: 'right',
    width: 100,
    render: () => (
      <div className="flex gap-1 items-center justify-center">
        <Button
          size="small"
          type="text"
          icon={<FontAwesomeIcon icon={faEdit} />}
        />
        <Button
          danger
          size="small"
          type="text"
          icon={<FontAwesomeIcon icon={faTrash} />}
        />
        <Button
          size="small"
          type="text"
          icon={<FontAwesomeIcon icon={faEllipsis} />}
        />
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
        scroll={{ x: "max-content" }}
        pagination={{
          pageSize: 10,
        }}
        {...props}
      />
    </div>
  );
}
