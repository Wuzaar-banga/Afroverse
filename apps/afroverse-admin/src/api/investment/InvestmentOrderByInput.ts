import { SortOrder } from "../../util/SortOrder";

export type InvestmentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  investor?: SortOrder;
  reward?: SortOrder;
  tokenStaked?: SortOrder;
  updatedAt?: SortOrder;
};
