import { z } from "zod";
import {
  CreateMemberSchema,
  GetMemberSchema,
  UpdateMemberSchema,
} from "../schemas/member.schema";

export enum COMPANY_MEMBER_TYPE {
  "SHAREHOLDER" = "SHAREHOLDER",
  "BOARD_MEMBER" = "BOARD_MEMBER",
  "CEO" = "CEO",
  "COO" = "COO",
  "CFO" = "CFO",
}
export type GetMember = z.infer<typeof GetMemberSchema>;
export type CreateMember = z.infer<typeof CreateMemberSchema>;
export type UpdateMember = z.infer<typeof UpdateMemberSchema>;
