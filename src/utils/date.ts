import dayjs from "@/config/dayjs";
import { TIME_DATE_FORMAT } from "@/constants/format-date";

export function formatDate(
  value?: string | number | Date | null,
  format: string = TIME_DATE_FORMAT
) {
  if (!value) return "";
  return dayjs(value).tz().format(format);
}
