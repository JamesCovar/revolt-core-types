import { z } from "zod";
import { DocumentBankSchema } from "./document.schema";

const IDSchema = z.string().uuid();

const BankAccountSchema = z.object({
  id: IDSchema,
  accountType: z.string(),
  accountNumber: z.string(),
  routingNumber: z.string(),
});

const BankPersonSchema = z.object({
  personId: IDSchema,
  type: z.literal("PERSON"),
  ...BankAccountSchema.shape,
});

const BankCompanySchema = z.object({
  companyId: IDSchema,
  type: z.literal("COMPANY"),
  ...BankAccountSchema.shape,
});

const BankSchema = z.discriminatedUnion("type", [
  BankPersonSchema,
  BankCompanySchema,
]);

const CreateBankSchema = z.discriminatedUnion("type", [
  BankPersonSchema.omit({ personId: true }),
  BankCompanySchema.omit({ companyId: true }),
]);

const UpdateBankSchema = z.discriminatedUnion("type", [
  BankPersonSchema.omit({ id: true }),
  BankCompanySchema.omit({ id: true }),
]);

const GetBankSchema = BankSchema;

const CreateFullBankSchema = BankAccountSchema.extend({
  documents: z.array(
    DocumentBankSchema.omit({ id: true, bankAccountId: true })
  ),
}).omit({ id: true });

export {
  CreateBankSchema,
  UpdateBankSchema,
  GetBankSchema,
  BankSchema,
  BankAccountSchema,
  CreateFullBankSchema,
};
