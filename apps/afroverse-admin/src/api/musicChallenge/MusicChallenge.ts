import { JsonValue } from "type-fest";
import { VirtualArtist } from "../virtualArtist/VirtualArtist";

export type MusicChallenge = {
  createdAt: Date;
  description: string | null;
  id: string;
  rewards: JsonValue;
  title: string | null;
  updatedAt: Date;
  virtualArtist?: VirtualArtist | null;
};
