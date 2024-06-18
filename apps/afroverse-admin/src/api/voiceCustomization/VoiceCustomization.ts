import { JsonValue } from "type-fest";
import { VirtualArtist } from "../virtualArtist/VirtualArtist";

export type VoiceCustomization = {
  aiGeneratedVoice: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  virtualArtists?: Array<VirtualArtist>;
  voiceClonedFrom: string | null;
};
