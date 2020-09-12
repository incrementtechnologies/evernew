import CONFIG from '../config'
import Vue from 'vue'
import AUTH from '../services/auth'
import ROUTER from '../router'
Vue.mixin({
  mounted(){
  },
  methods: {
    OptimoRequest(link, parameter, callback, errorCallback){
      let tokenStringParam = '?key=' + CONFIG.OPTIMO_KEY
      let request = jQuery.post(CONFIG.OPTIMO_URL + link + tokenStringParam, JSON.stringify(parameter), (response) => {
        this.APISuccessRequestHandler(response, callback)
      }).fail((jqXHR) => {
        $('#loading').css({display: 'none'})
        this.APIFailRequestHandler(link, jqXHR, errorCallback)
      })
      return request
    },
    APISuccessRequestHandler(response, callback){
      if(callback){
        callback(response)
      }
    },
    APIFailRequestHandler(link, jqXHR, errorCallback){
      switch(jqXHR.status){
        case 400:
          AUTH.deaunthenticate()
          break
        case 401: // Unauthorized
          if(link === 'authenticate' || 'authenticate/user'){ // if error occured during authentication request
            if(errorCallback){
              errorCallback(jqXHR.responseJSON, jqXHR.status * 1)
            }
          }else{
            ROUTER.push('login')
          }
          break
        default:
          if(errorCallback){
            errorCallback(jqXHR.responseJSON, jqXHR.status * 1)
          }
      }
    }
  }
})
