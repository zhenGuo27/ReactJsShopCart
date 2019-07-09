import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactjsshopcart.firebaseio.com/'
});

export default instance;