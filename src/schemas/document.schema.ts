import { z } from "zod";
import { DOCUMENT_SLOT_CATEGORIES } from "../types/document.type";

const DocumentSlotSchema = z.nativeEnum(DOCUMENT_SLOT_CATEGORIES);

const DocumentBankSchema = z.object({
  id: z.string().uuid(),
  documentSlotId: z.string().uuid(),
  bankAccountId: z.string().uuid(),
  documentId: z.string().uuid(),
});

const CreateDocumentBankSchema = DocumentBankSchema.omit({ id: true });
const UpdateDocumentBankSchema = DocumentBankSchema.omit({ id: true });
const GetDocumentBankSchema = DocumentBankSchema;

const CompanyDocumentSchema = z.object({
  id: z.string().uuid(),
  documentSlotId: z.string().uuid(),
  companyId: z.string().uuid(),
  documentId: z.string().uuid(),
});

const CreateCompanyDocumentSchema = CompanyDocumentSchema.omit({ id: true });
const UpdateCompanyDocumentSchema = CompanyDocumentSchema.omit({ id: true });
const GetCompanyDocumentSchema = CompanyDocumentSchema;

const PersonDocumentSchema = z.object({
  id: z.string().uuid(),
  documentSlotId: z.string().uuid(),
  personId: z.string().uuid(),
  documentId: z.string().uuid(),
});

const CreatePersonDocumentSchema = PersonDocumentSchema.omit({ id: true });
const UpdatePersonDocumentSchema = PersonDocumentSchema.omit({ id: true });
const GetPersonDocumentSchema = PersonDocumentSchema;

export {
  CreateDocumentBankSchema,
  UpdateDocumentBankSchema,
  GetDocumentBankSchema,
  CreateCompanyDocumentSchema,
  UpdateCompanyDocumentSchema,
  GetCompanyDocumentSchema,
  CreatePersonDocumentSchema,
  UpdatePersonDocumentSchema,
  GetPersonDocumentSchema,
  PersonDocumentSchema,
  DocumentBankSchema,
  CompanyDocumentSchema,
  DocumentSlotSchema,
};
