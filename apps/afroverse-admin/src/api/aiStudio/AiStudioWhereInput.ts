import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { VirtualArtistWhereUniqueInput } from "../virtualArtist/VirtualArtistWhereUniqueInput";

export type AiStudioWhereInput = {
  composition?: JsonFilter;
  id?: StringFilter;
  mixing?: JsonFilter;
  production?: JsonFilter;
  virtualArtist?: VirtualArtistWhereUniqueInput;
};
