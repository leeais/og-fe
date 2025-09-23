import z from "zod";

export const requestFormSchema = z.object({
  title: z.string().min(1),
  requestType: z.string().min(1),
  description: z.string().min(1),
  priority: z.string().optional(),
  attachments: z.array(z.file()).optional(),
  notes: z.string().optional(),
});

export type RequestFormValues = z.infer<typeof requestFormSchema>;
