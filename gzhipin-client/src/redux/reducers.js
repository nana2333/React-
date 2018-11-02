import {combineReducers} from 'redux'

import {AUTH_SUCCESS,ERR_MSG} from './action-type'
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
      return {username:action.type.username,type:action.data.type,msg:'',redirectTo:getRedirectPath(action.data.type,action.data.header)}
    case ERR_MSG:
      return {...action.data}
    default:
      return perState;
  }
  
}

// 返回合并后的reducer函数
export default combineReducers({
  user
})