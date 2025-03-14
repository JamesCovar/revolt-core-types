import { z } from "zod";
import { CreateFullPersonSchema, PersonSchema } from "./person.schema";
import { CreateFullCompanySchema } from "./company.schema";

const IDSchema = z.string().uuid();

enum VENDOR_TYPE_ENUM {
  COMPANY = "COMPANY",
  PERSON = "PERSON",
}

const VENDOR_TYPE_ENUM_SCHEMA = z.nativeEnum(VENDOR_TYPE_ENUM);

const VendorCompanySchema = z.object({
  id: IDSchema,
  personality: z.literal("COMPANY"),
  company: IDSchema,
});

const VendorPersonSchema = z.object({
  id: IDSchema,
  personality: z.literal("PERSON"),
  person: IDSchema,
});

const VendorSchema = z.discriminatedUnion("personality", [
  VendorCompanySchema,
  VendorPersonSchema,
]);

const CreateVendorSchema = z.discriminatedUnion("personality", [
  VendorCompanySchema.omit({ id: true }),
  VendorPersonSchema.omit({ id: true }),
]);

const UpdateVendorSchema = z.discriminatedUnion("personality", [
  VendorCompanySchema.omit({ id: true }),
  VendorPersonSchema.omit({ id: true }),
]);

//TODO: Add person and company schemas
const GetVendorSchema = VendorSchema;

const CreateFullVendorPersonSchema = z.object({
  personality: z.literal("PERSON"),
  person: CreateFullPersonSchema,
  contacts: z.array(CreateFullPersonSchema),
});

const CreateFullVendorCompanySchema = z.object({
  personality: z.literal("COMPANY"),
  company: CreateFullCompanySchema,
  contacts: z.array(CreateFullPersonSchema),
});

const CreateFullVendorSchema = z.discriminatedUnion("personality", [
  CreateFullVendorPersonSchema,
  CreateFullVendorCompanySchema,
]);

export {
  CreateVendorSchema,
  UpdateVendorSchema,
  VendorSchema,
  GetVendorSchema,
  CreateFullVendorSchema,
  VENDOR_TYPE_ENUM,
  VENDOR_TYPE_ENUM_SCHEMA,
};
