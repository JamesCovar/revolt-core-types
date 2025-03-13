import { z } from "zod";
import {
  CreateBankSchema,
  GetBankSchema,
  UpdateBankSchema,
} from "../schemas/bank.schema";

export type GetBank = z.infer<typeof GetBankSchema>;
export type CreateBank = z.infer<typeof CreateBankSchema>;
export type UpdateBank = z.infer<typeof UpdateBankSchema>;
