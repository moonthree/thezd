'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const router = useRouter();

  const [nickname, setNickname] = useState('');

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/player/${nickname}`);
  };

  return (
    <div className="border-2 p-3 m-3 flex">
      <input
        type="text"
        className="border-2 w-full p-3"
        value={nickname}
        onChange={handleText}
        placeholder="닉네임을 입력해주세요"
      />
      <button
        type="button"
        className="border-2 w-20 p-3"
        onClick={handleSearch}
      >
        검색
      </button>
    </div>
  );
};

export default Search;
