import { cn } from "@/utils/tailwinds";
import { Table, type TableProps } from "antd";
import styles from "./styles.module.css";

interface LgTableProps<T>
  extends Omit<TableProps<T>, "size" | "columns" | "dataSource"> {
  wrapperClassnames?: string;
  size?: TableProps<T>["size"];
  columns: TableProps<T>["columns"];
  dataSource: TableProps<T>["dataSource"];
}

export default function LgTable<T>({
  wrapperClassnames,
  size = "middle",
  columns,
  dataSource,
  ...props
}: LgTableProps<T>) {
  return (
    <div className={cn("border rounded-sm overflow-hidden", wrapperClassnames)}>
      <Table
        className={cn(styles.table)}
        columns={columns}
        dataSource={dataSource}
        size={size}
        scroll={{ x: "max-content" }}
        {...props}
      />
    </div>
  );
}
