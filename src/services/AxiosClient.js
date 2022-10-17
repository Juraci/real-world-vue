import axios from 'axios';

const axiosClient = axios.create({
  baseUrl: 'https://my-json-server.typicode.com/Juraci/real-world-vue-3',
  withCredentials: false,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export default {
  getEvents() {
    return axiosClient.get('/events');
  },
};
