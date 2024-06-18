import { RecordLabelWhereInput } from "./RecordLabelWhereInput";
import { RecordLabelOrderByInput } from "./RecordLabelOrderByInput";

export type RecordLabelFindManyArgs = {
  where?: RecordLabelWhereInput;
  orderBy?: Array<RecordLabelOrderByInput>;
  skip?: number;
  take?: number;
};
