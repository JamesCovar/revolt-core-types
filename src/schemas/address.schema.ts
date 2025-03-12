import { z } from "zod";

const IDSchema = z.string().uuid();

const BaseAddressSchema = z.object({
  id: IDSchema,
  searchId: z.string(),
  street: z.string(),
  outdoorNumber: z.string(),
  interiorNumber: z.string(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
  addressType: z.string(),
});

const PersonAddressSchema = BaseAddressSchema.extend({
  entityType: z.literal("PERSON"),
  personId: IDSchema,
});

const CompanyAddressSchema = BaseAddressSchema.extend({
  entityType: z.literal("COMPANY"),
  companyId: IDSchema,
});

const AddressSchema = z.discriminatedUnion("entityType", [
  PersonAddressSchema,
  CompanyAddressSchema,
]);

const CreateAddressSchema = z.discriminatedUnion("entityType", [
  PersonAddressSchema.omit({ id: true }),
  CompanyAddressSchema.omit({ id: true }),
]);

const UpdateAddressSchema = z.discriminatedUnion("entityType", [
  PersonAddressSchema.omit({ id: true }),
  CompanyAddressSchema.omit({ id: true }),
]);

const GetAddressSchema = AddressSchema;

export { CreateAddressSchema, UpdateAddressSchema, GetAddressSchema };
