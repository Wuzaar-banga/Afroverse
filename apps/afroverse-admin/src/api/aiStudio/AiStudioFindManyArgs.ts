import { AiStudioWhereInput } from "./AiStudioWhereInput";
import { AiStudioOrderByInput } from "./AiStudioOrderByInput";

export type AiStudioFindManyArgs = {
  where?: AiStudioWhereInput;
  orderBy?: Array<AiStudioOrderByInput>;
  skip?: number;
  take?: number;
};
