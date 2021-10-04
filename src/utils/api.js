import http from '../utils/http'


export const baseImgPath = ''
export const baseUrl = 'http://localhost:8010'

export const updateProfile = data => http.post('/api/profile', data);

export const renewJinroGame = data => http.get('/api/renewJinro', data);


