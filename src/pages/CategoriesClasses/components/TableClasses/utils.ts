import type { Batch } from "@/pages/CategoriesBatches/components/TableBatches/utils";
import type { Faculty } from "@/pages/CategoriesFaculties/components/TableFaculties/utils";

export type Class = {
  id: number;
  name: string;
  shortName: string;
  avatar: string;
  bio: string;
  faculty: Faculty;
  batch: Batch;
  // classInstructors: any;
  createdAt: string;
  updatedAt: string;
};
