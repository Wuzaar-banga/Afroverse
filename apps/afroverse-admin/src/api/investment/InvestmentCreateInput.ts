import { InputJsonValue } from "../../types";

export type InvestmentCreateInput = {
  amount?: number | null;
  investor?: string | null;
  reward?: InputJsonValue;
  tokenStaked?: number | null;
};
