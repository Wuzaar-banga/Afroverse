import { RecordLabel as TRecordLabel } from "../api/recordLabel/RecordLabel";

export const RECORDLABEL_TITLE_FIELD = "name";

export const RecordLabelTitle = (record: TRecordLabel): string => {
  return record.name?.toString() || String(record.id);
};
