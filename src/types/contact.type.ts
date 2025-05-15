import { z } from "zod";
import {
  ContactPersonSchema,
  CreateContactSchema,
  GetContactSchema,
  UpdateContactSchema,
} from "../schemas/contact.schema";

export type GetContact = z.infer<typeof GetContactSchema>;
export type CreateContact = z.infer<typeof CreateContactSchema>;
export type UpdateContact = z.infer<typeof UpdateContactSchema>;
export type ContactPerson = z.infer<typeof ContactPersonSchema>;
