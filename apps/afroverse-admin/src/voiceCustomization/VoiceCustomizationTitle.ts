import { VoiceCustomization as TVoiceCustomization } from "../api/voiceCustomization/VoiceCustomization";

export const VOICECUSTOMIZATION_TITLE_FIELD = "voiceClonedFrom";

export const VoiceCustomizationTitle = (
  record: TVoiceCustomization
): string => {
  return record.voiceClonedFrom?.toString() || String(record.id);
};
