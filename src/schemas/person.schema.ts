import { z } from "zod";
import { BaseAddressSchema } from "./address.schema";
import { BankAccountSchema, CreateFullBankSchema } from "./bank.schema";
import { PersonDocumentSchema } from "./document.schema";

const PersonSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string(),
  firstLastName: z.string(),
  secondLastName: z.string().nullable(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  taxId: z.string().nullable(),
  residency: z.string().nullable(),
  //TODO: Fix incorporationRegime property name
  incorporationRegime: z.string().nullable(),
});

const CreatePersonSchema = PersonSchema.omit({ id: true });
const UpdatePersonSchema = PersonSchema.omit({ id: true });
const GetPersonSchema = PersonSchema;

const CreateFullPersonSchema = z
  .object({
    ...PersonSchema.shape,
    addresses: z.array(BaseAddressSchema.omit({ id: true })),
    bankAccounts: z.array(CreateFullBankSchema),
    documents: z.array(PersonDocumentSchema.omit({ id: true, personId: true })),
  })
  .omit({ id: true });

export {
  CreatePersonSchema,
  UpdatePersonSchema,
  GetPersonSchema,
  PersonSchema,
  CreateFullPersonSchema,
};
