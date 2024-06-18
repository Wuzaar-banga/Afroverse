import { AiStudio } from "../aiStudio/AiStudio";
import { MusicChallenge } from "../musicChallenge/MusicChallenge";
import { RecordLabel } from "../recordLabel/RecordLabel";
import { VoiceCustomization } from "../voiceCustomization/VoiceCustomization";

export type VirtualArtist = {
  aiStudios?: Array<AiStudio>;
  createdAt: Date;
  description: string | null;
  genre?: "Option1" | null;
  id: string;
  musicChallenges?: Array<MusicChallenge>;
  name: string | null;
  recordLabels?: Array<RecordLabel>;
  updatedAt: Date;
  voiceCustomization?: VoiceCustomization | null;
};
