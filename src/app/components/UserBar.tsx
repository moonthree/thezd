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
    const res = await getUserApi(param);
    setPlayer(res.data);
    console.log(res);
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow p-10 m-3 rounded-xl">
      {player.nickname}
    </div>
  );
};

export default UserBar;
