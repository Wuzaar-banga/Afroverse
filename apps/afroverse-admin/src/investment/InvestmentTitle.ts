import { Investment as TInvestment } from "../api/investment/Investment";

export const INVESTMENT_TITLE_FIELD = "investor";

export const InvestmentTitle = (record: TInvestment): string => {
  return record.investor?.toString() || String(record.id);
};
