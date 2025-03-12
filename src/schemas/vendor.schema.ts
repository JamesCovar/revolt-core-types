import { z } from "zod";

const IDSchema = z.string().uuid();

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

export {
  CreateVendorSchema,
  UpdateVendorSchema,
  VendorSchema,
  GetVendorSchema,
};
