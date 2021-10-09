import http from '../utils/http'
import Cookies from 'js-cookie'


export const baseImgPath = 'http://127.0.0.1:8010/api'
export const baseUrl = 'http://127.0.0.1:8010'


export const updateProfile = data => http.post('/api/profile', data);

export const renewJinroGame = data => http.get('/api/renewJinro', data);

export const testApi = () => http.get('https://movie.querydata.org/api?id=33410979');

export const getShopList = data => http.get("/api/getShops", data);

export const gameReady = data => http.get("/api/readyGame", data);

export const uploadIcon = data => http.post("/api/uploadIcon", data);

export const login = data => http.get('/api/login', data);

export const joinSakura = () => http.get('/api/joinSakura', {'id': Cookies.get('id')});

export const hall = data => http.get("/api/hall", Object.assign({}, data, {'id': Cookies.get('id')}));
