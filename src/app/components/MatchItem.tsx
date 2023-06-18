import React, { useEffect, useState } from 'react';
import { getMatchApi } from '../api/api';

interface MatchItemProps {
  match: string;
}

const MatchItem = ({ match }: MatchItemProps) => {
  const [matchData, setMatchData] = useState<any>({});
  useEffect(() => {
    getMatch();
  }, []);
  const getMatch = async () => {
    try {
      const res = await getMatchApi(match);
      console.log(res);
      setMatchData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="bg-gradient-to-l from-brandPurple to-brandRed shadow p-1 m-3 rounded">
      <div className="bg-brandBg w-full h-full px-3 py-10 flex justify-between">
        <div>{matchData.matchDate}</div>
        <div>
          {matchData.matchInfo[0].nickname}{' '}
          {matchData.matchInfo[0].shoot.goalTotal} :{' '}
          {matchData.matchInfo[1].shoot.goalTotal}{' '}
          {matchData.matchInfo[1].nickname}
        </div>
      </div>
    </div>
  );
};

export default MatchItem;
