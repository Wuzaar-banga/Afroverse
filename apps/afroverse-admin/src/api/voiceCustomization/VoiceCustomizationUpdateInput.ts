import { InputJsonValue } from "../../types";
import { VirtualArtistUpdateManyWithoutVoiceCustomizationsInput } from "./VirtualArtistUpdateManyWithoutVoiceCustomizationsInput";

export type VoiceCustomizationUpdateInput = {
  aiGeneratedVoice?: InputJsonValue;
  virtualArtists?: VirtualArtistUpdateManyWithoutVoiceCustomizationsInput;
  voiceClonedFrom?: string | null;
};
