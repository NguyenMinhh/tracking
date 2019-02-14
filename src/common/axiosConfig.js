import axios from 'axios';
//import {URL} from '../store/Constant'

const instance = axios.create({
  baseURL : "http://localhost:8080",
});

//instance.defaults.timeout = 2500;
// instance.CancelToken = axios.CancelToken;
// instance.isCancel = axios.isCancel;

export default instance;
