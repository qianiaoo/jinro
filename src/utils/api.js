import http from '../utils/http'


export const baseImgPath = ''
export const baseUrl = 'http://localhost:8010'

export const updateProfile = data => http.post('/api/profile', data);

export const renewJinroGame = data => http.get('/api/renewJinro', data);

export const testApi = () => http.get('https://movie.querydata.org/api?id=33410979');

export const getShopList = data => http.get("/api/getShops", data);


