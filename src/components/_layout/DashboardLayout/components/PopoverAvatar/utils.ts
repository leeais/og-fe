import z from "zod"

export const CHANGE_PASSWORD_MODAL_NAME = 'change-password-modal-name'

export const changePasswordFormSchema = z.object({
    oldPassword: z.string().min(4),
    newPassword: z.string().min(4),
    confirmPassword: z.string().min(4)
})

export type ChangePasswordFormType = z.infer<typeof changePasswordFormSchema>