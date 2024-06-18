import { AiStudioUpdateManyWithoutVirtualArtistsInput } from "./AiStudioUpdateManyWithoutVirtualArtistsInput";
import { MusicChallengeUpdateManyWithoutVirtualArtistsInput } from "./MusicChallengeUpdateManyWithoutVirtualArtistsInput";
import { RecordLabelUpdateManyWithoutVirtualArtistsInput } from "./RecordLabelUpdateManyWithoutVirtualArtistsInput";
import { VoiceCustomizationWhereUniqueInput } from "../voiceCustomization/VoiceCustomizationWhereUniqueInput";

export type VirtualArtistUpdateInput = {
  aiStudios?: AiStudioUpdateManyWithoutVirtualArtistsInput;
  description?: string | null;
  genre?: "Option1" | null;
  musicChallenges?: MusicChallengeUpdateManyWithoutVirtualArtistsInput;
  name?: string | null;
  recordLabels?: RecordLabelUpdateManyWithoutVirtualArtistsInput;
  voiceCustomization?: VoiceCustomizationWhereUniqueInput | null;
};
