import { z } from "zod";
import { CreateFullPersonSchema } from "./person.schema";

const MemberSchema = z.object({
  id: z.string().uuid(),
  companyId: z.string().uuid(),
  personId: z.string().uuid(),
  type: z.string(),
});

const CreateMemberSchema = MemberSchema.omit({ id: true });
const UpdateMemberSchema = MemberSchema.omit({ id: true });
const GetMemberSchema = MemberSchema;

const CreateFullMemberSchema = z.object({
  type: z.string(),
  person: CreateFullPersonSchema,
});

export {
  CreateMemberSchema,
  UpdateMemberSchema,
  GetMemberSchema,
  CreateFullMemberSchema,
};
