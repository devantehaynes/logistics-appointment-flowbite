import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const appointmentSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  location: z.string(),
  time: z.string(),
  type: z.string(),
  docs: z.string(),
  status: z.string(),
});

export type Appointment = z.infer<typeof appointmentSchema>;
