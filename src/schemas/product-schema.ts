import { z } from "zod";

const productSchema = z.object({
  description: z.string(),
  sellPrice: z.number().int({ message: "el precio debe ser entero" }),
});

export const validateProduct = (data) => {
  return productSchema.safeParse(data);
};
