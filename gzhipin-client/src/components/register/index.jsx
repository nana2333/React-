import React, {Component} from 'react';
import {NavBar, List, InputItem, Button, WingBlank, WhiteSpace, Radio} from 'antd-mobile';
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom';

import Logo from '../logo'
// import {reqRegister} from '../../api'
const Item = List.Item;
class Register extends Component {
  static propTypes={
    user:PropTypes.object.isRequired,
    register:PropTypes.func.isRequired
  }
  state={
    username:'',
    password:'',
    rePassword:'',
    type:'dashen'
  }
  
  
  handleChange=(name,value)=>{
    this.setState({
    [name]:value
  })
  }
  // register = () => {
  //   console.log(JSON.stringify(this.state))
  // }
 register=async () => {
   // 获取表单数据
   const {username, rePassword, password, type} = this.state;
  
   //  发送ajax请求
   this.props.register({username,password,rePassword,type})
 }
 goLogin=()=>{
    //跳转到登录路由，编程时导航
    this.props.history.replace('/login')//清除之前数据，不保留注册界面
 }

  render() {
    const {msg, redirectTo} = this.props.user;
    const {type} = this.state;
    if(redirectTo){
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo/>
        <WingBlank>
          {msg ? <p className='err-msg'>{msg}</p> : ''}
          <form>
            <List>
              <WhiteSpace />
              <InputItem
                placeholder="请输入用户名"
                onChange={value=>this.handleChange('username',value)}>用 户 名：</InputItem>
              <WhiteSpace />
              <InputItem
                placeholder="请输入密码"
                type="password"
                onChange={value=>this.handleChange('password',value)}>密 码：</InputItem>
              <WhiteSpace />
              <InputItem
                placeholder="请输入确认密码"
                type="password"
                onChange={value=>this.handleChange('rePassword',value)}>确认密码：</InputItem>
              <WhiteSpace />
              <Item>
                用户类型：&nbsp;&nbsp;
                <Radio
                  className="my-radio"
                  checked={this.state.type === 'dashen'}
                  onClick={() => this.handleChange('type', 'dashen')}
                >大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                <Radio
                  className="my-radio"
                  checked={this.state.type === 'laoban'}
                  onClick={() => this.handleChange('type', 'laoban')}
                >老板</Radio>
              </Item>
              <WhiteSpace />
              <Button type="primary" onClick={this.register}>注册</Button>
              <WhiteSpace />
              <Button onClick={this.goLogin}>已有账户</Button>
            </List>
          </form>
        </WingBlank>
      
      </div>
    )
  }
}

export default Register;