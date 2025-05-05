import { z } from "zod";
import { BaseAddressSchema } from "./address.schema";
import { CreateFullBankSchema } from "./bank.schema";
import { CompanyDocumentSchema } from "./document.schema";
import { CreateFullMemberSchema } from "./member.schema";

const CompanySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  taxId: z.string().nullable(),
  legalForm: z.string().nullable(),
  tradeName: z.string().nullable(),
  residency: z.string().nullable(),
  incorporationRegime: z.string().nullable(),
});

const CreateCompanySchema = CompanySchema.omit({ id: true });
const UpdateCompanySchema = CompanySchema.omit({ id: true });
const GetCompanySchema = CompanySchema;

const CreateFullCompanySchema = CompanySchema.extend({
  addresses: z.array(BaseAddressSchema.omit({ id: true })),
  bankAccounts: z.array(CreateFullBankSchema),
  documents: z.array(CompanyDocumentSchema.omit({ id: true, companyId: true })),
  members: z.array(CreateFullMemberSchema),
}).omit({ id: true });

const GetFullCompanySchema = CompanySchema.extend({
  addresses: z.array(BaseAddressSchema.omit({ id: true })),
  bankAccounts: z.array(CreateFullBankSchema),
  documents: z.array(CompanyDocumentSchema.omit({ id: true, companyId: true })),
  members: z.array(CreateFullMemberSchema),
});

export {
  CreateCompanySchema,
  UpdateCompanySchema,
  GetCompanySchema,
  CreateFullCompanySchema,
  GetFullCompanySchema,
};
