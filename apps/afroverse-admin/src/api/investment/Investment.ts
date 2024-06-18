import { JsonValue } from "type-fest";

export type Investment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  investor: string | null;
  reward: JsonValue;
  tokenStaked: number | null;
  updatedAt: Date;
};
