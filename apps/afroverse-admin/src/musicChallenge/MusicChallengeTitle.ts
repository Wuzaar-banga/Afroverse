import { MusicChallenge as TMusicChallenge } from "../api/musicChallenge/MusicChallenge";

export const MUSICCHALLENGE_TITLE_FIELD = "title";

export const MusicChallengeTitle = (record: TMusicChallenge): string => {
  return record.title?.toString() || String(record.id);
};
