import { JsonValue } from "type-fest";
import { VirtualArtist } from "../virtualArtist/VirtualArtist";

export type RecordLabel = {
  analytics: JsonValue;
  createdAt: Date;
  id: string;
  name: string | null;
  promotions: JsonValue;
  updatedAt: Date;
  virtualArtist?: VirtualArtist | null;
};
