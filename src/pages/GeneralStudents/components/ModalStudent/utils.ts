import z from "zod";

export const studentFormSchema = z.object({
  name: z.string().min(1, "Tên thủ tục không được để trống"),
  description: z.string().optional(),
  departnmentId: z.string().optional(),
  facultyId: z.string().optional(),
  fee: z.number().min(0, "Phí không được âm").optional(),
  estimatedTime: z.string().optional(),
});

export type StudentFormData = z.infer<typeof studentFormSchema>;
