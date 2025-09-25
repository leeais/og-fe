import z from "zod";

export const facultyFormSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  avatar: z.string().optional(),
  bio: z.string().optional(),
});

export type FacultyFormData = z.infer<typeof facultyFormSchema>;
