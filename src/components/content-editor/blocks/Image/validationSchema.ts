import { z } from "zod";
import { urlSchema } from "^/utils/validation";

export const imageDataSchema = z.object({
  url: urlSchema,
  withBorder: z.boolean().optional(),
  withCorners: z.boolean().optional(),
});

export type ImageData = z.infer<typeof imageDataSchema>;
