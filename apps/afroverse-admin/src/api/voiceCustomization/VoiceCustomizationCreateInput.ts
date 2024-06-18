import { InputJsonValue } from "../../types";
import { VirtualArtistCreateNestedManyWithoutVoiceCustomizationsInput } from "./VirtualArtistCreateNestedManyWithoutVoiceCustomizationsInput";

export type VoiceCustomizationCreateInput = {
  aiGeneratedVoice?: InputJsonValue;
  virtualArtists?: VirtualArtistCreateNestedManyWithoutVoiceCustomizationsInput;
  voiceClonedFrom?: string | null;
};
