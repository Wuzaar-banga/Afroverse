import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InvestmentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  investor?: StringNullableFilter;
  reward?: JsonFilter;
  tokenStaked?: IntNullableFilter;
};
