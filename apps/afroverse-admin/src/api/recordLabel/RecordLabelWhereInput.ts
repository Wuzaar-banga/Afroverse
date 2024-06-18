import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VirtualArtistWhereUniqueInput } from "../virtualArtist/VirtualArtistWhereUniqueInput";

export type RecordLabelWhereInput = {
  analytics?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  promotions?: JsonFilter;
  virtualArtist?: VirtualArtistWhereUniqueInput;
};
