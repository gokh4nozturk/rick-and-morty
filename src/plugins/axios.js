import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

export default instance;
