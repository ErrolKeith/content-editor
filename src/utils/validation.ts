import { z } from "zod";

export const urlSchema = z.string().url();

export function dataValidator(data: unknown, schema: z.ZodSchema<object>) {
  const validData = schema.safeParse(data);

  if (!validData.success) return false;

  return true;
}
