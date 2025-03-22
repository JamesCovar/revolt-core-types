import { z } from "zod";

const IDSchema = z.string().uuid();

enum ADDRESS_TYPE_ENUM {
  RESIDENTIAL = "RESIDENTIAL",
  BUSINESS = "BUSINESS",
  MAILING = "MAILING",
  BILLING = "BILLING",
  SHIPPING = "SHIPPING",
  WORK = "WORK",
}

const ADDRESS_TYPE_ENUM_SCHEMA = z.nativeEnum(ADDRESS_TYPE_ENUM);

const BaseAddressSchema = z.object({
  id: IDSchema,
  searchId: z.string().nullable(),
  street: z.string().nullable(),
  outdoorNumber: z.string().nullable(),
  interiorNumber: z.string().nullable(),
  district: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  zip: z.string().nullable(),
  country: z.string().nullable(),
  addressType: ADDRESS_TYPE_ENUM_SCHEMA,
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

export {
  CreateAddressSchema,
  UpdateAddressSchema,
  GetAddressSchema,
  BaseAddressSchema,
  ADDRESS_TYPE_ENUM,
};
