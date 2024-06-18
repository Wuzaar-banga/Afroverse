import { JsonValue } from "type-fest";
import { VirtualArtist } from "../virtualArtist/VirtualArtist";

export type AiStudio = {
  composition: JsonValue;
  createdAt: Date;
  id: string;
  mixing: JsonValue;
  production: JsonValue;
  updatedAt: Date;
  virtualArtist?: VirtualArtist | null;
};
