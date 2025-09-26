import dayjs from "dayjs";
import z from "zod";

export const batchFormSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  startYear: z.custom<dayjs.Dayjs>(
    (val) => dayjs.isDayjs(val) && val.isValid()
  ),
  endYear: z.custom<dayjs.Dayjs>((val) => dayjs.isDayjs(val) && val.isValid()),
});

export type BatchFormData = z.infer<typeof batchFormSchema>;
