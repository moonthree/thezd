import { atom } from 'recoil';
import { PlayerInterface } from './types/type';

export const searchState = atom({
  key: 'searchState',
  default: '',
});

export const playerState = atom<PlayerInterface>({
  key: 'playerState',
  default: {
    accessId: '',
    level: 0,
    nickname: '',
  },
});
