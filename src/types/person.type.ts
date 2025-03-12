import { z } from "zod";
import {
  CreatePersonSchema,
  GetPersonSchema,
  UpdatePersonSchema,
} from "../schemas/person.schema";

export type GetPerson = z.infer<typeof GetPersonSchema>;
export type CreatePerson = z.infer<typeof CreatePersonSchema>;
export type UpdatePerson = z.infer<typeof UpdatePersonSchema>;
