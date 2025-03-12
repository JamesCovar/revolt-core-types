import { z } from "zod";

const PersonSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string(),
  firstLastName: z.string(),
  secondLastName: z.string(),
  email: z.string(),
  phone: z.string(),
  taxId: z.string(),
  residency: z.string(),
  incorporationRegime: z.string(),
});

const CreatePersonSchema = PersonSchema.omit({ id: true });
const UpdatePersonSchema = PersonSchema.omit({ id: true });
const GetPersonSchema = PersonSchema;

export { CreatePersonSchema, UpdatePersonSchema, GetPersonSchema };
