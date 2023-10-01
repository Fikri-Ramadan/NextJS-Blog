import axios from 'axios';

const customFetch = axios.create({
  baseURL: process.env.BASE_URL,
});

export default customFetch;
