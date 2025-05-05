import { z } from "zod";
import {
  CreateCompanySchema,
  GetCompanySchema,
  GetFullCompanySchema,
  UpdateCompanySchema,
} from "../schemas/company.schema";

export type GetCompany = z.infer<typeof GetCompanySchema>;
export type CreateCompany = z.infer<typeof CreateCompanySchema>;
export type UpdateCompany = z.infer<typeof UpdateCompanySchema>;

export type GetFullCompany = z.infer<typeof GetFullCompanySchema>;
