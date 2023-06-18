import React, { useEffect } from 'react';
import { getMatchApi } from '../api/api';

const MatchItem = ({ match }: string) => {
  useEffect(() => {
    getMatch();
  }, []);
  const getMatch = async () => {
    try {
      const res = await getMatchApi(match);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return <div>MatchItem</div>;
};

export default MatchItem;