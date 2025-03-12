import { z } from "zod";

const CompanySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  taxId: z.string(),
  legalForm: z.string(),
  tradeName: z.string(),
  residency: z.string(),
  incoporationRegime: z.string(),
});

const CreateCompanySchema = CompanySchema.omit({ id: true });
const UpdateCompanySchema = CompanySchema.omit({ id: true });
const GetCompanySchema = CompanySchema;

export { CreateCompanySchema, UpdateCompanySchema, GetCompanySchema };
