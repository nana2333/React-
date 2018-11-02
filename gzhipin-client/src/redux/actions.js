import {reqLogin, reqRegister} from '../api'
import {AUTH_SUCCESS,ERR_MSG} from './action-type'
//同步action
export const authSuccess=user=>({type:AUTH_SUCCESS,data:user})
export const errMsg=msg=>({type:ERR_MSG,data:msg})
//注册异步action
export const register=data=>{
  const {username,password,rePassword,type}=data;
  if(!username){
    return errMsg({username,password,msg:'请输入用户名'})
  }else if (!password) {
    return errMsg({username, password, msg: '请输入密码'});
  } else if (password !== rePassword) {
    return errMsg({username, password, msg: '两次密码输入不一致，请重新输入'});
  } else if (!type) {
    return errMsg({username, password, msg: '请选择账号类型'});
  }
  return dispatch=>{
  //  发送ajax请求
    reqRegister(data)
      .then(res=>{
        // 请求成功
        const result=res.data;
        if(result.code===0){
        //  注册成功
          dispatch(authSuccess(result.data));
        }else {
          console.log(result.msg);
        //  注册失败
          dispatch(errMsg({msg:result.msg,username:data.username,type:data.type}))
        }
      })
      .catch(err=>{
        dispatch(errMsg({msg:'网络不稳定，请稍后重试',username:data.username,type:data.type}))
      })
  }
}