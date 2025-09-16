import z from "zod";

export const departmentFormSchema = z.object({
    name: z.string().min(1, "Tên thủ tục không được để trống"),
    shortName: z.string().optional(),
    avatar: z.string().optional(),
    bio: z.string().optional(),
})

export type DepartmentFormValues = z.infer<typeof departmentFormSchema>;