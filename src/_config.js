// let LIVE_BACKEND_URL = 'https://api.payhiram.increment.ltd/public/increment/v1'
let LIVE_BACKEND_URL = 'https://subdomain/server.php/increment/v1'
let DEV_BACKEND_URL = 'http://localhost/evernew/api/public/increment/v1'
let isDev = false
let broadcastFlag = 'self' // self, pusher
let BACKEND_URL = isDev ? DEV_BACKEND_URL : LIVE_BACKEND_URL
let pusherKey = isDev ? 'ASDASDD' : 'ASDASDD'
let wsHost = isDev ? 'birds-eye.org' : 'birds-eye.org'
let wsPort = isDev ? 6001 : 6001
export default{
  IS_DEV: isDev,
  API_URL: BACKEND_URL + '/',
  API_URL_BROADCAST: BACKEND_URL + '/authenticate/broadcast_auth',
  IMAGE_URL: BACKEND_URL + '/image/',
  BACKEND_URL: BACKEND_URL,
  PUSHER: {
    flag: broadcastFlag,
    key: broadcastFlag === 'pusher' ? '92d03f6cdbc9b3e7467b' : pusherKey,
    wsHost: wsHost,
    wssPort: wsPort,
    wsPort: wsPort
  },
  APP_NAME: 'RUNWAYEXPRESS',
  APP_NAME_VHTML: 'RUNWAYEXPRESS',
  APP_EMAIL: 'support@runwayexpress.co.uk',
  USER_TYPE: [{
    title: 'USER'
  }, {
    title: 'INVESTOR'
  }],
  GOOGLE_API_KEY: 'AIzaSyAxT8ShiwiI7AUlmRdmDp5Wg_QtaGMpTjg'
}
