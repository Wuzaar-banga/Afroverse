import { InputJsonValue } from "../../types";
import { VirtualArtistWhereUniqueInput } from "../virtualArtist/VirtualArtistWhereUniqueInput";

export type MusicChallengeUpdateInput = {
  description?: string | null;
  rewards?: InputJsonValue;
  title?: string | null;
  virtualArtist?: VirtualArtistWhereUniqueInput | null;
};
