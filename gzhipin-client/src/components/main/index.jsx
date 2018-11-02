import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../dashen-info';
class Main extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/laobanInfo" component={LaobanInfo}/>
          <Route path="/dashenInfo" component={DashenInfo}/>
        </Switch>
      </div>
   
    )
  }
}

export default Main;