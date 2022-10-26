import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().max(3).min(2),
  seatsQty: z.number().max(7).min(2),
});

export type ICar = z.infer<typeof carZodSchema>;

export default carZodSchema;