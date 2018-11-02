import React, {Component} from 'react';
import {NavBar, InputItem, Button, TextareaItem,WhiteSpace} from 'antd-mobile';
import PropTypes from 'prop-types';
import HeaderSelector from '../header-selector';
class LaobanInfo extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    updateUserInfo: PropTypes.func.isRequired
  }
  state={
    header:'',
    info:'',
    post:'',
    salary:'',
    company:''
  }
  handleChange=(name,value)=>{
    this.setState=({
      [name]:value
    })
  }
  setHeader=header=>{
    this.setSate({
      header
    })
  }
  saveUserInfo=()=>{
    this.props.updateUserInfo(this.state)
  }
  render () {
  const {msg}=this.props.user;
    return (
      <div>
        <NavBar>老板信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        {msg ? <p className="err-msg">{msg}</p> : ''}
        <WhiteSpace />
        <InputItem onChange={value => this.handleChange('post', value)}>招聘职位:</InputItem>
        <WhiteSpace />
        <InputItem onChange={value => this.handleChange('company', value)}>公司名称:</InputItem>
        <WhiteSpace />
        <InputItem onChange={value => this.handleChange('salary', value)}>职位薪资:</InputItem>
        <WhiteSpace />
        <TextareaItem title="职位要求" rows={3} onChange={value => this.handleChange('info', value)}/>
        <WhiteSpace />
        <Button type="primary" onClick={this.saveUserInfo}>保 存</Button>
      </div>
    )
  }
}

export default LaobanInfo;