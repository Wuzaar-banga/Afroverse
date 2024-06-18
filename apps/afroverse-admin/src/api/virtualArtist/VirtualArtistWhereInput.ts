import { AiStudioListRelationFilter } from "../aiStudio/AiStudioListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MusicChallengeListRelationFilter } from "../musicChallenge/MusicChallengeListRelationFilter";
import { RecordLabelListRelationFilter } from "../recordLabel/RecordLabelListRelationFilter";
import { VoiceCustomizationWhereUniqueInput } from "../voiceCustomization/VoiceCustomizationWhereUniqueInput";

export type VirtualArtistWhereInput = {
  aiStudios?: AiStudioListRelationFilter;
  description?: StringNullableFilter;
  genre?: "Option1";
  id?: StringFilter;
  musicChallenges?: MusicChallengeListRelationFilter;
  name?: StringNullableFilter;
  recordLabels?: RecordLabelListRelationFilter;
  voiceCustomization?: VoiceCustomizationWhereUniqueInput;
};
