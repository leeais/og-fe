import z from "zod";

export const procedureFormSchema = z.object({
    name: z.string().min(1, "Tên thủ tục không được để trống"),
    description: z.string().optional(),
    departmentId: z.string().optional(),
    facultyId: z.string().optional(),
    estimatedTime: z.string().optional(),
})

export type ProcedureFormValues = z.infer<typeof procedureFormSchema>;