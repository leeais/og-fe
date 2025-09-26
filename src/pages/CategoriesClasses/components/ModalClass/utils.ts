import z from "zod";

export const classFormSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  facultyId: z.number().min(1),
  batchId: z.number().min(1),
  avatar: z.string().optional(),
  bio: z.string().optional(),
});

export type ClassFormData = z.infer<typeof classFormSchema>;
