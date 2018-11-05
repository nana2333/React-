import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
// import {NavBar} from 'antd-mobile';
// import PropTypes from 'prop-types';
// import Cookies from 'js-cookie'
import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../dashen-info';

class Main extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/laobanInfo" component={LaobanInfo}/>
          <Route path="/dashenInfo" component={DashenInfo}/>
          {/*<Route path="/laoban" component={Laoban}/>*/}
          {/*<Route path="/dashen" component={Dashen}/>*/}
          {/*<Route path="/message" component={Message}/>*/}
          {/*<Route path="/personal" component={personal}/>*/}
          {/*<Route path="/chat/:userid" component={Chat}/>*/}
        </Switch>
      </div>
   
    )
  }
}

export default Main;