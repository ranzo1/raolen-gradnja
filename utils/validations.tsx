// utils/validations.ts
import { z } from "zod";

export const createValidationSchema = (t: (key: string) => string) => {
  return z.object({
    name: z.string({
      required_error: t("errors.nameRequired"),
    }),
    email: z
      .string({
        required_error: t("errors.emailRequired"),
      })
      .email({
        message: t("errors.emailInvalid"),
      }),
    message: z.string({
      required_error: t("errors.messageRequired"),
    }),
  });
};
