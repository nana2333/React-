import {reqLogin, reqRegister,reqUpdateUserInfo} from '../api'
import {AUTH_SUCCESS,ERR_MSG,UPDATE_USER, RESET_USER} from './action-type'
//同步action
export const authSuccess=user=>({type:AUTH_SUCCESS,data:user})
export const errMsg=msg=>({type:ERR_MSG,data:msg})
export const updateUser=user=>({type:UPDATE_USER,data:user})
export const resetUser=msg=>({type:RESET_USER,data:msg})

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


//更新用户数据的异步的action
export const updateUserInfo = data => {  //data 用户提交的请求参数
  //表单验证  同步方式
  const {header, post, company, salary, info} = data;
  if (!header) {
    return resetUser({msg: '请选择头像'});
  } else if (!post) {
    return resetUser({msg: '请输入招聘职位'});
  } else if (!company) {
    return resetUser({msg: '请输入公司名称'});
  } else if (!salary) {
    return resetUser({msg: '请输入薪资范围'});
  } else if (!info) {
    return resetUser({msg: '请输入公司简介'});
  }
  //异步的方法
  return dispatch => {
    //发送ajax
    reqUpdateUserInfo(data)
      .then(res => {
        //请求成功
        const result = res.data;  // res {header: {}, data: {响应数据}}
        if (result.code === 0) {
          //注册成功
          dispatch(updateUser(result.data));  // result.data响应信息中的用户信息
        } else {
          //注册失败
          dispatch(resetUser({msg: result.msg}));
        }
      })
      .catch(err => {
        //请求失败
        //注册失败
        dispatch(resetUser({msg: '网络不稳定，请重新试试~'}));
      })
  }
}