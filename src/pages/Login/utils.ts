import { ROLES } from "@/config/roles";
import z from "zod";

export const loginFormSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export const DUMMY_USER: User = {
  id: "1",
  username: "2100878",
  firstName: "Long",
  lastName: "Nguyễn Đặng",
  email: "2100878@gmail.com",
  avatarUrl:
    "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/549293536_816643784137164_5994812728441172974_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEVOkLnIcjAIaF-rFWpBgqX5fCa4j8pbajl8JriPyltqAjQXLsm78KxvZZN7KQ-PYwJ3T_QlxFt3EgfBKSrDzy_&_nc_ohc=m3B9Z_-GXLkQ7kNvwH7tXOD&_nc_oc=AdkS7JS3ahUYT2O81hNsQof0PqKddRx9oRehc4oNxgAXJGlkBuuXKRm3Fm1yKh0uCEE&_nc_zt=23&_nc_ht=scontent.fhan3-2.fna&_nc_gid=S6Yw17nnAB2tFQpxZMM2SA&oh=00_AfZkPw7qLKCL5BWyjZ3t-BGVcF05kJ4MM9gw2pbAOqdW9w&oe=68D6986B",
  isActive: true,
  roles: [ROLES.ADMIN, ROLES.INSTRUCTOR, ROLES.STUDENT],
  createdAt: new Date(),
};
