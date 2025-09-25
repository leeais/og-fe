import z from "zod";

export const departmentFormSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  avatar: z.string().optional(),
  bio: z.string().optional(),
});

export type DepartmentFormValues = z.infer<typeof departmentFormSchema>;
