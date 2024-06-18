import { InputJsonValue } from "../../types";
import { VirtualArtistWhereUniqueInput } from "../virtualArtist/VirtualArtistWhereUniqueInput";

export type AiStudioCreateInput = {
  composition?: InputJsonValue;
  mixing?: InputJsonValue;
  production?: InputJsonValue;
  virtualArtist?: VirtualArtistWhereUniqueInput | null;
};
