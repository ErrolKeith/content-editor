import { z } from "zod";

export const calloutDataSchema = z.object({
  calloutText: z.string().optional(),
});

export type CalloutData = z.infer<typeof calloutDataSchema>;
