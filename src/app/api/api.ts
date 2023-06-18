import { nexonApi } from './axiosConfig';

export const getUserApi = (nickname: string) => {
  const data = nexonApi.get(
    `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${nickname}`,
  );
  console.log(data);
  return data;
};
