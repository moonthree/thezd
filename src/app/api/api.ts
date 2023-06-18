import { MatchInterface, MatchListInterface } from '../types/type';
import { nexonApi } from './axiosConfig';

export const getUserApi = (nickname: string) => {
  const data = nexonApi.get(
    `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${nickname}`,
  );
  console.log(data);
  return data;
};

export const getMatchListApi = (payload: MatchInterface) => {
  const data: Promise<MatchListInterface> = nexonApi.get(
    `https://api.nexon.co.kr/fifaonline4/v1.0/users/${payload.accessId}/matches?matchtype=${payload.matchType}&offset=${payload.offset}&limit=${payload.limit}`,
  );
  console.log(data);
  return data;
};

export const getMatchApi = (matchId: string) => {
  const data = nexonApi.get(
    `https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchId}`,
  );
  console.log(data);
  return data;
};
