import { InputJsonValue } from "../../types";
import { VirtualArtistWhereUniqueInput } from "../virtualArtist/VirtualArtistWhereUniqueInput";

export type RecordLabelCreateInput = {
  analytics?: InputJsonValue;
  name?: string | null;
  promotions?: InputJsonValue;
  virtualArtist?: VirtualArtistWhereUniqueInput | null;
};
