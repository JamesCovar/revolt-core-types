import { z } from "zod";
import {
  CreateFullPersonSchema,
  GetFullPersonSchema,
  PersonSchema,
} from "./person.schema";
import {
  CreateFullCompanySchema,
  GetFullCompanySchema,
} from "./company.schema";

const IDSchema = z.string().uuid();

enum VENDOR_TYPE_ENUM {
  COMPANY = "COMPANY",
  PERSON = "PERSON",
}

const VENDOR_TYPE_ENUM_SCHEMA = z.nativeEnum(VENDOR_TYPE_ENUM);

const VendorCompanySchema = z.object({
  id: IDSchema,
  personality: z.literal(VENDOR_TYPE_ENUM["COMPANY"]),
  company: IDSchema,
});

const VendorPersonSchema = z.object({
  id: IDSchema,
  personality: z.literal(VENDOR_TYPE_ENUM["PERSON"]),
  person: IDSchema,
});

const VendorSchema = z.discriminatedUnion("personality", [
  z.object({
    ...VendorCompanySchema.shape,
    company: GetFullCompanySchema,
  }),
  z.object({
    ...VendorPersonSchema.shape,
    person: GetFullPersonSchema,
  }),
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
const GetVendorSchema = VendorSchema.and(
  z.object({
    contacts: z.array(CreateFullPersonSchema),
  })
);

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
