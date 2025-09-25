import z from "zod";

export const profileFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().optional(),
  address: z.string().optional(),
  bio: z.string().optional(),
});

export type ProfileFormData = z.infer<typeof profileFormSchema>;
