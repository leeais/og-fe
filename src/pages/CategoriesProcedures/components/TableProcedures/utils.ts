import type { Faculty } from "@/pages/CategoriesFaculties/components/TableFaculties/utils";
import type { Department } from "@/pages/Documents/components/TableDocuments/utils";

export type Procedure = {
  id: string;
  name: string;
  description: string;
  department: Department;
  faculty: Faculty;
  fee: number;
  estimatedTime: number;
  createdAt: string;
  updatedAt: string;
};
