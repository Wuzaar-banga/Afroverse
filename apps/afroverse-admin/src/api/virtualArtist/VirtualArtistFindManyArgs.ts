import { VirtualArtistWhereInput } from "./VirtualArtistWhereInput";
import { VirtualArtistOrderByInput } from "./VirtualArtistOrderByInput";

export type VirtualArtistFindManyArgs = {
  where?: VirtualArtistWhereInput;
  orderBy?: Array<VirtualArtistOrderByInput>;
  skip?: number;
  take?: number;
};
