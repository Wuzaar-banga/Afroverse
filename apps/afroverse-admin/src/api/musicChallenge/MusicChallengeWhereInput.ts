import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { VirtualArtistWhereUniqueInput } from "../virtualArtist/VirtualArtistWhereUniqueInput";

export type MusicChallengeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  rewards?: JsonFilter;
  title?: StringNullableFilter;
  virtualArtist?: VirtualArtistWhereUniqueInput;
};
