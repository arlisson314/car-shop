import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const CarZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().max(3).min(2),
  seatsQty: z.number().max(7).min(2),
});

type ICar = z.infer<typeof CarZodSchema>;

export { CarZodSchema, ICar };