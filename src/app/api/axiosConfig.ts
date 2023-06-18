import axios from 'axios';

export const nexonApi = axios.create({
  headers: {
    Authorization: process.env.NEXT_PUBLIC_NEXON_API_KEY,
  },
});
