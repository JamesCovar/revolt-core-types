import { z } from "zod";
import {
  GetCompanyDocumentSchema,
  CreateCompanyDocumentSchema,
  UpdateCompanyDocumentSchema,
  GetDocumentBankSchema,
  CreateDocumentBankSchema,
  UpdateDocumentBankSchema,
  GetPersonDocumentSchema,
  CreatePersonDocumentSchema,
  UpdatePersonDocumentSchema,
} from "../schemas/document.schema";

export type GetCompanyDocument = z.infer<typeof GetCompanyDocumentSchema>;
export type CreateCompanyDocument = z.infer<typeof CreateCompanyDocumentSchema>;
export type UpdateCompanyDocument = z.infer<typeof UpdateCompanyDocumentSchema>;

export type GetDocumentBank = z.infer<typeof GetDocumentBankSchema>;
export type CreateDocumentBank = z.infer<typeof CreateDocumentBankSchema>;
export type UpdateDocumentBank = z.infer<typeof UpdateDocumentBankSchema>;

export type GetPersonDocument = z.infer<typeof GetPersonDocumentSchema>;
export type CreatePersonDocument = z.infer<typeof CreatePersonDocumentSchema>;
export type UpdatePersonDocument = z.infer<typeof UpdatePersonDocumentSchema>;
