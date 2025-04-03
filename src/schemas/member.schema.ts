import { z } from "zod";
import { CreateFullPersonSchema } from "./person.schema";
import { COMPANY_MEMBER_TYPE } from "../types/member.type";

const CompanyMemberTypeSchema = z.nativeEnum(COMPANY_MEMBER_TYPE);

const MemberSchema = z.object({
  id: z.string().uuid(),
  companyId: z.string().uuid(),
  personId: z.string().uuid(),
  type: CompanyMemberTypeSchema,
  ownershipPercentage: z.number().default(0),
});

const CreateMemberSchema = MemberSchema.omit({ id: true });
const UpdateMemberSchema = MemberSchema.omit({ id: true });
const GetMemberSchema = MemberSchema;

const CreateFullMemberSchema = z.object({
  type: CompanyMemberTypeSchema,
  ownershipPercentage: z.number().default(0),
  person: CreateFullPersonSchema,
});

export {
  CreateMemberSchema,
  UpdateMemberSchema,
  GetMemberSchema,
  CreateFullMemberSchema,
  CompanyMemberTypeSchema,
};
