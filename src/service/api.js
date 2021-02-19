import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json',
});

export default Api;
