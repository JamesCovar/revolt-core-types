import { z } from "zod";

const ContactSchema = z.object({
  id: z.string().uuid(),
  vendorId: z.string().uuid(),
  personId: z.string().uuid(),
});

const CreateContactSchema = ContactSchema.omit({ id: true });
const UpdateContactSchema = ContactSchema.omit({ id: true });
const GetContactSchema = ContactSchema;

export { CreateContactSchema, UpdateContactSchema, GetContactSchema };
