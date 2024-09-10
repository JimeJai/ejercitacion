import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
});

export const validateRegister = (data) => {
  return registerSchema.safeParse(data);
};
