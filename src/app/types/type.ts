export interface PlayerInterface {
  accessId: string;
  level: number;
  nickname: string;
}

export interface MatchInterface {
  accessId: string;
  matchType: number;
  offset: number;
  limit: number;
}
