import { z } from "zod";
import { GetPersonSchema } from "./person.schema";

const ContactSchema = z.object({
  id: z.string().uuid(),
  vendorId: z.string().uuid(),
  personId: z.string().uuid(),
  position: z.string().nullable(),
});

const ContactPersonSchema = z.object({
  ...GetPersonSchema.shape,
  position: z.string().nullable(),
});

const CreateContactSchema = ContactSchema.omit({ id: true });
const UpdateContactSchema = ContactSchema.omit({ id: true });
const GetContactSchema = ContactSchema;

export {
  CreateContactSchema,
  UpdateContactSchema,
  GetContactSchema,
  ContactPersonSchema,
};
