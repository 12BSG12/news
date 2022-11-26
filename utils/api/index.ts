import { IReg, ILogin, IResponseReg, IResponseLogin } from './types';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  // withCredentials: true,
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  // },
});

export const UserApi = {
  async register(dto: IReg) {
    const { data } = await instance.post<IResponseReg>(`auth/register`, dto);
    return data
  },
  async login(dto: ILogin) {
    const { data } = await instance.post<IResponseLogin>(`auth/login`, dto);
    return data
  },
};
 
