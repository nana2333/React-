/*封装axios的ajax模块，返回值是promise对象*/
import axios from 'axios';
export default function ajax(url,data,type='GET'){
  let querystring='';
  if(data){
    Object.keys(data).forEach(key=>{
      // 获取属性值
      const value=data[key];
      querystring+=key+'='+value+'&'
    })
    // 去掉多余&
    querystring=querystring.substring(0,querystring.length-1);
    console.log(querystring);
  }
  if(type.toUpperCase()==='GET'){
    // 用户发送的是get请求
    url+='?'+querystring;
    return axios.get(url);
  }else {
    // 用户发送的是post请求
    return axios.post(url,querystring,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
  }
}


