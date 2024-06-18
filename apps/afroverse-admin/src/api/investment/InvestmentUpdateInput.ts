import { InputJsonValue } from "../../types";

export type InvestmentUpdateInput = {
  amount?: number | null;
  investor?: string | null;
  reward?: InputJsonValue;
  tokenStaked?: number | null;
};
