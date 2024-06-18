import { MusicChallengeWhereInput } from "./MusicChallengeWhereInput";
import { MusicChallengeOrderByInput } from "./MusicChallengeOrderByInput";

export type MusicChallengeFindManyArgs = {
  where?: MusicChallengeWhereInput;
  orderBy?: Array<MusicChallengeOrderByInput>;
  skip?: number;
  take?: number;
};
