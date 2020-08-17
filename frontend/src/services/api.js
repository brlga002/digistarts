import axios from 'axios';

const api = axios.create({
  baseURL: 'https://digistarts.herokuapp.com',
});

export default api;
