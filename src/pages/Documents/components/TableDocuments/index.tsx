import LgTable from "@/components/_common/LgTable";
import { columns } from "./columns";

export default function TableDocuments() {
  return <LgTable dataSource={[]} columns={columns} />;
}
