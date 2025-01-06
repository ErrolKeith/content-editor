import { z } from "zod";

export const subscribeDataSchema = z.object({
  buttonText: z.string().optional(),
  calloutText: z.string().optional(),
});

export type SubscribeData = z.infer<typeof subscribeDataSchema>;
