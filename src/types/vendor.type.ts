import { z } from "zod";
import {
  CreateFullVendorSchema,
  CreateVendorSchema,
  GetVendorSchema,
  UpdateVendorSchema,
} from "../schemas/vendor.schema";

export type GetVendor = z.infer<typeof GetVendorSchema>;
export type CreateVendor = z.infer<typeof CreateVendorSchema>;
export type UpdateVendor = z.infer<typeof UpdateVendorSchema>;

export type CreateFullVendor = z.infer<typeof CreateFullVendorSchema>;

const vendor: GetVendor = {
  id: "1",
  personality: "PERSON",
  person: {
    firstName: "John",
    firstLastName: "Doe",
    taxId: "1234567890",
    email: "john.doe@example.com",
    phone: "1234567890",
    addresses: [],
    bankAccounts: [],
    documents: [],
  },
  contacts: [],
};
