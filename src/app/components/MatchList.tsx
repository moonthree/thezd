'use client';
import React, { useEffect, useState } from 'react';
import { playerState } from '../store';
import { useRecoilValue } from 'recoil';
import { getMatchListApi } from '../api/api';
import MatchItem from './MatchItem';

const MatchList = () => {
  const player = useRecoilValue(playerState);
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (player.accessId === '') return;
    getMatchList();
  }, [player, offset, limit]);

  const getMatchList = async () => {
    try {
      const payload = {
        accessId: player.accessId,
        matchType: 50,
        offset: offset,
        limit: limit,
      };
      const res = await getMatchListApi(payload);
      console.log(res);
      setMatches((prevMatches) => [...prevMatches, ...res.data]);
    } catch (e) {
      console.log(e);
    }
  };
  const loadMore = () => {
    setOffset(offset + limit);
  };
  return (
    <div>
      {matches &&
        matches.map((match, idx) => (
          <div key={idx}>
            <MatchItem match={match} />
          </div>
        ))}
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default MatchList;
