import { z } from "zod";
import { DocumentBankSchema } from "./document.schema";
import { VENDOR_TYPE_ENUM } from "./vendor.schema";

const IDSchema = z.string().uuid();

enum BANK_ACCOUNT_TYPE_ENUM {
  "CHECKING" = "CHECKING",
  "SAVINGS" = "SAVINGS",
  "INVESTMENT" = "INVESTMENT",
  "CREDIT_CARD" = "CREDIT_CARD",
}

const BANK_ACCOUNT_TYPE_ENUM_SCHEMA = z.nativeEnum(BANK_ACCOUNT_TYPE_ENUM);

const BankAccountSchema = z.object({
  id: IDSchema,
  accountType: BANK_ACCOUNT_TYPE_ENUM_SCHEMA,
  accountNumber: z.string(),
  routingNumber: z.string(),
  country: z.string().length(2),
  institutionName: z.string(),
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
  BankPersonSchema.omit({ id: true }),
  BankCompanySchema.omit({ id: true }),
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
  BANK_ACCOUNT_TYPE_ENUM_SCHEMA,
  BANK_ACCOUNT_TYPE_ENUM,
};
