import { z } from "zod";
import { BaseAddressSchema } from "./address.schema";
import { CreateFullBankSchema } from "./bank.schema";
import { CompanyDocumentSchema } from "./document.schema";
import { CreateFullMemberSchema } from "./member.schema";

const CompanySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  taxId: z.string().optional(),
  legalForm: z.string().optional(),
  tradeName: z.string().optional(),
  residency: z.string().optional(),
  incorporationRegime: z.string().optional(),
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

export {
  CreateCompanySchema,
  UpdateCompanySchema,
  GetCompanySchema,
  CreateFullCompanySchema,
};
