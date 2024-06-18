import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { VirtualArtistListRelationFilter } from "../virtualArtist/VirtualArtistListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VoiceCustomizationWhereInput = {
  aiGeneratedVoice?: JsonFilter;
  id?: StringFilter;
  virtualArtists?: VirtualArtistListRelationFilter;
  voiceClonedFrom?: StringNullableFilter;
};
