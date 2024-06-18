import { SortOrder } from "../../util/SortOrder";

export type VoiceCustomizationOrderByInput = {
  aiGeneratedVoice?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  voiceClonedFrom?: SortOrder;
};
