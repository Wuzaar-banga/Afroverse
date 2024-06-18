import { AiStudio as TAiStudio } from "../api/aiStudio/AiStudio";

export const AISTUDIO_TITLE_FIELD = "id";

export const AiStudioTitle = (record: TAiStudio): string => {
  return record.id?.toString() || String(record.id);
};
