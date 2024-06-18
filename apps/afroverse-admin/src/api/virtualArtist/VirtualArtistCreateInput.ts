import { AiStudioCreateNestedManyWithoutVirtualArtistsInput } from "./AiStudioCreateNestedManyWithoutVirtualArtistsInput";
import { MusicChallengeCreateNestedManyWithoutVirtualArtistsInput } from "./MusicChallengeCreateNestedManyWithoutVirtualArtistsInput";
import { RecordLabelCreateNestedManyWithoutVirtualArtistsInput } from "./RecordLabelCreateNestedManyWithoutVirtualArtistsInput";
import { VoiceCustomizationWhereUniqueInput } from "../voiceCustomization/VoiceCustomizationWhereUniqueInput";

export type VirtualArtistCreateInput = {
  aiStudios?: AiStudioCreateNestedManyWithoutVirtualArtistsInput;
  description?: string | null;
  genre?: "Option1" | null;
  musicChallenges?: MusicChallengeCreateNestedManyWithoutVirtualArtistsInput;
  name?: string | null;
  recordLabels?: RecordLabelCreateNestedManyWithoutVirtualArtistsInput;
  voiceCustomization?: VoiceCustomizationWhereUniqueInput | null;
};
