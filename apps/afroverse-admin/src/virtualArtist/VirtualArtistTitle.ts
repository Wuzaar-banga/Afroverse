import { VirtualArtist as TVirtualArtist } from "../api/virtualArtist/VirtualArtist";

export const VIRTUALARTIST_TITLE_FIELD = "name";

export const VirtualArtistTitle = (record: TVirtualArtist): string => {
  return record.name?.toString() || String(record.id);
};
