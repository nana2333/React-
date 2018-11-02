import React, {Component} from 'react';
import {NavBar, List, InputItem, Button, WingBlank, WhiteSpace} from 'antd-mobile';
import Logo from '../logo'
import {reqLogin} from '../../api'
class Login extends Component {
  state= {
    username: '',
    password: ''
  }
  
  handleChange=(name,value)=>{
    this.setState({
      [name]:value
    })
  }
  // 登录
  // login = () => {
  //   console.log(this.state)
  // }
  login=async () => {
    // 获取表单数据
    const {username,password}=this.state;
    console.log(username,  password, );
      //  发送ajax请求
      const data=await reqLogin({username,password});
      console.log(data);
      //  提示密码不一致
      alert('用户名或密码不正确')
    }
 
  goRegister=()=>{
    //跳转到登录路由，编程时导航
    this.props.history.replace('/register')//清除之前数据，不保留注册界面
  }
  render () {
  // const {username,password}=this.state;
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          <form>
            <List>
              <WhiteSpace />
              <InputItem placeholder="请输入用户名" onChange={value=>this.handleChange('username',value)}>用 户 名：</InputItem>
              <WhiteSpace />
              <InputItem placeholder="请输入密码" type="password" onChange={value=>this.handleChange('password',value)}>密 码：</InputItem>
              <WhiteSpace />
              <Button type="primary" onClick={this.login}>登录</Button>
              <WhiteSpace />
              <Button onClick={this.goRegister}>还没有账户</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Login;