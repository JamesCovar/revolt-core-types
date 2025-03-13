import { z } from "zod";
import {
  CreateMemberSchema,
  GetMemberSchema,
  UpdateMemberSchema,
} from "../schemas/member.schema";

export type GetMember = z.infer<typeof GetMemberSchema>;
export type CreateMember = z.infer<typeof CreateMemberSchema>;
export type UpdateMember = z.infer<typeof UpdateMemberSchema>;
