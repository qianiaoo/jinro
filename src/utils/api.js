import http from '../utils/http'
import Cookies from 'js-cookie'


export const baseImgPath = 'http://127.0.0.1:8010/api'
export const baseUrl = 'http://127.0.0.1:8010'

export const jobMap = new Map();
jobMap.set("人狼", 'WF');
jobMap.set("占い師", 'OR');
jobMap.set("騎士", 'KN');
jobMap.set("人類", 'HM');
jobMap.set("狩人", 'HN');
jobMap.set("魔女", 'WH');
jobMap.set("狂人", 'CB');
jobMap.set("No", 'NO');




// export const jobDict = {
//     "占い師" : 'OR',
//
// }

export const updateProfile = data => http.post('/api/profile', data);

export const renewJinroGame = data => http.get('/api/renewJinro', data);

export const testApi = () => http.get('https://movie.querydata.org/api?id=33410979');

export const getShopList = data => http.get("/api/getShops", data);

export const gameReady = data => http.get("/api/readyGame", data);

export const uploadIcon = data => http.post("/api/uploadIcon", data);

export const login = data => http.get('/api/login', data);

export const joinSakura = () => http.get('/api/joinSakura', {'id': Cookies.get('id')});

export const hall = data => http.get("/api/hall", Object.assign({}, data, {'id': Cookies.get('id')}));

export const kickPlayer = data => http.get('/api/kickPlayer', data);

export const readyGame = data => http.get("/api/readyGame", Object.assign({}, data, {'id': Cookies.get('id')}));

export const updateGameSetting = data => http.post('/api/updateGameSetting/', data);
