'use client';
import React, { useEffect } from 'react';
import { getUserApi } from '../api/api';
import { useRecoilState } from 'recoil';
import { playerState } from '../store';

interface UserBarProps {
  param: string;
}

const UserBar = ({ param }: UserBarProps) => {
  const [player, setPlayer] = useRecoilState(playerState);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const res = await getUserApi(param);
      setPlayer(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="bg-gradient-to-l from-brandPurple to-brandRed shadow p-10 m-3 rounded-xl">
      {player.nickname}
    </div>
  );
};

export default UserBar;
