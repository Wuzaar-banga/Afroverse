import { SortOrder } from "../../util/SortOrder";

export type MusicChallengeOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  rewards?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  virtualArtistId?: SortOrder;
};
