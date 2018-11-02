import {combineReducers} from 'redux'

import {AUTH_SUCCESS,ERR_MSG, RESET_USER, UPDATE_USER} from './action-type'
import  {getRedirectPath} from '../utils'
const initUserState={
  username:'',
  type:'',
  msg:'',
  redirectTo:''
}
function user(perState=initUserState,action) {
  switch (action.type){
    case AUTH_SUCCESS:
      return {username:action.data.username,type:action.data.type,msg:'',redirectTo:getRedirectPath(action.data.type,action.data.header)}
    case ERR_MSG:
      return {...action.data}
    case UPDATE_USER:
        return action.data
    case RESET_USER:
      return {...action.da}
    default:
      return perState;
  }
  
}

// 返回合并后的reducer函数
export default combineReducers({
  user
})