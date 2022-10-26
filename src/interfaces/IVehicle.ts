import { z } from 'zod';

const vehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().max(2022).min(1900),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number(),
});

type IVehicle = z.infer<typeof vehicleZodSchema>;

export { vehicleZodSchema, IVehicle };