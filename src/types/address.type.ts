import { z } from "zod";
import {
  CreateAddressSchema,
  GetAddressSchema,
  UpdateAddressSchema,
} from "../schemas/address.schema";

export type GetAddress = z.infer<typeof GetAddressSchema>;
export type CreateAddress = z.infer<typeof CreateAddressSchema>;
export type UpdateAddress = z.infer<typeof UpdateAddressSchema>;
